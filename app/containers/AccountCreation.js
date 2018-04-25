import { connect } from 'react-redux';
import AccountCreation from '../components/AccountCreation';
import actions from '../redux/actions';

const mapDispatchToProps = {
  addAccount: actions.addAccount,
};

export default connect(null, mapDispatchToProps)(AccountCreation);
