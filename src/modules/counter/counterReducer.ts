import counterActions from './counterActionTypes';
import * as Immutable from 'immutable';

type CounterState = Immutable.Map<string, number>;
let initialState: CounterState = Immutable.Map({ count: 0 });

let counter: Redux.Reducer = (state: CounterState = initialState, action: any) => {
  switch (action.type) {
    case counterActions.INCEREMENT:
      return state.update('count', count => count + 1);
    case counterActions.DECREMENT:
      return state.update('count', count => count - 1);
    default:
      return state;
  }
};

export default counter;
