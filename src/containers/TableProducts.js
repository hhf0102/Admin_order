import { connect } from 'react-redux';
import { getProductsTableList } from 'utils/selectors';
import Table from 'components/ProductPage/Table';
import {
  clickChecked,
  changeBtnStatus,
} from 'actions/productsPage';

const mapStateToProps = (state) => {
  return {
    tableBodyList: getProductsTableList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeChecked: (id) => () => dispatch(clickChecked(id)),
    handleBtnStatus: (status) => () => dispatch(changeBtnStatus(status)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
