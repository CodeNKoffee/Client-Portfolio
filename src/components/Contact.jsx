import React from 'react';
import ContactButton from './ContactButton';
import BlueBlob from './assets/blue_blob.svg';
// import InstagramIcon from './assets/instagram_icon.svg';
// import TwitterIcon from './assets/twitter_icon.svg';
// import LinkedinIcon from './assets/linkedin_icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';

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
              imgUrl={faInstagram}
              imgName="Instagram"
            />
            <ContactButton
              link="https://www.twitter.com/basmaelkaramany"
              bgUrl={BlueBlob}
              bgName="Blob"
              imgUrl={faTwitter}
              imgName="Twitter"
            />
            <ContactButton
              link="https://www.linkedin.com/bassmaelkaramany/"
              bgUrl={BlueBlob}
              bgName="Blob"
              imgUrl={faLinkedinIn}
              imgName="LinkedIn"
            />
          </div>
          <div className="contact__content">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
