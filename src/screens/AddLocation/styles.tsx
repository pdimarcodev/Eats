import styled from 'styled-components/native';
import {StyledProps} from '@interfaces';
import {StyleSheet} from 'react-native';

export const Container = styled.View({
  // ...StyleSheet.absoluteFillObject,
  // height: 400,
  // width: 400,

  flex: 1,
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
