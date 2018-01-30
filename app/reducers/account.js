import { handleActions } from 'redux-actions';
import actions from '../actions/account';

const defaultState = {
  all: [],
};

export default handleActions({
  [actions.addAccount]: (state, action) => {
    return {
      ...state,
      all: [...state.all, action.payload]
    };
  }
}, defaultState);
