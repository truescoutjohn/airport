import React from 'react';
import moment from 'moment';

const getTimeFromDate = date => moment(new Date(date)).format('HH:mm');

const TableBody = ({ filteredFlights }) => (
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
);

export default TableBody;
