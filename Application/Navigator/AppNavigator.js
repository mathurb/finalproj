import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../Scenes/Login.js';
import AuthLoadingScreen from './AuthLoadingScreen';
import Details from '../Scenes/Details';
const AuthStack = createStackNavigator({ SignIn: Login });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading:AuthLoadingScreen,
  Auth:AuthStack,
  Main: MainTabNavigator,
},
{
  initialRouteName: 'AuthLoading',
}));
