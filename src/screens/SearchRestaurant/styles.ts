import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';
import {StatusBar} from 'react-native';

interface OptionsProps extends StyledProps {
  open?: boolean;
}

export const StatusBarView = styled(StatusBar)`
  background-color: ${({theme}: StyledProps) => theme.colors.bg.secondary};
`;

export const Container = styled.Pressable`
  flex: 1;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.primary};
`;

export const HeaderWrapper = styled.View`
  height: 130px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-horizontal: 30px;
  padding-bottom: 50px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.secondary};
`;

export const TextWrapper = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 12px;
  margin-left: 10px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayBold};
  color: ${({theme}: StyledProps) => theme.colors.text.tertiary};
`;

export const Address = styled(Title)`
  font-size: 18px;
`;

export const Icon = styled.Image`
  width: 22px;
  height: 22px;
`;

export const Back = styled(Icon)`
  width: 40px;
  height: 40px;
  tint-color: ${({theme}: StyledProps) => theme.colors.text.tertiary};
`;

export const OptionsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.quinary};
`;

export const OptionWrapper = styled.Pressable`
  height: 32px;
  width: 45%;
  border-radius: 4px;
  border-width: 1.5px;
  padding: 8px;
  border-color: ${({theme}: StyledProps) => theme.colors.bg.quaternary};
`;

export const OptionWrapperWithOpacity = styled(OptionWrapper)<OptionsProps>`
  opacity: ${({open}) => (open ? 1 : 0.3)};
`;

export const ModalBackground = styled.Pressable`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.View`
  height: 70%;
  margin-top: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.quinary};
`;

export const ModalTitleWrapper = styled.View`
  height: 15%;
  margin-top: 20px;
  padding-top: 20px;
  padding-horizontal: 30px;
  justifiy-content: flex-end;
  align-items: center;
  background-color: ${({theme}: StyledProps) => theme.colors.bg.primary};
`;

export const ModalTitle = styled.Text`
  font-size: 22px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayBold};
  color: ${({theme}: StyledProps) => theme.colors.text.sextiary};
`;

export const ModalSubtitle = styled.Text`
  font-size: 14px;
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayRegular};
  color: ${({theme}: StyledProps) => theme.colors.text.quaternary};
  text-align: center;
`;

export const OptionTextWrapper = styled.Text``;

export const OptionText = styled(Title)`
  font-family: ${({theme}: StyledProps) => theme.fonts.ralewayRegular};
`;
export const OptionTextBold = styled(OptionText)`
  font-family: ${({theme}: StyledProps) => theme.fonts.robotoBold};
`;

export const OptionOpenWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
