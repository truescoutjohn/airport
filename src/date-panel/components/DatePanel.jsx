import React from 'react';
import moment from 'moment';
import '../date-panel.scss';

const makeYesterday = today => new Date(new Date().setDate(today.getDate() - 1));
const makeTomorrow = today => new Date(new Date().setDate(today.getDate() + 1));

const DatePanel = ({ date, setDate }) => {
  const today = new Date();

  const handleDateChange = event => {
    const normalizedDate = event.target.value + moment(today).format(' HH:mm');
    const isSiblingDay =
      normalizedDate >= moment(makeYesterday(today)).format('YYYY-MM-DD HH:mm') &&
      normalizedDate <= moment(makeTomorrow(today)).format('YYYY-MM-DD HH:mm');
    document.querySelector('.days__day_active').classList.remove('days__day_active');
    if (isSiblingDay) {
      [...document.querySelectorAll('.days__day')]
        .find(day => day.dataset.date === normalizedDate)
        .classList.add('days__day_active');
    }

    setDate(new Date(normalizedDate));
  };
  const handleClickDay = (event, whenDay) => {
    const isDaysElement = ['days__day', 'days__date', 'days__description'].some(cssClass =>
      event.target.classList.contains(cssClass),
    );

    if (!isDaysElement) {
      return false;
    }

    const activeElement = document.querySelector('.days__day_active');

    if (activeElement) {
      activeElement.classList.remove('days__day_active');
    }

    if (event.target.classList.contains('days__day')) {
      event.target.classList.add('days__day_active');
    } else {
      event.target.parentElement.classList.add('days__day_active');
    }
    switch (whenDay) {
      case 'yesterday':
        setDate(new Date(today.setDate(today.getDate() - 1)));
        break;
      case 'today':
        setDate(today);
        break;
      case 'tomorrow':
        setDate(new Date(today.setDate(today.getDate() + 1)));
        break;
      default:
        throw new Error('wrong when day');
    }
    return true;
  };

  return (
    <div className="date-wrapper">
      <input
        type="date"
        className="datepicker-input"
        value={moment(date).format('YYYY-MM-DD')}
        onChange={handleDateChange}
      />
      <div className="days">
        <button
          className="days__day days__yesterday"
          onClick={event => handleClickDay(event, 'yesterday')}
          data-date={moment(makeYesterday(today)).format('YYYY-MM-DD HH:mm')}
        >
          <span className="days__date">{`${today.getDate() - 1}/${today.getMonth() + 1}`}</span>
          <span className="days__description">вчора</span>
        </button>
        <button
          className="days__day days__today days__day_active"
          onClick={event => handleClickDay(event, 'today')}
          data-date={moment(today).format('YYYY-MM-DD HH:mm')}
        >
          <span className="days__date">{`${today.getDate()}/${today.getMonth() + 1}`}</span>
          <span className="days__description">сьогодні</span>
        </button>
        <button
          className="days__day days__tomorrow"
          onClick={event => handleClickDay(event, 'tomorrow')}
          data-date={moment(makeTomorrow(today)).format('YYYY-MM-DD HH:mm')}
        >
          <span className="days__date">{`${today.getDate() + 1}/${today.getMonth() + 1}`}</span>
          <span className="days__description">завтра</span>
        </button>
      </div>
    </div>
  );
};

export default DatePanel;
