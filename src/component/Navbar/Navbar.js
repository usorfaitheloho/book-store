import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <>
    <div className="navBar">
      <nav>
        <div className="logo">BookStore CMS</div>
        <ul className="nav">
          <li><NavLink className="link-btn" to="/">Books</NavLink></li>
          <li><NavLink className="link-btn" to="Categories">Categories</NavLink></li>
        </ul>
        <img src="./images/login.png" alt="user icon" className="userIcon" />
      </nav>
    </div>
  </>
);

export default Navbar;
