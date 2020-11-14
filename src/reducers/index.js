import { combineReducers } from 'redux';
import orders from './orders';
import products from './products';
import ui from './ui';
import addNewProductModel from './addNewProductModel';

export default combineReducers({
  orders,
  products,
  ui,
  addNewProductModel,
});
