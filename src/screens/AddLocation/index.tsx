import {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import {PERMISSIONS, PermissionStatus, request} from 'react-native-permissions';

import {Map} from '@components/Map';
import {Spinner} from '@components/Spinner';
import {Container} from './styles';

export const AddLocationScreen = () => {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>();

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
      <Map />
    </Container>
  );
};
