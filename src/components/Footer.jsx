import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  const isHome = window.location.pathname === "/";
  const year = new Date().getFullYear();

  return (
    <footer className={`footer ${isHome ? 'footer--home' : 'footer--inner'}`}>
      <div className="footer__wave"></div>
      <div className="footer__content">
        <div className="footer__brand">
          <h2 className="footer__logo">E2A 2025</h2>
          <p className="footer__tagline">Innovation Meets Automation</p>
        </div>
        <div className="footer__info">
          <p className="footer__text">
            &copy; {year} E2A. All Rights Reserved.
          </p>
          <p className="footer__text">
            Designed by <a href="#" className="footer__link">Vivek Sharma</a>, 3rd Year, NITS
          </p>
          <p className="footer__text">
            Photo Credits: <a href="#" className="footer__link">Obiettivo Photography Club</a>
          </p>
        </div>
        <div className="footer__social">
          <a href="#" className="footer__icon" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="footer__icon" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="footer__icon" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer__art"></div>
    </footer>
  );
};

export default Footer;
