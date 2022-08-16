import {FC} from 'react';
import * as icons from './icons';

/**
 * Types
 */

interface IconProps {
  name: keyof typeof icons;
  size: number;
  fill?: string;
  stroke?: string;
}

/**
 * Icon component
 */

export const Icon: FC<IconProps> = ({name, size, fill, stroke}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    throw new Error(`Invalid icon name: ${name}`);
  }

  return (
    <IconComponent width={size} height={size} fill={fill} stroke={stroke} />
  );
};
