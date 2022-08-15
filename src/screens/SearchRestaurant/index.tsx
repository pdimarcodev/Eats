import {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';
import {GOOGLE_API_KEY} from 'react-native-dotenv';

import {Map} from '@components/Map';
import {Spinner} from '@components/Spinner';
import {Container, HeaderWrapper, Title} from './styles';
import {Prediction} from '@interfaces/Prediction';
import googlePlacesApi from '@client/googlePlaces';
import {SearchBar} from '@components/SearchBar';
import {useDebounce} from '@hooks';
import {Location} from '@interfaces';
import {Keyboard} from 'react-native';
import {Icon} from '@components/Icon';
import {colors} from '@theme/colors';
import {StatusBarComponent} from '@components/StatusBar';
import {useUserContext} from 'context/UserContext';

export const SearchRestaurantScreen = () => {
  const {user, setUser} = useUserContext();
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>();

  const [search, setSearch] = useState({term: '', fetchPredictions: false});
  const [showPredictions, setShowPredictions] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
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
    if (!search.fetchPredictions) {
      return;
    }

    try {
      const result = await googlePlacesApi.request({
        method: 'get',
        url: `/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=restaurant&key=${GOOGLE_API_KEY}`,
      });
      if (result) {
        // setPredictions(result.results);
        console.log(result);
        setShowPredictions(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useDebounce(onChangeText, 300, [search.term]);

  const onSelection = async (placeId: string, description: string) => {
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
        setShowPredictions(false);
        setSearch({term: description, fetchPredictions: false});
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onClearSearch = () => {
    setShowPredictions(false);
    setSearch({term: '', fetchPredictions: false});
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
          <Icon name="AddAddress" size={22} />
          <Title>Agregar dirección de entrega</Title>
        </HeaderWrapper>
        <SearchBar
          value={search.term}
          placeholder={'Escribe tu dirección'}
          onChangeText={(text: string) => {
            setSearch({term: text, fetchPredictions: true});
          }}
          showData={showPredictions}
          data={predictions}
          onClearSearch={onClearSearch}
          onSelection={onSelection}
        />
        {/* <Map selectedLocation={selectedLocation} /> */}
      </Container>
    </>
  );
};
