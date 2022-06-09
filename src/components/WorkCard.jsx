import React from 'react';
import RightArrowIcon from './assets/right_arrow.svg';

const WorkCard = (props) => {
  return (
    <div className="work__card">
      <figure className="work__img--wrapper">
        <img src={props.img} alt="" className="work__img" />
      </figure>
      <h4 className="work__card--title">{props.title}</h4>
      <button className="work__btn">
        <h5 className="work__btn--title">
          View More
        </h5>
        <img src={RightArrowIcon} alt="Right Arrow" className="work__btn--img" />
      </button>
    </div>
  );
}

export default WorkCard;
