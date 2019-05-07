import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from 'components/CustomDropdown';
import { btnItemStatus } from 'fakeData/itemStatus';


export default class Button extends PureComponent {
  static propTypes = {
    btnText: PropTypes.string,
    dropdown: PropTypes.bool,
    addItem: PropTypes.bool,
  }
  
  state = {
    showDropdown: false,
  };

  getBtnStyle = () => {
    const { btnText } = this.props;
    return cx({
      [styles['container']]: true,
      [styles['paid-style']]: btnText === 'paid',
      [styles['unpaid-style']]: btnText === 'unpaid',
      [styles['shipping-style']]: btnText === 'shipping',
      [styles['done-style']]: btnText === 'done',
      [styles['add-product-style']]: btnText === 'add new product',
      [styles['published-style']]: btnText === 'published',
      [styles['unpublished-style']]: btnText === 'unpublished',
    });
  }

  setBtnRef = (ref) => {
    this.btnRef = ref;
  }

  handleClickBtn = () => this.setState({ showDropdown: !this.state.showDropdown });

  dropdownClose = () => this.setState(() => ({ showDropdown: false }));

  render () {
    const { btnText, dropdown, addItem } = this.props;
    const { showDropdown } = this.state;
    return (
      <div className={this.getBtnStyle()} onClick={this.handleClickBtn} ref={this.setBtnRef}>
        <span>{btnText.toUpperCase()}</span>
        {dropdown && <FontAwesomeIcon icon="caret-down" />}
        {dropdown && showDropdown && 
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={btnItemStatus}
              inputRef={this.btnRef}
              dropdownClose={this.dropdownClose} 
            />
          </div>
        }
        {addItem && <FontAwesomeIcon icon="plus" />}
      </div>
    );
  }
}
