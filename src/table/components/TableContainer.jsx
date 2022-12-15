import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import getFilterText from '../../form/form.selectors.js';
import getDate from '../../main/date.selectors.js';
import handleGetFlightRequest from '../../utils/request.utils.js';
import { setUrl, setQueryParams } from '../../utils/url.utils.js';
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
    const selectedDate = moment(date).format('DD-MM-YYYY');
    const currentDate = moment(new Date()).format('DD-MM-YYYY');

    if (date && selectedDate !== currentDate) {
      setQueryParams(filterText, date, setSearchParams);
      handleGetFlightRequest(selectedDate, urlPart, setIsFetching, setFlights, makeFlightsUnique);
    } else {
      handleGetFlightRequest(currentDate, urlPart, setIsFetching, setFlights, makeFlightsUnique);
      setUrl(filterText, navigation, location);
    }
  }, [urlPart, date, filterText]);

  return <Table flights={flights} isFetching={isFetching} />;
};

const mapState = state => ({
  filterText: getFilterText(state),
  date: getDate(state),
});

export default connect(mapState, null)(TableContainer);
