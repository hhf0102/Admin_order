import { combineReducers } from 'redux';
import orders from './orders';
import products from './products';
import ui from './ui';

export default combineReducers({
  orders,
  products,
  ui,
});
