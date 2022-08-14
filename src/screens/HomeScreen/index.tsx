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
  AddressTitle,
  AddressWrapper,
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
import {ShowIf} from '@components/ShowIf';
import {useUserContext} from 'context/UserContext';

/**
 * Types
 */

type HomeScreenProps = StackScreenProps<RootStackParams, 'Home'>;

/**
 * HomeScreen
 */

export const HomeScreen: FC<HomeScreenProps> = ({navigation: {navigate}}) => {
  const {user} = useUserContext();

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
          <ShowIf condition={!!user.address}>
            <AddressWrapper>
              <AddressTitle>Enviaremos tus pedidos a</AddressTitle>
              <AddAddressText numberOfLines={1} ellipsizeMode="tail">
                {user.address}
              </AddAddressText>
            </AddressWrapper>
          </ShowIf>
          <ShowIf condition={!user.address}>
            <AddAddressText>{'Agregar dirección de entrega'}</AddAddressText>
          </ShowIf>
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
