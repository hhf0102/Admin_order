import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './orders-page.module.scss';
import cx from 'classnames';
import Checkbox from 'components/Checkbox';

export default class Section extends PureComponent {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleBlur);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleBlur);
  }

  handleBlur = (e) => {
    const { dropdownClose, inputRef } = this.props;
    if (!inputRef.contains(e.target)) {
      dropdownClose();
    }
  }

  handleClick = (idx) => () => null;

  render() {
    const { list, checkbox } = this.props;
    return (
      <div className={styles['container']}>
        <div className={styles['list-wrapper']}>
          {list.map((item, idx) => {
            return (
              <div
                key={idx}
                className={styles['item']}
                onClick={!checkbox ? this.handleClick(idx) : null}
                onMouseEnter={!checkbox ? this.handleMouseEnter(idx) : null}
              >
                {checkbox && <Checkbox />}
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  list: PropTypes.array,
  inputRef: PropTypes.object.isRequired,
  dropdownClose: PropTypes.func,
  checkbox: PropTypes.bool,
}

Section.defaultProps = {
  list: ['ExampleA', 'ExampleB', 'ExampleC'],
  inputRef: null,
  dropdownClose: null,
  checkbox: false,
}
