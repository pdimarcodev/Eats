import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.View`
  flex-direction: column;
  height: 150px;
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

export const InfoWrapper = styled.View`
    height: 40px;
    margin-horizontal: 2px;
    margin-top: -5px;
    margin-bottom: 2px;
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

export const Title = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayBold};
  color: ${({theme}: StyledProps) => theme.colors.text.inverse};
  text-align: center;
  letter-spacing: 1.4px;
`;
