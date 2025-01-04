
import React from 'react';
import styles from './ActionButtons.module.css';

const ActionButtons = ({ onSave, onSubmit }) => {
  return (
    <div className={styles.actionButtonsContainer}>
      <button type="button" onClick={onSave} className={styles.saveButton}>Save</button>
      <button type="submit" className={styles.submitButton}>Submit</button>  
    </div>
  );
};

export default ActionButtons;
