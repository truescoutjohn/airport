import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import filterReducer from './form/form.reducer.js';
import dateReducer from './main/date.reducer.js';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; /* eslint-disable no-underscore-dangle */

const appReducers = combineReducers({
  filter: filterReducer,
  date: dateReducer,
});

export default createStore(appReducers, composeEnhancers(applyMiddleware(thunk)));
