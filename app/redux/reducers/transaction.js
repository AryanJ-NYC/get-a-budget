import { handleActions } from 'redux-actions';
import actions from '../actions';

const defaultState = {
  all: [],
};

export default handleActions({
  [actions.receiveTransactions]: (state, action) => {
    return {
      ...state,
      all: action.payload,
    };
  },
}, defaultState);
