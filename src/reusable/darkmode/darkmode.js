import React from 'react';
import { Icon } from '@iconify/react';
import sunIcon from '@iconify-icons/feather/sun';
import moonIcon from '@iconify-icons/feather/moon';
import styles from './darkmode.module.css' // Assuming you have styles in a CSS file

function Darkmode() {
  return (
    <label className={styles.label}>
      <input className={styles.toggleCheckbox} type="checkbox" />
      <div className={styles.toggleSlot}>
        <div className={styles.sunIconWrapper}>
          <Icon icon={sunIcon} className={styles.sunIcon} />
        </div>
        <div className={styles.toggleButton}></div>
        <div className={styles.moonIconWrapper}>
          <Icon icon={moonIcon} className={styles.moonIcon} />
        </div>
      </div>
    </label>
  );
}

export default Darkmode;
