import {Prediction} from '@interfaces';
import {FC} from 'react';

import {Container, SearchText, TextBackground} from './styles';

interface SearchBarProps {
  //   query: string;
  //   setQuery: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder: string;
  //   predictions: Prediction[];
  //   showPredictions: boolean;
  //   onPredictionTapped: (placeId: string, description: string) => void;
  onChangeText: (text: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  value,
  placeholder,
  onChangeText,
  //   predictions
}) => {
  return (
    <Container>
      <TextBackground>
        <SearchText
          placeholder={placeholder}
          placeholderTextColor="gray"
          //   autoCapitalize="none"
          //   autoCorrect={false}
          returnKeyType="search"
          value={value}
          onChangeText={onChangeText}
        />
        {/* <Icon name="search-outline" color="grey" size={30} /> */}
      </TextBackground>
    </Container>
  );
};
