import React from 'react'
import PropTypes from 'prop-types'
import styles from './title-bar.module.scss'
import Button from 'components/Button'
import CheckboxAndTag from 'components/CheckboxAndTag'
import { selectStatusProductPage } from 'constants/selectStatus'
import { changeStatusProductsPage } from 'constants/changeStatus'
import { useSelector, useDispatch } from 'react-redux'
import { clickAllChecked, selectArrowOption, changeStatus, clickAddNewProduct } from 'actions/productsPage'

const TitleBar = () => {
  const dispatch = useDispatch()
  const isAllChecked = useSelector(state => state.products.titleBarCheckBoxStatus)
  const handleChangeAllChecked = status => () => dispatch(clickAllChecked(status))
  const handleSelectArrow = checked => () => dispatch(selectArrowOption(checked))
  const handleChangeStatus = status => () => dispatch(changeStatus(status))
  const handleClickAddNewProduct = dialogName => () => dispatch(clickAddNewProduct(dialogName))

  return (
    <div className={styles['title-wrapper']}>
      <CheckboxAndTag
        isAllChecked={isAllChecked}
        handleChangeAllChecked={handleChangeAllChecked}
        handleSelectArrow={handleSelectArrow}
        handleChangeStatus={handleChangeStatus}
        arrowList={selectStatusProductPage}
        tagList={changeStatusProductsPage}
      />
      <div className={styles['btn-wrapper']} onClick={handleClickAddNewProduct({ dialogName: 'addNewProduct' })}>
        <Button btnText='add new product' addItem />
      </div>
    </div>
  )
}

TitleBar.propTypes = {
  isAllChecked: PropTypes.bool,
  handleChangeAllChecked: PropTypes.func,
  handleSelectArrow: PropTypes.func,
  handleChangeStatus: PropTypes.func,
  handleClickAddNewProduct: PropTypes.func
}

export default TitleBar
