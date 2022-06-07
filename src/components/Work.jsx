import React from 'react';
import RightArrowIcon from './assets/right_arrow.svg';
import WorkOneImg from './assets/work_one.png';
import WorkTwoImg from './assets/work_two.png';
import WorkThreeImg from './assets/work_three.png';
import WorkFourImg from './assets/work_four.png';

const Work = () => {
  return (
    <section id="work">
      <div className="container">
        <div className="row">
          <h2 className="work__title">
            My Portfolio
          </h2>
          <h3 className="work__sub-title">
            Recent Works
          </h3>
          <div className="work__content">
            <div className="work__card">
              <figure className="work__img--wrapper">
                <img src={WorkOneImg} alt="" className="work__img" />
              </figure>
              <h4 className="work__card--title">
                Social Media Management
              </h4>
              <button className="work__btn">
                <h5 className="work__btn--title">
                  View More
                </h5>
                <img src={RightArrowIcon} alt="Right Arrow" className="work__btn--img" />
              </button>
            </div>
            <div className="work__card">
              <figure className="work__img--wrapper">
                <img src={WorkTwoImg} alt="" className="work__img" />
              </figure>
              <h4 className="work__card--title">
                Makeup
              </h4>
              <button className="work__btn">
                <h5 className="work__btn--title">
                  View More
                </h5>
                <img src={RightArrowIcon} alt="Right Arrow" className="work__btn--img" />
              </button>
            </div>
            <div className="work__card">
              <figure className="work__img--wrapper">
                <img src={WorkThreeImg} alt="" className="work__img" />
              </figure>
              <h4 className="work__card--title">
                Social Media Management
              </h4>
              <button className="work__btn">
                <h5 className="work__btn--title">
                  View More
                </h5>
                <img src={RightArrowIcon} alt="Right Arrow" className="work__btn--img" />
              </button>
            </div>
            <div className="work__card">
              <figure className="work__img--wrapper">
                <img src={WorkFourImg} alt="" className="work__img" />
              </figure>
              <h4 className="work__card--title">
                Makeup
              </h4>
              <button className="work__btn">
                <h5 className="work__btn--title">
                  View More
                </h5>
                <img src={RightArrowIcon} alt="Right Arrow" className="work__btn--img" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
