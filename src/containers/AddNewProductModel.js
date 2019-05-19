import { connect } from "react-redux";
import AddNewProductModel from 'components/ProductPage/AddNewProductModel';
import { handleAddNewSpecification, handleSaveDraft } from 'actions/addNewProductModel';
import { getSpecificationList } from 'utils/selectors';

const mapStateToProps = (state) => {
  return {
    specificationList: getSpecificationList(state),
  };
};

const mapDispatchToProps = {
  handleAddNewSpecification,
  handleSaveDraft,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProductModel);