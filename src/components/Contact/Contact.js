import React from 'react';
import './contact.css';

import Traveler from '../../assets/images/traveler.png';

const Contact = () => { 
  return (
    <section className="contact">
      <div className="container">
        <h5 className="section-head">
          <span className="heading">Contact</span>
          <span className="sub-heading">Get in touch with us</span>
        </h5>
        <div className="contact-content">
          <div className="traveler-wrap">
            <img src={ Traveler } />
          </div>
          <form action="" className="form contact-form">
            <div className="input-group-wrap">
              <div className="input-group">
                <input type="text" className="input" placeholder="Name" required/>
                <span className="bar"></span>
              </div>
              <div className="input-group">
                <input type="email" className="input" placeholder="E-mail" required/>
                <span className="bar"></span>
              </div>
            </div>
            <div className="input-group">
              <input type="text" className="input" placeholder="Subject" required/>
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <textarea className="input" cols="30" rows="8" placeholder="E-mail" required></textarea>
              <span className="bar"></span> 
            </div>
            <button type="submit" className="btn form-btn btn-purple">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section> 
  )
}

export default Contact;