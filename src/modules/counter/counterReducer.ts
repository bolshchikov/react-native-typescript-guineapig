import * as Immutable from 'immutable';
import {CounterModel} from './counterModel';
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './counterActionTypes';

let initialState: CounterModel = Immutable.Map({ count: 0 });

let counter: Redux.Reducer = (state: CounterModel = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.update('count', count => count + 1);
    case DECREMENT_COUNTER:
      return state.update('count', count => count - 1);
    default:
      return state;
  }
};

export default counter;
