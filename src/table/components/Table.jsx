import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotFound from './NotFound.jsx';
import Spinner from './Spinner.jsx';
import TableBody from './TableBody.jsx';
import getFilterText from '../../form/form.selectors.js';
import '../table.scss';

const Table = ({ flights, isFetching, filterText }) => {
  if (isFetching) {
    return <Spinner />;
  }

  if (flights.length === 0) {
    return <NotFound />;
  }

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
      <TableBody filteredFlights={filteredFlights} />
    </table>
  );
};

const mapState = state => ({
  filterText: getFilterText(state),
});

Table.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isFetching: PropTypes.bool.isRequired,
  filterText: PropTypes.string,
};

export default connect(mapState, null)(Table);
