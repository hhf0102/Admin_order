import React from 'react'
import styles from './custom-input.module.scss';
import PropTypes from 'prop-types';

const CustomInput = ({ name, inputType, value, handleChange }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['name-wrapper']}>{name}</div>
      <div className={styles['content-wrapper']}>
        { inputType === 'text' && <input type="text" value={value} onChange={handleChange} /> }
        { inputType === 'select' &&
          <select value={value} onChange={handleChange}>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
        }
      </div>
    </div>
  )
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'select']).isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}

export default CustomInput;