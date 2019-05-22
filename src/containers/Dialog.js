import { connect } from 'react-redux';
import { getUiDialog } from 'utils/selectors';
import Dialog from 'components/Dialog';
import { closeDialog } from 'actions/ui';

const mapStateToProps = (state) => {
  return {
    dialog: getUiDialog(state),
  };
};

const mapDispatchToProps = {
  closeDialog,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
