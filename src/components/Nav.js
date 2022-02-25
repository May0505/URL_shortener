import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <header>
      <Link to='/'>
        <img src={logo} alt='' />
      </Link>
      <input type='checkbox' className='navbar-toggle' id='navbar-toggle' />
      <nav>
        <div className='items'>
          <ul>
            <li className='item'>
              <Link to='/Features' className='item-link'>
                Features
              </Link>
            </li>
            <li className='item'>
              <Link to='/Pricing' className='item-link'>
                Pricing
              </Link>
            </li>
            <li className='item'>
              <Link to='/Resources' className='item-link'>
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className='nav-login'>
          <button className='btn-login'>Login</button>
          <button className='btn-signup'>Sign Up</button>
        </div>
      </nav>
      <label htmlFor='navbar-toggle' className='navbar-toggle-label'>
        <span className='hamburger'></span>
      </label>
    </header>
  );
};

export default Nav;
