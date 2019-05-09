import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './orders-page.module.scss';
import Checkbox from 'components/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from 'components/CustomDropdown';
import { selectArrowStatusOrdersPage } from 'fakeData/selectStatus';
import { itemStatus } from 'fakeData/itemStatus';
import editSection from 'fakeData/editSection';
import Card from 'components/Card';

export default class TitleBar extends PureComponent {
  static propTypes = {
    handleClickItemStatus: PropTypes.func,
    itemStatusDropdown: PropTypes.bool,
    itemStatusDropdownClose: PropTypes.func,
    handleClickSelectStatus: PropTypes.func,
    selectStatusDropdown: PropTypes.bool,
    selectStatusDropdownClose: PropTypes.func,
    handleClickEditSection: PropTypes.func,
    editSectionDropdown: PropTypes.bool,
    isAllChecked: PropTypes.bool,
    handleChangeAllChecked: PropTypes.func,
  }

  state = {
    itemStatusDropdown: false,
    selectStatusDropdown: false,
    editSectionDropdown: false,
  };

  handleClickItemStatus = () => this.setState({ itemStatusDropdown: !this.state.itemStatusDropdown });
  handleClickSelectStatus = () => this.setState({ selectStatusDropdown: !this.state.selectStatusDropdown });
  handleClickEditSection = () => this.setState({ editSectionDropdown: !this.state.editSectionDropdown });

  itemStatusDropdownClose = () => this.setState(() => ({ itemStatusDropdown: false }));
  selectStatusDropdownClose = () => this.setState(() => ({ selectStatusDropdown: false }));

  
  setItemStatusRef = (ref) => this.itemStatusRef = ref;
  setSelectStatusRef = (ref) => this.selectStatusRef = ref;
  setEditSectionRef = (ref) => this.editSectionRef = ref;

  renderArrow = () => {
    const { handleSelectArrow } = this.props;
    const { itemStatusDropdown } = this.state;

    return (
      <div className={styles['arrow-wrapper']} onClick={this.handleClickItemStatus} ref={this.setItemStatusRef}>
        <FontAwesomeIcon icon="caret-down" />
        { itemStatusDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={selectArrowStatusOrdersPage}
              inputRef={this.itemStatusRef}
              dropdownClose={this.itemStatusDropdownClose}
              handleSelect={handleSelectArrow}
            />
          </div>
        }
      </div>
    );
  };

  renderTag = () => {
    const { handleChangeStatus } = this.props;
    const { selectStatusDropdown } = this.state;
    return (
      <div className={styles['tag-wrapper']} onClick={this.handleClickSelectStatus} ref={this.setSelectStatusRef}>
        <FontAwesomeIcon icon="tags" />
        { selectStatusDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={itemStatus}
              inputRef={this.selectStatusRef}
              dropdownClose={this.selectStatusDropdownClose}
              handleSelect={handleChangeStatus}
            />
          </div>
        }
      </div>
    );
  };

  editSectionContent = () => {
    return (
      <div>
        {editSection.map((item, idx) => (
          <div key={idx} className={styles['item-wrapper']}>
            <Checkbox
              label={item}
            />
          </div>
        ))}
      </div>
    );
  };
  
  handle = (e) => {
    const nodeName = e.target.nodeName;
    if (e.target.textContent.includes('EDIT') || nodeName.includes('svg') || nodeName.includes('path')) {
      this.handleClickEditSection();
    }
  }

  renderEdit = () => {
    const { editSectionDropdown } = this.state;
    return (
      <div className={styles['edit-wrapper']} onClick={this.handle} ref={this.setEditSectionRef}>
        <span>EDIT SECTION</span> <FontAwesomeIcon icon="caret-down" />
        { editSectionDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <Card containerClassName="edit-section-container" content={this.editSectionContent()} />
          </div>
        }
      </div>
    );
  }

  render () {
    const {
      isAllChecked,
      handleChangeAllChecked,
    } = this.props;

    return (
      <div className={styles['title-wrapper']}>
        <div className={styles['checkbox-wrapper']}>
          <Checkbox
            isChecked={isAllChecked}
            handleChange={handleChangeAllChecked(isAllChecked)}
          />
        </div>
        {this.renderArrow()}
        {this.renderTag()}
        {this.renderEdit()}
      </div>
    );
  }
}
