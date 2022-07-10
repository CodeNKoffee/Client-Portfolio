import React from 'react';
import { motion } from 'framer-motion';

const NavLinks = (props) => {
  const animateFrom = {opacity: 0, y: 40}
  const animateTo = {opacity: 1, y: 0}

  return (
    <ul className="nav__links">
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.25}}
        className="nav__link" onClick={() => props.isMobile && props.setOpen(false)}
      >
        <a href="#about" className="nav__link--anchor">
          About
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.35}}
        className="nav__link" onClick={() => props.isMobile && props.setOpen(false)}
      >
        <a href="#services" className="nav__link--anchor">
          Services
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.45}}
        className="nav__link" onClick={() => props.isMobile && props.setOpen(false)}
      >
        <a href="#work" className="nav__link--anchor">
          Work
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.55}}
        className="nav__link" onClick={() => props.isMobile && props.setOpen(false)}
      >
        <a href="#contact" className="nav__link--anchor">
          Contact
        </a>
      </motion.li>
    </ul> 
  );
}

export default NavLinks;
