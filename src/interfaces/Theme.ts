import {Colors} from '../theme/colors';
import {Spacings} from '../theme/spacings';

export interface Theme {
  colors: Colors;
  spacings: Spacings;
}

export interface StyledProps {
  theme: Theme;
}
