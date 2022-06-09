import React from 'react';
import ContactButton from './ContactButton';
import BlueBlob from './assets/blue_blob-svg';
import InstagramIcon from './assets/instagram_icon.svg';
import TwitterIcon from './assets/twitter_icon.svg';
import LinkedinIcon from './assets/linkedin_icon.svg';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <h2 className="contact__title">
            Get in Touch
          </h2>
          <h3 className="contact__sub-title">
            Contact Me
          </h3>
          <div className="contact__btns">
            <ContactButton
              link="https://www.instagram.com/bassmaelkaramany/"
              bgUrl={BlueBlob}
              bgName="Blob"
              imgUrl={InstagramIcon}
              imgName="Instagram"
            />
            <ContactButton
              link="https://www.twitter.com/bassmaelkaramany?t=qS39_ggoAIouapRTS6B5Ow&s=09"
              bgUrl={BlueBlob}
              bgName="Blob"
              imgUrl={TwitterIcon}
              imgName="Twitter"
            />
            <ContactButton
              link="https://www.linkedin.com/bassmaelkaramany/"
              bgUrl={BlueBlob}
              bgName="Blob"
              imgUrl={LinkedinIcon}
              imgName="LinkedIn"
            />
          </div>
          <div className="contact__content">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
