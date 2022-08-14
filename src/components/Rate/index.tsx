import {FC} from 'react';

import {Icon} from '@components/Icon';
import {RateWrapper, RateInfo} from './styles';

/**
 * Types
 */

interface RateProps {
  rate: number;
}

/**
 * Rate Component
 */

export const Rate: FC<RateProps> = ({rate}) => (
  <RateWrapper>
    <Icon name="Star" size={12} />
    <RateInfo>{rate}</RateInfo>
  </RateWrapper>
);
