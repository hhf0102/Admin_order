import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox';
import styles from './table.module.scss';
import { thousandComma } from 'utils/formattedNumber';
import Button from 'components/Button';

export default class Table extends PureComponent {
  static propTypes = {
    headList: PropTypes.array,
    bodyList: PropTypes.array,
  }
  
  render () {
    const { headList, bodyList } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {headList.map((head, idx) => <th key={idx}>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {bodyList.map((body, idx) => (
            <tr key={idx}>
              <td className={styles['customer']}>
                <Checkbox /> {body.customer}
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
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
