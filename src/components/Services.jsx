import React from 'react';
import UsersIcon from './assets/users_icon.svg';
import WizardHatIcon from './assets/wizard_icon.svg';
import RightArrowIcon from './assets/right_arrow.svg';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <h2 className="services__title">
            Services
          </h2>
          <h3 className="services__sub-title">
            What I Offer
          </h3>
          <div className="services__content">
            <div className="service">
              <img src={UsersIcon} alt="Society" className="service__img" />
              <h4 className="service__title">
                Social Media Manager
              </h4>
              <button className="service__btn">
                <h5 className="service__btn--title">
                  View More
                </h5>
                <img src={RightArrowIcon} alt="Right Arrow" className="service__btn--img" />
              </button>
            </div>
            <div className="service">
              <img src={WizardHatIcon} alt="Wizard Hat" className="service__img" />
              <h4 className="service__title">
                Makeup Artist
              </h4>
              <button className="service__btn">
                <h5 className="service__btn--title">
                  View More
                </h5>
                <img src={RightArrowIcon} alt="Right Arrow" className="service__btn--img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
