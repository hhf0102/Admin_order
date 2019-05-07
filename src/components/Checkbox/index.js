import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.module.scss';

export default class Checkbox extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
  }

  static defaultProps = {
    customFunction: () => {},
  }

  state = {
    isChecked: false,
  }

  handleChange = () => {
    this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
  }

  render () {
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <label>
        <label className={styles["container"]}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleChange}
          />
          <i />
        </label>
        {label && <span>{label}</span>}
      </label>
    );
  }
}
