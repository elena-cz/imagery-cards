import React from 'react';
import { Provider } from 'mobx-react';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import firebase from 'react-native-firebase';
import { createStackNavigator } from 'react-navigation';

// import rootReducer from 'app/redux/reducers/rootReducer';
// import seedState from 'redux/seedState';

import HelpScreen from '@screens/HelpScreen';
import HomeScreen from '@screens/HomeScreen';
import CategoryBrowseScreen from '@screens/CategoryBrowseScreen';
import CardScreen from '@screens/CardScreen2';

// const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import uiStore from 'app/stores/uiStore';

const stores = {
  uiStore,
};


// const store = createStore(
//   rootReducer,
//   seedState,
//   composeEnhancers(
//     applyMiddleware(...middleware),
//   ),
// );

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
      <Provider {...stores}>
        <RootStack />
      </Provider>
    );
  }
};

