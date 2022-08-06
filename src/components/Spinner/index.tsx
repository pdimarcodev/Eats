import {ActivityIndicator} from 'react-native';
import {Container} from './styles';

export const Spinner = () => {
  return (
    <Container>
      <ActivityIndicator size={25} color="blue" />
    </Container>
  );
};
