import React from 'react';

const accountStyles = {
  display: 'flex',
  justifyContent: 'space-between'
};

export default function Sidebar({ accounts }) {
  return (
    <div>
      {accounts.map(account => (
        <div key={`account_${account.id}`} style={accountStyles}>
          <div>{account.name}</div>
          <div>${account.currentBalance.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}
