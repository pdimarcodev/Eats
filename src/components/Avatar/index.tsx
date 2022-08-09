import {FC} from 'react';
import {AvatarWrapper, Avatar} from './styles';

/**
 *  Avatar
 */

export const AvatarComponent: FC = () => (
  <AvatarWrapper>
    <Avatar source={require('../../../assets/images/mario.jpg')} />
  </AvatarWrapper>
);
