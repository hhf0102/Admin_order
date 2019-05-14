import { connect } from 'react-redux';
import { getDialogName } from 'utils/selectors';
import Dialog from 'components/Dialog';
import { closeDialog } from 'actions/ui';

const mapStateToProps = (state) => {
  return {
    dialog: getDialogName(state),
  };
};

const mapDispatchToProps = {
  closeDialog,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
