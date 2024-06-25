import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBoolean, toggleBooleanF } from '../../../features/flag/flagReducer';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png';
import FlagArmenia from '../../../img/ArmFlag.jpg';
import FlagAmerica from '../../../img/AmFlag.jpg';
import './header.css';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const flag = useSelector(state => state.flag.flag); 
  const dispatch = useDispatch();

  const [bars, setBars] = React.useState(false);

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      if (savedLanguage === 'en') {
        dispatch(toggleBooleanF()); 
      } else {
        dispatch(toggleBoolean()); 
      }
    }
  }, [dispatch, i18n]);

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const { href } = e.target;
    window.location.href = href;
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('selectedLanguage', lng); 
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
      zIndex: '0', opacity: '0', top: '-100px',
    }
  };

  return (
    <>
      <header>
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
            <a href="#">
              <img src={logo} alt=""/>
            </a>
          </div>
          <div className="HeaderCategory">
            <ul className="UlHeader" style={bars ? StyleDiv.c : StyleDiv.d}>
              <li><NavLink onClick={handleNavLinkClick} exact to='/'>{t('home')}</NavLink></li>
              <li><NavLink onClick={handleNavLinkClick} to="/Services">{t('services')}</NavLink></li>
              <li><NavLink onClick={handleNavLinkClick} to="/AboutUs">{t('about')}</NavLink></li>
              <li><NavLink onClick={handleNavLinkClick} to="/Blog">{t('blog')}</NavLink></li>
              <li><NavLink onClick={handleNavLinkClick} to="/Pages">{t('pages')}</NavLink></li>
              <li><NavLink onClick={handleNavLinkClick} to="/Contact">{t('contact')}</NavLink></li>
              <li><NavLink onClick={handleNavLinkClick} to="/Team">{t('team')}</NavLink></li>
            </ul>

            <button>
              <a href="#">
                <b> {t('startProject')}</b>
              </a>
            </button>

            <div className="flagItem" style={{cursor: "pointer"}}>
              <p className="armFlagItem"
                 style={{ display: flag ? 'none' : 'inline' }}
                 onClick={() => {
                   dispatch(toggleBoolean());
                   changeLanguage('hy');
                 }}>
                <img src={FlagArmenia} alt="" />
              </p>
              <p className="amFlagItem" style={{ display: !flag ? 'none' : 'inline' }}
                 onClick={() => {
                   dispatch(toggleBooleanF());
                   changeLanguage('en');
                 }}>
                <img src={FlagAmerica} alt="" />
              </p>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
