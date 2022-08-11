import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const CardImage = styled.ImageBackground`
  width: 217px;
  height: 100px;
  border-radius: 18px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayBold};
  color: ${({theme}: StyledProps) => theme.colors.text.inverse};
  text-align: center;
  letter-spacing: 1.4px;
`;
