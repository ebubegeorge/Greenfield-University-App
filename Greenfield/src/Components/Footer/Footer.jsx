import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
<footer className='footer'>

  <div className='footer-content'>

    {/* LEFT */}
    <div className='footer-brand'>
      <img src="faviconlogo.png" alt="logo icon" />
      <img src="GFUTEXTLOGO.png" alt="Greenfield" />
    </div>

    {/* CENTER */}
    <ul className='footer-links'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/programs">Programs</Link></li>
    </ul>

    {/* RIGHT */}
    <div className='footer-contact'>
      <p>Email: info@greenfield.edu</p>
      <p>Phone: +1234567890</p>
    </div>

  </div>

  {/* BOTTOM */}
  <div className='footer-bottom'>
    <p>&copy; 2026 Greenfield University. All rights reserved.</p>
  </div>

</footer>
    );
}

export default Footer;