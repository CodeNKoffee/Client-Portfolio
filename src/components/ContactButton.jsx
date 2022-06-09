import React from 'react';

const ContactButton = () => {
  return (
    <a href={props.link} className="contact__btn">
      <img src={props.bgUrl} alt={props.bgName} className="contact__btn--bg" />
      <img src={props.imgUrl} alt={props.imgName} className="contact__btn--logo" />
    </a> 
  );
}

export default ContactButton;
