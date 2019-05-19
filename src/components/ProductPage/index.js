import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './product-page.module.scss';
import FadeIn from 'components/FadeIn';
import TitleBar from './TitleBar';
import Table from './Table';
import AddNewProductModel from 'containers/AddNewProductModel';
import Dialog from 'containers/Dialog';

export default class ProductPage extends PureComponent {
  static propTypes = {
    isAllChecked: PropTypes.bool,
    handleChangeAllChecked: PropTypes.func,
    tableBodyList: PropTypes.array,
    handleChangeChecked: PropTypes.func,
    handleSelectArrow: PropTypes.func,
    handleChangeStatus: PropTypes.func,
    handleBtnStatus: PropTypes.func,
    handleClickAddNewProduct: PropTypes.func,
  }
  
  render () {
    const {
      isAllChecked,
      handleChangeAllChecked,
      tableBodyList,
      handleChangeChecked,
      handleSelectArrow,
      handleChangeStatus,
      handleBtnStatus,
      handleClickAddNewProduct,
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
            handleClickAddNewProduct={handleClickAddNewProduct}
          />
          <Table
            headList={tableHeadList}
            bodyList={tableBodyList}
            handleChangeChecked={handleChangeChecked}
            handleBtnStatus={handleBtnStatus}
          />
          <Dialog
            name="addNewProduct"
            component={AddNewProductModel}
          />
        </div>
      </FadeIn>
    );
  }
}


