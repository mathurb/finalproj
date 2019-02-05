import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../Components/TabBarIcon';
import Suggestions from '../Scenes/Suggestions';
import CropScene from '../Scenes/CropScene';
import Profile from '../Scenes/Profile';


const HomeStack = createStackNavigator({
  Home: Suggestions,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'To-Do',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-clipboard`
          : 'md-clipboard'
      }
    />
  ),
};

const CropStack = createStackNavigator({
  Crops: CropScene,
});

CropStack.navigationOptions = {
  tabBarLabel: 'Crops',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-flower' : 'md-flower'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Prof: Profile,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CropStack,
  ProfileStack,
});
