import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './title-bar.module.scss';
import Checkbox from 'components/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from 'components/CustomDropdown';
import { selectStatusProductPage } from 'fakeData/selectStatus';
import { itemStatusProductPage } from 'fakeData/itemStatus';
import Button from 'components/Button';

export default class TitleBar extends PureComponent {
  static propTypes = {
    isAllChecked: PropTypes.bool,
    handleChangeAllChecked: PropTypes.func,
    handleSelectArrow: PropTypes.func,
    handleChangeStatus: PropTypes.func,
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
    const {
      isAllChecked,
      handleChangeAllChecked,
    } = this.props;
    return (
      <div className={styles["checkbox-wrapper"]}>
        <Checkbox
          isChecked={isAllChecked}
          handleChange={handleChangeAllChecked(isAllChecked)}
        />
      </div>
    );
  }

  renderArrow = () => {
    const { handleSelectArrow } = this.props
    const { showArrowDropdown } = this.state;
    return (
      <div className={styles['arrow-wrapper']} onClick={this.handleClickArrow} ref={this.setArrowRef}>
        <FontAwesomeIcon icon="caret-down" />
        { showArrowDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={selectStatusProductPage}
              inputRef={this.itemStatusRef}
              dropdownClose={this.arrowDropdownClose}
              handleSelect={handleSelectArrow}
            />
          </div>
        }
      </div>
    );
  };

  renderTag = () => {
    const { handleChangeStatus } = this.props
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
              handleSelect={handleChangeStatus}
            />
          </div>
        }
      </div>
    );
  };

  renderBtn = () => {
    const { handleClickAddNewProduct } = this.props
    return (
      <div className={styles['btn-wrapper']} onClick={handleClickAddNewProduct}>
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
