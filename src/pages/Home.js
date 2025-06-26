import React from 'react';
import '../styles/Home.css';
import '../styles/global.css';

function Home() {
    return (
        <div className="home-content">
            <div className="get-started">
                <div className="content-wrapper">
                    <h1>[Logo]</h1>
                    <h2>Meraaki Designs</h2>
                </div>
            </div>
            <div className="page2">
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
            </div>
            <div className="our-clients" style={{
                
                }}>
                <h1 style={{textAlign:"center"}}>Our Clients</h1>
            </div>
            <div className="services">
                <div className="content-wrapper">
                    <h2 style={{color:"blue"}}>Services</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;