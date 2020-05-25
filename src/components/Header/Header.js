import React from 'react';
import './header.css';

import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="/" className="logo">
            <img src={logo}></img>
          </a>
          <div className="box-menu">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>
          <ul className="nav-list">
            <li className="nav-list">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-list">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-list">
              <a href="#" className="nav-link">Offers</a>
            </li>
            <li className="nav-list">
              <a href="#" className="nav-link">News</a>
            </li>
            <li className="nav-list">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;