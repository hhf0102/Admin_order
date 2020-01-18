import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  height: 38px;
  display: inline-flex;
  border: 1px solid #cccccc;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
`

const NameWrapper = styled.div`
  font-family: 'HelveticaNeue';
  font-size: 16px;
  color: #55595c;
  flex: 1 1 50%;
  background-color: #ebebeb;
  padding: 8px 16px;
  box-sizing: border-box;
  text-align: center;
`

const ContentWrapper = styled.div`
  flex: 1 1 50%;
  > input,
  > select {
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 8px 14px;
    box-sizing: border-box;
    font-size: 14px;
  }

  > select {
    cursor: pointer;
    background-color: white;
  }
`

const CustomInput = ({ name, inputType, value, handleChange }) => {
  return (
    <Container>
      <NameWrapper>{name}</NameWrapper>
      <ContentWrapper>
        {inputType === 'text' && <input type='text' value={value} onChange={handleChange} />}
        {inputType === 'select' && (
          <select value={value} onChange={handleChange}>
            <option value='s'>S</option>
            <option value='m'>M</option>
            <option value='l'>L</option>
          </select>
        )}
      </ContentWrapper>
    </Container>
  )
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'select']).isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func
}

export default CustomInput
