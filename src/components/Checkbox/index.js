import React from 'react'
import PropTypes from 'prop-types'
// import styles from './checkbox.module.scss'
import styled from 'styled-components'
import checkmarkIcon from 'assets/images/checkmark.svg'

const CheckboxStyled = styled.label`
  > [type='checkbox'] {
    display: none;

    &:checked + i {
      background: url(${checkmarkIcon}) no-repeat center black;
    }
  }

  > i {
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;
  }
`

const Checkbox = ({ label, isChecked, handleChange }) => (
  <label>
    <CheckboxStyled>
      <input type='checkbox' checked={isChecked} onChange={handleChange} />
      <i />
    </CheckboxStyled>
    {label && <span>{label}</span>}
  </label>
)

Checkbox.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Checkbox
