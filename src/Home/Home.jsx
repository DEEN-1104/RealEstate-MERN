import { useState } from "react";
import "./home.css"
import {Link} from "react-router-dom";
import house1 from "../assets/Home/house1.jpg";
import house2 from "../assets/Home/house2.jpg";
import house3 from "../assets/Home/house3.jpg";
import house4 from "../assets/Home/house4.jpg";
import house5 from "../assets/Home/house5.jpg";
import house6 from "../assets/Home/house6.jpg";
import house7 from "../assets/Home/house7.jpg";
import house8 from "../assets/Home/house8.jpg";
const properties = [
    { image: house1, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house2, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house3, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house4, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house5, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house6, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house7, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house8, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
];

export default function Home() {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (index) => {
        setFavorites((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    return (
        <>
        <div className="App-Home">
            {/* Navbar */}
            <header className="App-header">
                <nav className="navbar-Home">
                <div className="logo-Buy">
                    <h2>
                        <span>Real</span>Estate
                    </h2><br/></div>
                    <ul className="nav-links-Home">
                        <li><a href="#">Home</a></li>
                        <Link to="/buy">
                        <li><a href="#">Buy</a></li></Link>
                        {/* <li><a href="#">Sale</a></li> */}
                        <Link to="/rent">
                        <li><a href="#">Rent</a></li></Link>
                        <Link to="/Agent">
                        <li><a href="#">Agent</a></li></Link>
                        <Link to="/admin/*">
                        <li><a href="#">Admin</a></li></Link>
                        <Link to="/AboutUS">
                        <li><a href="#">About Us</a></li></Link>
                    </ul>
                    <div className="auth-buttons-Home">
                        <Link to="/login">
                        <button className="login-Home">Login</button></Link>
                        <Link to="/signup">
                        <button className="signup-Home">Sign Up</button></Link>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="hero-section-Home">
                    <img src="src/assets/BG_img.jpg" alt="Luxurious house with pool" className="hero-image-Home" />
                    <div className="hero-text-Home">
                        <h1>Discover Your New Home</h1>
                        <p>Helping 100 million renters find their perfect fit.</p>
                        <div className="search-options-Home">
                            <ul>
                                <Link to="/buy">
                                <li><a href="#">Buy</a></li></Link>
                                {/* <li><a href="#">Sale</a></li> */}<Link to="/rent">
                                <li><a href="#">Rent</a></li></Link>
                            </ul>
                        </div>
                        <div className="search-bar-Home">
                            <input type="text" placeholder="Address, School, City, Pin Code" />
                            <button className="search-button-Home">🔍</button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Area Info */}
                <section className="area-info-Home">
                    <h2>What is Happening in Your Area</h2>
                    <p> Whether you are in search of a new residence, an investment opportunity, or simply exploring the area,</p>
                    <p>we are here to assist you in discovering precisely what meets your needs.</p>
                    <p>Coimbatore, Tamil Nadu</p>
                    <div className="stats-Home">
                        <div className="stat-Home"><h4>165</h4><p>Homes For Rent</p></div>
                        <div className="stat-Home"><h4>416</h4><p>Homes For Sale</p></div>
                        <div className="stat-Home"><h4>740</h4><p>Real Estate Agents</p></div>
                        <div className="stat-Home"><h4>251</h4><p>Apartments Available</p></div>
                    </div>
                </section>

                {/* Help Section */}
                <section className="help-section-Home">
                    <h2>How We Can Help?</h2>
                    <div className="help-options-Home">
                        <div className="help-option-Home"><img src="src/assets/buliding.jpg" alt="Apartment" /><p>Apartment</p></div>
                        <div className="help-option-Home"><img src="src/assets/Home/home.jpg" alt="House" /><p>House</p></div>
                        <div className="help-option-Home"><img src="src/assets/beach.jpg" alt="Beach House" /><p>Beach House</p></div>
                        <div className="help-option-Home"><img src="src/assets/poolhouse.jpg" alt="Pool House" /><p>Pool House</p></div>
                        <div className="help-option-Home"><img src="src/assets/vally.jpg" alt="Land" /><p>Land</p></div>
                        <div className="help-option-Home"><img src="src/assets/countryhouse.jpg" alt="Farm House" /><p>Farm House</p></div>
                    </div>
                </section>

                {/* Property Listings */}
                <div className="container-Home mx-auto p-4">
                    <div className="grid-Home grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {properties.map((property, index) => (
                            <div key={index} className="cardrelative-Buy">
                                <button className="Fav-Button-Buy"
                                        onClick={() => toggleFavorite(index)}
                                >
                                    {favorites.includes(index) ? "❤" : "🤍"}
                                </button>
                                <img src={property.image} alt="House" className="Houes-Buy"/>
                                <div className="card-content-Home">
                                    <p className="text-lg font-bold">{property.price}</p>
                                    <p>{`${property.beds} bed • ${property.baths} bath • ${property.sqft}`}</p>
                                    <p className="text-sm text-gray-600">{property.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                    <div className="text-center-Home my-6">
                        <Link to="/buy"><button>Continue Exploring House</button></Link>
                    </div>
                    <div className="bg-red-500 text-white p-6 text-center rounded-lg">
                        <h2 className="text-xl font-bold">List Your Property With Your Ownership Status.</h2>
                        <p className="text-sm mt-2">
                            Here is a compilation of the most memorable real estate company ever
                            created. These engaging catchphrases are paired with the title
                            Greatest Real-Estate of All Time.
                        </p>
                        <div className="mt-4 flex justify-center gap-2">
                            <input placeholder="Enter email address" className="w-1/3" />
                            <button>Subscribe</button>
                        </div>
                </div></main>
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
        </div>
    </>
    );
}