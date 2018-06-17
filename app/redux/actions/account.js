import { createAction } from 'redux-actions';
import { Account } from '../../models';

export const addAccount = createAction('ADD_ACCOUNT');

export const fetchAccounts = () => dispatch => {
  Account.findAll({ attributes: ['accountType', 'id', 'currentBalance', 'name', 'onBudget']})
    .then(accounts => {
      dispatch(receiveAccounts(accounts));
    });
};

export const receiveAccounts = createAction('RECEIVE_ACCOUNTS');
