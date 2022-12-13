import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

import Table from './Table.jsx';

const TableContainer = ({ urlPart, date, setSearchParams, filterText }) => {
  const location = useLocation();
  const navigation = useNavigate();
  const [flights, setFlights] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const makeFlightsUnique = repeatedFlights =>
    repeatedFlights.reduce((acc, flight) => {
      const isContainedFlight = acc.find(
        sourceFlight =>
          sourceFlight.codeShareData[0].codeShare === flight.codeShareData[0].codeShare,
      );
      return !isContainedFlight ? acc.concat(flight) : acc;
    }, []);

  useEffect(() => {
    setIsFetching(true);
    console.log(date);
    if (date && moment(new Date()).format('DD-MM-YYYY') !== moment(date).format('DD-MM-YYYY')) {
      console.log(date);
      setSearchParams({
        date: moment(date).format('DD-MM-YYYY'),
      });

      fetch(`https://api.iev.aero/api/flights/${moment(date).format('DD-MM-YYYY')}`)
        .then(response => response.json())
        .then(responseFlights => {
          setIsFetching(false);
          setFlights(makeFlightsUnique(responseFlights.body[urlPart]));
        });
    } else {
      const newDate = moment(new Date()).format('DD-MM-YYYY');
      console.log(newDate);
      fetch(`https://api.iev.aero/api/flights/${newDate}`)
        .then(response => response.json())
        .then(responseFlights => {
          setIsFetching(false);
          setFlights(makeFlightsUnique(responseFlights.body[urlPart]));
        });

      navigation(location.pathname);
    }
  }, [urlPart, date]);

  return <Table flights={flights} isFetching={isFetching} filterText={filterText} />;
};

export default TableContainer;
