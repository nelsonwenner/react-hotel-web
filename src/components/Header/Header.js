import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="/" className="logo"></a>
        </nav>
      </div>
    </header>
  )
}

export default Header;