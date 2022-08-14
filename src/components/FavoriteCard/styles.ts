import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.View`
  flex-direction: column;
  height: 165px;
  width: 245px;
  margin-right: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.primary};
`;

export const CardImage = styled.ImageBackground`
  flex: 1;
  width: undefined;
  height: undefined;
  margin-top: -5px;
`;

export const Logo = styled.Image`
  width: 42px;
  height: 42px;
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const WhiteBar = styled.View`
  width: 130px;
  height: 8px;
  border-radius: 25px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.primary};
  position: absolute;
  top: 15px;
  right: 10px;
`;

export const InfoWrapper = styled.View`
    height: 55px;
    margin-horizontal: 2px;
    margin-top: -5px;
    margin-bottom: 2px;
    padding: 10px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color:  ${({theme}: StyledProps) => theme.colors.bg.primary};
    border-color: #00000029;
    shadow-color: #000,
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-family: ${({theme}: StyledProps) => theme.fonts.robotoRegular};
  color: ${({theme}: StyledProps) => theme.colors.text.sextiary};
`;

export const BusinessName = styled.Text`
  font-size: 12px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayBold};
  color: ${({theme}: StyledProps) => theme.colors.text.secondary};
`;

export const DeliveryTime = styled(Description)``;
