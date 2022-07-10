import React from 'react';
import NavLinks from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);
  
  const hamburgerIcon = <FontAwesomeIcon icon={faBars}
                        className="navigation__mobile--hamburger-icon"
                        onClick={() => setOpen(!open)} 
                      />

  const closeIcon = <FontAwesomeIcon icon={faXmark}
                        className="navigation__mobile--close-icon"
                        onClick={() => setOpen(!open)} 
                      />

  // const closeMobileMenu = setOpen(false);

  return (
    <div className="navigation__mobile">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </div>
  );
}

export default MobileNavigation;