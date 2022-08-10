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
