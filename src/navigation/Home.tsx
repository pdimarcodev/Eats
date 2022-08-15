import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '@screens/HomeScreen';
import {AddLocationScreen} from '@screens/AddLocation';
import {AvatarComponent} from '@components/Avatar';
import {SearchRestaurantScreen} from '@screens/SearchRestaurant';
import {colors} from '@theme/colors';
import {RestaurantDetailScreen} from '@screens/RestaurantDetal';
import {Restaurant} from '@interfaces';

export type RootStackParams = {
  Home: undefined;
  AddLocation: undefined;
  SearchRestaurant: undefined;
  RestaurantDetail: {
    restaurant: Restaurant;
  };
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
        <Stack.Screen
          name="SearchRestaurant"
          component={SearchRestaurantScreen}
        />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
