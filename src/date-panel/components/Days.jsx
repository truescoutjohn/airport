import React, { useRef, useEffect } from 'react';
import moment from 'moment';
import Day from './Day.jsx';

const Days = ({ selectDay, date, makeYesterday, makeTomorrow }) => {
  const yesterdayButton = useRef(null);
  const todayButton = useRef(null);
  const tomorrowButton = useRef(null);

  useEffect(() => {
    selectDay(
      day => day.current.dataset.date === moment(date).format('YYYY-MM-DD HH:mm'),
      yesterdayButton,
    );
  }, [yesterdayButton, todayButton, tomorrowButton]);

  return (
    <div className="days">
      <Day button={yesterdayButton} makeSiblingDate={makeYesterday} nameSiblingDate="yesterday" />
      <Day
        button={todayButton}
        makeSiblingDate={(today = new Date()) => today}
        nameSiblingDate="today"
      />
      <Day button={tomorrowButton} makeSiblingDate={makeTomorrow} nameSiblingDate="tomorrow" />
      {/* <button
        className="days__day days__today"
        onClick={event => handleClickDay(event, 'today')}
        data-date={moment(today).format('YYYY-MM-DD HH:mm')}
        ref={todayButton}
      >
        <span className="days__date">{`${today.getDate()}/${today.getMonth() + 1}`}</span>
        <span className="days__description">сьогодні</span>
      </button>
      <button
        className="days__day days__tomorrow"
        onClick={event => handleClickDay(event, 'tomorrow')}
        data-date={moment(makeTomorrow(today)).format('YYYY-MM-DD HH:mm')}
        ref={tomorrowButton}
      >
        <span className="days__date">{`${today.getDate() + 1}/${today.getMonth() + 1}`}</span>
        <span className="days__description">завтра</span>
      </button> */}
    </div>
  );
};

export default Days;
