import {FC} from 'react';
import {View, StatusBar, StatusBarProps} from 'react-native';
import styles from './styles';

export const StatusBarComponent: FC<StatusBarProps> = ({
  backgroundColor,
  ...props
}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle="dark-content"
      {...props}
    />
  </View>
);
