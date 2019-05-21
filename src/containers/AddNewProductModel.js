import { connect } from "react-redux";
import AddNewProductModel from 'components/ProductPage/AddNewProductModel';
import { handleSaveDraft } from 'actions/addNewProductModel';
import {
  getSelectImgSrc,
  getProductTitle,
  getProductContent,
  getPriceOriginal,
  getPriceDiscount,
  getSpecificationList,
} from 'utils/selectors';

const mapStateToProps = (state) => {
  return {
    selectImgSrc: getSelectImgSrc(state),
    productTitle: getProductTitle(state),
    productContent: getProductContent(state),
    priceOriginal: getPriceOriginal(state),
    priceDiscount: getPriceDiscount(state),
    specificationsList: getSpecificationList(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSaveDraft: (detailsObj) => () => dispatch(handleSaveDraft(detailsObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProductModel);