import React, { useEffect, useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePanel from '../../date-panel/components/DatePanel.jsx';
import * as filterAction from '../../form/form.actions.js';
import * as dateActions from '../date.actions.js';
import getDate from '../date.selectors.js';
import Form from '../../form/components/Form.jsx';
import TableContainer from '../../table/components/TableContainer.jsx';
import ToggleLinks from '../../toggle-links/components/ToggleLinks.jsx';

const Main = ({ date, setDate, setFilterText }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('QWERTY', date);
  useEffect(() => {
    const queryParamDate = searchParams.get('date');
    const queryParamSearch = searchParams.get('search');
    if (queryParamDate) {
      const [day, month, year] = queryParamDate.split('-');
      setDate(
        new Date(year, month - 1, day, date.getHours(), date.getMinutes(), date.getSeconds()),
      );
    }
    if (queryParamSearch) {
      setFilterText(queryParamSearch);
    }
  }, []);

  return (
    <div className="main">
      <div className="main__wrapper">
        <Form />
        <ToggleLinks
          queryParams={searchParams.get('date') ?? ''}
          setSearchParams={setSearchParams}
        />
        <DatePanel />
        <Routes>
          <Route
            exact
            path="/"
            element={<TableContainer urlPart="departure" setSearchParams={setSearchParams} />}
          />
          <Route
            path="/departure"
            element={<TableContainer urlPart="departure" setSearchParams={setSearchParams} />}
          />
          <Route
            path="/arrival"
            element={<TableContainer urlPart="arrival" setSearchParams={setSearchParams} />}
          />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  date: getDate(state),
});

const mapDispatchToProps = dispatch => ({
  setDate: state => dispatch(dateActions.setDate(state)),
  setFilterText: state => dispatch(filterAction.setFilterText(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
