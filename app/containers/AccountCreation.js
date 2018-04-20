import { connect } from 'react-redux';
import actions from '../actions';
import AccountCreation from '../components/AccountCreation';

const mapDispatchToProps = {
  addAccount: actions.addAccount,
};

export default connect(null, mapDispatchToProps)(AccountCreation);
