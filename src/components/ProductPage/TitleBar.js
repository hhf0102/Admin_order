import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './product-page.module.scss';
import Checkbox from 'components/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from 'components/CustomDropdown';
import { selectStatusProductPage } from 'fakeData/selectStatus';
import { itemStatusProductPage } from 'fakeData/itemStatus';
import Button from 'components/Button';

export default class TitleBar extends PureComponent {
  static propTypes = {
    handleAllChecked: PropTypes.func,
  }
  
  state = {
    showArrowDropdown: false,
    showTagDropdown: false,
  };

  handleClickArrow = () => this.setState({ showArrowDropdown: !this.state.showArrowDropdown });
  handleClickTag = () => this.setState({ showTagDropdown: !this.state.showTagDropdown });

  arrowDropdownClose = () => this.setState(() => ({ showArrowDropdown: false }));
  tagDropdownClose = () => this.setState(() => ({ showTagDropdown: false }));

  setArrowRef = (ref) => this.itemStatusRef = ref;
  setTagRef = (ref) => this.selectStatusRef = ref;

  renderCheckbox = () => {
    return (
      <div className={styles["checkbox-wrapper"]}>
        <Checkbox customFunction={this.props.handleAllChecked} />
      </div>
    );
  }

  renderArrow = () => {
    const { showArrowDropdown } = this.state;
    return (
      <div className={styles['arrow-wrapper']} onClick={this.handleClickArrow} ref={this.setArrowRef}>
        <FontAwesomeIcon icon="caret-down" />
        {showArrowDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={selectStatusProductPage}
              inputRef={this.itemStatusRef}
              dropdownClose={this.arrowDropdownClose}
            />
          </div>
        }
      </div>
    );
  };

  renderTag = () => {
    const { showTagDropdown } = this.state;
    return (
      <div className={styles['tag-wrapper']} onClick={this.handleClickTag} ref={this.setTagRef}>
        <FontAwesomeIcon icon="tags" />
        {showTagDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={itemStatusProductPage}
              inputRef={this.selectStatusRef}
              dropdownClose={this.tagDropdownClose}
            />
          </div>
        }
      </div>
    );
  };

  renderBtn = () => {
    return (
      <div className={styles['btn-wrapper']}>
        <Button btnText="add new product" addItem />
      </div>
    );
  }

  render () {
    return (
      <div className={styles['title-wrapper']}>
        {this.renderCheckbox()}
        {this.renderArrow()}
        {this.renderTag()}
        {this.renderBtn()}
      </div>
    );
  }
}
