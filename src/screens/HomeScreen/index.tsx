import {StatusBarComponent} from '@components/StatusBar';
import {colors} from '@theme/colors';
import {Container, Title} from './styles';

export const HomeScreen = () => {
  return (
    <>
      <StatusBarComponent backgroundColor={colors.bg.quinary} />
      <Container>{/* <Title>Home</Title> */}</Container>
    </>
  );
};
