import createActionCreator from 'utils/createActionCreator';
import {
  CLICK_ALL_CHECKED_PRODUCTS,
  CLICK_CHECKED_PRODUCT,
  SELECT_ARROW_OPTION_PRODUCTS,
  CHANGE_STATUS_PRODUCTS,
  CHANGE_BTN_STATUS_PRODUCT,
  CLICK_ADD_NEW_PRODUCT,
} from './index';


export const clickAllChecked = createActionCreator(CLICK_ALL_CHECKED_PRODUCTS);
export const clickChecked = createActionCreator(CLICK_CHECKED_PRODUCT);
export const selectArrowOption = createActionCreator(SELECT_ARROW_OPTION_PRODUCTS);
export const changeStatus = createActionCreator(CHANGE_STATUS_PRODUCTS);
export const changeBtnStatus = createActionCreator(CHANGE_BTN_STATUS_PRODUCT);
export const clickAddNewProduct = createActionCreator(CLICK_ADD_NEW_PRODUCT);
