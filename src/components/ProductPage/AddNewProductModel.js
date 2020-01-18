import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomInput from 'components/CustomInput'
import Button from 'components/Button'
import { price, formattedInputPrice } from 'utils/formattedNumber'
import { useSelector, useDispatch } from 'react-redux'
import { saveDraft } from 'actions/addNewProductModel'

const Container = styled.div`
  width: 940px;
  height: 700px;
  border-radius: 4px;
  overflow: scroll;
`

const TitleWrapper = styled.div`
  font-family: 'HelveticaNeue-Bold';
  font-size: 24px;
  color: white;
  width: 100%;
  height: 64px;
  background-color: black;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`

const CloseIconWrapper = styled.div`
  cursor: pointer;
`

const ContentWrapper = styled.div`
  background-color: white;
  padding: 30px;
  display: flex;
`

const LeftPart = styled.div`
  flex: 1 1 40%;
  margin-right: 30px;
`

const RightPart = styled.div`
  flex: 1 1 50%;

  .title {
    font-family: 'HelveticaNeue-Bold';
    font-size: 16px;
    color: #373a3c;
    margin-bottom: 8px;
  }
`

const ProductDescriptionWrapper = styled.div`
  margin-bottom: 20px;

  .input-name {
    margin-bottom: 8px;

    > input {
      width: 100%;
      height: 38px;
      padding: 5px 15px;
      box-sizing: border-box;
      outline: none;
      font-size: 16px;
      border: 1px solid #cccccc;
      border-radius: 4px;
    }
  }

  > textarea {
    width: 100%;
    height: 172px;
    box-sizing: border-box;
    padding: 5px 15px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
  }
`

const PriceWrapper = styled.div`
  margin-bottom: 20px;

  > .inputs-wrapper {
    display: flex;

    > *:first-child {
      margin-right: 50px;
    }
  }
`

const SpecificationWrapper = styled.div`
  margin-bottom: 30px;

  > .inputs-wrapper {
    display: flex;
    margin-bottom: 10px;

    > *:nth-child(1),
    > *:nth-child(2) {
      margin-right: 15px;
    }

    > *:nth-child(1) {
      flex: 1 1 30%;
    }

    > *:nth-child(2),
    > *:nth-child(3) {
      flex: 1 1 40%;
    }
  }
`

const BtnBlocks = styled.div`
  display: flex;
  justify-content: flex-end;

  > div:nth-child(1) {
    margin-right: 15px;
  }

  > div:nth-child(2) {
    > div {
      &:hover {
        cursor: not-allowed;
      }
    }
  }
`

const ImageUploadWrapper = styled.div`
  font-family: 'HelveticaNeue-Bold';
  font-size: 16px;
  color: #757575;
  width: 394px;
  height: 115px;
  background-color: #ebebeb;
  margin-bottom: 8px;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  .upload-icon {
  }

  > input[type='file'] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`

const UploadIcon = styled.div`
  font-size: 35px;
`

const ImageWrapper = styled.div`
  width: 100%;
`

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
    <Container ref={containerRef}>
      <TitleWrapper>
        <div>ADD NEW PRODUCT</div>
        <CloseIconWrapper onClick={closeDialog}>
          <FontAwesomeIcon icon='times' />
        </CloseIconWrapper>
      </TitleWrapper>
      <ContentWrapper>
        <LeftPart>
          <ImageUploadWrapper>
            <UploadIcon>
              <FontAwesomeIcon icon='cloud-upload-alt' />
            </UploadIcon>
            <div>Drag an image or click here to upload…</div>
            <input type='file' onChange={handleImage} />
          </ImageUploadWrapper>
          <ImageWrapper>{selectImgSrc && <img src={selectImgSrc} width='100%' />}</ImageWrapper>
        </LeftPart>
        <RightPart>
          <ProductDescriptionWrapper>
            <div className='title'>Product Description</div>
            <div className='input-name'>
              <input type='input' value={productTitle} onChange={handleChangeTitle} />
            </div>
            <textarea value={productContent} onChange={handleChangeContent} />
          </ProductDescriptionWrapper>
          <PriceWrapper>
            <div className='title'>Price</div>
            <div className='inputs-wrapper'>
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
          </PriceWrapper>
          <SpecificationWrapper>
            <div className='title'>Specification</div>
            {specificationsList.map((item, idx) => {
              return (
                <div key={idx} className='inputs-wrapper'>
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
          </SpecificationWrapper>
          <BtnBlocks>
            <div onClick={handleSaveDraft({ ...details })}>
              <Button btnText='save draft' />
            </div>
            <div>
              <Button btnText='publish' />
            </div>
          </BtnBlocks>
        </RightPart>
      </ContentWrapper>
    </Container>
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
