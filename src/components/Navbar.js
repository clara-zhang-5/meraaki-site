import '../styles/Navbar.css';
import '../styles/fonts.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../assets/hamburger.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <button className="navbar-toggle" onClick={toggleDropdown}>
                    <img src={Hamburger} alt="menu" />
                </button>
                {isOpen && (
                    <ul className="navbar-dropdown">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/approach">Approach</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Navbar;