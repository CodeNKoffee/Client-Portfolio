import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div class="nav__container--mobile">
      <button class="btn__menu">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div class="menu__backdrop">
        <button class="btn__menu btn__menu--close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul class="menu__links">
          <li class="menu__list">
            <a class="menu__link">ABOUT</a>
          </li>
          <li class="menu__list">
            <a href="#explore" class="menu__link">EXPLORE</a>
          </li>
          <li class="menu__list">
            <a href="#journal" class="menu__link">JOURNAL</a>
          </li>
          <li class="menu__list">
            <a class="menu__link">SEARCH</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
