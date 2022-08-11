import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const Container = styled.View`
  margin-right: 10px;
`;

export const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 18px;
`;

export const InfoWrapper = styled.View``;

export const Name = styled.Text`
  font-size: 14px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayMedium};
  color: ${({theme}: StyledProps) => theme.colors.text.sextiary};
  text-align: center;
  margin-top: 2px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rate = styled(Info)``;

export const InfoText = styled(Name)`
  font-size: 12px;
  font-family: ${({theme}: StyledProps) => theme.fonts.robotoRegular};
`;
