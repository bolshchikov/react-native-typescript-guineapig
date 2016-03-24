import {INITIALIZATION, NAVIGATION} from './routerActionTypes';

export function init() {
  return async function (dispatch: Redux.Dispatch) {
    dispatch(navigateTo('login'));
  };
}

export function navigateTo(screen: string) {
  return {
    type: NAVIGATION,
    screen: screen
  };
}
