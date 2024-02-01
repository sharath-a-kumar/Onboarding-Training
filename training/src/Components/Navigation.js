// Navigation.js
import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      {/* Your navigation content goes here */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
