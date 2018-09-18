import React from 'react';
import firebase from 'react-native-firebase';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from 'app/screens/HomeScreen';
import HelpScreen from 'app/screens/HelpScreen';
import CategoryBrowseScreen from 'app/screens/CategoryBrowseScreen';
import CardScreen from 'app/screens/CardScreen';


const RootStack = createStackNavigator(
{
    Home: HomeScreen,
    Help: HelpScreen,
    CategoryBrowse: CategoryBrowseScreen,
    Card: CardScreen,
  },
  {
    initialRouteName: 'Home',

    navigationOptions: {
      header: null,
    },
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
