import {FontType} from '@theme/fonts';
import {ColorType} from '@theme/colors';
import {SpacingType} from '@theme/spacings';

export interface Theme {
  colors: ColorType;
  fonts: FontType;
  spacings: SpacingType;
}

export interface StyledProps {
  theme: Theme;
}
