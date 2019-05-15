import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './nav-bar.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';

export default class NavBar extends PureComponent {
  static propTypes = {
    list: PropTypes.array,
  }
  
  state = {
    active: 0,
  }

  static defaultProps = {
    list: ['home', 'orders', 'product'],
  }

  handleClick = (idx) => () => {
    this.setState({
      active: idx,
    });
  }

  itemStyle = (idx) => cx({
    [styles['active']]: this.state.active === idx,
  })

  renderBrand = () => {
    return (
      <div className={styles['brand']} onClick={this.handleClick(0)}>
        <Link to="/home">Shoptime</Link>
      </div>
    );
  }

  renderList = () => {
    const { list } = this.props;
    return (
      <ul className={styles['list']}>
        {list.map((item, idx) => (
          <li key={idx} className={this.itemStyle(idx)} onClick={this.handleClick(idx)}>
            <Link to={`/${item}`}>{item.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className={styles['container']}>
        <div className={styles['wrapper']}>
          {this.renderBrand()}
          {this.renderList()}
          <div className={styles['admin']}>Admin</div>
        </div>
      </div>
    );
  }
}
