import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const Container = styled.View`
  margin-top: 200;
`;

export const TextBackground = styled.View`
  background-color: ${(props: StyledProps) => props.theme.colors.bg.primary};
  border-radius: 50px;
  height: 56px;
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
  background-color: 'white';
  color: ${({theme}: StyledProps) => theme.colors.text.tertiary};
`;

export const flatListStyle = {
  backgroundColor: '#fff',
  marginTop: 10,
};

export const ListItemWrapper = styled.Pressable`
  justify-content: center;
  padding-horizontal: 16px;
  height: 56px;
`;

export const ListItemMain = styled.Text`
  color: ${({theme}: StyledProps) => theme.colors.text.primary};
  font-size: 18px;
`;

export const ListItemSecondary = styled.Text`
  color: ${({theme}: StyledProps) => theme.colors.text.quaternary};
  font-size: 12px;
`;

export const ListItemSeparator = styled.View`
  border-bottom-color: ${({theme}: StyledProps) =>
    theme.colors.text.quaternary};
  border-bottom-width: 1px;
`;

export const ListFooterWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const ListFooter = styled.Text`
  color: ${({theme}: StyledProps) => theme.colors.text.tertiary};
  font-size: 18px;
  margin-left: 5px;
`;

export const ListFooterIcon = styled.Image`
  width: 22px;
  height: 22px;
`;
