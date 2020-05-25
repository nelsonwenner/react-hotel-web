import React from 'react';
import './banner.css';

import InputGroup from '../common/InputGroup/InputGroup';

const Banner = () => {
  return (
    <main>
      <div className="hero">
        <div className="container">
          <div className="main-heading">
            <h1 className="title">Discover</h1>
            <h2 className="subtitle">Luxury hotels</h2>
          </div>
          <button href="#" className="btn btn-gradient">Explore now</button>
        </div>
      </div>
      <InputGroup />
    </main>
  )
}

export default Banner;