import { connect } from 'react-redux';
import { getOrdersPageBodyList, getOrdersTitleBarCheckboxStatus } from 'utils/selectors';
import OrdersPage from 'components/OrdersPage';
import {
  clickAllChecked,
  clickChecked,
  selectArrowOption,
  changeStatus,
  changeBtnStatus,
} from 'actions/ordersPage';

const mapStateToProps = (state) => {
  return {
    isAllChecked: getOrdersTitleBarCheckboxStatus(state),
    tableBodyList: getOrdersPageBodyList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeAllChecked: (status) => () => dispatch(clickAllChecked(status)),
    handleChangeChecked: (id) => () => dispatch(clickChecked(id)),
    handleSelectArrow: (checked) => () => dispatch(selectArrowOption(checked)),
    handleChangeStatus: (status) => () => dispatch(changeStatus(status)),
    handleBtnStatus: (status) => () => dispatch(changeBtnStatus(status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
