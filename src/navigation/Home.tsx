import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '@theme';
import {HomeScreen} from '@screens/HomeScreen';
import {AddLocationScreen} from '@screens/AddLocation';
import {AvatarComponent} from '@components/Avatar';
import {Icon} from '@components/Icon';
import {View} from 'react-native';
import {IconWrapper} from './styles';
import {colors} from '@theme/colors';

export type RootStackParams = {
  Home: undefined;
  AddLocation: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerMode: 'screen',
          title: '',
          headerStyle: {
            backgroundColor: colors.bg.quinary,
          },
          headerShadowVisible: false,
          headerLeft: () => <AvatarComponent />,
          headerRight: () => (
            <IconWrapper>
              <Icon name="Search" size={25} />
            </IconWrapper>
          ),
          cardStyle: {
            backgroundColor: colors.bg.quinary,
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: colors.bg.primary,
          },
        }}>
        <Stack.Screen name="AddLocation" component={AddLocationScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
