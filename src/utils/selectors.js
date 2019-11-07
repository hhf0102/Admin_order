import { createSelector } from 'reselect'

// orders
export const getOrdersTableList = createSelector(
  state => state.orders.ordersDetails,
  ordersDetails => {
    return ordersDetails
  }
)

// addNewProductModel
export const getSelectImgSrc = createSelector(
  state => state.addNewProductModel.selectImgSrc,
  src => {
    return src
  }
)

export const getProductTitle = createSelector(
  state => state.addNewProductModel.productTitle,
  title => {
    return title
  }
)

export const getProductContent = createSelector(
  state => state.addNewProductModel.productContent,
  content => {
    return content
  }
)

export const getPriceOriginal = createSelector(
  state => state.addNewProductModel.priceOriginal,
  price => {
    return price
  }
)

export const getPriceDiscount = createSelector(
  state => state.addNewProductModel.priceDiscount,
  price => {
    return price
  }
)

export const getSpecificationList = createSelector(
  state => state.addNewProductModel.specificationsList,
  list => {
    return list
  }
)
