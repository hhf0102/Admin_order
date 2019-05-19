import {
  HANDLE_ADD_NEW_SPECIFICATION,
  CLOSE_DIALOG,
  HANDLE_SAVE_DRAFT,
} from 'actions';

const initialState = {
  productionDescription: {},
  price: {},
  specifications: [
    { size: 's', color: '', inventory: '' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ADD_NEW_SPECIFICATION:
      return {
        ...state,
        specifications: [
          ...state.specifications,
          { size: 's', color: '', inventory: '' },
        ]
      };
    case CLOSE_DIALOG:
      return {
        ...initialState,
      };
    case HANDLE_SAVE_DRAFT:
      return {
        ...state,
      };
    default: return state;
  }
}