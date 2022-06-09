import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactButton = (props  ) => {
  return (
    <a href={props.link} className="contact__btn" target="_blank">
      <img src={props.bgUrl} alt={props.bgName} className="contact__btn--bg" />
      <FontAwesomeIcon icon={props.imgUrl} className="contact__btn--logo" />
    </a> 
  );
}

export default ContactButton;
