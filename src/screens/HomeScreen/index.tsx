import {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '@navigation/Home';
import {HorizontalSlider} from '@components/HorizontalSlider';
import {Icon} from '@components/Icon';
import {StatusBarComponent} from '@components/StatusBar';
import {colors} from '@theme/colors';
import {
  AddAddress,
  AddAddressText,
  Container,
  HandImage,
  Header,
  Hero,
  SlidersContainer,
  Subtitle,
  TitleBottom,
  TitleTop,
} from './styles';
import {restaurants, categories, favorites} from './mocks/mocks';
import {Spacer} from '@components/Spacer';

/**
 * Types
 */

type HomeScreenProps = StackScreenProps<RootStackParams, 'Home'>;

/**
 * HomeScreen
 */

export const HomeScreen: FC<HomeScreenProps> = ({navigation: {navigate}}) => {
  return (
    <>
      <StatusBarComponent backgroundColor={colors.bg.quinary} />
      <Container>
        <Header>
          <Hero>
            <TitleTop>Tenpo</TitleTop>
            <TitleBottom>Eats</TitleBottom>
            <Subtitle>DELIVER APP</Subtitle>
          </Hero>
          <HandImage
            source={require('../../../assets/images/hand.png')}
            resizeMode="contain"
          />
        </Header>
        <AddAddress onPress={() => navigate('AddLocation')}>
          <Icon name="AddAddress" size={22} />
          <AddAddressText>Agregar dirección de entrega</AddAddressText>
        </AddAddress>
        <SlidersContainer showsVerticalScrollIndicator={false}>
          <Spacer height={35} />
          <HorizontalSlider
            title="restaurantes"
            data={restaurants}
            type="restaurant"
          />
          <HorizontalSlider
            title="categorias"
            data={categories}
            type="category"
          />
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
