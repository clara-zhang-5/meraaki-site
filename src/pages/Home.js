import React from 'react';
import '../styles/Home.css';
import '../styles/global.css';
import '../styles/fonts.css';
import servicesImg from '../assets/services-img.png';
import { useState } from 'react';

function Home() {

    const[openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(prev =>
            prev === section ? null : section
        );
    };

    return (
        <div className="home-content">
            {/* Hero Section */}
            <section className="home-hero1">
                <div className="content-wrapper">
                    <img src="https://meraakidesigns.com/wp-content/uploads/2024/08/Group-48215-1.png" alt="hero img"/>
                </div>
            </section>
            {/* Second Hero Section */}
            <section className="home-hero2">
                <div className="home-hero2-img">
                    <img src="https://meraakidesigns.com/wp-content/uploads/2024/08/mobile-meraaki-logo-1.gif" alt="hero2 img" />
                </div>
                <div className="content-wrapper home-hero2-content">
                    <div className="home-hero2-description">
                        <p className="h1">Systems That Scale.</p>
                        <p className="h1"><span style = {{color:"purple"}}>Design</span> That Performs.</p>
                        <p className="body-large">
                            Meraaki powers ambitious brands with creative execution, workflow automation, and
                            product strategy—delivering outcomes that move the needle.
                        </p>
                        <button className="button-primary">Let's Build Your Backbone</button>
                        <button className="buttoon-secondary">Explore Capabilities</button>
                    </div>
                    <div>
                        <video width="320" height="240" controls>
                            <source src="movie.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
            <section className="our-partners">
                <p className="h2" style={{textAlign:"center"}}>Partners</p>
            </section>
            {/* Services Section */}
            <section className="home-services">
                <div className="content-wrapper">
                    <div className="home-services-head">
                        <p className="h4" style={{color:"blue"}}>SERVICES</p>
                        <p className="h2">What We Do Best</p>
                    </div>
                    <div className="home-services-container">
                        <img src={servicesImg} alt="image" className="home-services-image" />

                        <div className="home-services-dropdowns">
                            {/* Design & Branding */}
                            <button onClick={() => toggleSection('design')} className="dropbtn">
                                Design & Branding
                            </button>
                            {openSection === 'design' && (
                                <div className="home-services-dropdown-list">
                                    <p>UI/UX Design</p>
                                    <p>Brand Identity</p>
                                    <p>Product Visual Systems</p>
                                </div>
                            )}
                            
                            {/* Digital Marketing */}
                            <button onClick={() => toggleSection('marketing')} className="dropbtn">
                                Digital Marketing
                            </button>
                            {openSection === 'marketing' && (
                               <div className="home-services-dropdown-list">
                                    <p>Item 1</p>
                                    <p>Item 2</p>
                                    <p>Item 3</p>
                               </div>
                            )}

                            {/* Tech & Development */}
                            <button onClick={() => toggleSection('tech')} className="dropbtn">
                                Tech & Development
                            </button>
                            {openSection === 'tech' && (
                                <div className="home-services-dropdown-list">
                                    <p>Item 1</p>
                                    <p>Item 2</p>
                                    <p>Item 3</p>
                                </div>
                            )}
                            {/* Business Automation */}
                            <button onClick={() => toggleSection('automation')} className="dropbtn">
                                Business Automation
                            </button>
                            {openSection === 'automation' && (
                                <div className="home-services-dropdown-list">
                                    <p>Item 1</p>
                                    <p>Item 2</p>
                                    <p>Item 3</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* Approach Section */}
            <section className="home-approach">
                <div className="content-wrapper">
                    <div className="home-approach-head">
                        <p className="h4" style={{color:"blue"}}>APPROACH & METHODOLOGY</p>
                        <p className="h2">The Meraaki Method</p>
                        <p className="body-large">
                            Ignite innovation as we leverage the Double Diamond model, forging a robust
                            foundation for your digital product. Through a transformative journey of Discover,
                            Define, Design, Develop, Deliver, and Evolve, witness the convergence of 
                            brilliance, propelling your digital vision to unparalleled heights.
                        </p>
                    </div>
                    <div className="home-stages">
                        {/* implement graph + scroll animation */}
                        <img src="https://meraakidesigns.com/wp-content/uploads/2024/06/mg_discover.png" alt="graph" 
                        className="home-stages-graph" />
                        <div className="home-stages-description">
                            <p className="h2">Diagnose</p>
                            <p className="body-large">Identify friction points, audience drop-offs, and process inefficiencies</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Case Studies Section */}
            <section className="home-case-studies">
                <div className="content-wrapper">
                    <div className="home-case-studies-head">
                        <p className="h4" style={{color:"blue"}}>CASE STUDIES</p>
                        <p className="h2">From Vision To Reality</p>
                    </div>
                    <div className="home-case-studies-card">
                        <p className="h5">[LOGO] Website Revamp Boys & Girls Club Silicon Valley (BGC-SV)</p>
                        <p className="body-small" style={{lineHeight:"100px"}}>
                            Witness the impact of our solutions in this project
                        </p>
                        <p className="h5">Core Topics:</p>
                        <p className="body-small">Branding, Marketing, UI/UX Design</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </section>
            {/* Insights & Intelligence Section */}
            <section className="home-blogs">
                <div className="content-wrapper">
                    <div className="home-blogs-head">
                        <p className="h4" style={{color:"blue"}}>INSIGHTS & INTELLIGENCE</p>
                        <p className="h2">Our Blogs</p>
                    </div>
                    <div className="home-blogs-showcase">
                        <div className="home-blog-card">
                            <p className="h5">Build Your MVP with Speed and Precision</p>
                            <p className="body-small">
                                Accelerate your market entry with a meticulously crafted MVP designed
                                for impact. 
                            </p>
                            <p className="body-small" style={{fontWeight:"bold"}}>An image for blog1 goes here</p>
                        </div>
                        <div className="home-blog-card">
                            <p className="h5">Build Your MVP with Speed and Precision</p>
                            <p className="body-small">
                                Accelerate your market entry with a meticulously crafted MVP designed
                                for impact. 
                            </p>
                            <p className="body-small" style={{fontWeight:"bold"}}>An image for blog2 goes here</p>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button className="button-primary">Explore More</button>
                    </div>
                </div>
            </section>
            {/* Partnerships & Tech Stack Section */}
            <section className="partnerships-tech-stack">
                <div className="content-wrapper">
                    <p className="h4" style={{color:"blue"}}>PARTNERSHIPS & TECH STACK</p>
                    <p className="h2">Lorem Ipsum</p>
                    <p className="body-large">
                        We partner with industry leaders to deliver high-performance creative systems and
                        integrated digital workflows.
                    </p>
                </div>
            </section>
            <section className="our-partners" style={{backgroundColor:"#D2C7FB"}}>
                <p className="h2">Partners</p>
            </section>
            {/* Start Project Section */}
            <section className="start-project">
                <div className="content-wrapper">
                    <p className="h2" style={{textAlign:"center"}}>
                    Ready to design smarter, automate faster, and scale better?
                    </p>
                    <p className="body-large">
                        Let's co-create a digital foundation that drives clarity, creativity, and convention.
                    </p>
                    <button className="button-primary">Start Your Project</button>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="faq">
                <div className="content-wrapper">
                    <p className="h4" style={{color:"blue"}}>FAQ</p>
                    <p className="h2">Frequently Asked Questions</p>
                    <div className="faq-section-wrapper">
                        <div className="faq-section">
                            <ul className="h4">
                                <li>
                                    What does Meraaki specialize in?
                                    <p className="body-medium">
                                        Meraaki Designs delivers end-to-end creative ops solutions,
                                        including brand systems, websites, content automation, and interface
                                        strategy—backed by tech partners for full-stack execution.
                                    </p>
                                </li>
                                <li>
                                    Do you build custom software or AI tools in-house?
                                    <p className="body-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    Who is Meraaki best suited for?
                                    <p className="body-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    Can you work with our in-house dev or marketing teams?
                                    <p className="body-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                                <li>
                                    How do I get started?
                                    <p className="body-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                        aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="faq-form">
                            <p className="body-large" style = {{fontWeight:"bold"}}>Do you have any questions?</p>
                            <p className="body-large">Full Name</p>
                            <div className="info-box body-large"><p>John Doe</p></div>
                            <p className="body-large">Business Email</p>
                            <div className="info-box body-large"><p>abc@gmail.com</p></div>
                            <p className="body-large">Message</p>
                            <div className="message-box body-large"><p>Message</p></div>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;