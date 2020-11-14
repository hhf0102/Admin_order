import {
  CLICK_ALL_CHECKED_ORDERS,
  CLICK_CHECKED_ORDER,
  SELECT_ARROW_OPTION_ORDER,
  CHANGE_STATUS_ORDER,
  CHANGE_BTN_STATUS_ORDER,
} from './index';
import createActionCreator from 'utils/createActionCreator';


export const clickAllChecked = createActionCreator(CLICK_ALL_CHECKED_ORDERS);
export const clickChecked = createActionCreator(CLICK_CHECKED_ORDER);
export const selectArrowOption = createActionCreator(SELECT_ARROW_OPTION_ORDER);
export const changeStatus = createActionCreator(CHANGE_STATUS_ORDER);
export const changeBtnStatus = createActionCreator(CHANGE_BTN_STATUS_ORDER);
