import {FC, useState} from 'react';
import {Modal, Pressable, Keyboard, Alert} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {GOOGLE_API_KEY} from 'react-native-dotenv';

import {
  Address,
  Back,
  Container,
  Detail,
  DetailLogo,
  DetailModalContainer,
  DetailName,
  HeaderWrapper,
  Icon,
  ModalBackground,
  ModalContainer,
  ModalSubtitle,
  ModalTitle,
  ModalTitleWrapper,
  OptionOpenWrapper,
  OptionsWrapper,
  OptionText,
  OptionTextBold,
  OptionTextWrapper,
  OptionWrapper,
  OptionWrapperWithOpacity,
  TextWrapper,
  Title,
} from './styles';
import {useDebounce} from '@hooks';
import {Restaurant} from '@interfaces';
import {colors} from '@theme/colors';
import {useUserContext} from 'context/UserContext';
import {RootStackParams} from '@navigation/Home';
import {Map} from '@components/Map';
import {SearchBar} from '@components/SearchBar';
import {StatusBarComponent} from '@components/StatusBar';
import {Icon as IconComponent} from '@components/Icon';
import {Spacer} from '@components/Spacer';
import {RadiusSelector} from '@components/RadiusSelector';
import {ButtonComponent} from '@components/Button';
import googlePlacesApi from '@client/googlePlaces';

/**
 * Types
 */

type SearchRestaurantScreen = StackScreenProps<
  RootStackParams,
  'SearchRestaurant'
>;

/**
 * SearchRestaurantScreen
 */

export const SearchRestaurantScreen: FC<SearchRestaurantScreen> = ({
  navigation: {goBack},
}) => {
  const {user} = useUserContext();
  const [radiusModalVisible, setRadiusModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [search, setSearch] = useState({term: '', fetch: false});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Restaurant[]>([]);
  const [radius, setRadius] = useState(1000);
  const [tempRadius, setTempRadius] = useState(1000);
  const [searchOpen, setSearchOpen] = useState(true);
  const [restaurant, setRestaurant] = useState<Restaurant | undefined>();

  const {latitude, longitude} = user.location || {};

  const onChangeText = async () => {
    if (search.term.trim() === '') {
      onClearSearch();
    }
    if (!search.fetch) {
      return;
    }

    try {
      if (Math.random() < 0.2) {
        throw new Error();
      }
      const result = await googlePlacesApi.request({
        method: 'get',
        url: `/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=restaurant&opennow=${searchOpen}&key=${GOOGLE_API_KEY}`,
      });
      if (result) {
        setResults(result.data.results);
        console.log(result.data.results);
        setShowResults(true);
      }
    } catch (_) {
      return Alert.alert('Hubo un error, vuelva a intentar');
    }
  };

  useDebounce(onChangeText, 300, [search.term]);

  const onSelection = async (item: Restaurant) => {
    setRestaurant(item);
    setDetailModalVisible(true);
  };

  const onClearSearch = () => {
    setShowResults(false);
    setSearch({term: '', fetch: false});
    setDetailModalVisible(false);
  };

  const onSelectRadius = (radiusValue: number) => setTempRadius(radiusValue);

  const onConfirmRadius = () => {
    setRadius(tempRadius);
    setRadiusModalVisible(false);
  };

  const handleRadiusModal = () => setRadiusModalVisible(state => !state);

  const handleDetailModal = () => setDetailModalVisible(state => !state);

  return (
    <>
      <StatusBarComponent backgroundColor={colors.bg.secondary} />
      <Container onPress={() => Keyboard.dismiss()}>
        <HeaderWrapper>
          <Pressable onPress={goBack} hitSlop={10}>
            <Back source={require('../../../assets/images/back-arrow.png')} />
          </Pressable>
          <TextWrapper>
            <Title>Tu ubicación cercana</Title>
            <Address numberOfLines={1} ellipsizeMode="tail">
              {user.address?.split(',')[0] || ''}
            </Address>
          </TextWrapper>
          <Icon source={require('../../../assets/images/target.png')} />
        </HeaderWrapper>

        <SearchBar
          value={search.term}
          type="restaurant"
          placeholder={'Escribe nombre del restaurante que búscas'}
          onChangeText={(text: string) => {
            setSearch({term: text, fetch: true});
          }}
          showData={showResults}
          data={results}
          onClearSearch={onClearSearch}
          onSelection={onSelection}
        />

        <OptionsWrapper>
          <OptionWrapperWithOpacity
            open={searchOpen}
            onPress={() => setSearchOpen(state => !state)}>
            <OptionOpenWrapper>
              <OptionText>Solo locales abiertos</OptionText>
              <IconComponent name="Check" size={12} />
            </OptionOpenWrapper>
          </OptionWrapperWithOpacity>
          <OptionWrapper onPress={handleRadiusModal}>
            <OptionTextWrapper>
              <OptionText>Área de búsqueda: </OptionText>
              <OptionTextBold>{radius / 1000} KM</OptionTextBold>
            </OptionTextWrapper>
          </OptionWrapper>
        </OptionsWrapper>
      </Container>

      <Modal
        visible={radiusModalVisible}
        animationType="fade"
        transparent
        onRequestClose={handleRadiusModal}>
        <ModalBackground onPress={handleRadiusModal}>
          <ModalContainer>
            <ModalTitleWrapper>
              <ModalTitle>Área de búsqueda</ModalTitle>
              <Spacer height={5} />
              <ModalSubtitle>
                Puedes modificar el radio de distancia para encontrar tu
                restaurante
              </ModalSubtitle>
            </ModalTitleWrapper>
            <RadiusSelector
              selectedValue={tempRadius}
              onSelect={onSelectRadius}
            />
            <Map selectedLocation={user.location} radius={tempRadius} />
            <ButtonComponent
              accessibilityLabel="aplicar"
              title="aplicar"
              onPress={onConfirmRadius}
            />
          </ModalContainer>
        </ModalBackground>
      </Modal>

      <Modal
        visible={detailModalVisible}
        animationType="slide"
        transparent
        onRequestClose={handleDetailModal}>
        <DetailModalContainer onPress={handleDetailModal}>
          <DetailLogo source={{uri: restaurant?.icon}} />
          <Spacer height={10} />
          <DetailName>{restaurant?.name}</DetailName>
          <Detail>{restaurant?.vicinity}</Detail>
        </DetailModalContainer>
      </Modal>
    </>
  );
};
