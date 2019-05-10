import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './orders-page.module.scss';
import FadeIn from 'components/FadeIn';
import TitleBar from './TitleBar';
import Table from './Table';

export default class OrdersPage extends PureComponent {
  static propTypes = {
    tableBodyList: PropTypes.array,
    isAllChecked: PropTypes.bool,
    handleChangeAllChecked: PropTypes.func,
    handleChangeChecked: PropTypes.func,
    handleSelectArrow: PropTypes.func,
    handleChangeStatus: PropTypes.func,
    handleBtnStatus: PropTypes.func,
  }

  render () {
    const {
      tableBodyList,
      isAllChecked,
      handleChangeAllChecked,
      handleChangeChecked,
      handleSelectArrow,
      handleChangeStatus,
      handleBtnStatus,
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
            isAllChecked={isAllChecked}
            handleChangeAllChecked={handleChangeAllChecked}
            handleSelectArrow={handleSelectArrow}
            handleChangeStatus={handleChangeStatus}
          />
          <div className={styles['table-wrapper']}>
            <Table
              headList={tableHeadList}
              bodyList={tableBodyList}
              handleChangeChecked={handleChangeChecked}
              handleBtnStatus={handleBtnStatus}
            />
          </div>
        </div>
      </FadeIn>
    );
  }
}
