import { SET_DATE } from './date.actions.js';

const initialState = { selectedDate: new Date() };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE: {
      return {
        ...state,
        selectedDate: action.payload.date,
      };
    }
    default: {
      return state;
    }
  }
};
