import {
  CLICK_ADD_NEW_PRODUCT,
  CLOSE_DIALOG,
  HANDLE_SAVE_DRAFT,
} from 'actions';

const initialState = {
  dialog: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ADD_NEW_PRODUCT:
      return {
        ...state,
        dialog: action.payload.dialogName,
      };
    case CLOSE_DIALOG:
    case HANDLE_SAVE_DRAFT: 
      return {
        ...state,
        dialog: null,
      };
    default: return state;
  }
}