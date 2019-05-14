import {
  CLICK_ADD_NEW_PRODUCT,
  CLOSE_DIALOG,
} from 'actions';

const initialState = {
  dialog: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ADD_NEW_PRODUCT: return {
      ...state,
      dialog: action.payload.dialogName,
    };
    case CLOSE_DIALOG: return {
      ...state,
      dialog: null,
    };
    default: return state;
  }
}