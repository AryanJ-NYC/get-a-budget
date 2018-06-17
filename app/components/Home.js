import React, { Component } from 'react';
import AccountCreation from '../containers/AccountCreation';
import MainContent from '../containers/MainContent';
import Sidebar from '../containers/Sidebar';

export default class Home extends Component {
  state = {
    isAccountCreationOpen: false,
  };

  componentDidMount() {
    this.props.fetchAccounts();
  }

  toggleModal = () => {
    this.setState({ isAccountCreationOpen: !this.state.isAccountCreationOpen });
  };

  render() {
    return (
      <div>
        <AccountCreation closeModal={this.toggleModal} isOpen={this.state.isAccountCreationOpen} />
        <div style={wrapperStyle}>
          <Sidebar />
          <MainContent />
        </div>
        <button onClick={this.toggleModal}>Add Account</button>
      </div>
    );
  }
}

const wrapperStyle = {
  display: 'grid',
  gridTemplateColumns: '20% 80%',
};
