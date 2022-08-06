import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {Location} from '@interfaces';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setInitialPosition({latitude, longitude});
        setHasLocation(true);
      },
      error => console.log({error}),
      {enableHighAccuracy: true},
    );
  }, []);

  return {hasLocation, initialPosition};
};
