import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './orders-page.module.scss';
import FadeIn from 'components/FadeIn';
import TitleBar from './TitleBar';
import Table from 'components/Table';

export default class OrdersPage extends PureComponent {
  static propTypes = {
    tableBodyList: PropTypes.array,
    isAllChecked: PropTypes.bool,
    handleChangeAllChecked: PropTypes.func,
    handleChangeChecked: PropTypes.func,
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

  render () {
    const {
      itemStatusDropdown,
      selectStatusDropdown,
      editSectionDropdown,
    } = this.state;

    const {
      tableBodyList,
      isAllChecked,
      handleChangeAllChecked,
      handleChangeChecked,
    } = this.props;

    const tableHeadList = [
      'Customer',
      'Product List',
      'Total',
      'Add to Cart',
      'Check-out',
      'Address',
      'Status',
    ];

    return (
      <FadeIn>
        <div className={styles['container']}>
          <TitleBar
            itemStatusDropdown={itemStatusDropdown}
            selectStatusDropdown={selectStatusDropdown}
            editSectionDropdown={editSectionDropdown}
            handleClickItemStatus={this.handleClickItemStatus}
            handleClickSelectStatus={this.handleClickSelectStatus}
            handleClickEditSection={this.handleClickEditSection}
            itemStatusDropdownClose={this.itemStatusDropdownClose}
            selectStatusDropdownClose={this.selectStatusDropdownClose}
            isAllChecked={isAllChecked}
            handleChangeAllChecked={handleChangeAllChecked}
          />
          <div className={styles['table-wrapper']}>
            <Table
              headList={tableHeadList}
              bodyList={tableBodyList}
              handleChangeChecked={handleChangeChecked}
            />
          </div>
        </div>
      </FadeIn>
    );
  }
}
