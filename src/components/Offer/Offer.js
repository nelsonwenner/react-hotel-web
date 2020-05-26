import React from 'react';
import './offer.css';

const Offer = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer-content">
          <div className="discount">
            40% off
          </div>
          <h5 className="hotel-name">The paradise</h5>
          <div className="hotel-rating">
            <i className="fas fa-star rating"></i>
            <i className="fas fa-star rating"></i>
            <i className="fas fa-star rating"></i>
            <i className="fas fa-star rating"></i>
            <i className="fas fa-star rating"></i>
          </div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button href="#" className="btn btn-gradient">Redeem offer</button>
        </div>
      </div>
    </section>
  )
}

export default Offer;