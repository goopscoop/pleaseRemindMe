import {reset} from '../Todo/todoModule';
const TOGGLE_INPUT_MODAL = '@view/TOGGLE_INPUT_MODAL';

export const toggleInputModal = (isNew) => {
  return dispatch => {
    if (isNew) {
      dispatch(reset())
    }

    dispatch({type: TOGGLE_INPUT_MODAL});
  }
};

const initialState = {
  newTabOpen: false
}

export default views = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INPUT_MODAL:
      return {
        ...state,
        newTabOpen: !state.newTabOpen
      }
    default:
      return state;
  }
};