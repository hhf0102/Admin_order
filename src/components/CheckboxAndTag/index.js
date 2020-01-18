import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Checkbox from 'components/Checkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomDropdown from 'components/CustomDropdown'
import Tooltip from 'components/Tooltip'

const Container = styled.div`
  display: flex;
`

const CheckboxWrapper = styled.div`
  margin-right: 5px;
`

const ArrowWrapper = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  margin-right: 20px;
`

const TagWrapper = styled(ArrowWrapper)`
  margin-right: 0;
`

const DropdownWrapper = styled.div`
  position: absolute;
  top: 120%;
`

const TooltipWrapper = styled.div`
  color: white;
  font-size: 8px;
  white-space: nowrap;
  position: absolute;
  left: -200%;
  top: 125%;

  > div {
    padding: 8px;
  }
`

export default class CheckboxAndTag extends PureComponent {
  static propTypes = {
    isAllChecked: PropTypes.bool,
    handleChangeAllChecked: PropTypes.func,
    handleSelectArrow: PropTypes.func,
    handleChangeStatus: PropTypes.func,
    arrowList: PropTypes.array,
    tagList: PropTypes.array
  }

  state = {
    showArrowDropdown: false,
    showTagDropdown: false,
    showTagTooltip: false
  }

  handleClickArrow = () => {
    this.setState({
      showArrowDropdown: !this.state.showArrowDropdown
    })
  }
  handleClickTag = () => {
    this.setState({
      showTagDropdown: !this.state.showTagDropdown,
      showTagTooltip: false
    })
  }

  dropdownClose = () =>
    this.setState({
      showArrowDropdown: false,
      showTagDropdown: false
    })

  setArrowRef = ref => (this.itemStatusRef = ref)
  setTagRef = ref => (this.tagRef = ref)
  setTagDropdownRef = ref => (this.tagDropdownRef = ref)

  handleShowTagTooltip = () => {
    !this.state.showTagDropdown &&
      this.setState({
        showTagTooltip: true
      })
  }

  handleCloseTagTooltip = () => {
    this.setState({
      showTagTooltip: false
    })
  }

  render() {
    const {
      isAllChecked,
      handleChangeAllChecked,
      handleSelectArrow,
      arrowList,
      handleChangeStatus,
      tagList
    } = this.props
    const { showArrowDropdown, showTagDropdown, showTagTooltip } = this.state

    return (
      <Container>
        <CheckboxWrapper>
          <Checkbox isChecked={isAllChecked} handleChange={handleChangeAllChecked(isAllChecked)} />
        </CheckboxWrapper>
        <ArrowWrapper onClick={this.handleClickArrow} ref={this.setArrowRef}>
          <FontAwesomeIcon icon='caret-down' />
          {showArrowDropdown && (
            <DropdownWrapper>
              <CustomDropdown
                list={arrowList}
                inputRef={this.itemStatusRef}
                dropdownClose={this.dropdownClose}
                handleSelect={handleSelectArrow}
              />
            </DropdownWrapper>
          )}
        </ArrowWrapper>
        <TagWrapper
          onClick={this.handleClickTag}
          ref={this.setTagRef}
          onMouseEnter={this.handleShowTagTooltip}
          onMouseLeave={this.handleCloseTagTooltip}
        >
          <FontAwesomeIcon icon='tags' />
          {showTagDropdown && (
            <DropdownWrapper>
              <CustomDropdown
                list={tagList}
                inputRef={this.tagRef}
                dropdownClose={this.dropdownClose}
                handleSelect={handleChangeStatus}
              />
            </DropdownWrapper>
          )}
          {showTagTooltip && (
            <TooltipWrapper>
              <Tooltip content={<span>Change Status</span>} direction='bottom' />
            </TooltipWrapper>
          )}
        </TagWrapper>
      </Container>
    )
  }
}
