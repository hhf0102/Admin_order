import React, { PureComponent } from 'react';
import Checkbox from 'components/Checkbox';
import styles from './product-page.module.scss';
import { thousandComma } from 'utils/formattedNumber';
import Button from 'components/Button';
import { headList, bodyList } from 'fakeData/productPageFakeData';

export default class Table extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      itemList: [
        { checked: false },
        { checked: true },
        { checked: false },
      ],
    }
  }

  renderThead = () => {
    return (
      <thead>
        <tr>
          {headList.map((head, idx) => (
            <th key={idx}>{head}</th>
          ))}
        </tr>
      </thead>
    );
  }

  renderTbody = () => {
    return (
      <tbody>
        {bodyList.map(({ productImage, name, original, discount, information, status }, idx) => (
          <tr key={idx}>
            <td className={styles['product']}>
              <Checkbox />
              <img src={productImage} alt="not found" />
              {name}
            </td>
            <td>${thousandComma(original)}</td>
            <td>${thousandComma(discount)}</td>
            <td colSpan="3">
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
                <Button btnText={status} dropdown />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <table>
        {this.renderThead()}
        {this.renderTbody()}
      </table>
    );
  }
}