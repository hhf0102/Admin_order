import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.module.scss';

const Checkbox = ({ label, isChecked, handleChange  }) => (
  <label>
    <label className={styles["container"]}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <i />
    </label>
    {label && <span>{label}</span>}
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Checkbox;
