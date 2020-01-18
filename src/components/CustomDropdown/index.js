import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'

const ListWrapper = styled.div`
  display: inline-block;
  min-width: 125px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 1px 2px 10px 0 #9b9b9b;
  border-radius: 2px;
  white-space: nowrap;
`

const ItemWrapper = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: black;
  display: flex;
  justify-content: center;

  &.highlight {
    background-color: black;
    color: white;
  }

  > label {
    margin-right: 7px;
  }
`

export default class CustomDropdown extends PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired,
    inputRef: PropTypes.object.isRequired,
    dropdownClose: PropTypes.func,
    handleSelect: PropTypes.func,
    objectId: PropTypes.number
  }

  state = {
    mouseEnterIndex: -1
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleBlur)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleBlur)
  }

  handleBlur = e => {
    const { dropdownClose, inputRef } = this.props
    if (!inputRef.contains(e.target)) {
      dropdownClose()
    }
  }

  handleMouseEnter = idx => () => {
    this.setState({
      mouseEnterIndex: idx
    })
  }

  getItemStyle = idx => {
    const { mouseEnterIndex } = this.state
    return cx({
      item: true,
      highlight: idx === mouseEnterIndex
    })
  }

  render() {
    const { list, handleSelect, objectId } = this.props
    return (
      <ListWrapper>
        {list.map((item, idx) => {
          return (
            <ItemWrapper
              key={idx}
              className={this.getItemStyle(idx)}
              onClick={handleSelect({ item, objectId })}
              onMouseEnter={this.handleMouseEnter(idx)}
            >
              {item}
            </ItemWrapper>
          )
        })}
      </ListWrapper>
    )
  }
}
