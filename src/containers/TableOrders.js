import { connect } from 'react-redux';
import { getOrdersTableList } from 'utils/selectors';
import Table from 'components/OrdersPage/Table';
import {
  clickChecked,
  changeBtnStatus,
} from 'actions/ordersPage';

const mapStateToProps = (state) => {
  return {
    tableBodyList: getOrdersTableList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeChecked: (id) => () => dispatch(clickChecked(id)),
    handleBtnStatus: (status) => () => dispatch(changeBtnStatus(status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
