import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import getDate from '../../main/date.selectors.js';
import * as dateActions from '../../main/date.actions.js';

const SwitchDate = ({ makeYesterday, makeTomorrow, setDate, selectDay, date }) => {
  const today = new Date();

  const handleDateChange = event => {
    const normalizedDate = event.target.value + moment(date).format(' HH:mm');
    const isSiblingDay =
      normalizedDate >= moment(makeYesterday(today)).format('YYYY-MM-DD HH:mm') &&
      normalizedDate <= moment(makeTomorrow(today)).format('YYYY-MM-DD HH:mm');
    const activeButton = document.querySelector('.days__day_active');

    if (activeButton) {
      activeButton.classList.remove('days__day_active');
    }
    if (isSiblingDay) {
      selectDay(day => day.current.dataset.date === normalizedDate);
    }

    setDate(new Date(normalizedDate));
  };

  return (
    <input
      type="date"
      className="datepicker-input"
      value={moment(date).format('YYYY-MM-DD')}
      onChange={handleDateChange}
    />
  );
};

const mapState = state => ({
  date: getDate(state),
});

const mapDispatch = {
  setDate: dateActions.setDate,
};

export default connect(mapState, mapDispatch)(SwitchDate);
