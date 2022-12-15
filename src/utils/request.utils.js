import getFlights from '../gateway/flights.gateway.js';

export default (date, urlPart, setIsFetching, setFlights, makeFlightsUnique) => {
  getFlights(date).then(responseFlights => {
    setIsFetching(false);
    setFlights(makeFlightsUnique(responseFlights.body[urlPart]));
  });
};
