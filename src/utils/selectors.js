import { createSelector } from 'reselect';

export const getOrders = (state) => {
  return state.orders;
}

export const getOrdersPageBodyList = createSelector(
  getOrders,
  (orders) => {
    return orders && orders.ordersDetails;
  }
);

export const getTitleBarCheckboxStatus = createSelector(
  getOrders,
  (orders) => {
    return orders && orders.titleBarCheckBoxStatus;
  }
);
