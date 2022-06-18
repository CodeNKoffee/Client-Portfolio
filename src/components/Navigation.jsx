import React from 'react';
import NavLogo from './assets/nav_logo.svg'
import BackgroundImg from './assets/smokie_bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <div>
      <img src={BackgroundImg} alt="" className="bg" />
      <nav id="nav" className="nav__bar">
        <figure className="logo__wrapper">
          <img src={NavLogo} alt="Logo" className="logo" />
        </figure>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#about" className="nav__link--anchor">
              About
            </a>
          </li>
          <li className="nav__link">
            <a href="#services" className="nav__link--anchor">
              Services
            </a>
          </li>
          <li className="nav__link">
            <a href="#work" className="nav__link--anchor">
              Work
            </a>
          </li>
          <li className="nav__link">
            <a href="#contact" className="nav__link--anchor">
              Contact
            </a>
          </li>
        </ul>
        <div class="nav__container--mobile">
          <button class="btn__menu" onclick="openMenu()">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div class="menu__backdrop">
            <button class="btn__menu btn__menu--close" onclick="closeMenu()">
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul class="menu__links">
              <li class="menu__list">
                <a class="menu__link" onclick="closeMenu()">ABOUT</a>
              </li>
              <li class="menu__list">
                <a href="#explore" class="menu__link" onclick="closeMenu()">EXPLORE</a>
              </li>
              <li class="menu__list">
                <a href="#journal" class="menu__link" onclick="closeMenu()">JOURNAL</a>
              </li>
              <li class="menu__list">
                <a class="menu__link" onclick="closeMenu()">SEARCH</a>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
    </div>
  );
}

export default Navigation;
