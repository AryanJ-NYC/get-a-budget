import React from 'react';
import Modal from 'react-modal';
import { Form, Radio, RadioGroup, Select, Text } from 'react-form';
import { Account } from '../models';

const accountOptions = [
  { label: 'Credit Card', value: 0 },
];

export default function AccountCreation({ closeModal, isOpen }) {
  Modal.setAppElement('#app');

  const handleSubmit = (submittedValues, e, formApi) => {
    const { accountName: name, accountType, onBudget } = submittedValues;
    Account.create({ accountType, name, onBudget });
    formApi.resetAll();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <Form onSubmit={handleSubmit}>
        {formApi => (
          <form onSubmit={formApi.submitForm}>
            <label>Account Name: <Text field="accountName" id="accountName"/></label>
            <div>
              <label htmlFor="accountType">Account Type: </label>
              <Select field="accountType" id="accountType" required options={accountOptions} />
            </div>
            <RadioGroup field="onBudget">
              {group => (
                <div>
                  <label>On Budget? <Radio group={group} value={true} name="onBudget" /></label>
                  <label>Off Budget? <Radio group={group} value={false} name="onBudget" /></label>
                </div>
              )}
            </RadioGroup>
            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    </Modal>
  );
}
