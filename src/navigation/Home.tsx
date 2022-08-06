import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '@theme';
import {HomeScreen} from '@screens/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.bg.primary,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
