import { connect } from 'react-redux';
import actions from '../actions';
import Home from '../components/Home';

const mapDispatchToProps = {
  fetchAccounts: actions.fetchAccounts,
};

export default connect(null, mapDispatchToProps)(Home);
