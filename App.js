import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import ListItem from './src/screens/ListItem';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppNavigator = createStackNavigator(
  {
    HomeScreen: Home,
    AddItemScreen: AddItem,
    ListItemScreen: ListItem
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
