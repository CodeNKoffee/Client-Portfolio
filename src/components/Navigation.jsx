import React from 'react';
import NavLogo from './assets/nav_logo.svg'
import BackgroundImg from './assets/smokie_bg.png'

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
      </nav>
    </div>
  );
}

export default Navigation;
