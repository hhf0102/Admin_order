import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './custom-dropdown.module.scss';
import cx from 'classnames';

export default class CustomDropdown extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      mouseEnterIndex: -1,
    }
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

  handleClick = (idx) => () => this.props.dropdownClose();

  handleMouseEnter = (idx) => () => {
    this.setState({
      mouseEnterIndex: idx,
    });
  }

  getItemStyle = idx => {
    const { mouseEnterIndex, keyDownIndex, selectedItemIndex } = this.state;
    return cx({
      [styles['item']]: true,
      [styles['highlight']]: (idx === selectedItemIndex && keyDownIndex === -1 && mouseEnterIndex === -1)
        || idx === keyDownIndex
        || idx === mouseEnterIndex,
    });
  }

  setListRef = (ref) => this.listRef = ref;

  render () {
    const { list } = this.props;
    return (
      <div className={styles['container']}>
        <div className={styles['list-wrapper']} ref={this.setListRef}>
          {list.map((item, idx) => {
            return (
              <div
                key={idx}
                className={this.getItemStyle(idx)}
                onClick={this.handleClick(idx)}
                onMouseEnter={this.handleMouseEnter(idx)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

CustomDropdown.propTypes = {
  list: PropTypes.array,
  inputRef: PropTypes.object,
  dropdownClose: PropTypes.func,
}

CustomDropdown.defaultProps = {
  list: ['ExampleA', 'ExampleB', 'ExampleC'],
  inputRef: null,
  dropdownClose: null,
}
