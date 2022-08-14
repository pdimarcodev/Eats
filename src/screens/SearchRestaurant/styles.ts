import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';
import {StatusBar} from 'react-native';

export const StatusBarView = styled(StatusBar)`
  background-color: ${({theme}: StyledProps) => theme.colors.bg.secondary};
`;

export const Container = styled.Pressable`
  flex: 1;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.primary};
`;

export const HeaderWrapper = styled.View`
  height: 130px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 50px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.secondary};
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayRegular};
  color: ${({theme}: StyledProps) => theme.colors.text.tertiary};
`;
