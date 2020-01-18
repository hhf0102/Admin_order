import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'components/Checkbox'
import styled from 'styled-components'
import { thousandComma } from 'utils/formattedNumber'
import Button from 'components/Button'
import { btnItemStatus as btnDropdownList } from 'constants/changeStatus'
import cx from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { clickChecked, changeBtnStatus } from 'actions/ordersPage'

const TableWrapper = styled.table`
  width: 100%;
  border-spacing: 0;
`

const Thead = styled.thead`
  background-color: white;
  white-space: nowrap;

  th {
    padding: 10px;
    text-align: left;
  }
`

const Tbody = styled.tbody`
  font-family: 'HelveticaNeue';
  font-size: 14px;
  color: black;
  line-height: 21px;

  tr {
    &.unpaid {
      color: #9b9b9b;
    }

    &.done {
      color: #9b9b9b;
      text-decoration: line-through;
    }

    &:nth-child(even) {
      background-color: #ebebeb;
    }

    .customer {
      display: flex;

      > label {
        margin-right: 5px;
      }
    }

    .add-to-cart,
    .check-out {
      width: 90px;
    }

    .address {
      width: 135px;
    }

    .product-list {
      padding: 5px 0;
      border-bottom: 1px solid white;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }

      > div:last-child {
        display: flex;
        justify-content: space-between;

        > span:first-child {
          color: #9b9b9b;
        }
      }
    }

    > td {
      padding: 20px 16px;
      vertical-align: top;
    }
  }
`

const Table = () => {
  const dispatch = useDispatch()
  const tableHeadList = ['Customer', 'Product List', 'Total', 'Add to Cart', 'Check-out', 'Address', 'Status']
  const tableBodyList = useSelector(state => state.orders.ordersDetails)
  const handleChangeChecked = id => () => dispatch(clickChecked(id))
  const handleBtnStatus = status => () => dispatch(changeBtnStatus(status))

  const getTrStyle = status =>
    cx({
      unpaid: status === 'unpaid',
      done: status === 'done'
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
        {tableBodyList.map((body, idx) => (
          <tr key={idx} className={getTrStyle(body.status)}>
            <td className='customer'>
              <Checkbox isChecked={body.isChecked} handleChange={handleChangeChecked(body.id)} /> {body.customer}
            </td>
            <td>
              {body.productList.map((product, idx) => (
                <div key={idx} className='product-list'>
                  <div>{product.name}</div>
                  <div>
                    <span>${thousandComma(product.price)}</span>
                    <span>{product.amount}</span>
                  </div>
                </div>
              ))}
            </td>
            <td>${thousandComma(body.total)}</td>
            <td className='add-to-cart'>{body.addToCart}</td>
            <td className='check-out'>{body.checkOut}</td>
            <td className='address'>{body.address}</td>
            <td>
              <Button
                btnText={body.status}
                dropdown
                handleDropdownStatus={handleBtnStatus}
                objectId={body.id}
                btnDropdownList={btnDropdownList}
              />
            </td>
          </tr>
        ))}
      </Tbody>
    </TableWrapper>
  )
}

Table.propTypes = {
  tableBodyList: PropTypes.array,
  handleChangeChecked: PropTypes.func,
  handleBtnStatus: PropTypes.func
}

export default Table
