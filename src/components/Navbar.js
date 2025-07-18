import '../styles/Navbar.css';
import '../styles/fonts.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <nav className="p1">
                <ul className="nav-links body-large">
                    <li><Link to="/Home" style={{color:"black", textDecoration:"none"}}>Home</Link></li>
                    <li><Link to="/Services" style={{color:"black", textDecoration:"none"}}>Services</Link></li>
                    <li><Link to="/Approach"  style={{color:"black", textDecoration:"none"}}>Approach</Link></li>
                    <li><Link to="/Projects"  style={{color:"black", textDecoration:"none"}}>Projects</Link></li>
                    <li><Link to="/Contact" style={{color:"black", textDecoration:"none"}}>Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;