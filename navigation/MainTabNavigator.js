import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import PlanScreen from "../screens/PlanScreen"
import ActivityScreen from "../screens/ActivityScreen"
import StatsScreen from "../screens/StatsScreen"

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// *** //

const PlanStack = createStackNavigator(
  {
    Plan: PlanScreen,
  },
  config
);
PlanStack.navigationOptions = {
  tabBarLabel: 'Plans',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
PlanStack.path = '';

// *** //

const ActivitesStack = createStackNavigator(
  {
    Activities: ActivityScreen,
  },
  config
);
ActivitesStack.navigationOptions = {
  tabBarLabel: 'Activites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
ActivitesStack.path = '';

// *** //

const StatsStack = createStackNavigator(
  {
    Stats: StatsScreen,
  },
  config
);
StatsStack.navigationOptions = {
  tabBarLabel: 'Statistics',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};
StatsStack.path = '';

// *** //

const tabNavigator = createBottomTabNavigator({
  PlanStack,
  ActivitesStack,
  StatsStack,
}, {
  initialRouteName: 'PlanStack' // ActivitesStack
});

tabNavigator.path = '';

export default tabNavigator;
