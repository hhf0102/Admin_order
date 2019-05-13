import React, { PureComponent } from 'react';
import styles from './add-new-product-model.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomInput from 'components/CustomInput';
import Button from 'components/Button';


export default class AddNewProductModel extends PureComponent {
  renderTitle = () => {
    return (
      <div className={styles['title-wrapper']}>
        <div>ADD NEW PRODUCT</div>
        <div className={styles['close-icon-wrapper']}><FontAwesomeIcon icon="times" /></div>
      </div>
    );
  }

  renderContent = () => {
    return (
      <div className={styles['content-wrapper']}>
        <div className={styles['left-part']}>
          <div className={styles['image-upload-wrapper']}>
            <div className={styles['upload-icon']}><FontAwesomeIcon icon="cloud-upload-alt" /></div>
            <div>Drag an image or click here to upload…</div>
          </div>
          <div className={styles['image-wrapper']}>
            image
          </div>
        </div>
        <div className={styles['right-part']}>
          <div className={styles['product-description-wrapper']}>
            <div className={styles['title']}>Product Description</div>
            <div className={styles['input-name']}><input type="input" /></div>
            <textarea />
          </div>
          <div className={styles['price-wrapper']}>
            <div className={styles['title']}>Price</div>
            <div className={styles['inputs-wrapper']}>
              <CustomInput name="Original" inputType="text" />
              <CustomInput name="Discount" inputType="text" />
            </div>
          </div>
          <div className={styles['specification-wrapper']}>
            <div className={styles['title']}>Specification</div>
            <div className={styles['inputs-wrapper']}>
              <CustomInput name="Size" inputType="select" />
              <CustomInput name="Color" inputType="text" />
              <CustomInput name="Inventory" inputType="text" />
            </div>
            <div><Button btnText="add new specification" addItem /></div>
          </div>
          <div className={styles['btn-blocks']}>
            <div><Button btnText="save draft" /></div>
            <div><Button btnText="publish" /></div>
          </div>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className={styles['container']}>
        {this.renderTitle()}
        {this.renderContent()}
      </div>
    );
  }
}
