import { connect } from 'react-redux';
import MainContent from '../components/MainContent';
import actions from '../redux/actions';

const mapDispatchToProps = {
  fetchTransactions: actions.fetchTransactions,
};

export default connect(null, mapDispatchToProps)(MainContent);
