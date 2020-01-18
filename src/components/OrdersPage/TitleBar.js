import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CheckboxAndTag from 'components/CheckboxAndTag'
import { selectStatusOrdersPage } from 'constants/selectStatus'
import { changeStatusOrdersPage } from 'constants/changeStatus'
import { useSelector, useDispatch } from 'react-redux'
import { clickAllChecked, selectArrowOption, changeStatus } from 'actions/ordersPage'

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  padding-left: 16px;
`

const TitleBar = () => {
  const dispatch = useDispatch()
  const isAllChecked = useSelector(state => state.orders.titleBarCheckBoxStatus)
  const handleChangeAllChecked = status => () => dispatch(clickAllChecked(status))
  const handleSelectArrow = checked => () => dispatch(selectArrowOption(checked))
  const handleChangeStatus = status => () => dispatch(changeStatus(status))

  return (
    <TitleWrapper>
      <CheckboxAndTag
        isAllChecked={isAllChecked}
        handleChangeAllChecked={handleChangeAllChecked}
        handleSelectArrow={handleSelectArrow}
        handleChangeStatus={handleChangeStatus}
        arrowList={selectStatusOrdersPage}
        tagList={changeStatusOrdersPage}
      />
    </TitleWrapper>
  )
}

TitleBar.propTypes = {
  isAllChecked: PropTypes.bool,
  handleChangeAllChecked: PropTypes.func,
  handleSelectArrow: PropTypes.func,
  handleChangeStatus: PropTypes.func
}

export default TitleBar
