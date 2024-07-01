import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {toggleBoolean, toggleBooleanF } from '../../../features/flag/flagReducer';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png';
import './header.css';
import { useLocation } from 'react-router-dom';
import DarkMode from '../../DarkMode';

const languages = [
  { code: 'en', name: 'English', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f1ec-1f1e7.png' },
  { code: 'ru', name: 'Русский', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f1f7-1f1fa.png' },
  { code: 'hy', name: 'Հայերեն', icon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f1e6-1f1f2.png' },
];


export const Header = () => {
  const location = useLocation();
  const [theme, setTheme] = useState('light'); 
  const [aboutHovered, setAboutHovered] = useState(false); 
  const [bars, setBars] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const { t, i18n } = useTranslation();
  const flag = useSelector(state => state.flag.flag); 
  const isDarkMode = useSelector(state => state.flag.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    i18n.changeLanguage(savedLanguage);
    if (savedLanguage === 'en') {
      dispatch(toggleBooleanF()); 
    } else {
      dispatch(toggleBoolean()); 
    }
    const lang = languages.find(l => l.code === savedLanguage);
    if (lang) setSelectedLang(lang);
  }, [dispatch, i18n]);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);

    i18n.changeLanguage(lang.code); 
  localStorage.setItem('selectedLanguage', lang.code); 

  if (lang.code === 'en') {
    dispatch(toggleBooleanF()); 
  } else {
    dispatch(toggleBoolean()); 
  }
  };

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const { href } = e.target;
    window.location.href = href;
  };

  let StyleDiv = {
    a: {
      display: 'inline-block',
    }, b: {
      display: 'none',
    },
    c: {
      zIndex: '1', opacity: '1', top: '103px',
    }, d: {
      zIndex: '0', opacity: '0', top: '-300px',
    }
  };

  const toggleAboutHover = () => {
    setAboutHovered(!aboutHovered);
  };

  return (
    <div className={`header-container2 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <header style={{zIndex: location.pathname === "/" ? "0" : "1"}}>
        <div className='header-container'>
          <div className="itemLogo">
            <div className="HamburgerItem">
              <span style={!bars ? StyleDiv.a : StyleDiv.b}>
                <i onClick={() => setBars(true)} className="fa-solid fa-bars"></i>
              </span>
              <span style={bars ? StyleDiv.a : StyleDiv.b}>
                <i onClick={() => setBars(false)} className="fa-solid fa-xmark"></i>
              </span>
            </div>
            <a href="/">
              <img src={logo} alt=""/>
            </a>
          </div>
          <div className="HeaderCategory">
            <ul className="UlHeader" style={bars ? StyleDiv.c : StyleDiv.d}>
              <li><NavLink onClick={handleNavLinkClick} to='/'>{t('home')}</NavLink></li>
              {/* <li><NavLink onClick={handleNavLinkClick} to="/AboutUs">{t('about')}</NavLink></li> */}
              <li onMouseEnter={toggleAboutHover} onMouseLeave={toggleAboutHover} className='dropdown'>
                <NavLink onClick={handleNavLinkClick} to="/AboutUs" className="aboutUs">{t('about')}</NavLink>
                <i className="fa fa-angle-down" style={{color: "white", marginLeft: "5px", cursor: "pointer"}}></i>
                  <ul className="dropdown-content">
                    <li><NavLink onClick={handleNavLinkClick} to="/AboutUs">{t('About')}</NavLink></li>
                    <li><NavLink onClick={handleNavLinkClick} to="/Team">{t('team')}</NavLink></li>
                  </ul>
              </li>
              <li><NavLink onClick={handleNavLinkClick} to="/Services">{t('services')}</NavLink></li>
              <li><NavLink onClick={handleNavLinkClick} to="/Blog">{t('blog')}</NavLink></li>
              <li><NavLink onClick={handleNavLinkClick} to="/Contact">{t('contact')}</NavLink></li>
            </ul>

            <button>
              <a href="#">
                <b> {t('startProject')}</b>
              </a>
            </button>

          <div className="language-selector">
              <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
                <img src={selectedLang.icon} alt={`${selectedLang.name} Flag`} className="icon" />
                {/* <span className="language-name">{selectedLang.name}</span> */}
              </button>
              <div className={`dropdown-conten ${isOpen ? 'show' : ''}`}>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`dropdown-item ${selectedLang.code === lang.code ? 'disabled' : ''}`}
                    onClick={() => {
                      if (selectedLang.code !== lang.code) {
                        handleSelect(lang);
                      }
                    }}
                  >
                    <img src={lang.icon} alt={`${lang.name} Flag`} className="icon" />
                    <span className="language-name">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>



            {/* DARK AND LIGHT MODES */}

            {/* <div className='darkLightModesMain'>
              <div className='darkMode'>
                <i className="fa-regular fa-moon" ></i>
              </div>
              <div className='lightMode'>
              <i className="fa-regular fa-sun"></i>
              </div>
            </div> */}
            {/* <DarkMode /> */}


            
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
