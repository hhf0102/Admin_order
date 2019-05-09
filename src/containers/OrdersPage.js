import { connect } from 'react-redux';
import { getOrdersPageBodyList, getTitleBarCheckboxStatus } from 'utils/selectors';
import OrdersPage from 'components/OrdersPage';
import {
  clickAllChecked,
  clickChecked,
  selectArrowOption,
  changeStatus,
} from 'reducers/orders';

const mapStateToProps = (state) => {
  return {
    isAllChecked: getTitleBarCheckboxStatus(state),
    tableBodyList: getOrdersPageBodyList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeAllChecked: (status) => () => dispatch(clickAllChecked(status)),
    handleChangeChecked: (id) => () => dispatch(clickChecked(id)),
    handleSelectArrow: (checked) => () => dispatch(selectArrowOption(checked)),
    handleChangeStatus: (status) => () => dispatch(changeStatus(status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
