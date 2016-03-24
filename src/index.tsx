import * as React from 'react';
import { Component } from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from './modules/index';
import MainScreen from './screens/MainScreen';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store: Redux.Store = createStoreWithMiddleware(reducer);

export default class App extends Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
} 
