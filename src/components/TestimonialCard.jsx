import React from 'react';

const TestimonialCard = (props) => {
  return (
    <div className="testimonial swiper-slide">
      <img src={props.icon} alt={props.iconName} className="testimonial__icon" />
      <p className="testimonial__para">{props.para}</p>
      <span className="testimonial__date">{props.date}</span>
      <div className="testimonial__quoter">
        <figure className="testimonial__img--wrapper">
          <img src={props.img} alt={props.imgName} className="testimonial__img" />
        </figure>
        <div className="testimonial__cite">
          <h3 className="testimonial__cite--name">{props.personName}</h3>
          <h4 className="testimonial__cite--status">{props.personStatus}</h4>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
