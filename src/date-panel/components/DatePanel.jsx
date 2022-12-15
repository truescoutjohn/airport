import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import SwitchDate from './SwitchDate.jsx';
import Days from './Days.jsx';
import '../date-panel.scss';

const makeYesterday = today => new Date(new Date().setDate(today.getDate() - 1));
const makeTomorrow = today => new Date(new Date().setDate(today.getDate() + 1));

const DatePanel = () => {
  const selectDay = (compareDays, ...buttons) => {
    const day = buttons.find(compareDays);
    if (day) {
      day.current.classList.add('days__day_active');
    }
  };

  return (
    <div className="date-wrapper">
      <SwitchDate makeTomorrow={makeTomorrow} makeYesterday={makeYesterday} selectDay={selectDay} />
      <Days makeTomorrow={makeTomorrow} makeYesterday={makeYesterday} selectDay={selectDay} />
    </div>
  );
};

export default DatePanel;
