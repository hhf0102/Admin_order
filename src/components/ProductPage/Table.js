import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Checkbox from 'components/Checkbox'
import { thousandComma } from 'utils/formattedNumber'
import Button from 'components/Button'
import { btnDropdownStatusProductPage as btnDropdownList } from 'constants/changeStatus'
import cx from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { clickChecked, changeBtnStatus } from 'actions/productsPage'

const TableWrapper = styled.table`
  width: 100%;
`

const Thead = styled.thead`
  background-color: white;
  white-space: nowrap;

  th {
    padding: 10px;
    text-align: center;
  }
`

const Tbody = styled.tbody`
  font-family: 'HelveticaNeue';
  font-size: 14px;
  color: black;
  line-height: 21px;

  tr {
    &.unpublished {
      color: #9b9b9b;
    }

    &:nth-child(even) {
      background-color: #ebebeb;
    }

    > td {
      padding: 20px 16px;
      vertical-align: baseline;
      text-align: center;
    }

    .status {
      vertical-align: bottom;

      .btn-wrapper {
        box-sizing: border-box;
        width: 150px;
        margin: auto;
      }
    }
  }
`

const Product = styled.td`
  display: flex;
  align-items: center;

  > label {
    margin-right: 5px;
  }

  > img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`

const Information = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid white;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  .size {
    width: 10px;
    margin-left: 13px;
    margin-right: 45px;
  }

  .color {
    display: flex;
    flex-direction: column;
    margin-right: 55px;
    text-align: left;
  }
`

const Table = () => {
  const dispatch = useDispatch()
  const tableBodyList = useSelector(state => state.products.productsDetails)
  const handleChangeChecked = id => () => dispatch(clickChecked(id))
  const handleBtnStatus = status => () => dispatch(changeBtnStatus(status))
  const tableHeadList = ['Product', 'Original', 'Discount', 'Size', 'Color', 'Inventory', 'Status']

  const getTrStyle = status =>
    cx({
      unpublished: status === 'unpublished'
    })

  return (
    <TableWrapper>
      <Thead>
        <tr>
          {tableHeadList.map((head, idx) => (
            <th key={idx}>{head}</th>
          ))}
        </tr>
      </Thead>
      <Tbody>
        {tableBodyList.map(({ id, productImage, name, original, discount, information, status, isChecked }, idx) => (
          <tr key={idx} className={getTrStyle(status)}>
            <Product>
              <Checkbox isChecked={isChecked} handleChange={handleChangeChecked(id)} />
              <img src={productImage} alt='not found' />
              {name}
            </Product>
            <td>${thousandComma(original)}</td>
            <td>${thousandComma(discount)}</td>
            <td colSpan='3'>
              {information.map((product, idx) => (
                <Information key={idx}>
                  <div className='size'>{product.size}</div>
                  <div className='color'>
                    <div>{product.color1.color}</div>
                    <div>{product.color2.color}</div>
                  </div>
                  <div className='inventory'>
                    <div>{product.color1.inventory}</div>
                    <div>{product.color2.inventory}</div>
                  </div>
                </Information>
              ))}
            </td>
            <td className='status'>
              <div className='btn-wrapper'>
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
      </Tbody>
    </TableWrapper>
  )
}

Table.propTypes = {
  handleChangeChecked: PropTypes.func,
  handleBtnStatus: PropTypes.func,
  tableBodyList: PropTypes.array
}

export default Table
