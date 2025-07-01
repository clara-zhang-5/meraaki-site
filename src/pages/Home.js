import React from 'react';
import '../styles/Home.css';
import '../styles/global.css';
import '../styles/fonts.css';
import servicesImg from '../assets/services-img.png';

function Home() {
    return (
        <div className="home-content">
            {/* Hero Section */}
            <section className="hero1">
                <div className="content-wrapper">
                    <img src="https://meraakidesigns.com/wp-content/uploads/2024/08/Group-48215-1.png" alt="hero img"/>
                </div>
            </section>
            {/* Second Hero Section */}
            <section className="hero2">
                <img src="https://meraakidesigns.com/wp-content/uploads/2024/08/mobile-meraaki-logo-1.gif" alt="hero2 img" />
                <div className="content-wrapper">
                    <h1 className="h2">Systems That Scale.</h1>
                    <h1 className="h2">Design That Performs.</h1>
                    <p className="p1">
                        Meraaki powers ambitious brands with creative execution, workflow automation, and
                        product strategy—delivering outcomes that move the needle.
                    </p>
                    <button className="button1">Let's Build Your Backbone</button>
                    <button className="button2">Explore Capabilities</button>
                </div>
            </section>
            <section className="our-partners">
                <h1 className="h2" style={{textAlign:"center"}}>Partners</h1>
            </section>
            {/* Services Section */}
            <section className="services">
                <div className="content-wrapper">
                    <div className="header">
                        <p className="h1">SERVICES</p>
                        <h1 className="h2">What We Do Best</h1>
                    </div>
                    <div className="services-container">
                        <img src={servicesImg} alt="image" className="services-image"/>
                            <div className="service-types-wrapper">
                            <ul className="h2" style={{listStyle:"none"}}>
                                <li>Design & Branding</li>
                                <ul className="p1">
                                    <li>UI/UX Design</li>
                                    <li>Brand Identity</li>
                                    <li>Product Visual Systems</li>
                                </ul >
                                <li>Digital Marketing</li>
                                <ul className="p1">
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                                <li>Tech & Development</li>
                                <ul className="p1">
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                                <li>Business Automation</li>
                                <ul className="p1">
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Approach Section */}
            <section className="approach">
                <div className="content-wrapper">
                    <div className="approach-head">
                        <p className="h1">APPROACH & METHODOLOGY</p>
                        <h1 className="h2">The Meraaki Method</h1>
                        <p className="p1">
                            Ignite innovation as we leverage the Double Diamond model, forging a robust
                            foundation for your digital product. Through a transformative journey of Discover,
                            Define, Design, Develop, Deliver, and Evolve, witness the convergence of 
                            brilliance, propelling your digital vision to unparalleled heights.
                        </p>
                    </div>
                    <div className="stages">
                        {/* implement graph + scroll animation */}
                        <img src="https://meraakidesigns.com/wp-content/uploads/2024/06/mg_discover.png" alt="graph" className="graph" />
                        <div className="stage-description">
                            <h2 className="p1" style={{fontWeight:"bold"}}>Diagnose</h2>
                            <p className="p1">Identify friction points, audience drop-offs, and process inefficiencies</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Case Studies Section */}
            <section className="case-studies">
                <div className="content-wrapper">
                    <p className="h1">CASE STUDIES</p>
                    <h1 className="h2">From Vision To Reality</h1>
                    <div className="case-study1">
                        <h3 className="h1">[LOGO] Website Revamp Boys & Girls Club Silicon Valley (BGC-SV)</h3>
                        <p className="p1" style={{lineHeight:"100px"}}>
                            Witness the impact of our solutions in this project
                        </p>
                        <p className="p1" style={{fontWeight:"bold"}}>Core Topics:</p>
                        <p className="p1">Branding, Marketing, UI/UX Design</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>
            {/* Insigthts & Intelligence Section */}
            <section className="insights-intelligence">
                <div className="content-wrapper">
                    <p className="h1">INSIGHTS & INTELLIGENCE</p>
                    <h1 className="h2">Our Blogs</h1>
                    <div className="blogs-showcase">
                        <div className="blog1">
                            <p className="p1" style={{fontWeight:"bold"}}>Build Your MVP with Speed and Precision</p>
                            <p className="p1">
                                Accelerate your market entry with a meticulously crafted MVP designed
                                for impact. 
                            </p>
                            <p className="p3">An image for blog1 goes here</p>
                        </div>
                        <div className="blog2">
                            <p className="p1" style={{fontWeight:"bold"}}>Build Your MVP with Speed and Precision</p>
                            <p className="p1">
                                Accelerate your market entry with a meticulously crafted MVP designed
                                for impact. 
                            </p>
                            <p className="p3">An image for blog2 goes here</p>
                        </div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <button className="button1">Explore More</button>
                    </div>
                </div>
            </section>
            {/* Partnerships & Tech Stack Section */}
            <section className="partnerships-tech-stack">
                <div className="content-wrapper">
                    <p className="h1">PARTNERSHIPS & TECH STACK</p>
                    <h1 className="h2">Lorem Ipsum</h1>
                    <p className="p1">
                        We partner with industry leaders to deliver high-performance creative systems and
                        integrated digital workflows.
                    </p>
                </div>
                <div className="our-partners">
                    <h1 className="h2">Partners</h1>
                </div>
            </section>
            {/* Start Project Section */}
            <section className="start-project">
                <div className="content-wrapper">
                    <h1 className="h2" style={{textAlign:"center"}}>
                    Ready to design smarter, automate faster, and scale better?
                    </h1>
                    <p className="p1">
                        Let's co-create a digital foundation that drives clarity, creativity, and convention.
                    </p>
                    <button className="button1">Start Your Project</button>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="faq">
                <div className="content-wrapper">
                    <p className="h1">FAQ</p>
                    <h1 className="h2">Frequently Asked Questions</h1>
                    <div className="faq-section-wrapper">
                        <div className="faq-section">
                            <ul className="p1" style={{fontWeight:"bold"}}>
                                <li>
                                    What does Meraaki specialize in?
                                    <p style={{fontWeight:"normal"}}>
                                        Meraaki Designs delivers end-to-end creative ops solutions,
                                        including brand systems, websites, content automation, and interface
                                        strategy—backed by tech partners for full-stack execution.
                                    </p>
                                </li>
                                <li>
                                    Do you build custom software or AI tools in-house?
                                    <p style={{fontWeight:"normal"}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    Who is Meraaki best suited for?
                                    <p style={{fontWeight:"normal"}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    Can you work with our in-house dev or marketing teams?
                                    <p style={{fontWeight:"normal"}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    How do I get started?
                                    <p style={{fontWeight:"normal"}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="faq-form">
                            <h3>Do you have any questions?</h3>
                            <p className="p1">Full Name</p>
                            <div className="info-box"><p>John Doe</p></div>
                            <p className="p1">Business Email</p>
                            <div className="info-box"><p>abc@gmail.com</p></div>
                            <p className="p1">Message</p>
                            <div className="message-box"><p>Message</p></div>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <section className="home-footer">
                <div className="content-wrapper">
                    <h1 className="h2">
                    Ready to Elevate Your Brand With Customized Digital Solutions?
                    </h1>
                    <p className="p1">
                        Meraaki Designs is a global creative ops studio delivering digital execution, 
                        automation strategy, and interface design in collaboration with trusted tech partners.
                    </p>
                    <h3 className="p1">Locations:</h3>
                    <div className="locations">
                        <div className="india">
                            <img src="" alt="img" />
                            <p>IND</p>
                        </div>
                        <div className="usa">
                            <img src="" alt="img" />
                            <p>USA</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;