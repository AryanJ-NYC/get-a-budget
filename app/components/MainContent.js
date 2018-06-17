import React, { Component } from 'react';
import TransactionList from '../containers/TransactionList';

export default class MainContent extends Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return (
      <TransactionList />
    );
  }
}
