import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './custom-dropdown.module.scss';
import cx from 'classnames';

export default class CustomDropdown extends PureComponent {
  static propTypes = {
    list: PropTypes.array.isRequired,
    inputRef: PropTypes.object.isRequired,
    dropdownClose: PropTypes.func,
    handleSelect: PropTypes.func,
    objectId: PropTypes.number,
  }

  state = {
    mouseEnterIndex: -1,
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.handleBlur);
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleBlur);
  }

  handleBlur = (e) => {
    const { dropdownClose, inputRef } = this.props;
    if (!inputRef.contains(e.target)) {
      dropdownClose();
    }
  }

  handleMouseEnter = (idx) => () => {
    this.setState({
      mouseEnterIndex: idx,
    });
  }

  getItemStyle = idx => {
    const { mouseEnterIndex } = this.state;
    return cx({
      [styles['item']]: true,
      [styles['highlight']]: idx === mouseEnterIndex,
    });
  }

  render () {
    const { list, handleSelect, objectId } = this.props;
    return (
      <div className={styles['list-wrapper']}>
        {list.map((item, idx) => {
          return (
            <div
              key={idx}
              className={this.getItemStyle(idx)}
              onClick={handleSelect({item, objectId})}
              onMouseEnter={this.handleMouseEnter(idx)}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}
