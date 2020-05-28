import React from 'react';
import './rooms.css';

import Room01 from '../../assets/images/room_1.jpg';
import Room02 from '../../assets/images/room_2.jpg';
import Room03 from '../../assets/images/room_3.jpg';

const Rooms = () => {
  return (
    <section className="rooms">
      <div className="container">
        <h5 className="section-head">
          <span className="heading">Luxurious</span>
          <span className="sub-heading">Affordable rooms</span>
        </h5>
        <div className="grid rooms-grid">
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room01 } />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$200 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <a className="btn rooms-btn">Book now &rarr;</a>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room02 } />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$200 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <a className="btn rooms-btn">Book now &rarr;</a>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room03 } />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$200 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <a className="btn rooms-btn">Book now &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms;