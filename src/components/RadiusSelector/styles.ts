import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-horizontal: 30px;
  margin-bottom: 20px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding-horizontal: 30px;
`;

export const Line = styled.View`
  height: 4px;
  width: 92%;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.quaternary};
  position: absolute;
  bottom: 23px;
  left: 40px;
  z-index: 1;
`;

export const ItemNonSelected = styled.Pressable`
  border-radius: 50px;
  height: 10px;
  width: 10px;
  margin-right: 70px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.quaternary};
  z-index: 4;
`;

export const ItemSelected = styled(ItemNonSelected)`
  height: 24px;
  width: 24px;
  border-width: 3px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.secondary};
  border-color: ${({theme}: StyledProps) => theme.colors.bg.quaternary};
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
  padding-horizontal: 30px;
`;

export const Km = styled.Text`
  font-size: 14px;
  font-family: ${({theme}: StyledProps) => theme.fonts.robotoBold};
  color: ${({theme}: StyledProps) => theme.colors.text.tertiary};
`;
