import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
`

const Wrapper = styled.div`
  display: flex;
  max-width: 960px;
  margin: auto;
  height: 100%;
`

const BrandWrapper = styled.div`
  > a {
    font-family: 'HelveticaNeue-Bold';
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 21px 42px 21px 0;
    cursor: pointer;
    text-decoration: none;
  }
`

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`

const ListItem = styled.li`
  > a {
    font-family: 'HelveticaNeue-Bold';
    font-size: 16px;
    color: #9b9b9b;
    display: inline-block;
    padding: 26px 40px;
    cursor: pointer;
    text-decoration: none;
  }

  &.active {
    border-bottom: 4px solid white;

    > a {
      color: white;
    }
  }
`

const Admin = styled.div`
  font-family: 'HelveticaNeue-Bold';
  font-size: 16px;
  color: white;
  padding: 26px 25px;
  margin-left: auto;
`

const NavBar = () => {
  const list = ['home', 'orders', 'product']
  const [active, setActive] = useState(list.findIndex(route => location.hash.includes(route)))

  const itemStyle = idx =>
    cx({
      active: idx === active
    })

  const handleClick = () => setActive(list.findIndex(route => location.hash.includes(route)))

  return (
    <Container>
      <Wrapper>
        <BrandWrapper onClick={handleClick}>
          <Link to='/home'>Shoptime</Link>
        </BrandWrapper>
        <ListWrapper>
          {list.map((item, idx) => (
            <ListItem key={idx} className={itemStyle(idx)} onClick={handleClick}>
              <Link to={`/${item}`}>{item.toUpperCase()}</Link>
            </ListItem>
          ))}
        </ListWrapper>
        <Admin>Admin</Admin>
      </Wrapper>
    </Container>
  )
}

NavBar.propTypes = {
  list: PropTypes.array
}

export default NavBar
