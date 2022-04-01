import React from 'react';
import './navbar.css';

const Navbar = () => (
  <div className="navBar">
    <div className="logo">BookStore CMS</div>
    <ul className="nav">
      <li>Home</li>
      <li>Category</li>
    </ul>
    <div className="icon">.</div>
  </div>
);

export default Navbar;
