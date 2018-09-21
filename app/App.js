import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'react-native-firebase';
import { createStackNavigator } from 'react-navigation';

import rootReducer from 'app/store/reducers/rootReducer';
import seedState from 'app/store/seedState';

import HomeScreen from 'app/screens/HomeScreen';
import HelpScreen from 'app/screens/HelpScreen';
import CategoryBrowseScreen from 'app/screens/CategoryBrowseScreen';
import CardScreen from 'app/screens/CardScreen2';

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

