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
              para="
                create and maintain the company's brand with social media marketing tools, interact with customers via the company's social media accounts, identify strategic weaknesses and make recommendations for improvements, research social media trends and inform management of changes that are relevant to the company's marketing activities.
              "
            />
            <ServiceCard
              icon={WizardHatIcon}
              title="Makeup Artist"
              para="
                communicate with clients to understand their needs and wants, pay attention to other details such as costumes and design and take those into consideration, keep makeup tools and products in check, adhere to personal hygiene standards, and stay up to date with the latest best practices, tools and technology in makeup and fashion industry.
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
