import {FC} from 'react';
import {FlatList, Pressable} from 'react-native';
import {Prediction, Restaurant} from '@interfaces';

import {
  Container,
  flatListStyle,
  ListFooter,
  ListFooterIcon,
  ListFooterWrapper,
  ListItemMain,
  ListItemSecondary,
  ListItemSeparator,
  ListItemWrapper,
  ListItemWrapperRestaurants,
  Logo,
  SearchText,
  TextBackground,
  TextWrapper,
} from './styles';
import {Icon} from '@components/Icon';
import {colors} from '@theme/colors';

type SearchBarType = 'location' | 'restaurant';

interface SearchBarProps {
  value: string;
  placeholder: string;
  type: SearchBarType;
  data: Prediction[] | Restaurant[];
  showData: boolean;
  onChangeText: (text: string) => void;
  onClearSearch: () => void;
  onSelection: (item: any) => void;
}

const ListFooterComponent: FC = () => (
  <>
    <ListItemSeparator />
    <ListFooterWrapper>
      <ListFooterIcon source={require('../../../assets/images/target.png')} />
      <ListFooter>Busca por ubicación</ListFooter>
    </ListFooterWrapper>
  </>
);

export const SearchBar: FC<SearchBarProps> = ({
  value,
  placeholder,
  type,
  data,
  showData,
  onChangeText,
  onClearSearch,
  onSelection,
}) => {
  const renderLocationItems = () => {
    return (
      <FlatList
        data={data as Prediction[]}
        renderItem={({item}) => {
          return (
            <ListItemWrapper onPress={() => onSelection(item)}>
              <ListItemMain numberOfLines={1}>
                {item.description.split(',')[0]}
              </ListItemMain>
              <ListItemSecondary numberOfLines={1}>
                {item.description.split(',').slice(1).join(',').trim()}
              </ListItemSecondary>
            </ListItemWrapper>
          );
        }}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        ListFooterComponent={() => <ListFooterComponent />}
        keyExtractor={item => item.place_id}
        keyboardShouldPersistTaps="handled"
        style={flatListStyle}
      />
    );
  };

  const renderRestaurantItems = () => {
    return (
      <FlatList
        data={data as Restaurant[]}
        renderItem={({item}) => {
          return (
            <ListItemWrapperRestaurants onPress={() => onSelection(item)}>
              <Logo source={{uri: item.icon}} />
              <TextWrapper>
                <ListItemMain numberOfLines={1}>{item.name}</ListItemMain>
                <ListItemSecondary numberOfLines={1}>
                  {item.vicinity}
                </ListItemSecondary>
              </TextWrapper>
            </ListItemWrapperRestaurants>
          );
        }}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        ListFooterComponent={() => <ListFooterComponent />}
        keyExtractor={item => item.place_id}
        keyboardShouldPersistTaps="handled"
        style={flatListStyle}
      />
    );
  };

  return (
    <Container>
      <TextBackground>
        <SearchText
          placeholder={placeholder}
          placeholderTextColor={colors.text.placeholder}
          autoCapitalize="words"
          returnKeyType="search"
          value={value}
          onChangeText={onChangeText}
        />
        <Pressable onPress={onClearSearch} hitSlop={5}>
          <Icon name="Clear" size={19} />
        </Pressable>
      </TextBackground>
      {showData &&
        (type === 'location' ? renderLocationItems() : renderRestaurantItems())}
    </Container>
  );
};
