import React from 'react';
import Modal from 'react-modal';
import { Form, Radio, RadioGroup, Select, Text } from 'react-form';
import { Account, Transaction } from '../models';

const accountOptions = [
  { label: 'Credit Card', value: 'cc' },
];

export default function AccountCreation({ addAccount, closeModal, isOpen }) {
  Modal.setAppElement('#app');

  const handleSubmit = (submittedValues, _, formApi) => {
    submittedValues.currentBalance = Number(submittedValues.currentBalance);
    const newAccount = Account.create(submittedValues);
    addAccount(submittedValues);

    Transaction.create({
      accountId: newAccount.id,
      amount: submittedValues.currentBalance,
      date: new Date(),
      transactionDirection: 'outflow',
      payee: 'Automatically added by GAB',
    });
    formApi.resetAll();
    closeModal();
  };

  const validateAccountName = accountName => !accountName ? 'Account name is required' : null;
  const validateAccountType = accountType => !accountType ? 'Account type is required' : null;
  const validateCurrentBalance = currentBalance => {
    if (!currentBalance) {
      return 'Current balance is required.';
    }
    else if (isNaN(currentBalance)) {
      return 'Balance must be a number.';
    }
  };
  const validateOnBudget = onBudget => onBudget === undefined ? 'Budget type is required' : null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <Form onSubmit={handleSubmit}>
        {formApi => (
          <form onSubmit={formApi.submitForm}>
            <div>
              <label>
                Account Name: <Text field="name" id="name" validate={validateAccountName} />
              </label>
              {formApi.errors && <small>{formApi.errors.accountName}</small>}
            </div>

            <div>
              <label>
                Current Balance: <Text field="currentBalance" id="currentBalance" validate={validateCurrentBalance} />
              </label>
              {formApi.errors && <small>{formApi.errors.currentBalance}</small>}
            </div>

            <div>
              <label htmlFor="accountType">Account Type: </label>
              <Select field="accountType" id="accountType" options={accountOptions} validate={validateAccountType} />
              {formApi.errors && <small>{formApi.errors.accountType}</small>}
            </div>

            <RadioGroup field="onBudget" validate={validateOnBudget}>
              <label>On Budget? <Radio value={true} name="onBudget" /></label>
              <label>Off Budget? <Radio value={false} name="onBudget" /></label>
              {formApi.errors && <small>{formApi.errors.onBudget}</small>}
            </RadioGroup>
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    </Modal>
  );
}
