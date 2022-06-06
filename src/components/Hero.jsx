import React from 'react';
import HeroImg from './assets/silhouette.png'

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="hero__content">
            <div className="hero__content--left">
              <div className="hero__titles">
                <h1 className="hero__title">
                  BASSMA ELKARAMANY
                </h1>
                <div className="hero__sub-titles">
                  <h2 className="hero__sub-title">
                    Social Media Manager
                  </h2>
                  <h2 className="hero__sub-title">
                    Makeup Artist
                  </h2>
                </div>
              </div>
              <a href="#about" className="hero__btn">
                About Me
              </a>
            </div>
            <div className="hero__content--right">
              <figure className="hero__img--wrapper">
                <img src={HeroImg} alt="Girl Silhouette" className="hero__img" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
