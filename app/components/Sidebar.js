import React, { Component } from 'react';

const accountStyles = {
  display: 'flex',
  justifyContent: 'space-between'
};

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        {this.props.accounts.map(account => (
          <div key={account.id} style={accountStyles}>
            <div>{account.name}</div>
            <div>${account.currentBalance.toFixed(2)}</div>
          </div>
        ))}
      </div>
    );
  }
}
