import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';

import OnBoarding from './src/Authentication/OnBoarding';
import Welcome from './src/Authentication/Welcome';
import theme from './src/components/index'

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  )
};

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


//parei 28:31
https://www.youtube.com/watch?v=rJcJ7jzQO0g