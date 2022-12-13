import React from 'react';
import moment from 'moment';
import Spinner from './Spinner.jsx';
import '../table.scss';

const Table = ({ flights, isFetching, filterText }) => {
  if (isFetching) {
    return <Spinner />;
  }
  const getTimeFromDate = date => moment(new Date(date)).format('HH:mm');
  const filteredFlights = flights.filter(
    flight =>
      (flight['airportToID.name'] ?? flight['airportFromID.name'])
        .toLowerCase()
        .includes(filterText.toLowerCase()) ||
      flight.codeShareData[0].codeShare.toLowerCase().includes(filterText.toLowerCase()),
  );
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th>Термінал</th>
          <th>Розклад</th>
          <th>Напрямок</th>
          <th>Статус</th>
          <th>Авіакомпанія</th>
          <th>Рейс</th>
        </tr>
      </thead>
      <tbody>
        {filteredFlights.map(flight => (
          <tr key={flight.ID}>
            <td>{flight.term}</td>
            <td>
              {flight.timeDepShedule
                ? getTimeFromDate(flight.timeDepFact)
                : getTimeFromDate(flight.timeTakeofFact)}
            </td>

            <td>{flight['airportToID.name'] ?? flight['airportFromID.name']}</td>
            <td>
              {flight.timeDepFact ? 'Вилетів ' : 'Прибув '}
              {!Number.isNaN(Date.parse(flight.timeDepFact)) && flight.timeDepShedule
                ? getTimeFromDate(flight.timeDepFact)
                : getTimeFromDate(flight.timeTakeofFact)}
            </td>
            <td className="logo-wrapper">
              <img
                width="30"
                height="30"
                src={flight.airline.en.logoSmallName}
                alt="small logo company"
              />
              {flight.airline.en.name}
            </td>
            <td>{flight.codeShareData[0].codeShare}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
