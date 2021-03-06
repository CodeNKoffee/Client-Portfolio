import React from 'react';
import FooterLogo from './assets/nav_logo.svg';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <a href="#nav" className="footer__logo--wrapper">
            <img src={FooterLogo} alt="Bassma ElKaramany" className="footer__logo" />
          </a>
          <span className="footer__claim">
            Copyright &copy; 2022, Bassma ElKaramany
            <br />
            All Rights Reserved
          </span>
          <span className="footer__claim--credit">
              Designed & developed by <a className="footer__claim--credit-link" href="https://www.hatemsoliman.dev/" target="_blank">Hatem Soliman</a>
            </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
