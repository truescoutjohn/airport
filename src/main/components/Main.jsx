import React, { useEffect, useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import DatePanel from '../../date-panel/components/DatePanel.jsx';
import Form from '../../form/components/Form.jsx';
import TableContainer from '../../table/components/TableContainer.jsx';
import ToggleLinks from '../../toggle-links/components/ToggleLinks.jsx';

const Main = () => {
  const [date, setDate] = useState(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    if (searchParams.get('date')) {
      const [day, month, year] = searchParams.get('date').split('-');
      setDate(new Date(year, month - 1, day));
    }
  }, []);

  return (
    <div className="main">
      <div className="main__wrapper">
        <Form setFilterText={setFilterText} filterText={filterText} />
        <ToggleLinks
          queryParams={searchParams.get('date') ?? ''}
          setSearchParams={setSearchParams}
        />
        <DatePanel date={date} setDate={setDate} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TableContainer
                urlPart="departure"
                date={date}
                setSearchParams={setSearchParams}
                filterText={filterText}
              />
            }
          />
          <Route
            path="/departure"
            element={
              <TableContainer
                urlPart="departure"
                date={date}
                setSearchParams={setSearchParams}
                filterText={filterText}
              />
            }
          />
          <Route
            path="/arrival"
            element={
              <TableContainer
                urlPart="arrival"
                date={date}
                setSearchParams={setSearchParams}
                filterText={filterText}
              />
            }
          />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
