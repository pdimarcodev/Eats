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
  justify-content: space-between;
  align-items: flex-end;
  padding-horizontal: 50px;
  padding-bottom: 50px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.secondary};
`;

export const TextWrapper = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 12px;
  margin-left: 10px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayRegular};
  color: ${({theme}: StyledProps) => theme.colors.text.tertiary};
`;

export const Address = styled(Title)`
  font-size: 18px;
`;

export const Icon = styled.Image`
  width: 22px;
  height: 22px;
`;

export const OptionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 20px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.quinary};
`;

export const OptionWrapper = styled.Pressable`
  height: 32px;
  width: 45%;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${({theme}: StyledProps) => theme.colors.bg.quaternary};
`;
