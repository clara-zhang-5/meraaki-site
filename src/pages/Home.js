import React from 'react';
import '../styles/Home.css';
import '../styles/global.css';
import '../styles/fonts.css';

function Home() {
    return (
        <div className="home-content">
            <section className="get-started">
                <div className="content-wrapper">
                    <h1>[Logo]</h1>
                    <h2>Meraaki Designs</h2>
                </div>
            </section>
            <section className="page2">
                <div className="content-wrapper">
                    <div className="tagline">
                        <h1>Systems That Scale</h1>
                        <h1>Design That Performs.</h1>
                    </div>
                    <p>
                        Meraaki powers ambitious brands with creative execution, workflow automation, and
                        product strategy—delivering outcomes that move the needle.
                    </p>
                    <button className="button">Let's Build Your Backbone</button>
                    <button className="button">Explore Capabilities</button>
                </div>
            </section>
            <section className="our-partners">
                <h1 style={{textAlign:"center"}}>Partners</h1>
            </section>
            <section className="services">
                <div className="content-wrapper">
                    <p className="section-header">SERVICES</p>
                    <h1 className="section-tagline">What We Do Best</h1>
                    <div className="service-types-wrapper">
                        <ul className="service-types">
                            <li>Design & Branding</li>
                            <ul>
                                <li>UI/UX Design</li>
                                <li>Brand Identity</li>
                                <li>Product Visual Systems</li>
                            </ul>
                            <li>Digital Marketing</li>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                            <li>Tech & Development</li>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                            <li>Business Automation</li>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="approach">
                <div className="content-wrapper">
                    <p className="section-header">APPROACH & METHODOLOGY</p>
                    <h1 className="section-tagline">The Meraaki Method</h1>
                    <p>
                        Ignite innovation as we leveratethe Double Diamond model, forging a robust
                        foundation for your digital product. Through a transformative journey of Discover,
                        Define, Design, Develop, Deliver, and Evolve, witness the convergence of 
                        brilliance, propelling your digital vision to unparalleled heights.
                    </p>
                    <div className="stages">
                        <div className="graph">
                            <p>this is where the graph will go</p>
                        </div>
                        <div className="stage-description">
                            <h2>Diagnose</h2>
                            <p>Identify friction points, audience drop-offs, and process inefficiencies</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="case-studies">
                <div className="content-wrapper">
                    <p className="section-header">CASE STUDIES</p>
                    <h1 className="section-tagline">From Vision To Reality</h1>
                    <div className="case-study1">
                        <h3>[LOGO] Website Revamp Boys & Girls Club Silicon Valley (BGC-SV)</h3>
                        <p style={{lineHeight:"100px"}}>
                            Witness the impact of our solutions in this project
                        </p>
                        <p style={{fontWeight:"bold"}}>Core Topics:</p>
                        <p>Branding, Marketing, UI/UX Design</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>
            <section className="insights-intelligence">
                <div className="content-wrapper">
                    <p className="section-header">INSIGHTS & INTELLIGENCE</p>
                    <h1 className="section-tagline">Our Blogs</h1>
                    <div className="blogs-showcase">
                        <div className="blog1">
                            <h3>Build Your MVP with Speed and Precision</h3>
                            <p>
                                Accelerate your market entry with a meticulously crafted MVP designed
                                for impact. 
                            </p>
                            <p>An image for blog1 goes here</p>
                        </div>
                        <div className="blog2">
                            <h3>Build Your MVP with Speed and Precision</h3>
                            <p>
                                Accelerate your market entry with a meticulously crafted MVP designed
                                for impact. 
                            </p>
                            <p>An image for blog2 goes here</p>
                        </div>
                    </div>
                    <button className="blog-button">Explore More</button>
                </div>
            </section>
            <section className="partnerships-tech-stack">
                <div className="content-wrapper">
                    <p className="section-header">PARTNERSHIPS & TECH STACK</p>
                    <h1 className="section-tagline">Lorem Ipsum</h1>
                    <p>
                        We partner with industry leaders to deliver high-performance creative systems and
                        integrated digital workflows.
                    </p>
                </div>
                <div className="our-partners">
                    <h1 style={{textAlign:"center"}}>Partners</h1>
                </div>
            </section>
            <section className="start-project">
                <div className="content-wrapper">
                    <h1 className="section-tagline">
                    Ready to design smarter, automate faster, and scale better?
                    </h1>
                    <p>
                        Let's co-create a digital foundation that drives clarity, creativity, and convention.
                    </p>
                    <button>Start Your Project</button>
                </div>
            </section>
            <section className="faq">
                <div className="content-wrapper">
                    <p className="section-header">FAQ</p>
                    <h1 className="section-tagline">Frequently Asked Questions</h1>
                    <div className="faq-section-wrapper">
                        <ul className="faq-section">
                            <li>
                                What does Meraaki specialize in?
                                <p>
                                    Meraaki Designs delivers end-to-end creative ops solutions,
                                    including brand systems, websites, content automation, and interface
                                    strategy—backed by tech partners for full-stack execution.
                                </p>
                            </li>
                            <li>
                                Do you build custom software or AI tools in-house?
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                Who is Meraaki best suited for?
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                Can you work with our in-house dev or marketing teams?
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat.
                                </p>
                            </li>
                            <li>
                                How do I get started?
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                    aliquip ex ea commodo consequat.
                                </p>
                            </li>
                        </ul>
                        <div className="faq-form">
                            <h3>Do you have any questions?</h3>
                            <p>Full Name</p>
                            <div className="info-box"><p>John Doe</p></div>
                            <p>Business Email</p>
                            <div className="info-box"><p>abc@gmail.com</p></div>
                            <p>Message</p>
                            <div className="message-box"><p>Message</p></div>
                            <button>Submit</button>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="home-footer">
                <div className="content-wrapper">
                    <h1 className="section-tagline">
                    Ready to Elevate Your Brand With Customized Digital Solutions?
                    </h1>
                    <p>
                        Meraaki Designs is a global creative ops studio delivering digital execution, 
                        automation strategy, and interface design in collaboration with trusted tech partners.
                    </p>
                    <h3>Locations:</h3>
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