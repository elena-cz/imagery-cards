import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'react-native-firebase';
import { createStackNavigator } from 'react-navigation';

import rootReducer from '@reducers/rootReducer';
import seedState from '@store/seedState';

import HelpScreen from '@screens/HelpScreen';
import HomeScreen from '@screens/HomeScreen';
import CategoryBrowseScreen from '@screens/CategoryBrowseScreen';
import CardScreen from '@screens/CardScreen2';

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  seedState,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

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
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
};

