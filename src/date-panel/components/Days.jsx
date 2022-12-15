import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import getDate from '../../main/date.selectors.js';
import Day from './Day.jsx';

const Days = ({ selectDay, date, makeYesterday, makeTomorrow }) => {
  const [activeButton, setActiveButton] = useState(null);
  const yesterdayButton = useRef(null);
  const todayButton = useRef(null);
  const tomorrowButton = useRef(null);

  useEffect(() => {
    const selectedButton = selectDay(
      button => button.current.dataset.date === moment(date).format('YYYY-MM-DD HH:mm'),
      yesterdayButton,
      todayButton,
      tomorrowButton,
    );
    if (selectedButton) {
      setActiveButton(selectedButton.current);
    } else {
      setActiveButton(selectedButton);
    }
  }, [yesterdayButton, todayButton, tomorrowButton, date]);
  return (
    <div className="days">
      <Day
        button={yesterdayButton}
        makeSiblingDate={makeYesterday}
        nameSiblingDate="yesterday"
        date={date}
        isActiveButton={activeButton === yesterdayButton.current}
      />
      <Day
        button={todayButton}
        makeSiblingDate={(today = new Date()) => today}
        nameSiblingDate="today"
        date={date}
        isActiveButton={activeButton === todayButton.current}
      />
      <Day
        button={tomorrowButton}
        makeSiblingDate={makeTomorrow}
        nameSiblingDate="tomorrow"
        date={date}
        isActiveButton={activeButton === tomorrowButton.current}
      />
    </div>
  );
};

const mapProps = state => ({
  date: getDate(state),
});

export default connect(mapProps, null)(Days);
