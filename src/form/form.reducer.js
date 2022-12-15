import { SET_FILTER_TEXT } from './form.actions.js';

const initialState = { filterText: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_TEXT: {
      return {
        ...state,
        filterText: action.payload.filterText,
      };
    }
    default:
      return state;
  }
};
