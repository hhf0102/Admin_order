import createActionCreator from 'utils/createActionCreator';
import { HANDLE_ADD_NEW_SPECIFICATION, HANDLE_SAVE_DRAFT } from './index';

export const handleAddNewSpecification = createActionCreator(HANDLE_ADD_NEW_SPECIFICATION);
export const handleSaveDraft = createActionCreator(HANDLE_SAVE_DRAFT);
