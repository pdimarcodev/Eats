import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';

interface ContainerProps extends StyledProps {
  isFirst?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 217px;
  height: 105px;
  margin-left: 15px;
  border-radius: 18px;
  overflow: hidden;
  margin-left: ${({isFirst}) => (isFirst ? '15px' : '10px')};
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
