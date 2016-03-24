import * as React from 'react';
import { Component } from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Navigation } from 'react-native-navigation';

import reducers from './modules/index';
import * as routerAction from './modules/router/routerActions';
import Login from './screens/login';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store: Redux.Store = createStoreWithMiddleware(reducer);

import { registerScreens } from './screens/index';
registerScreens(store, Provider);

export default class App {
  currentRoot: string;
  
  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(routerAction.init());
  }

  onStoreUpdate() {
    let { root } = store.getState().router;
    if (root === undefined) {
      root = 'login';
    }    
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    
    if (this.currentRoot !== root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }
  startApp(root: string) {
    console.log(root);
    switch (root) {
      case 'login':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'rnts.LoginScreen',
            title: 'Welcome',
            navigatorStyle: {}
          }
        });
        return;
      case 'home':
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: 'Home',
              screen: 'rnts.Home',
              icon: require('./images/one.png'),
              selectedIcon: require('./images/one_selected.png'),
              title: 'Screen One',
              navigatorStyle: {}
            },
            {
              label: 'Favorites',
              screen: 'rnts.Favorite',
              icon: require('./images/two.png'),
              selectedIcon: require('./images/two_selected.png'),
              title: 'Screen Two',
              navigatorStyle: {}
            }
          ]
        });
        return;
      default:
        console.error('Unknown app root');
    }
  }
}
