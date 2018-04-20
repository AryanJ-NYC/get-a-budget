import { handleActions } from 'redux-actions';
import actions from '../actions';

const defaultState = {
  all: [],
};

export default handleActions({
  [actions.addAccount]: (state, action) => {
    return {
      ...state,
      all: [...state.all, action.payload]
    };
  },
  [actions.receiveAccounts]: (state, action) => {
    return {
      ...state,
      all: action.payload,
    };
  },
}, defaultState);
