// src/components/Header.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '../assets/images/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'; 


function Header() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('TR');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng.toUpperCase());
  };

  return (
    <header> 
      <nav className='row header_nav'>
        <div className='user_box col-2'>
          <a className="btn "><FontAwesomeIcon icon={faUser} /></a>
        </div>
          <div className='col-md-3 col-8 '>
            <a href="/" className="header_logo">
              <span>
                <img src={logo} alt="Logo" className="header_logo-img" />
              </span>
            </a> 
          </div>
          <div className='col-md-9 col-2 d-flex justify-content-end'>
            <div className="header_auth-buttons">
              <button className="btn giris-btn">{t('login')}</button>
              <button className="btn sigup-btn">{t('signup')}</button>
            </div>
            <div className="header_language-switch">
              <div className="dropdown">
                <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedLanguage}
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={() => changeLanguage('tr')}>Türkçe</button></li>
                  <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>English</button></li>
                </ul>
              </div>           
            </div> 
            <a className="btn btn"><FontAwesomeIcon icon={faBasketShopping} /></a>
          </div>
     
               
                
      </nav>
    </header>
  );
}

export default Header;
