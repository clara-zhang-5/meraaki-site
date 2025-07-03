import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Approach from './pages/Approach.js';
import Services from './pages/Services.js';
import Projects from './pages/Projects.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Approach" element={<Approach />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;