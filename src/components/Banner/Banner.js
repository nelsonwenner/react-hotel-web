import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <main>
      <div className="hero">
        <div className="container">
          <div className="main-heading">
            <h1 className="title">Discover</h1>
            <h2 className="subtitle">Luxury hotels</h2>
          </div>
          <button href="#" className="btn btn-gradient">Explore now
            <span className="dots"><li className="fast fa-ellipsis"></li></span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Banner;