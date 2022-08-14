import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';

import UserContextProvider from 'context/UserContext';
import {theme} from '@theme';
import {Home} from '@navigation/Home';

const App = () => {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <Home />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </UserContextProvider>
  );
};

export default App;
