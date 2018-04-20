import React, { Component } from 'react';
import AccountCreation from '../containers/AccountCreation';

export default class Sidebar extends Component {
  render() {
    return (
        <div>
          {this.props.accounts.map(account => (
            <div>
              {account.name}
            </div>
          ))}
        </div>
    );
  }
}
