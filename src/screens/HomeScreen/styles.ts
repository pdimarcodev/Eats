import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.View`
  flex: 1;
  color: ${({theme}: StyledProps) => theme.colors.bg.quinary};
`;

export const Header = styled.View`
  flex-direction: row;
  height: 150px;
  margin-left: 20px;
  align-items: center;
`;

export const TitleTop = styled.Text`
  font-size: 42px;
  font-family: ${({theme}: StyledProps) => theme.fonts.robotoBlack};
  color: ${({theme}: StyledProps) => theme.colors.text.primary};
`;

export const TitleBottom = styled(TitleTop)`
  color: ${({theme}: StyledProps) => theme.colors.text.secondary};
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  letter-spacing: 4.2px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayBold};
  color: ${({theme}: StyledProps) => theme.colors.text.sextiary};
`;

export const HandImage = styled.Image`
  position: absolute;
  width: 180px;
  height: 170px;
  bottom: 0;
  right: 30px;
`;

export const AddAddress = styled.View`
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  height: 130px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 80px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.secondary};
`;

export const AddAddressText = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayRegular};
  color: ${({theme}: StyledProps) => theme.colors.text.tertiary};
`;

export const SlidersContainer = styled.View`
  flex: 1;
  margin-top: -50px;
  padding-horizontal: 20px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.primary};
`;
