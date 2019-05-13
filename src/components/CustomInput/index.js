import React from 'react'
import styles from './custom-input.module.scss';

const CustomInput = ({ name, inputType }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['name-wrapper']}>{name}</div>
      <div className={styles['content-wrapper']}>
        { inputType === 'text' && <input type="text" /> }
        { inputType === 'select' &&
          <select>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
        }
      </div>
    </div>
  )
}

export default CustomInput;