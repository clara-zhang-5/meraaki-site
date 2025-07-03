import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <nav className="p1">
                <ul className="nav-links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Approach">Approach</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;