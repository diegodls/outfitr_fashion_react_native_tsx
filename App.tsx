import React from 'react';
import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from './src/Authentication/OnBoarding';
import Welcome from './src/Authentication/Welcome';

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
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};

export default App;
