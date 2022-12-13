import React from 'react';
import '../header.scss';

const Header = () => (
  <div className="header">
    <div className="header__wrapper">
      <img src="./assets/logo.svg" alt="Logo" className="header__logo" />
      <nav className="navigation">
        <div className="navigation__item">
          <a href="#" className="navigation__link">
            Пасажирам
          </a>
        </div>
        <div className="navigation__item">
          <a href="#" className="navigation__link">
            Послуги IEV
          </a>
        </div>
        <div className="navigation__item">
          <a href="#" className="navigation__link">
            VIP
          </a>
        </div>
        <div className="navigation__item">
          <a href="#" className="navigation__link">
            Партнерам
          </a>
        </div>
        <div className="navigation__item">
          <a href="#" className="navigation__link">
            Пресцентр
          </a>
        </div>
        <div className="navigation__item">
          <a href="#" className="navigation__lang">
            UA
          </a>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;
