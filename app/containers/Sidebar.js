import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ account }) => ({
  accounts: account.all,
});

export default connect(mapStateToProps)(Sidebar);
