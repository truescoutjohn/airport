import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../toggle-links.scss';

const ToggleLinks = ({ queryParams }) => {
  const navigation = useNavigate();
  const query = queryParams === '' ? '' : `date=${queryParams}`;
  const setUrl = href => {
    if (query !== '') {
      navigation({
        pathname: href,
        'to.seacrh': '?',
        search: query,
      });
    } else {
      navigation({ pathname: href });
    }
  };

  const toggleActiveTab = event => {
    event.preventDefault();
    if (!event.target.classList.contains('links__link')) {
      return false;
    }
    const activeElement = event.target.parentElement;
    activeElement.querySelector('.links__link_active').classList.remove('links__link_active');
    activeElement.querySelector('.links__image_active').classList.remove('links__image_active');

    event.target.classList.add('links__link_active');
    event.target.querySelector('.links__image').classList.add('links__image_active');
    setUrl(event.target.getAttribute('href'));
    return true;
  };

  return (
    <div className="links">
      <Link to="/departure" className="links__link links__link_active" onClick={toggleActiveTab}>
        <img src="./assets/plane_takes_off.svg" className="links__image links__image_active" />
        Виліт
      </Link>
      <Link to="/arrival" className="links__link" onClick={toggleActiveTab}>
        <img src="./assets/plane_lands.svg" className="links__image" />
        Прибуття
      </Link>
    </div>
  );
};

export default ToggleLinks;
