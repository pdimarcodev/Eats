import styled from 'styled-components/native';

export const SpacerView = styled.View<{height: number | string}>`
  height: ${({height}) => `${height}px`};
`;
