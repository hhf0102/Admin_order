import { connect } from 'react-redux';
import { getProductsTitleBarCheckboxStatus, getProductsPageBodyList } from 'utils/selectors';
import ProductPage from 'components/ProductPage';
import {
  clickAllChecked,
  clickChecked,
  selectArrowOption,
  changeStatus,
  changeBtnStatus,
  clickAddNewProduct,
} from 'actions/productsPage';

const mapStateToProps = (state) => {
  return {
    isAllChecked: getProductsTitleBarCheckboxStatus(state),
    tableBodyList: getProductsPageBodyList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeAllChecked: (status) => () => dispatch(clickAllChecked(status)),
    handleChangeChecked: (id) => () => dispatch(clickChecked(id)),
    handleSelectArrow: (checked) => () => dispatch(selectArrowOption(checked)),
    handleChangeStatus: (status) => () => dispatch(changeStatus(status)),
    handleBtnStatus: (status) => () => dispatch(changeBtnStatus(status)),
    handleClickAddNewProduct: () => dispatch(clickAddNewProduct()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
