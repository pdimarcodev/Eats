import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import {theme} from '@theme';
import {Home} from '@navigation/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
