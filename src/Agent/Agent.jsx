import React from "react";
import "./Agents.css";
import { Link } from "react-router-dom";
// Agents Data
const agentsData = [
  { id: 1, name: "Vishwanathan", location: "Chennai", phone: "+91 75982 22339" },
  { id: 2, name: "Vishwa", location: "Erode", phone: "+91 76958 44676" },
  { id: 3, name: "Vetri", location: "Chennai", phone: "+91 88386 56347" },
  { id: 4, name: "Vickey", location: "Coimbatore", phone: "+91 63834 13252" },
  { id: 5, name: "Poovarasan", location: "Madurai", phone: "+91 93616 14200" },
  { id: 6, name: "Harsha", location: "Salem", phone: "+91 63829 78793" },
  { id: 7, name: "Thagarasu", location: "Vellore", phone: "+91 98653 39829" },
  { id: 8, name: "ArulPandaian", location: "Karur", phone: "+91 84521 64389" },
];

// Top Agents List
const topAgents = [
  { id: 1, name: "Vishwanathan", rank: "🥇" },
  { id: 2, name: "Vetri", rank: "🥈" },
  { id: 3, name: "Vishwa", rank: "🥉" },
  { id: 4, name: "Harsha" },
  { id: 5, name: "Thagarasu" },
  { id: 6, name: "ArulPandaian" },
  { id: 7, name: "Vickey" },
  { id: 8, name: "Poovarasan" },
];
const getInitials = (name) => 
  name.split(" ").map(n => n[0] || "").join("").toUpperCase();

const Agents = () => {
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
            <li><Link to="/Agent" className="Buy-nav-High">Agent</Link></li>
            <li><Link to="/AboutUS">About Us</Link></li>
          </ul>
        </nav>
      </header>
      {/* Agents Section */}
      <section className="agents-container">
        <div className="agents-list">
          {agentsData.map((agent) => (
            <div key={agent.id} className="agent-card">
              <div className="agent-initial">{getInitials(agent.name)}</div>
              <div className="agent-details">
                <h3>{agent.name}</h3>
                <p>{agent.location}</p>
                <a href={`https://wa.me/${agent.phone.replace(/[^0-9]/g, "")}`} 
                   className="whatsapp-btn" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  WhatsApp
                </a>
                <button className="appointment-btn">Book an Appointment</button>
              </div>
            </div>
          ))}
        </div>

        {/* Top Agents Ranking */}
        <aside className="agent-ranking">
          <h3>Top Transacting Agents</h3>
          <ul>
            {topAgents.map(agent => (
              <li key={agent.id}>
                <span className="rank">{agent.rank || agent.id}</span> {agent.name}
              </li>
            ))}
          </ul>
        </aside>
      </section>
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

export default Agents;
