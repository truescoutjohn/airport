import moment from 'moment';
import { SET_DATE } from './date.actions.js';

let selectedDate;

const queryParamDate = window.location.href.split('?')[1]
  ? window.location.href
      .split('?')[1]
      .split('=')[1]
      .split('-')
      .map(stringNumber => Number.parseInt(stringNumber, 10))
  : [];

const time = moment(new Date()).format('HH:mm:ss').split(':');

if (queryParamDate.length === 0) {
  selectedDate = new Date();
} else {
  selectedDate = new Date(
    queryParamDate[2],
    queryParamDate[1] - 1,
    queryParamDate[0],
    time[0],
    time[1],
    time[2],
  );
}

export default (state = { selectedDate }, action) => {
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
