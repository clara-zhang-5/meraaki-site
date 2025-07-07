import '../styles/Footer.css';
import '../styles/fonts.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <ul className="footer-links">
                    <li className="p1"><Link to="/Home">Home</Link></li>
                    <li className="p1"><Link to="/Approach">Approach</Link></li>
                    <li className="p1"><Link to="/Services">Services</Link></li>
                    <li className="p1"><Link to="/Projects">Projects</Link></li>
                    <li className="p1"><Link to="/About">About</Link></li>
                    <li className="p1"><Link to="/Careers">Careers</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;