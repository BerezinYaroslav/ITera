import React from 'react';
import avatar from '../../images/avatar.png';

function Header() {
  return (
    <header className="header">
      <div className="header__place-container">
        <h2 className="header__place-title">
          Воронеж, Северный
        </h2>
        <p className="header__place-subtitle">
          Филиал 1/3
        </p>
      </div>
      <input type="text" placeholder="Поиск" className="header__input" />
      <button type="button" className="header__button">
        <svg className="header__button-icon" width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.5 11C24.5 8.61305 23.5518 6.32387 21.864 4.63604C20.1761 2.94821 17.8869 2 15.5 2C13.1131 2 10.8239 2.94821 9.13604 4.63604C7.44821 6.32387 6.5 8.61305 6.5 11C6.5 21.5 2 24.5 2 24.5H29C29 24.5 24.5 21.5 24.5 11Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0948 30.5C17.8311 30.9546 17.4525 31.332 16.9971 31.5943C16.5417 31.8566 16.0254 31.9947 15.4998 31.9947C14.9742 31.9947 14.4579 31.8566 14.0024 31.5943C13.547 31.332 13.1685 30.9546 12.9048 30.5"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button type="button" className="header__button">
        <svg className="header__button-icon" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M29 14.75C29.0052 16.7298 28.5426 18.6829 27.65 20.45C26.5916 22.5677 24.9646 24.3488 22.9512 25.594C20.9377 26.8391 18.6174 27.4991 16.25 27.5C14.2702 27.5052 12.3172 27.0426 10.55 26.15L2 29L4.85 20.45C3.9574 18.6829 3.49484 16.7298 3.5 14.75C3.50092 12.3827 4.16092 10.0623 5.40608 8.04887C6.65124 6.03542 8.43238 4.40839 10.55 3.35004C12.3172 2.45744 14.2702 1.99488 16.25 2.00004H17C20.1265 2.17253 23.0796 3.49218 25.2937 5.70633C27.5079 7.92048 28.8275 10.8735 29 14V14.75Z"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="header__info-container">
        <img className="header__info-avatar" alt="фото сотрудника" src={avatar} />
        <div className="header__info-data">
          <div className="header__info-title">
            Петров Петр
          </div>
          <div className="header__info-subtitle">
            Управляющий
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
