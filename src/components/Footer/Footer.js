import React from 'react';
import './footer.css';

import Logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-brand">
            <a href="/" className="logo">
              <img className="logo-image" src={ Logo } alt="" />
            </a>
            <div className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
          <div className="social-media-wrap">
            <h4 className="footer-heading">Follow us</h4>
            <div className="social-media">
              <span className="sm-link"><i className="fab fa-twitter"></i></span>
              <span className="sm-link"><i className="fab fa-facebook-square"></i></span>
              <span className="sm-link"><i className="fab fa-instagram"></i></span>
              <span className="sm-link"><i className="fab fa-pinterest"></i></span>
              <span className="sm-link"><i className="fab fa-tripadvisor"></i></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;