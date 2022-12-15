import React, { useState } from 'react';
import { connect } from 'react-redux';
import getFilterText from '../form.selectors.js';
import * as filterActions from '../form.actions.js';
import '../form.scss';

const Form = ({ setFilterText }) => {
  const [currentFilterText, setCurrentFilterText] = useState('');

  const handleForm = event => {
    event.preventDefault();
    setFilterText(currentFilterText);
  };

  return (
    <div className="main__form-wrapper">
      <label className="main__heading" htmlFor="search">
        пошук рейсу
      </label>
      <form className="main__form">
        <i className="fas fa-search"></i>

        <input
          type="text"
          id="search"
          className="main__input"
          placeholder="Номер рейсу або місто"
          value={currentFilterText}
          onChange={event => setCurrentFilterText(event.target.value)}
        />
        <button type="submit" className="main__submit" onClick={handleForm}>
          знайти
        </button>
      </form>
    </div>
  );
};

const mapState = state => ({
  filterText: getFilterText(state),
});

const mapDispatch = {
  setFilterText: filterActions.setFilterText,
};

export default connect(mapState, mapDispatch)(Form);
