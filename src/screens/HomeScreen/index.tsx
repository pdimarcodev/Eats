import {Icon} from '@components/Icon';
import {StatusBarComponent} from '@components/StatusBar';
import {colors} from '@theme/colors';
import {View} from 'react-native';
import {
  AddAddress,
  AddAddressText,
  Container,
  HandImage,
  Header,
  SlidersContainer,
  Subtitle,
  TitleBottom,
  TitleTop,
} from './styles';

export const HomeScreen = () => {
  return (
    <>
      <StatusBarComponent backgroundColor={colors.bg.quinary} />
      <Container>
        <Header>
          <View>
            <TitleTop>Tenpo</TitleTop>
            <TitleBottom>Eats</TitleBottom>
            <Subtitle>DELIVER APP</Subtitle>
          </View>
          <HandImage
            source={require('../../../assets/images/hand.png')}
            resizeMode="contain"
          />
        </Header>
        <AddAddress>
          <Icon name="AddAddress" size={22} />
          <AddAddressText>Agregar dirección de entrega</AddAddressText>
        </AddAddress>
        <SlidersContainer>
          <View />
        </SlidersContainer>
      </Container>
    </>
  );
};
