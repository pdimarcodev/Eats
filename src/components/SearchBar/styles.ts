import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const Container = styled.View`
  margin-top: 200;
`;

export const TextBackground = styled.View`
  background-color: ${(props: StyledProps) => props.theme.colors.bg.tertiary};
  border-radius: 50px;
  height: 40px;
  padding-horizontal: ${(props: StyledProps) => props.theme.spacings.XXL};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

export const SearchText = styled.TextInput`
  flex: 1;
  font-size: 18px;
  top: 2px;
`;

export const FoundCityButton = styled.TouchableOpacity``;

export const FoundCity = styled.TextInput``;
