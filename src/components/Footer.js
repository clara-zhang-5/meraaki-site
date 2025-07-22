import '../styles/Footer.css';
import '../styles/fonts.css';
import { Link } from 'react-router-dom';
import linkedinIcon from '../assets/linkedin.svg';
import instagramIcon from '../assets/instagram.svg';
import behanceIcon from '../assets/behance.svg';
import usFlag from '../assets/usa.png';
import indiaFlag from '../assets/india.png';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="footer-content content-wrapper">
                    <div className="footer-main-content">
                        <p className="h2">
                            Ready to Elevate Your Brand With Customized Digital Solutions?
                        </p>
                        <p className="body-small">
                            Meraaki Designs is a global creative ops studio delivering digital execution, 
                            automation strategy, and interface design in collaboration with trusted tech partners.
                        </p>
                        <p className="body-small" style={{fontWeight:"bold"}}>Locations:</p>
                        <div className="locations">
                            <div className="location">
                                <img src={indiaFlag} alt="flag" className="body-extra-small" style={{width:"30px"}}/>
                                <p className="body-extra-small">IND</p>
                            </div>
                            <div className="location">
                                <img src={usFlag} alt="flag" className="body-extra-small" style={{width:"30px"}}/>
                                <p className="body-extra-small">USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-social-links">
                        <button>
                            <img src={linkedinIcon} alt="li" />
                        </button>
                        <button>
                            <img src={instagramIcon} alt="ig" />
                        </button>
                        <button>
                            <img src={behanceIcon} alt="be" />
                        </button>
                    </div>
                </div>
                <ul className="footer-links" style={{textDecoration:"none"}}>
                    <li><Link to="/Home" className="body-large" style={{color:"white", textDecoration:"none"}}>Home</Link></li>
                    <li><Link to="/Approach" className="body-large" style={{color:"white", textDecoration:"none"}}>Approach</Link></li>
                    <li><Link to="/Services" className="body-large" style={{color:"white", textDecoration:"none"}}>Services</Link></li>
                    <li><Link to="/Projects" className="body-large" style={{color:"white", textDecoration:"none"}}>Projects</Link></li>
                    <li><Link to="/About" className="body-large" style={{color:"white", textDecoration:"none"}}>About</Link></li>
                    <li><Link to="/Careers" className="body-large" style={{color:"white", textDecoration:"none"}}>Careers</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;