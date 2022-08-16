import {FC} from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';

import {Button, Label} from './styles';

/**
 * Types
 */

export interface ButtonProps extends TouchableOpacityProps {
  accessibilityLabel: string;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  onPress: () => void;
}

/**
 * ButtonComponent
 */

export const ButtonComponent: FC<ButtonProps> = ({
  onPress,
  title,
  accessibilityLabel,
  loading,
  disabled,
  selected,
  ...props
}) => {
  return (
    <Button
      {...props}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={disabled ? 'deshabilitado' : undefined}
      disabled={disabled || loading || selected}
      onPress={onPress}>
      {loading ? <ActivityIndicator color={'white'} /> : <Label>{title}</Label>}
    </Button>
  );
};
