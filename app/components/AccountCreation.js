import React from 'react';
import Modal from 'react-modal';

export default function AccountCreation({ closeModal, isOpen }) {
  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <label>Account Name: <input type="text"/></label>
        <div>
          <label htmlFor="account-type">Account Type: </label>
          <select id="account-type" required>
            <option value="">Select an Account Type</option>
            <option value="CC">Credit card</option>
          </select>
        </div>
        <div>
          <label>On Budget? <input type="radio" name="onBudget" /></label>
          <label>Off Budget? <input type="radio" name="onBudget" /></label>
        </div>

      </form>
    </Modal>
  );
}
