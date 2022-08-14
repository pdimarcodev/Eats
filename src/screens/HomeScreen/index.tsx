import {HorizontalSlider} from '@components/HorizontalSlider';
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
import {restaurants, categories, favorites} from './mocks/mocks';
import {Spacer} from '@components/Spacer';

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
          <Spacer height={35} />
          <HorizontalSlider
            title="restaurantes"
            data={restaurants}
            type="restaurant"
          />
          {/* <HorizontalSlider
            title="categorias"
            data={categories}
            type="category"
          /> */}
          <HorizontalSlider
            title="tus favoritos"
            data={favorites}
            type="favorite"
          />
        </SlidersContainer>
      </Container>
    </>
  );
};
