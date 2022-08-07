import {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';

import {Map} from '@components/Map';
import {Spinner} from '@components/Spinner';
import {Container} from './styles';
import {Prediction} from '@interfaces/Prediction';
import {GOOGLE_API_KEY} from 'react-native-dotenv';
import googlePlacesApi from '@client/googlePlaces';
import {SearchBar} from '@components/SearchBar';

import {useDebounce} from '@hooks';

export const AddLocationScreen = () => {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>();
  const [search, setSearch] = useState({term: '', fetchPredictions: false});
  const [showPredictions, setShowPredictions] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);

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
      return;
    }
    if (!search.fetchPredictions) {
      return;
    }

    try {
      const result = await googlePlacesApi.request({
        method: 'get',
        url: `/autocomplete/json?input=${search.term}&key=${GOOGLE_API_KEY}`,
      });
      if (result) {
        // const {
        //   data: {predictions},
        // } = result;
        setPredictions(result.data.predictions);
        console.log(result.data.predictions);

        setShowPredictions(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useDebounce(onChangeText, 300, [search.term]);

  useEffect(() => {
    checkLocationPermissions();
  }, []);

  if (permissionStatus !== 'granted') {
    return <Spinner />;
  }

  return (
    <Container>
      {/* <Map /> */}
      <SearchBar
        value={search.term}
        placeholder={'Escribe tu dirección'}
        onChangeText={(text: string) => {
          setSearch({term: text, fetchPredictions: true});
        }}
        // showPredictions={showPredictions}
        // predictions={predictions}
      />
    </Container>
  );
};
