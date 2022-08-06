import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  color: ${({theme}: StyledProps) => theme.colors.bg.primary};
`;

export const Title = styled.Text`
  justify-content: center;
  text-align: center;
  color: ${({theme}: StyledProps) => theme.colors.text.error};
`;
