import React from 'react';
import './hotels.css';

import hotelResort from '../../assets/images/hotel_astro_resort.jpg';
import hotelParadise from '../../assets/images/hotel_the_paradise.jpg';
import hotelGarden from '../../assets/images/hotel_the_enchanted_garden.jpg';

const Hotels = () => {
  return (
    <section className="hotels">
      <div className="container">
        <h5 className="section-head">
          <span className="heading">Explore</span>
          <span className="sub-heading">Our beautiful Hotels</span>
        </h5>
        <div className="grid">
          <div className="grid-item featured-hotels">
            <img src={hotelResort} alt="" className="hotel-image"/>
            <h5 className="hotel-name">Astro Hotel</h5>
            <span className="hotel-price">From $200/Night</span>
            <div className="hotel-rating">
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star-half rating"></i>
            </div>
            <button className="btn btn-gradient">Book now</button>
          </div>
          <div className="grid-item featured-hotels">
            <img src={hotelGarden} alt="" className="hotel-image"/>
            <h5 className="hotel-name">Enchanted Garden</h5>
            <span className="hotel-price">From $300/Night</span>
            <div className="hotel-rating">
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
            </div>
            <button className="btn btn-gradient">Book now</button>
          </div>
          <div className="grid-item featured-hotels">
            <img src={hotelParadise} alt="" className="hotel-image"/>
            <h5 className="hotel-name">The Paradise</h5>
            <span className="hotel-price">From $350/Night</span>
            <div className="hotel-rating">
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
              <i className="fas fa-star rating"></i>
            </div>
            <button className="btn btn-gradient">Book now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hotels;