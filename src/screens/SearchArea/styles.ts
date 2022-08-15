import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.Pressable`
  height: 50%;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.primary};
`;
