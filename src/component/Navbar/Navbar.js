import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <div className="navBar">
    <div className="logo">BookStore CMS</div>
    <ul className="nav">
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="Categories">CATEGORY</Link></li>
    </ul>
    <div className="icon">.</div>
  </div>
);

export default Navbar;
