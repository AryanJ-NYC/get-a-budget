import React, { Component } from 'react';
import AccountCreation from './AccountCreation';

export default class Home extends Component {
  state = {
    isAccountCreationOpen: false,
  };

  toggleModal = () => {
    this.setState({ isAccountCreationOpen: !this.state.isAccountCreationOpen });
  };

  render() {
    return (
      <div>
        <AccountCreation closeModal={this.toggleModal} isOpen={this.state.isAccountCreationOpen} />
        <button onClick={this.toggleModal}>Add Account</button>
      </div>
    );
  }
}
