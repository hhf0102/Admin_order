import React from 'react'
import styles from './table.module.scss'
import PropTypes from 'prop-types'
import Checkbox from 'components/Checkbox'
import { thousandComma } from 'utils/formattedNumber'
import Button from 'components/Button'
import { btnDropdownStatusProductPage as btnDropdownList } from 'constants/changeStatus'
import cx from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { clickChecked, changeBtnStatus } from 'actions/productsPage'

const Table = () => {
  const dispatch = useDispatch()
  const tableBodyList = useSelector(state => state.products.productsDetails)
  const handleChangeChecked = id => () => dispatch(clickChecked(id))
  const handleBtnStatus = status => () => dispatch(changeBtnStatus(status))

  const getTrStyle = status =>
    cx({
      [styles['unpublished']]: status === 'unpublished'
    })

  const renderThead = () => {
    const tableHeadList = ['Product', 'Original', 'Discount', 'Size', 'Color', 'Inventory', 'Status']
    return (
      <thead>
        <tr>
          {tableHeadList.map((head, idx) => (
            <th key={idx}>{head}</th>
          ))}
        </tr>
      </thead>
    )
  }

  const renderTbody = () => {
    return (
      <tbody>
        {tableBodyList.map(({ id, productImage, name, original, discount, information, status, isChecked }, idx) => (
          <tr key={idx} className={getTrStyle(status)}>
            <td className={styles['product']}>
              <Checkbox isChecked={isChecked} handleChange={handleChangeChecked(id)} />
              <img src={productImage} alt='not found' />
              {name}
            </td>
            <td>${thousandComma(original)}</td>
            <td>${thousandComma(discount)}</td>
            <td colSpan='3'>
              {information.map((product, idx) => (
                <div key={idx} className={styles['information']}>
                  <div className={styles['size']}>{product.size}</div>
                  <div className={styles['color']}>
                    <div>{product.color1.color}</div>
                    <div>{product.color2.color}</div>
                  </div>
                  <div className={styles['inventory']}>
                    <div>{product.color1.inventory}</div>
                    <div>{product.color2.inventory}</div>
                  </div>
                </div>
              ))}
            </td>
            <td className={styles['status']}>
              <div className={styles['btn-wrapper']}>
                <Button
                  btnText={status}
                  dropdown
                  btnDropdownList={btnDropdownList}
                  handleDropdownStatus={handleBtnStatus}
                  objectId={id}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    )
  }

  return (
    <table>
      {renderThead()}
      {renderTbody()}
    </table>
  )
}

Table.propTypes = {
  handleChangeChecked: PropTypes.func,
  handleBtnStatus: PropTypes.func,
  tableBodyList: PropTypes.array
}

export default Table
