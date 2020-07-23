import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/components'
import { AuthenticationNavigator } from './src/Authentication';

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
