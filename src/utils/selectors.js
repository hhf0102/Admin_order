import { createSelector } from 'reselect';

export const getOrders = (state) => {
  return state.orders;
}

export const getProducts = (state) => {
  return state.products;
}

export const getUi = (state) => {
  return state.ui;
}

export const getAddNewProductModel = (state) => {
  return state.addNewProductModel;
};

export const getDialogName = createSelector(
  getUi,
  (ui) => ui.dialog
);

export const getOrdersPageBodyList = createSelector(
  getOrders,
  (orders) => {
    return orders && orders.ordersDetails;
  }
);

export const getOrdersTitleBarCheckboxStatus = createSelector(
  getOrders,
  (orders) => {
    return orders && orders.titleBarCheckBoxStatus;
  }
);

export const getProductsPageBodyList = createSelector(
  getProducts,
  (products) => {
    return products && products.productsDetails;
  }
);

export const getProductsTitleBarCheckboxStatus = createSelector(
  getProducts,
  (products) => {
    return products && products.titleBarCheckBoxStatus;
  }
);

export const getSelectImgSrc = createSelector(
  getAddNewProductModel,
  (model) => {
    return model && model.selectImgSrc;
  }
);

export const getProductTitle = createSelector(
  getAddNewProductModel,
  (model) => {
    return model && model.productTitle;
  }
);

export const getProductContent = createSelector(
  getAddNewProductModel,
  (model) => {
    return model && model.productContent;
  }
);

export const getPriceOriginal = createSelector(
  getAddNewProductModel,
  (model) => {
    return model && model.priceOriginal;
  }
);

export const getPriceDiscount = createSelector(
  getAddNewProductModel,
  (model) => {
    return model && model.priceDiscount;
  }
);

export const getSpecificationList = createSelector(
  getAddNewProductModel,
  (model) => {
    return model && model.specificationsList;
  }
);
