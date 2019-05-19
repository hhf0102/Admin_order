import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox';
import styles from './table.module.scss';
import { thousandComma } from 'utils/formattedNumber';
import Button from 'components/Button';
import { btnItemStatus as btnDropdownList } from 'constants/changeStatus';
import cx from 'classnames';

export default class Table extends PureComponent {
  static propTypes = {
    tableBodyList: PropTypes.array,
    handleChangeChecked: PropTypes.func,
    handleBtnStatus: PropTypes.func,
  }

  getTrStyle = (status) => cx({
    [styles['unpaid']]: status === 'unpaid',
    [styles['done']]: status === 'done',
  })
  
  render () {
    const {
      tableBodyList,
      handleChangeChecked,
      handleBtnStatus,
    } = this.props;

    const tableHeadList = [
      'Customer',
      'Product List',
      'Total',
      'Add to Cart',
      'Check-out',
      'Address',
      'Status',
    ];

    return (
      <table>
        <thead>
          <tr>
            {tableHeadList.map((head, idx) => <th key={idx}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableBodyList.map((body, idx) => (
            <tr key={idx} className={this.getTrStyle(body.status)}>
              <td className={styles['customer']}>
                <Checkbox
                  isChecked={body.isChecked}
                  handleChange={handleChangeChecked(body.id)}
                /> {body.customer}
              </td>
              <td>
                {body.productList.map((product, idx) => (
                  <div key={idx} className={styles['product-list']}>
                    <div>{product.name}</div>
                    <div>
                      <span>${thousandComma(product.price)}</span>
                      <span>{(product.amount)}</span>
                    </div>
                  </div>
                ))}
              </td>
              <td>${thousandComma(body.total)}</td>
              <td className={styles['add-to-cart']}>{body.addToCart}</td>
              <td className={styles['check-out']}>{body.checkOut}</td>
              <td className={styles['address']}>{body.address}</td>
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
        </tbody>
      </table>
    );
  }
}
