import React from 'react';
import { connect } from 'react-redux';
import getFilterText from '../form.selectors.js';
import * as filterActions from '../form.actions.js';
import '../form.scss';

const Form = ({ setFilterText, filterText }) => (
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
        value={filterText}
        onChange={event => setFilterText(event.target.value)}
      />
      <button type="submit" className="main__submit">
        знайти
      </button>
    </form>
  </div>
);

const mapState = state => ({
  filterText: getFilterText(state),
});

const mapDispatch = {
  setFilterText: filterActions.setFilterText,
};

export default connect(mapState, mapDispatch)(Form);
