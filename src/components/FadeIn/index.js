import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
    opacity: 0;
  }

  100% {
    display: block;
    opacity: 0.98;
  }
`

const FadeInWrapper = styled.div`
  animation: ${fadeIn} 0.5s;
`

const FadeIn = ({ children }) => {
  return <FadeInWrapper>{children}</FadeInWrapper>
}

FadeIn.propTypes = {
  children: PropTypes.node
}

export default FadeIn
