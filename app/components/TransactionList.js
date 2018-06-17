import React from 'react';

export default function TransactionList({ transactions }) {
  return (
    <div>
      {transactions.map(transaction => (
        <div key={`transaction_${transaction.id}`}>${ transaction.amount.toFixed(2)} { transaction.payee }</div>)
      )}
    </div>
  );
}
