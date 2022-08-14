import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayBold};
`;
