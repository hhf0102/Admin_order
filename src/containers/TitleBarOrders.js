import { connect } from 'react-redux';
import { getOrdersTitleBarCheckboxStatus } from 'utils/selectors';
import TitleBar from 'components/OrdersPage/TitleBar';
import {
  clickAllChecked,
  selectArrowOption,
  changeStatus,
} from 'actions/ordersPage';

const mapStateToProps = (state) => {
  return {
    isAllChecked: getOrdersTitleBarCheckboxStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeAllChecked: (status) => () => dispatch(clickAllChecked(status)),
    handleSelectArrow: (checked) => () => dispatch(selectArrowOption(checked)),
    handleChangeStatus: (status) => () => dispatch(changeStatus(status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
