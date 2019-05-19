import { connect } from 'react-redux';
import { getProductsTitleBarCheckboxStatus } from 'utils/selectors';
import TitleBar from 'components/ProductPage/TitleBar';
import {
  clickAllChecked,
  selectArrowOption,
  changeStatus,
  clickAddNewProduct,
} from 'actions/productsPage';

const mapStateToProps = (state) => {
  return {
    isAllChecked: getProductsTitleBarCheckboxStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeAllChecked: (status) => () => dispatch(clickAllChecked(status)),
    handleSelectArrow: (checked) => () => dispatch(selectArrowOption(checked)),
    handleChangeStatus: (status) => () => dispatch(changeStatus(status)),
    handleClickAddNewProduct: (dialogName) => () => dispatch(clickAddNewProduct(dialogName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
