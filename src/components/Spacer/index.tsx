import {FC} from 'react';
import {SpacerView} from './styles';

/**
 * Types
 */

interface SpacerProps {
  height?: number | string;
}

/**
 * Constants
 */

const DEFAULT_HEIGHT = 22;

/**
 * Spacer
 */

export const Spacer: FC<SpacerProps> = ({height = DEFAULT_HEIGHT}) => (
  <SpacerView height={height} />
);
