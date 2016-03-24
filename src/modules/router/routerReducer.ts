import {INITIALIZATION, NAVIGATION} from './routerActionTypes';
import {Route} from './routerModel';

let initialRouter: Route = '';

let router: Redux.Reducer = (state: Route = initialRouter, action: any) => {
  switch (action.type) {
    case NAVIGATION:
      return action.screen;
    default:
      return state;
  }
};

export default router;
