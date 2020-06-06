import React from 'react';
import './rooms.css';

import Room01 from '../../assets/images/room_1.jpg';
import Room02 from '../../assets/images/room_2.jpg';
import Room03 from '../../assets/images/room_3.jpg';
import Room04 from '../../assets/images/room_4.jpg';
import Room05 from '../../assets/images/room_5.jpg';
import Room06 from '../../assets/images/room_6.jpg';
import Room07 from '../../assets/images/room_7.jpg';
import Room08 from '../../assets/images/room_8.jpg';
import Room09 from '../../assets/images/room_9.jpg';
import Room10 from '../../assets/images/room_10.jpg';


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
              <img className="room-image" src={ Room01 } alt="image01" />
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
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room02 } alt="image02" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$450 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room03 } alt="image03" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$250 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room04 } alt="image04" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$600 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room05 } alt="image05" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$300 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room06 } alt="image06" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room07 } alt="image07" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room08 } alt="image08" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room09 } alt="image09" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
          <div className="grid-item featured-rooms">
            <div className="image-wrap">
              <img className="room-image" src={ Room10 } alt="image10" />
              <h5 className="room-name">Astro hotel</h5>
            </div>
            <div className="room-info-wrap">
              <span className="room-price">$400 
                <span className="per-night">Per night</span>
              </span>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn rooms-btn">Book now &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms;