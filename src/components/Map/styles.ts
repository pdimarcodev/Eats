import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';
import {StyleSheet} from 'react-native';

export const Container = styled.View({
  height: 400,
  width: 400,
});

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const Title = styled.Text`
  justify-content: center;
  text-align: center;
  color: ${({theme}: StyledProps) => theme.colors.text.error};
`;
