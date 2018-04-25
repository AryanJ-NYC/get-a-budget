import { connect } from 'react-redux';
import Home from '../components/Home';
import actions from '../redux/actions';

const mapDispatchToProps = {
  fetchAccounts: actions.fetchAccounts,
};

export default connect(null, mapDispatchToProps)(Home);
