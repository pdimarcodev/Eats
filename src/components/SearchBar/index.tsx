import {FC} from 'react';
import {FlatList, Pressable} from 'react-native';
import {Prediction} from '@interfaces';

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
  SearchText,
  TextBackground,
} from './styles';
import {Icon} from '@components/Icon';
import {colors} from '@theme/colors';

interface SearchBarProps {
  value: string;
  placeholder: string;
  data: Prediction[];
  showData: boolean;
  onChangeText: (text: string) => void;
  onClearSearch: () => void;
  onSelection: (key: string, value: string) => void;
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
  data,
  showData,
  onChangeText,
  onClearSearch,
  onSelection,
}) => {
  const renderItems = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <ListItemWrapper
              onPress={() => onSelection(item.place_id, item.description)}>
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
      {showData && renderItems()}
    </Container>
  );
};
