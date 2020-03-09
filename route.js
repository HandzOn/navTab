import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './src/Home'
import SettingsScreen from './src/Settings'
import AddButton from './buttons/AddButton'

const TabNavigator = createBottomTabNavigator(
  {
    Inicial: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name="home" size={24} color="#7c108e" />
      }
    },
    Configuração: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name="gears" size={24} color="#7c108e" />
      }
    },
    Add: {
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />
      }
    },
    Profissional: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name="users" size={24} color="#7c108e" />
      }
    },
    Agenda: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name="calendar-o" size={24} color="#7c108e" />
      }
    },    
  }, { tabBarOptions: { showLabel: false }}
);

const Routes = createAppContainer(TabNavigator);
export default Routes;
