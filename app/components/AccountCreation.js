import React from 'react';
import Modal from 'react-modal';
import { Form, Radio, RadioGroup, Select, Text } from 'react-form';
import { Account } from '../models';

const accountOptions = [
  { label: 'Credit Card', value: 'cc' },
];

export default function AccountCreation({ addAccount, closeModal, isOpen }) {
  Modal.setAppElement('#app');

  const handleSubmit = (submittedValues, _, formApi) => {
    addAccount(submittedValues);
    const { accountName: name, accountType, onBudget } = submittedValues;
    Account.create({ accountType, name, onBudget });
    formApi.resetAll();
  };

  const validateAccountName = accountName => !accountName ? 'Account name is required' : null;
  const validateAccountType = accountType => !accountType ? 'Account type is required' : null;
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
            <label>
              Account Name: <Text field="accountName" id="accountName" validate={validateAccountName} />
            </label>
            {formApi.errors && <small>{formApi.errors.accountName}</small>}
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
