import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.View`
  width: 217px;
  height: 105px;
  margin-right: 10px;
  border-radius: 18px;
  overflow: hidden;
`;

export const CardImage = styled.ImageBackground`
  flex: 1;
  width: undefined;
  height: undefined;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayBold};
  color: ${({theme}: StyledProps) => theme.colors.text.inverse};
  text-align: center;
  letter-spacing: 4px;
`;
