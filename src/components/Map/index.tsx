import {FC} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {Spinner} from '@components/Spinner';
import {useLocation} from '@hooks';
import {Container, styles} from './styles';

/**
 * Constants
 */

const DELTA = 0.02;

/**
 * Map Component
 */

export const Map: FC = () => {
  const {hasLocation, initialPosition} = useLocation();

  const {latitude, longitude} = initialPosition;

  if (!hasLocation) {
    return <Spinner />;
  }

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: DELTA,
          longitudeDelta: DELTA,
        }}>
        <Marker
          image={require('../../../assets/images/map-pin.png')}
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
    </Container>
  );
};
