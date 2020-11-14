import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'

const Container = styled.div`
  position: relative;
  padding: 20px 16px;
  border-radius: 3px;
  background-color: #000;

  &.top {
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }

  &.right {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -2%;
      transform: translateX(-50%) rotate(90deg);
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }

  &.bottom {
    &::after {
      content: '';
      position: absolute;
      top: -30%;
      left: 50%;
      transform: translateX(-50%) rotate(180deg);
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }

  &.left {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 102%;
      transform: translateX(-50%) rotate(270deg);
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }
`

const Tooltip = ({ content, direction }) => {
  const getTooltipStyle = () =>
    cx({
      container: true,
      [direction]: true
    })
  return <Container className={getTooltipStyle()}>{content}</Container>
}

Tooltip.propTypes = {
  content: PropTypes.node,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired
}

export default Tooltip
