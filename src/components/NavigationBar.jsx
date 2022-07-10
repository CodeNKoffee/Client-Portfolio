import React from 'react';
import NavLogo from './assets/nav_logo.svg';
import BackgroundImg from './assets/smokie_bg.png';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const NavigationBar = () => {
  return (
    <div>
      <img src={BackgroundImg} alt="" className="bg" />
      <nav id="nav" className="nav__bar">
        <figure className="logo__wrapper">
          <img src={NavLogo} alt="Logo" className="logo" />
        </figure>
        <DesktopNavigation />
        <MobileNavigation />
      </nav>
    </div>
  );
}

export default NavigationBar;
