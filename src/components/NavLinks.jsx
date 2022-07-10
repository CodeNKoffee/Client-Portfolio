import React from 'react';

const NavLinks = () => {
  return (
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
  );
}

export default NavLinks;
