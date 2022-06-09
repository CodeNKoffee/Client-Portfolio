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
                create and maintain the company's brand with social media marketing tools, Interact with customers via the company's social media accounts, analyze the company's digital marketing plan and social media strategy and identify strategic weaknesses and making recommendations for improvements, and research social media trends and inform management of changes that are relevant to the company's marketing activities.
              "
            />
            <ServiceCard
              icon={WizardHatIcon}
              title="Makeup Artist"
              para="
                communicate with clients to understand their needs and wants, determine necessary supplies and equipment needed, apply makeup in a professional manner, pay attention to other details such as costumes and design, examine makeup materials at disposal and chose the best option, prepare budget planning for makeup supplies and tools, keep makeup tools and products in check, adhere to personal hygiene standards, and stay up to date with the latest best practices, tools and technology in your field.
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
