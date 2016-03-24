import actions from './counterActionTypes';

export function increment() {
  return {
    type: actions.INCEREMENT
  };
}

export function decrement() {
  return {
    type: actions.DECREMENT
  };
}
