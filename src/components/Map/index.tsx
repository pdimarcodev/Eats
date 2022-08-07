import {FC, useCallback} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {Spinner} from '@components/Spinner';
import {useLocation} from '@hooks';
import {Container, styles} from './styles';
import {Location} from '@interfaces';

type MapProps = {
  selectedLocation: Location;
};

/**
 * Constants
 */

const DELTA = 0.015;

/**
 * Map Component
 */

export const Map: FC<MapProps> = ({selectedLocation}) => {
  const {hasLocation, initialPosition} = useLocation();

  const {latitude, longitude} = initialPosition;
  const {latitude: selectedLat, longitude: selectedLng} = selectedLocation;

  const getLatitude = useCallback(
    () => (selectedLat !== 0 ? selectedLat : latitude),
    [latitude, selectedLat],
  );

  const getLongitude = useCallback(
    () => (selectedLng !== 0 ? selectedLng : longitude),
    [longitude, selectedLng],
  );

  if (!hasLocation) {
    return <Spinner />;
  }

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: getLatitude(),
          longitude: getLongitude(),
          latitudeDelta: DELTA,
          longitudeDelta: DELTA,
        }}>
        <Marker
          image={require('../../../assets/images/map-pin.png')}
          coordinate={{
            latitude: getLatitude(),
            longitude: getLongitude(),
          }}
        />
      </MapView>
    </Container>
  );
};
