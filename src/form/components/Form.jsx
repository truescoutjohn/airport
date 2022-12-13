import React, { useState } from 'react';
import '../form.scss';

const Form = ({ setFilterText, filterText }) => {
  const handleChange = event => {
    setFilterText(event.target.value);
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
          value={filterText}
          onChange={handleChange}
        />
        <button type="submit" className="main__submit">
          знайти
        </button>
      </form>
    </div>
  );
};

export default Form;
