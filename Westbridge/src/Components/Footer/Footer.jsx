import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>

      <div className='footer-content'>


        <div className='footer-brand'>
          <img src="westbridgetextlogo.png" alt="Westbridge" />
        </div>


        <ul className='footer-links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
        </ul>

        <div className='footer-contact'>
          <p>Email: info@westbridge.edu</p>
          <p>Phone: +1234567890</p>
        </div>

      </div>

      <div className='footer-bottom'>
        <p>&copy; 2026 Westbridge University. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;