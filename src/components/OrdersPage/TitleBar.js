import React from 'react'
import PropTypes from 'prop-types'
import styles from './title-bar.module.scss'
import CheckboxAndTag from 'components/CheckboxAndTag'
import { selectStatusOrdersPage } from 'constants/selectStatus'
import { changeStatusOrdersPage } from 'constants/changeStatus'
import { useSelector, useDispatch } from 'react-redux'
import { clickAllChecked, selectArrowOption, changeStatus } from 'actions/ordersPage'

const TitleBar = () => {
  const dispatch = useDispatch()
  const isAllChecked = useSelector(state => state.orders.titleBarCheckBoxStatus)
  const handleChangeAllChecked = status => () => dispatch(clickAllChecked(status))
  const handleSelectArrow = checked => () => dispatch(selectArrowOption(checked))
  const handleChangeStatus = status => () => dispatch(changeStatus(status))

  return (
    <div className={styles['title-wrapper']}>
      <CheckboxAndTag
        isAllChecked={isAllChecked}
        handleChangeAllChecked={handleChangeAllChecked}
        handleSelectArrow={handleSelectArrow}
        handleChangeStatus={handleChangeStatus}
        arrowList={selectStatusOrdersPage}
        tagList={changeStatusOrdersPage}
      />
    </div>
  )
}

TitleBar.propTypes = {
  isAllChecked: PropTypes.bool,
  handleChangeAllChecked: PropTypes.func,
  handleSelectArrow: PropTypes.func,
  handleChangeStatus: PropTypes.func
}

export default TitleBar
