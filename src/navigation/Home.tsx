import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '@theme';
import {HomeScreen} from '@screens/HomeScreen';
import {AddLocationScreen} from '@screens/AddLocation';

export type RootStackParams = {
  Home: undefined;
  AddLocation: undefined;
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
      }}
      initialRouteName="AddLocation">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddLocation" component={AddLocationScreen} />
    </Stack.Navigator>
  );
};
