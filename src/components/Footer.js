import '../styles/Footer.css';
import '../styles/fonts.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="footer-content">
                    <div>
                        <div className="content-wrapper">
                            <p className="h2">
                            Ready to Elevate Your Brand With Customized Digital Solutions?
                            </p>
                            <p className="body-large">
                                Meraaki Designs is a global creative ops studio delivering digital execution, 
                                automation strategy, and interface design in collaboration with trusted tech partners.
                            </p>
                            <p className="body-small">Locations:</p>
                            <div className="locations">
                                <div className="body-extra-small">
                                    <img src="" alt="flag" className="body-extra-small" />
                                    <p className="body-extra-small">IND</p>
                                </div>
                                <div className="body-extra-small">
                                    <img src="" alt="flag" className="body-extra-small" />
                                    <p className="body-extra-small">USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrapper footer-social-links">
                        <button>LinkedIn</button>
                        <button>Instagram</button>
                        <button>be</button>
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