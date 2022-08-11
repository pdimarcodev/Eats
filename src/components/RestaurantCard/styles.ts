import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

export const Container = styled.View`
  margin-right: 10px;
`;

export const CardImage = styled.Image`
  margin-top: 5px;
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

export const Discount = styled.View`
  position: absolute;
  top: 0px;
  right: -5px;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  padding: 3px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.quaternary};
`;

export const DiscountRate = styled.Text`
  font-size: 10px;
  font-family: ${({theme}: StyledProps) => theme.fonts.robotoBold};
  color: ${({theme}: StyledProps) => theme.colors.text.inverse};
  text-align: center;
`;
export const DiscountText = styled(DiscountRate)`
  font-size: 8px;
`;
