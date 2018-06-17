import { connect } from 'react-redux';
import TransactionList from '../components/TransactionList';

const mapStateToProps = ({ transaction }) => ({
  transactions: transaction.all,
});

export default connect(mapStateToProps)(TransactionList);
