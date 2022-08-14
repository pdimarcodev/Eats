import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const RateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RateInfo = styled.Text`
  font-size: 12px;
  font-family: ${({theme}: StyledProps) => theme.fonts.robotoRegular};
  color: ${({theme}: StyledProps) => theme.colors.text.sextiary};
  text-align: center;
  margin-top: 0.5px;
`;
