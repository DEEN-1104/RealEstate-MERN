import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

// import Navbar1 from "../components/Navbar1";

const AboutUs = () => {
  return (
    <>
        {/* Navbar */}
                <header className="navbar-buy">
                        <div className="logo-Buy">
                          <h2>
                            <span>Real</span>Estate
                          </h2>
                        </div>
                        <nav>
                          <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/buy" >Buy</Link></li>
                            <li><Link to="/rent">Rent</Link></li>
                            <li><Link to="/Agent" >Agent</Link></li>
                            <li><Link to="/AboutUS" className="Buy-nav-High">About Us</Link></li>
                          </ul>
                        </nav>
                      </header>
    <div className="about-container">
      <div className="about-header">
        <h1>About Summit Realty Partner</h1>
        <p>Empowering your journey to find the perfect property.</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Summit Realty Partner, our mission is to provide seamless real estate solutions. 
          We strive to connect people with their dream homes and investment opportunities.
        </p>
      </div>
      <div className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>🏡 *Integrity* – We believe in transparency and honesty.</li>
          <li>📈 *Excellence* – We aim for the highest quality in service.</li>
          <li>🤝 *Customer Focus* – Your needs are our priority.</li>
          <li>🌍 *Innovation* – Using technology for smarter real estate decisions.</li>
        </ul>
      </div>

      <div className="about-stats">
      <div className="stat-box">
          <h3>4k+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-box">
          <h3>10k+</h3>
          <p>Property Ready</p>
        </div>
        <div className="stat-box">
          <h3>2k+</h3>
          <p>Agents Available</p>
        </div>
        <div className="stat-box">
          <h3>1k+</h3>
          <p>Rents Available</p>
        </div>
        <div className="stat-box">
          <h3>86%</h3>
          <p>Years Growth</p>
        </div>
      </div>
      </div>
    {/* Footer Section */}
    <div className="footer-Buy">
                <h2 className="footer-title-Buy">
                    <span>Real</span>Estate
                </h2><br/>
                <div className="footer-content-Buy">
                    <div className="footer-section-Buy">
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Rental Guides</p>
                    </div>
                    <div className="footer-section-Buy">
                        <h3>SUPPORT</h3>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Terms and Conditions</p>
                        <p>Feedback</p>
                    </div>
                    <div className="footer-section-Buy">
                        <h3>EXPLORE</h3>
                        <p>Advertise with Us</p>
                        <p>List Property</p>
                        <p>Landlord Resources</p>
                        <p>Become an Agent</p>
                    </div>
                </div>
            </div>    
 </>
  );
};

export default AboutUs;