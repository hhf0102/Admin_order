import React, { useState, useEffect, useRef } from 'react'
import styles from './add-new-product-model.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomInput from 'components/CustomInput'
import Button from 'components/Button'
import { price, formattedInputPrice } from 'utils/formattedNumber'
import { useSelector, useDispatch } from 'react-redux'
import { saveDraft } from 'actions/addNewProductModel'

const AddNewProductModel = ({ closeDialog }) => {
  const dispatch = useDispatch()
  const containerRef = useRef()

  const [selectImgSrc, setSelectImgSrc] = useState(useSelector(state => state.addNewProductModel.selectImgSrc))
  const [productTitle, setProductTitle] = useState(useSelector(state => state.addNewProductModel.productTitle))
  const [productContent, setProductContent] = useState(useSelector(state => state.addNewProductModel.productContent))
  const [priceOriginal, setPriceOriginal] = useState(useSelector(state => state.addNewProductModel.priceOriginal))
  const [priceDiscount, setPriceDiscount] = useState(useSelector(state => state.addNewProductModel.priceDiscount))
  const [specificationsList, setSpecificationsList] = useState(
    useSelector(state => state.addNewProductModel.specificationsList)
  )

  const details = {
    selectImgSrc,
    productTitle,
    productContent,
    priceOriginal,
    priceDiscount,
    specificationsList
  }

  const handleSaveDraft = detailsObj => () => dispatch(saveDraft(detailsObj))
  const handleKeyDown = e => e.key === 'Escape' && closeDialog()

  const handleImage = e => setSelectImgSrc(URL.createObjectURL(e.target.files[0]))
  const handleChangeTitle = e => setProductTitle(e.target.value)
  const handleChangeContent = e => setProductContent(e.target.value)
  const handleChangePriceOriginal = e => setPriceOriginal(formattedInputPrice(e.target.value))
  const handleChangePriceDiscount = e => setPriceDiscount(formattedInputPrice(e.target.value))

  const handleChangeSize = idx => e => {
    setSpecificationsList(
      specificationsList.map((item, index) => {
        if (idx === index) return { ...item, size: e.target.value }
        return item
      })
    )
  }

  const handleChangeColorName = idx => e => {
    setSpecificationsList(
      specificationsList.map((item, index) => {
        if (idx === index) return { ...item, color: e.target.value }
        return item
      })
    )
  }

  const handleChangeInventoryAmount = idx => e => {
    setSpecificationsList(
      specificationsList.map((item, index) => {
        if (idx === index) return { ...item, inventory: e.target.value }
        return item
      })
    )
  }

  const handleAddNewSpecification = () =>
    setSpecificationsList([...specificationsList, { size: 's', color: '', inventory: '' }])

  const renderTitle = () => {
    return (
      <div className={styles['title-wrapper']}>
        <div>ADD NEW PRODUCT</div>
        <div className={styles['close-icon-wrapper']} onClick={closeDialog}>
          <FontAwesomeIcon icon='times' />
        </div>
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div className={styles['content-wrapper']}>
        {renderLeftPart()}
        {renderRightPart()}
      </div>
    )
  }

  const renderLeftPart = () => {
    return (
      <div className={styles['left-part']}>
        <div className={styles['image-upload-wrapper']}>
          <div className={styles['upload-icon']}>
            <FontAwesomeIcon icon='cloud-upload-alt' />
          </div>
          <div>Drag an image or click here to upload…</div>
          <input type='file' onChange={handleImage} />
        </div>
        <div className={styles['image-wrapper']}>{selectImgSrc && <img src={selectImgSrc} width='100%' />}</div>
      </div>
    )
  }

  const renderRightPart = () => {
    return (
      <div className={styles['right-part']}>
        <div className={styles['product-description-wrapper']}>
          <div className={styles['title']}>Product Description</div>
          <div className={styles['input-name']}>
            <input type='input' value={productTitle} onChange={handleChangeTitle} />
          </div>
          <textarea value={productContent} onChange={handleChangeContent} />
        </div>
        <div className={styles['price-wrapper']}>
          <div className={styles['title']}>Price</div>
          <div className={styles['inputs-wrapper']}>
            <CustomInput
              name='Original'
              inputType='text'
              value={`$ ${price(priceOriginal)}`}
              handleChange={handleChangePriceOriginal}
            />
            <CustomInput
              name='Discount'
              inputType='text'
              value={`$ ${price(priceDiscount)}`}
              handleChange={handleChangePriceDiscount}
            />
          </div>
        </div>
        <div className={styles['specification-wrapper']}>
          <div className={styles['title']}>Specification</div>
          {specificationsList.map((item, idx) => {
            return (
              <div key={idx} className={styles['inputs-wrapper']}>
                <CustomInput name='Size' inputType='select' value={item.size} handleChange={handleChangeSize(idx)} />
                <CustomInput
                  name='Color'
                  inputType='text'
                  value={item.color}
                  handleChange={handleChangeColorName(idx)}
                />
                <CustomInput
                  name='Inventory'
                  inputType='text'
                  value={item.inventory}
                  handleChange={handleChangeInventoryAmount(idx)}
                />
              </div>
            )
          })}
          <div onClick={handleAddNewSpecification}>
            <Button btnText='add new specification' addItem />
          </div>
        </div>
        <div className={styles['btn-blocks']}>
          <div onClick={handleSaveDraft({ ...details })}>
            <Button btnText='save draft' />
          </div>
          <div>
            <Button btnText='publish' />
          </div>
        </div>
      </div>
    )
  }

  useEffect(
    () => {
      document.addEventListener('keydown', handleKeyDown)
    },
    () => {
      document.removeEventListener('keydown', handleKeyDown)
    },
    []
  )

  return (
    <div className={styles['container']} ref={containerRef}>
      {renderTitle()}
      {renderContent()}
    </div>
  )
}

AddNewProductModel.propTypes = {
  closeDialog: PropTypes.func,
  handleSaveDraft: PropTypes.func,
  selectImgSrc: PropTypes.string,
  productTitle: PropTypes.string,
  productContent: PropTypes.string,
  specificationsList: PropTypes.array,
  priceOriginal: PropTypes.string,
  priceDiscount: PropTypes.string
}

export default AddNewProductModel
