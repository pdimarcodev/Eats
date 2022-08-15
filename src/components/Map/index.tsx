import {FC} from 'react';
import MapView, {Circle, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {useUserContext} from 'context/UserContext';
import {Spinner} from '@components/Spinner';
import {Container, styles} from './styles';
import {useLocation} from '@hooks';
import {Location} from '@interfaces';
import {ShowIf} from '@components/ShowIf';

/**
 * Type
 */

type MapProps = {
  selectedLocation?: Location;
  radius?: number;
};

/**
 * Constants
 */

const DELTA = 0.02;

/**
 * Map Component
 */

export const Map: FC<MapProps> = ({selectedLocation, radius}) => {
  const {user} = useUserContext();
  useLocation();

  const {latitude, longitude} = user.location || {};
  const {latitude: selectedLat, longitude: selectedLng} =
    selectedLocation || {};

  if (!latitude || !longitude) {
    return <Spinner />;
  }

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: selectedLat || latitude,
          longitude: selectedLng || longitude,
          latitudeDelta: DELTA,
          longitudeDelta: DELTA,
        }}>
        <Marker
          image={require('../../../assets/images/map-pin.png')}
          coordinate={{
            latitude: selectedLat || latitude,
            longitude: selectedLng || longitude,
          }}
        />
        <ShowIf condition={!!radius}>
          <Circle
            center={{
              latitude: selectedLat || latitude,
              longitude: selectedLng || longitude,
            }}
            radius={radius as number}
            fillColor={'#008F7E4D'}
          />
        </ShowIf>
      </MapView>
    </Container>
  );
};
