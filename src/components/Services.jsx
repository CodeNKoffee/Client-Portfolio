import React from 'react';
import UsersIcon from './assets/users_icon.svg';
import WizardHatIcon from './assets/wizard_icon.svg';
import ServiceCard from './ServiceCard';

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
            <ServiceCard
              icon={UsersIcon}
              title="Social Media Manager"
            />
            <ServiceCard
              icon={WizardHatIcon}
              title="Makeup Artist"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
