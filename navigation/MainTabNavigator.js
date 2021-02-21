import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import PlanScreen from "../screens/PlanScreen"
import PlanFormScreen from "../screens/PlanFormScreen"

import ActivityScreen from "../screens/ActivityScreen"
import RecentActivitiesScreen from "../screens/RecentActivites"
import StartActivityScreen from "../screens/StartActivity"

import StatsScreen from "../screens/StatsScreen"

import MeasurmentScreen from "../screens/MeasurmentScreen"

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// *** //

const PlanStack = createStackNavigator(
  {
    PlanList: PlanScreen,
    AddPlan: PlanFormScreen,
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
    RecentActivities: RecentActivitiesScreen,
    StartActivity: StartActivityScreen
  },
  config
);
ActivitesStack.navigationOptions = {
  tabBarLabel: 'Activites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-flash' : 'md-flash'} />
  ),
};
ActivitesStack.path = '';

// *** //

const MeasurmentStack = createStackNavigator(
  {
    Stats: MeasurmentScreen,
  },
  config
);
MeasurmentStack.navigationOptions = {
  tabBarLabel: 'Measurments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-body' : 'md-body'} />
  ),
};
MeasurmentStack.path = ''; 

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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'} />
  ),
};
StatsStack.path = '';

// *** //

const tabNavigator = createBottomTabNavigator({
  PlanStack,
  ActivitesStack,
  MeasurmentStack,
  StatsStack
}, {
  initialRouteName: 'ActivitesStack'
});

tabNavigator.path = '';

export default tabNavigator;
