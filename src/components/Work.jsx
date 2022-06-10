import React from 'react';
import WorkOneImg from './assets/work_one.png';
import WorkTwoImg from './assets/work_two.png';
import WorkThreeImg from './assets/work_three.png';
import WorkFourImg from './assets/work_four.png';
import WorkCard from './WorkCard';

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
            <WorkCard
              img={WorkOneImg}
              title="Social Media Management"
            />
            <WorkCard
              img={WorkTwoImg}
              title="Makeup"
            />
            <WorkCard
              img={WorkThreeImg}
              title="Social Media Management"
            />
            <WorkCard
              img={WorkFourImg}
              title="Makeup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
