import shirt from 'assets/images/shirt.jpg';
import {
  CLICK_ALL_CHECKED_PRODUCTS,
  CLICK_CHECKED_PRODUCT,
  SELECT_ARROW_OPTION_PRODUCTS,
  CHANGE_STATUS_PRODUCTS,
  CHANGE_BTN_STATUS_PRODUCT,
  CLICK_ADD_NEW_PRODUCT,
} from 'actions';

const initState = {
  titleBarCheckBoxStatus: false,
  productsDetails: [
    {
      id: 0,
      name: 'Mauris non tem.',
      productImage: shirt,
      original: 3200,
      discount: 2800,
      information: [
        {
          size: 'L',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
        {
          size: 'M',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
        {
          size: 'S',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
      ],
      status: 'published',
      isChecked: false,
    },
    {
      id: 1,
      name: 'Curabitur lobo.',
      productImage: shirt,
      original: 3200,
      discount: 2800,
      information: [
        {
          size: 'L',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
        {
          size: 'M',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
        {
          size: 'S',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
      ],
      status: 'published',
      isChecked: false,
    },
    {
      id: 2,
      name: 'Curabitur lobo.',
      productImage: shirt,
      original: 3200,
      discount: 2800,
      information: [
        {
          size: 'L',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
        {
          size: 'M',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
        {
          size: 'S',
          color1: { color: 'Gray', inventory: 15 },
          color2: { color: 'Black', inventory: 20 },
        },
      ],
      status: 'unpublished',
      isChecked: false,
    },
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case CLICK_ALL_CHECKED_PRODUCTS: return {
      ...state,
      titleBarCheckBoxStatus: !action.payload,
      productsDetails: [
        ...state.productsDetails.map((product) => {
          if (product.isChecked === action.payload) {
            product.isChecked = !product.isChecked;
          }
          return product;
        })
      ]
    };
    case CLICK_CHECKED_PRODUCT: return {
      ...state,
      productsDetails: [
        ...state.productsDetails.map((product) => {
          if (product.id === action.payload) {
            product.isChecked = !product.isChecked;
          }
          return product;
        })
      ]
    };
    case SELECT_ARROW_OPTION_PRODUCTS: return {
      ...state,
      titleBarCheckBoxStatus: action.payload.item.toLowerCase() === 'select all' && true,
      productsDetails: [
        ...state.productsDetails.map((product) => {
          if (action.payload.item.toLowerCase() === product.status) {
            product.isChecked = true;
          } else if (action.payload.item.toLowerCase() === 'select all') {
            product.isChecked = true;
          } else if (action.payload.item.toLowerCase() === 'unselect all') {
            product.isChecked = false;
          } else {
            product.isChecked = false;
          }
          return product;
        })
      ]
    };
    case CHANGE_STATUS_PRODUCTS: return {
      ...state,
      productsDetails: [
        ...state.productsDetails.map((product) => {
          if (product.isChecked) {
            product.status = action.payload.item.toLowerCase();
          }
          return product;
        })
      ]
    };
    case CHANGE_BTN_STATUS_PRODUCT: return {
      ...state,
      productsDetails: [
        ...state.productsDetails.map((product) => {
          if (product.id === action.payload.objectId) {
            product.status = action.payload.item.toLowerCase();
          }
          return product;
        })
      ]
    };
    case CLICK_ADD_NEW_PRODUCT: return {
      ...state,
    }
    default: return state;
  }
};
