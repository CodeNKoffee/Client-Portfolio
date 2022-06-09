import React from 'react';

const ContactForm = () => {
  return (
    <form id="contact__form" className="contact__form">
      <div className="name__group field">
        <input type="text" className="name__field" placeholder="Name" />
        <label htmlFor="name" className="name__label">Name</label>
      </div>
      <div className="email__group field">
        <input type="email" className="email__field" placeholder="Email" />
        <label htmlFor="email" className="email__label">Email</label>
      </div>
      <div className="msg__group field">
        <textarea name="Message" id="msg__field" cols="30" rows="10" className="msg__field"></textarea>
        <label htmlFor="message" className="msg__label">Message</label>
      </div>
    </form>
  );
}

export default ContactForm;
