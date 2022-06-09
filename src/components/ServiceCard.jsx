import React from 'react';
import RightArrowIcon from './assets/right_arrow.svg';

const ServiceCard = (props) => {
  return (
    <div className="service">
      <div className="service__front">
        <img src={props.icon} alt="Society" className="service__img" />
        <h4 className="service__front--title">{props.title}</h4>
        <button className="service__btn">
          <h5 className="service__btn--title">
            View More
          </h5>
          <img src={RightArrowIcon} alt="Right Arrow" className="service__btn--img" />
        </button>
      </div>
      <div className="service__back">
        <h4 className="service__back--title">I will:</h4>
        <p className="service__back--para">{props.para}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
