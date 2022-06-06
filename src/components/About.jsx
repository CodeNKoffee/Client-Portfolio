import React from 'react';
import AboutImg from './assets/about_img.svg';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div class="row">
          <h2 className="about__title">
            About
          </h2>
          <div className="about__content">
            <figure className="about__img--wrapper">
              <img src={AboutImg} alt="About Me - Feather Pen" className="about__img" />
            </figure>
            <p className="about__para">
              I'm an 18-year-old Egyptian <span className="blue">social media manager</span> with a great desire to assist businesses in reaching their full social media potential. I help brands communicate their stories through <span className="blue"> engaging captions</span> and <span className="blue"> visual social content</span> to develop their following and boost sales as an <span className="blue">avid writer</span> with a no-nonsense attitude.
              <br /><br />
              In addition to my passion for <span className="blue">makeup</span> which drives me to create versatile looks that take your natural beauty to the next level. Want to have a completely new look? <span className="blue">I am here to make your dream come true.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

