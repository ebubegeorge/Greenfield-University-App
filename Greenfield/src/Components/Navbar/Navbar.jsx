import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navbar'>

            <Link to="/" className='nav-logo'>
                <span className='logo-text'>
                    <img src="westbridgetextlogo.png" alt="Logo Text" />
                </span>
            </Link>

            <div className="hamburger" onClick={() => setMenuOpen(true)}>
                ☰
            </div>

            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link to="/programs" onClick={() => setMenuOpen(false)}>Programs</Link></li>
                <li><Link to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</Link></li>
                <li><Link to="/news" onClick={() => setMenuOpen(false)}>News</Link></li>
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;