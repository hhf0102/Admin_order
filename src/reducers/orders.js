import createActionCreator from 'utils/createActionCreator';

const initState = {
  titleBarCheckBoxStatus: false,
  ordersDetails: [
    {
      id: 0,
      customer: 'Ian Medina',
      productList: [
        { name: 'Vestibulum.', price: 1400, amount: 1 },
        { name: 'Fusce vehicu.', price: 800, amount: 1 },
      ],
      total: 2200,
      addToCart: '2018/6/8 13:39',
      checkOut: '2018/6/8 20:23',
      address: '386 Windler Drives Apt.358',
      status: 'paid',
      isChecked: false,
    },
    {
      id: 1,
      customer: 'Manuel Stephens',
      productList: [
        { name: 'Donec facili.', price: 1400, amount: 1 },
      ],
      total: 1400,
      addToCart: '2018/6/8 13:39',
      checkOut: '2018/6/8 20:23',
      address: '531 Orval Mission Suite 134',
      status: 'paid',
      isChecked: false,
    },
    {
      id: 2,
      customer: 'Daisy Reynolds',
      productList: [
        { name: 'Curabitur lo.', price: 1400, amount: 1 },
        { name: 'Donec facili.', price: 800, amount: 1 },
        { name: 'Nam porttito.', price: 800, amount: 1 },
      ],
      total: 3000,
      addToCart: '2018/6/8 13:39',
      checkOut: '2018/6/8 20:23',
      address: '38 Juston Islands Apt. 012',
      status: 'shipping',
      isChecked: false,
    },
    {
      id: 3,
      customer: 'Daisy Reynolds',
      productList: [
        { name: 'Lorem ipsum', price: 1400, amount: 1 },
        { name: 'Nam porttito.', price: 1400, amount: 1 },
      ],
      total: 2800,
      addToCart: '2018/6/8 13:39',
      checkOut: '2018/6/8 20:23',
      address: '38 Juston Islands Apt. 012',
      status: 'shipping',
      isChecked: false,
    },
    {
      id: 4,
      customer: 'Daisy Reynolds',
      productList: [
        { name: 'Mauris non.', price: 1400, amount: 1 },
        { name: 'Vestibulum.', price: 1400, amount: 1 },
      ],
      total: 2800,
      addToCart: '2018/6/8 13:39',
      checkOut: '2018/6/8 20:23',
      address: '38 Juston Islands Apt. 012',
      status: 'done',
      isChecked: false,
    },
    {
      id: 5,
      customer: 'Daisy Reynolds',
      productList: [
        { name: 'Curabitur lo.', price: 1400, amount: 1 },
      ],
      total: 1400,
      addToCart: '2018/6/8 13:39',
      checkOut: '',
      address: '38 Juston Islands Apt. 012',
      status: 'unpaid',
      isChecked: false,
    },
  ],
};

export const CLICK_ALL_CHECKED = 'CLICK_ALL_CHECKED';
export const CLICK_CHECKED = 'CLICK_CHECKED';

export const clickAllChecked = createActionCreator(CLICK_ALL_CHECKED);
export const clickChecked = createActionCreator(CLICK_CHECKED);

export default (state = initState, action) => {
  switch (action.type) {
    case CLICK_ALL_CHECKED: return {
      ...state,
      titleBarCheckBoxStatus: !action.payload,
      ordersDetails: [
        ...state.ordersDetails.map((order) => {
          if (order.isChecked === action.payload) {
            order.isChecked = !order.isChecked;
          }
          return order;
        })
      ]
    };
    case CLICK_CHECKED: return {
      ...state,
      ordersDetails: [
        ...state.ordersDetails.map((order) => {
          if (order.id === action.payload) {
            order.isChecked = !order.isChecked;
          }
          return order;
        })
      ]
    }
      
    default:  return state;
  }
};
