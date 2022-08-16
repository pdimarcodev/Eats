import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 85%;
  border-radius: 8px;
  height: 60px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.quaternary};
  position: absolute;
  bottom: 50px;
  align-self: center;
`;
export const Label = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${({theme}: StyledProps) => theme.fonts.robotoBold};
  color: ${({theme}: StyledProps) => theme.colors.text.inverse};
`;
