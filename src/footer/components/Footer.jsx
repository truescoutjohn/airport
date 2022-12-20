import React from 'react';
import { Link } from 'react-router-dom';
import '../footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <div className="footer__top">
        <div className="first-column">
          <h2 className="footer__heading">Пасажирам</h2>
          <nav className="navigation-info">
            <div className="navigation-info__item">
              <Link to="/schedule" className="navigation-info__link">
                Розклад рейсів
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/orders" className="navigation-info__link">
                Замовлення послуг
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/contacts" className="navigation-info__link">
                Контактна інформація
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/politics" className="navigation-info__link">
                Політика конфиденційності
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/feedback" className="navigation-info__link">
                Форма відгуків та пропозицій
              </Link>
            </div>
          </nav>
        </div>
        <div className="second-column">
          <h2 className="footer__heading">Партнерам</h2>
          <nav className="navigation-info">
            <div className="navigation-info__item">
              <Link to="/schedule" className="navigation-info__link">
                Головна
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/orders" className="navigation-info__link">
                Наземне обслуговування
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/contacts" className="navigation-info__link">
                Характеристики аеродрому
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/politics" className="navigation-info__link">
                Учбовий центр
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/feedback" className="navigation-info__link">
                Вакансії
              </Link>
            </div>
          </nav>
        </div>
        <div className="third-column">
          <h2 className="footer__heading">Пресцентр</h2>
          <nav className="navigation-info">
            <div className="navigation-info__item">
              <Link to="/schedule" className="navigation-info__link">
                Головна пресцентру
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/orders" className="navigation-info__link">
                Останні новини
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/contacts" className="navigation-info__link">
                Соціальні та артпроекти
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/politics" className="navigation-info__link">
                Фінансова звітність
              </Link>
            </div>
            <div className="navigation-info__item">
              <Link to="/feedback" className="navigation-info__link">
                Статтистика пасажиропотоку
              </Link>
            </div>
          </nav>
        </div>
        <div className="fourth-column">
          <div className="fourth-column__label-phone">Авіадовідка</div>
          <div className="fourth-column__phone">+38 (044) 500 49 73</div>
          <div className="fourth-column__label-link">Приєднуйтесь до нас:</div>
          <nav className="fourth-column__navigation">
            <div className="fourth-column__navigation-item">
              <Link className="fourth-column__navigation-link fourth-column__navigation-link_facebook"></Link>
            </div>
            <div className="fourth-column__navigation-item">
              <Link className="fourth-column__navigation-link fourth-column__navigation-link_twitter"></Link>
            </div>
            <div className="fourth-column__navigation-item">
              <Link className="fourth-column__navigation-link fourth-column__navigation-link_instagram"></Link>
            </div>
            <div className="fourth-column__navigation-item">
              <Link className="fourth-column__navigation-link fourth-column__navigation-link_youtube"></Link>
            </div>
            <div className="fourth-column__navigation-item">
              <Link className="fourth-column__navigation-link fourth-column__navigation-link_linkedin"></Link>
            </div>
          </nav>
        </div>
      </div>
      <hr className="footer__horizontal-line" />
      <div className="footer__bottom">
        <div className="left-column">
          <span className="left-column__years">&copy; 2011-2021</span>
          <span className="left-column__description">Міжнародний аеропорт "Київ"</span>
        </div>
        <div className="middle-column">
          <span className="middle-column__title">Part of Ufuture</span>
          <span className="middle-column__name">Investment Group</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
