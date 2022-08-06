import {Spinner} from '@components/Spinner';
import {useEffect} from 'react';
import {useState} from 'react';
import {Alert, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';
import {Container, map, styles, Title} from './styles';
import {GOOGLE_API_KEY} from 'react-native-dotenv';

export const AddLocationScreen = () => {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>();

  console.log(GOOGLE_API_KEY);

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

  useEffect(() => {
    checkLocationPermissions();
  }, []);

  if (permissionStatus !== 'granted') {
    return <Spinner />;
  }

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </Container>
  );
};
