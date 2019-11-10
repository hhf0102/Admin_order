import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './nav-bar.module.scss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const list = ['home', 'orders', 'product']
  const [active, setActive] = useState(list.findIndex(route => location.hash.includes(route)))

  const itemStyle = idx =>
    cx({
      [styles['active']]: idx === active
    })

  const handleClick = () => setActive(list.findIndex(route => location.hash.includes(route)))

  const renderBrand = () => {
    return (
      <div className={styles['brand']} onClick={handleClick}>
        <Link to='/home'>Shoptime</Link>
      </div>
    )
  }

  const renderList = () => {
    return (
      <ul className={styles['list']}>
        {list.map((item, idx) => (
          <li key={idx} className={itemStyle(idx)} onClick={handleClick}>
            <Link to={`/${item}`}>{item.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <div className={styles['container']}>
      <div className={styles['wrapper']}>
        {renderBrand()}
        {renderList()}
        <div className={styles['admin']}>Admin</div>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  list: PropTypes.array
}

export default NavBar
