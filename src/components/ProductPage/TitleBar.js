import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './title-bar.module.scss';
import Button from 'components/Button';
import CheckboxAndTag from 'components/CheckboxAndTag';
import { selectStatusProductPage } from 'constants/selectStatus';
import { changeStatusProductsPage } from 'constants/changeStatus';


export default class TitleBar extends PureComponent {
  static propTypes = {
    isAllChecked: PropTypes.bool,
    handleChangeAllChecked: PropTypes.func,
    handleSelectArrow: PropTypes.func,
    handleChangeStatus: PropTypes.func,
    handleClickAddNewProduct: PropTypes.func,
  }

  renderBtn = () => {
    const { handleClickAddNewProduct } = this.props
    return (
      <div className={styles['btn-wrapper']} onClick={handleClickAddNewProduct({ dialogName: 'addNewProduct' })}>
        <Button btnText="add new product" addItem />
      </div>
    );
  }

  render () {
    const {
      isAllChecked,
      handleChangeAllChecked,
      handleSelectArrow,
      handleChangeStatus,
    } = this.props;
    return (
      <div className={styles['title-wrapper']}>
        <CheckboxAndTag
          isAllChecked={isAllChecked}
          handleChangeAllChecked={handleChangeAllChecked}
          handleSelectArrow={handleSelectArrow}
          handleChangeStatus={handleChangeStatus}
          arrowList={selectStatusProductPage}
          tagList={changeStatusProductsPage}
        />
        {this.renderBtn()}
      </div>
    );
  }
}
