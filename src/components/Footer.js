import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className='footer-title'>Shortly</div>
      <ul className='items'>
        <li className='item'>
          <div className='item-title'>Features</div>
          <a href='#' className='item-content'>
            Link Shortening
          </a>
          <a href='#' className='item-content'>
            Branded Links
          </a>
          <a href='#' className='item-content'>
            Analytics
          </a>
        </li>
        <li className='item'>
          <div className='item-title'>Resources</div>
          <a href='#' className='item-content'>
            Blog
          </a>
          <a href='#' className='item-content'>
            Developers
          </a>
          <a href='#' className='item-content'>
            Support
          </a>
        </li>
        <li className='item'>
          <div className='item-title'>Company</div>
          <a href='#' className='item-content'>
            About
          </a>
          <a href='#' className='item-content'>
            Our Team
          </a>
          <a href='#' className='item-content'>
            Careers
          </a>
          <a href='#' className='item-content'>
            Contact
          </a>
        </li>
      </ul>
      <div className='social-media'>
        <a
          href='https://www.facebook.com/'
          className='social-media-link'
          target='_blank'>
          <i className='facebook fab fa-brands fa-facebook-square fa-lg'></i>
        </a>
        <a
          href='https://twitter.com'
          className='social-media-link'
          target='_blank'>
          <i className='fa-brands fab fa-twitter fa-lg'></i>
        </a>
        <a
          href='https://www.pinterest.com/'
          className='social-media-link'
          target='_blank'>
          <i className='fa-brands fab fa-pinterest fa-lg'></i>
        </a>
        <a
          href='https://www.instagram.com/'
          className='social-media-link'
          target='_blank'>
          <i className='fa-brands fab fa-instagram fa-lg'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
