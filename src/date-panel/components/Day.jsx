import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { determineDate, setSiblingDate } from '../../utils/date.utils.js';
import * as dateActions from '../../main/date.actions.js';

const translate = {
  yesterday: 'вчора',
  today: 'сьогодні',
  tomorrow: 'завтра',
};

const Day = ({ setDate, button, makeSiblingDate, nameSiblingDate, isActiveButton }) => {
  const today = new Date();
  const [showingDate, setShowingDate] = useState(null);

  const addActiveClassAccordingButton = () => {
    console.log('Findasdasdasd', isActiveButton);
    if (isActiveButton) {
      button.current.classList.add('days__day_active');
    } else {
      button.current.classList.remove('days__day_active');
    }
  };

  useEffect(() => {
    determineDate(nameSiblingDate, setShowingDate, today);
  }, []);

  useEffect(() => {
    button.current.classList.add(`days__${nameSiblingDate}`);
    addActiveClassAccordingButton();
  }, [isActiveButton]);

  const setActiveElement = event => {
    const activeElement = document.querySelector('.days__day_active');

    if (activeElement) {
      activeElement.classList.remove('days__day_active');
    }

    if (event.target.classList.contains('days__day')) {
      event.target.classList.add('days__day_active');
    } else {
      event.target.parentElement.classList.add('days__day_active');
    }
  };

  const isDayElementExist = event =>
    ['days__day', 'days__date', 'days__description'].some(cssClass =>
      event.target.classList.contains(cssClass),
    );

  const handleClickDay = (event, whenDay) => {
    if (!isDayElementExist(event)) {
      return false;
    }

    setActiveElement(event);
    setSiblingDate(whenDay, setDate, today);
    return true;
  };

  return (
    <button
      className="days__day"
      onClick={event => handleClickDay(event, nameSiblingDate)}
      data-date={moment(makeSiblingDate(today)).format('YYYY-MM-DD HH:mm')}
      ref={button}
    >
      <span className="days__date">{`${showingDate}/${today.getMonth() + 1}`}</span>
      <span className="days__description">{translate[nameSiblingDate]}</span>
    </button>
  );
};

const mapDispatch = {
  setDate: dateActions.setDate,
};

export default connect(null, mapDispatch)(Day);
