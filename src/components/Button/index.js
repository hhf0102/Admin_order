import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomDropdown from 'components/CustomDropdown'

const ButtonStyled = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  color: white;
  position: relative;
  user-select: none;

  > span {
    font-family: 'HelveticaNeue-Bold';
    font-size: 14px;
    color: white;
    display: inline-block;
    margin-right: 5px;
  }

  &.paid-style,
  &.published-style {
    background-color: #7ed321;
    border-color: #7ed321;
  }

  &.unpaid-style,
  &.unpublished-style {
    background-color: #9b9b9b;
    border-color: #9b9b9b;
  }

  &.shipping-style {
    background-color: #f5a623;
    border-color: #f5a623;
  }

  &.done-style {
    background-color: #4a90e2;
    border-color: #4a90e2;
  }

  &.add-product-style {
    background-color: black;
    border-color: black;
  }

  &.save-draft-style {
    border: 0;
    padding-left: 0;
    padding-right: 0;

    > span {
      color: #757575;
    }
  }
`

const DropdownWrapper = styled.div`
  position: absolute;
  z-index: 99999;
  top: 105%;
  left: 0;
  width: 100%;
`

export default class Button extends PureComponent {
  static propTypes = {
    btnText: PropTypes.string.isRequired,
    dropdown: PropTypes.bool,
    addItem: PropTypes.bool,
    handleDropdownStatus: PropTypes.func,
    objectId: PropTypes.number,
    btnDropdownList: PropTypes.array
  }

  state = {
    showDropdown: false
  }

  getBtnStyle = () => {
    const { btnText } = this.props
    return cx({
      container: true,
      ['paid-style']: btnText === 'paid',
      ['unpaid-style']: btnText === 'unpaid',
      ['shipping-style']: btnText === 'shipping',
      ['done-style']: btnText === 'done',
      ['add-product-style']:
        btnText === 'add new product' || btnText === 'add new specification' || btnText === 'publish',
      ['published-style']: btnText === 'published',
      ['unpublished-style']: btnText === 'unpublished',
      ['save-draft-style']: btnText === 'save draft'
    })
  }

  setBtnRef = ref => {
    this.btnRef = ref
  }

  handleClickBtn = () => this.setState({ showDropdown: !this.state.showDropdown })

  dropdownClose = () => this.setState(() => ({ showDropdown: false }))

  render() {
    const { btnText, dropdown, addItem, handleDropdownStatus, objectId, btnDropdownList } = this.props
    const { showDropdown } = this.state
    return (
      <ButtonStyled className={this.getBtnStyle()} onClick={this.handleClickBtn} ref={this.setBtnRef}>
        <span>{btnText.toUpperCase()}</span>
        {dropdown && <FontAwesomeIcon icon='caret-down' />}
        {dropdown && showDropdown && (
          <DropdownWrapper>
            <CustomDropdown
              list={btnDropdownList}
              inputRef={this.btnRef}
              dropdownClose={this.dropdownClose}
              handleSelect={handleDropdownStatus}
              objectId={objectId}
            />
          </DropdownWrapper>
        )}
        {addItem && <FontAwesomeIcon icon='plus' />}
      </ButtonStyled>
    )
  }
}
