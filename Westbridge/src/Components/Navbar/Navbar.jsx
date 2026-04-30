import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='nav-logo'>
                <div className='logo-text'>
                    <img src="westbridgetextlogo.png" alt="Logo Text" />
                </div>
            </Link>
            <ul className='nav-links'>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;