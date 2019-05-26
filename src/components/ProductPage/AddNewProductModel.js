import React, { PureComponent } from 'react';
import styles from './add-new-product-model.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomInput from 'components/CustomInput';
import Button from 'components/Button';
import { price, formattedInputPrice } from 'utils/formattedNumber'


export default class AddNewProductModel extends PureComponent {
  static propTypes = {
    closeDialog: PropTypes.func,
    handleSaveDraft: PropTypes.func,
    selectImgSrc: PropTypes.string,
    productTitle: PropTypes.string,
    productContent: PropTypes.string,
    specificationsList: PropTypes.array,
    priceOriginal: PropTypes.string,
    priceDiscount: PropTypes.string,
  }

  state = {
    selectImgSrc: this.props.selectImgSrc,
    productTitle: this.props.productTitle,
    productContent: this.props.productContent,
    specificationsList: this.props.specificationsList,
    priceOriginal: this.props.priceOriginal,
    priceDiscount: this.props.priceDiscount,
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  setContainerRef = (ref) => this.containerRef = ref;

  handleKeyDown = (e) => e.key === 'Escape' && this.props.closeDialog();
  handleImage = (e) => {
    this.setState({
      selectImgSrc: URL.createObjectURL(e.target.files[0])
    })
  }
  
  renderTitle = () => {
    const { closeDialog } = this.props
    return (
      <div className={styles['title-wrapper']}>
        <div>ADD NEW PRODUCT</div>
        <div
          className={styles['close-icon-wrapper']}
          onClick={closeDialog}
        >
          <FontAwesomeIcon icon="times" />
        </div>
      </div>
    );
  };

  renderContent = () => {
    return (
      <div className={styles['content-wrapper']}>
        {this.renderLeftPart()}
        {this.renderRightPart()}
      </div>
    )
  };

  renderLeftPart = () => {
    const { selectImgSrc } = this.state;
    return (
      <div className={styles['left-part']}>
        <div className={styles['image-upload-wrapper']}>
          <div className={styles['upload-icon']}><FontAwesomeIcon icon="cloud-upload-alt" /></div>
          <div>Drag an image or click here to upload…</div>
          <input type="file" onChange={this.handleImage} />
        </div>
        <div className={styles['image-wrapper']}>
          {selectImgSrc && <img src={selectImgSrc} width="100%" />}
        </div>
      </div>
    );
  };

  handleAddNewSpecification = () => {
    this.setState({  
      specificationsList: [
        ...this.state.specificationsList,
        { size: 's', color: '', inventory: '' }
      ],
    })
  }

  handleChangeTitle = (e) => {
    this.setState({ productTitle: e.target.value });
  }

  handleChangeContent = (e) => {
    this.setState({ productContent: e.target.value });
  }

  handleChangePriceOriginal = (e) => {
    const price = formattedInputPrice(e.target.value);
    this.setState({ priceOriginal: price });
  }

  handleChangePriceDiscount = (e) => {
    const price = formattedInputPrice(e.target.value);
    this.setState({ priceDiscount: price });
  }

  handleChangeColorName = (idx) => (e) => {
    const { specificationsList } = this.state;
    this.setState({
      specificationsList: specificationsList.map((item, index) => {
        if (idx === index) return { ...item, color: e.target.value }
        return item;
      })
    })
  };

  handleChangeInventoryAmount = (idx) => (e) => {
    const { specificationsList } = this.state;
    this.setState({
      specificationsList: specificationsList.map((item, index) => {
        if (idx === index) return { ...item, inventory: e.target.value }
        return item;
      })
    })
  }

  handleChangeSize = (idx) => (e) => {
    const { specificationsList } = this.state;
    this.setState({
      specificationsList: specificationsList.map((item, index) => {
        if (idx === index) return { ...item, size: e.target.value }
        return item;
      })
    })
  }

  renderRightPart = () => {
    const { handleSaveDraft } = this.props;
    const {
      specificationsList,
      productTitle,
      productContent,
      priceOriginal,
      priceDiscount,
    } = this.state;
    return (
      <div className={styles['right-part']}>
        <div className={styles['product-description-wrapper']}>
          <div className={styles['title']}>Product Description</div>
          <div className={styles['input-name']}>
            <input type="input" value={productTitle} onChange={this.handleChangeTitle} />
          </div>
          <textarea value={productContent} onChange={this.handleChangeContent} />
        </div>
        <div className={styles['price-wrapper']}>
          <div className={styles['title']}>Price</div>
          <div className={styles['inputs-wrapper']}>
            <CustomInput
              name="Original"
              inputType="text"
              value={`$ ${price(priceOriginal)}`}
              handleChange={this.handleChangePriceOriginal}
            />
            <CustomInput
              name="Discount"
              inputType="text"
              value={`$ ${price(priceDiscount)}`}
              handleChange={this.handleChangePriceDiscount}
            />
          </div>
        </div>
        <div className={styles['specification-wrapper']}>
          <div className={styles['title']}>Specification</div>
          { specificationsList.map((item, idx) => {
              return (
                <div key={idx} className={styles['inputs-wrapper']}>
                  <CustomInput
                    name="Size"
                    inputType="select"
                    value={item.size}
                    handleChange={this.handleChangeSize(idx)}
                  />
                  <CustomInput
                    name="Color"
                    inputType="text"
                    value={item.color}
                    handleChange={this.handleChangeColorName(idx)}
                  />
                  <CustomInput
                    name="Inventory"
                    inputType="text"
                    value={item.inventory}
                    handleChange={this.handleChangeInventoryAmount(idx)}
                  />
                </div>
              );
            })
          }
          <div onClick={this.handleAddNewSpecification}><Button btnText="add new specification" addItem /></div>
        </div>
        <div className={styles['btn-blocks']}>
          <div onClick={handleSaveDraft({ ...this.state })}><Button btnText="save draft" /></div>
          <div><Button btnText="publish" /></div>
        </div>
      </div>
    );
  };

  render () {
    return (
      <div className={styles['container']} ref={this.setContainerRef}>
        {this.renderTitle()}
        {this.renderContent()}
      </div>
    );
  }
}
