import React from 'react'
import styles from './dialog.module.scss'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { closeDialog } from 'actions/ui'

const Dialog = ({ name, component: Component }) => {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.ui.dialog)
  const handleCloseDialog = () => dispatch(closeDialog())

  const dialogStyle = () => {
    return cx({
      [styles['dialog']]: true,
      [styles['show-dialog']]: dialog === name
    })
  }
  return <div className={dialogStyle()}>{dialog === name && <Component closeDialog={handleCloseDialog} />}</div>
}

Dialog.propTypes = {
  name: PropTypes.string,
  dialog: PropTypes.string,
  component: PropTypes.object,
  closeDialog: PropTypes.func
}

export default Dialog
