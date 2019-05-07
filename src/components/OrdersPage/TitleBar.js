import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './orders-page.module.scss';
import Checkbox from 'components/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomDropdown from 'components/CustomDropdown';
import selectStatus from 'fakeData/selectStatus';
import itemStatus from 'fakeData/itemStatus';
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
  }
  
  setItemStatusRef = (ref) => this.itemStatusRef = ref;
  setSelectStatusRef = (ref) => this.selectStatusRef = ref;
  setEditSectionRef = (ref) => this.editSectionRef = ref;

  renderArrow = () => {
    const { handleClickItemStatus, itemStatusDropdown, itemStatusDropdownClose } = this.props;
    return (
      <div className={styles['arrow-wrapper']} onClick={handleClickItemStatus} ref={this.setItemStatusRef}>
        <FontAwesomeIcon icon="caret-down" />
        { itemStatusDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={selectStatus}
              inputRef={this.itemStatusRef}
              dropdownClose={itemStatusDropdownClose}
            />
          </div>
        }
      </div>
    );
  };

  renderTag = () => {
    const { handleClickSelectStatus, selectStatusDropdown, selectStatusDropdownClose } = this.props;
    return (
      <div className={styles['tag-wrapper']} onClick={handleClickSelectStatus} ref={this.setSelectStatusRef}>
        <FontAwesomeIcon icon="tags" />
        { selectStatusDropdown &&
          <div className={styles['dropdown-wrapper']}>
            <CustomDropdown
              list={itemStatus}
              inputRef={this.selectStatusRef}
              dropdownClose={selectStatusDropdownClose}
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
            <Checkbox label={item} />
          </div>
        ))}
      </div>
    );
  };
  
  handle = (e) => {
    const nodeName = e.target.nodeName;
    if (e.target.textContent.includes('EDIT') || nodeName.includes('svg') || nodeName.includes('path')) {
      this.props.handleClickEditSection();
    }
  }

  renderEdit = () => {
    const { editSectionDropdown } = this.props;
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
    return (
      <div className={styles['title-wrapper']}>
        <div className={styles['checkbox-wrapper']}><Checkbox /></div>
        {this.renderArrow()}
        {this.renderTag()}
        {this.renderEdit()}
      </div>
    );
  }
}
