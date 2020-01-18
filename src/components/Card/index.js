import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContainerStyle = styled.div`
  background-color: white;
  box-shadow: 0 0 10px 5px #ebebeb;
  border-radius: 3px;
  height: 100%;
  padding: 30px 40px;
  box-sizing: border-box;
`

const Title = styled.div`
  font-family: 'HelveticaNeue-Bold';
  font-size: 24px;
  color: black;
`

export default class Card extends PureComponent {
  render() {
    const { title, content } = this.props

    return (
      <ContainerStyle>
        {title && <Title>{title}</Title>}
        {content}
      </ContainerStyle>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node
}

Card.defaultProps = {
  title: '',
  content: null
}
