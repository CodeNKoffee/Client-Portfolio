import React from 'react';
import TestimonialCard from './TestimonialCard';
import QuotesIcon from './assets/quote_left.svg';
import PfpOne from './assets/pfp_1.png';
import PfpTwo from './assets/pfp_2.png';
import Swipers from './Swipers';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row">
          <h2 className="testimonials__title">
            My Clients Say
          </h2>
          <h3 className="testimonials__sub-title">
            Testimonials
          </h3>
          <div className="testimonials__content">
            {/* <TestimonialCard 
              icon={QuotesIcon}
              iconName="Quotations"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
              date="29 December, 2021"
              img={PfpOne}
              imgName="Lee Hesham"
              personName="Lee Hesham"
              personStatus="Founder of Soul Tribe"
            />
            <TestimonialCard 
              icon={QuotesIcon}
              iconName="Quotations"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum."
              date="19 March, 2022"
              img={PfpTwo}
              imgName="Farah Zeiad"
              personName="Farah Zeiad"
              personStatus="High School Graduate"
            /> */}
            <Swipers />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
