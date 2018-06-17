import * as accountActions from './account';
import * as transactionActions from './transaction';
import userActions from './user';

export default {
  ...accountActions,
  ...transactionActions,
  ...userActions,
};
