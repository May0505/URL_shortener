import React, { Component } from "react";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <header>
      <img src={logo} alt='' />
      <input type='checkbox' className='navbar-toggle' id='navbar-toggle' />
      <nav>
        <div className='items'>
          <ul>
            <li className='item'>Features</li>
            <li className='item'>Pricing</li>
            <li className='item'>Resources</li>
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
