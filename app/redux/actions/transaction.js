import { createAction } from 'redux-actions';
import { Transaction } from '../../models';

export const fetchTransactions = () => dispatch => {
  Transaction.findAll({ attributes: ['amount', 'date', 'id', 'payee']})
    .then(transactions => {
      dispatch(receiveTransactions(transactions));
    });
};

export const receiveTransactions = createAction('RECEIVE_TRANSACTIONS');
