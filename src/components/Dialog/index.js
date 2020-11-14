import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { closeDialog } from 'actions/ui'

const DialogWrapper = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: auto;

  &.show-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
  }
`

const Dialog = ({ name, component: Component }) => {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.ui.dialog)
  const handleCloseDialog = () => dispatch(closeDialog())

  const dialogStyle = () => {
    return cx({
      dialog: true,
      'show-dialog': dialog === name
    })
  }
  return (
    <DialogWrapper className={dialogStyle()}>
      {dialog === name && <Component closeDialog={handleCloseDialog} />}
    </DialogWrapper>
  )
}

Dialog.propTypes = {
  name: PropTypes.string,
  dialog: PropTypes.string,
  component: PropTypes.object,
  closeDialog: PropTypes.func
}

export default Dialog
