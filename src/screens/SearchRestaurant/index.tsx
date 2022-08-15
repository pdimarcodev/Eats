import {FC, useEffect, useState} from 'react';
import {Alert, Platform, Pressable} from 'react-native';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';
import {GOOGLE_API_KEY} from 'react-native-dotenv';

import {Map} from '@components/Map';
import {Spinner} from '@components/Spinner';
import {
  Address,
  Container,
  HeaderWrapper,
  Icon,
  OptionsWrapper,
  OptionWrapper,
  TextWrapper,
  Title,
} from './styles';
import googlePlacesApi from '@client/googlePlaces';
import {SearchBar} from '@components/SearchBar';
import {useDebounce} from '@hooks';
import {Location, Restaurant} from '@interfaces';
import {Keyboard} from 'react-native';

import {colors} from '@theme/colors';
import {StatusBarComponent} from '@components/StatusBar';
import {useUserContext} from 'context/UserContext';
import {RootStackParams} from '@navigation/Home';
import {StackScreenProps} from '@react-navigation/stack';

/**
 * Types
 */

type SearchRestaurantScreen = StackScreenProps<
  RootStackParams,
  'SearchRestaurant'
>;

/**
 * SearchRestaurantScreen
 */

export const SearchRestaurantScreen: FC<SearchRestaurantScreen> = ({
  navigation: {goBack},
}) => {
  const {user, setUser} = useUserContext();
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>();

  const [search, setSearch] = useState({term: '', fetch: false});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Restaurant[]>([]);
  const [radius, setRadius] = useState(1000);

  const {latitude, longitude} = user.location as Location;

  const checkLocationPermissions = async () => {
    const permission =
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    try {
      const status = await request(permission);
      setPermissionStatus(status);
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
    }
  };

  const onChangeText = async () => {
    if (search.term.trim() === '') {
      onClearSearch();
    }
    if (!search.fetch) {
      return;
    }

    try {
      const result = await googlePlacesApi.request({
        method: 'get',
        url: `/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=restaurant&key=${GOOGLE_API_KEY}`,
      });
      if (result) {
        setResults(result.data.results);
        console.log(result.data.results);
        setShowResults(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useDebounce(onChangeText, 300, [search.term]);

  const onSelection = async (item: Restaurant) => {
    //  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY',

    try {
      const result = await googlePlacesApi.request({
        method: 'get',
        url: `/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=restaurant&key=${GOOGLE_API_KEY}`,
      });
      if (result) {
        const {
          data: {
            result: {
              geometry: {location},
            },
          },
        } = result;
        const {lat, lng} = location;
        // setSelectedLocation({latitude: lat, longitude: lng});
        setShowResults(false);
        setSearch({term: description, fetch: false});
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onClearSearch = () => {
    setShowResults(false);
    setSearch({term: '', fetch: false});
  };

  useEffect(() => {
    checkLocationPermissions();
  }, []);

  if (permissionStatus !== 'granted') {
    return <Spinner />;
  }

  return (
    <>
      <StatusBarComponent backgroundColor={colors.bg.secondary} />
      <Container onPress={() => Keyboard.dismiss()}>
        <HeaderWrapper>
          <Pressable onPress={goBack}>
            <Icon source={require('../../../assets/images/back-arrow.png')} />
          </Pressable>
          <TextWrapper>
            <Title>Tu ubicación cercana</Title>
            <Address numberOfLines={1} ellipsizeMode="tail">
              {user.address?.split(',')[0] || ''}
            </Address>
          </TextWrapper>
          <Icon source={require('../../../assets/images/target.png')} />
        </HeaderWrapper>
        <SearchBar
          value={search.term}
          type="restaurant"
          placeholder={'Escribe nombre del restaurante que búscas'}
          onChangeText={(text: string) => {
            setSearch({term: text, fetch: true});
          }}
          showData={showResults}
          data={results}
          onClearSearch={onClearSearch}
          onSelection={onSelection}
        />
        <OptionsWrapper>
          <OptionWrapper />
          <OptionWrapper />
        </OptionsWrapper>
        {/* <Map selectedLocation={selectedLocation} /> */}
      </Container>
    </>
  );
};
