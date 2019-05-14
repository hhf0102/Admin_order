import React, { PureComponent } from 'react';
import styles from './dialog.module.scss';
import cx from 'classnames';

export default class Dialog extends PureComponent {
  dialogStyle = () => {
    const { name, dialog } = this.props;
    return cx({
      [styles['dialog']]: true,
      [styles['show-dialog']]: dialog === name,
    });
  }
  render () {
    const {
      component: Component,
      name,
      dialog,
      closeDialog
    } = this.props;
    return (
      <div className={this.dialogStyle()}>
        {dialog === name && <Component closeDialog={closeDialog} />}
      </div>
    )
  }
}
