import React, { PureComponent } from 'react';
import styles from './product-page.module.scss';
import FadeIn from 'components/FadeIn';
import TitleBar from './TitleBar';
import Table from './Table';

export default class ProductPage extends PureComponent {
  render () {
    const {
      isAllChecked,
      handleChangeAllChecked,
      tableBodyList,
      handleChangeChecked,
      handleSelectArrow,
      handleChangeStatus,
    } = this.props;

    const tableHeadList = [
      'Product',
      'Original',
      'Discount',
      'Size',
      'Color',
      'Inventory',
      'Status',
    ];

    return (
      <FadeIn>
        <div className={styles["container"]}>
          <TitleBar
            isAllChecked={isAllChecked}
            handleChangeAllChecked={handleChangeAllChecked}
            handleSelectArrow={handleSelectArrow}
            handleChangeStatus={handleChangeStatus}
          />
          <Table
            headList={tableHeadList}
            bodyList={tableBodyList}
            handleChangeChecked={handleChangeChecked}
          />
        </div>
      </FadeIn>
    );
  }
}


