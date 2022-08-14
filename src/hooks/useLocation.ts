import {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {useUserContext} from 'context/UserContext';

export const useLocation = () => {
  const {user, setUser} = useUserContext();

  useEffect(() => {
    if (!user.location) {
      Geolocation.getCurrentPosition(
        ({coords: {latitude, longitude}}) => {
          setUser({location: {latitude, longitude}});
        },
        error => console.log({error}),
        {enableHighAccuracy: true},
      );
    }
  }, [user, setUser]);
};
