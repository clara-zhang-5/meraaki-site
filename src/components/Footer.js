import '../styles/Footer.css';
import '../styles/fonts.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <ul className="footer-links">
                    <li><Link to="/Home" className="p1">Home</Link></li>
                    <li><Link to="/Approach" className="p1">Approach</Link></li>
                    <li><Link to="/Services" className="p1">Services</Link></li>
                    <li><Link to="/Projects" className="p1">Projects</Link></li>
                    <li><Link to="/About" className="p1">About</Link></li>
                    <li><Link to="/Careers" className="p1">Careers</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;