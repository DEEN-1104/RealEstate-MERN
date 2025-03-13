import {Link} from "react-router-dom";
import { useState } from "react";
import "./PoolHousebuy.css"
import buliding from "../assets/buliding.jpg";
import homeImage from "../assets/Home/home.jpg";
import beach from "../assets/beach.jpg";
import poolhouse from "../assets/poolhouse.jpg";
import vally from "../assets/vally.jpg";
import countryhouse from "../assets/countryhouse.jpg";
import ph1 from "../assets/PoolHouse/ph1.jpg";
import ph2 from "../assets/PoolHouse/ph2.jpg";
import ph3 from "../assets/PoolHouse/ph3.jpg";
import ph4 from "../assets/PoolHouse/ph4.jpg";
import ph5 from "../assets/PoolHouse/ph5.jpg";
import ph6 from "../assets/PoolHouse/ph6.jpg";
import ph7 from "../assets/PoolHouse/ph7.jpg";
import ph8 from "../assets/PoolHouse/ph8.jpg";
import ph9 from "../assets/PoolHouse/ph9.jpg";
import ph10 from "../assets/PoolHouse/ph10.jpg";
import ph11 from "../assets/PoolHouse/ph11.jpg";
import ph12 from "../assets/PoolHouse/ph12.jpg";
import ph13 from "../assets/PoolHouse/ph13.jpg";
import ph14 from "../assets/PoolHouse/ph14.jpg";
import ph15 from "../assets/PoolHouse/ph15.jpg";
import ph16 from "../assets/PoolHouse/ph16.jpg";
import ph17 from "../assets/PoolHouse/ph17.jpg";
import ph18 from "../assets/PoolHouse/ph18.jpg";
import ph19 from "../assets/PoolHouse/ph19.jpg";
import ph20 from "../assets/PoolHouse/ph20.jpg";
import ph21 from "../assets/PoolHouse/ph21.jpg";
import ph22 from "../assets/PoolHouse/ph22.jpg";
import ph23 from "../assets/PoolHouse/ph23.jpg";
import ph24 from "../assets/PoolHouse/ph24.jpg";
const allProperties = [
    { image: ph1, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph2, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph3, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph4, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph5, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph6, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph7, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph8, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph9, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph10, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph11, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph12, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph13, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph14, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph15, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph16, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph17, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph18, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph19, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph20, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: ph21, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph22, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph23, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: ph24, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
];

export default function Buy() {
    const [favorites, setFavorites] = useState([]);
    const [visibleProperties, setVisibleProperties] = useState(16);
    const toggleFavorite = (index) => {
        setFavorites((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
    const loadMoreProperties = () => {
        setVisibleProperties((prev) => prev+6);
    };
    return (
        <div className="PoolHouse-Buy-container">
            {/* Navbar */}
            <header className="PoolHouse-navbar-buy">
                <div className="PoolHouse-logo-Buy">
                    <h2>
                        <span>Real</span>Estate
                    </h2><br/></div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/buy" className="PoolHouseBuy-nav-High">Buy</Link></li>
                        <li><Link to="/sale">Sale</Link></li>
                        <li><Link to="/rent">Rent</Link></li>
                        <li><Link to="/agentlogin">Agent</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Search Bar */}
            <div className="PoolHouse-search-bar-buy">
                <input type="text" placeholder="Address, School, City, Pin Code"/>
                <button className="PoolHouse-search-button-buy">🔍</button>
            </div>

            {/* Help Section */}
            <section className="PoolHouse-help-section-buy">
                <div className="PoolHouse-help-options-buy">
                    <div className="PoolHouse-help-option-buy">
                        <Link to="/Apt-buy" className="PoolHouse-help-option-buy-noton">
                            <img src={buliding} alt="Apartment"/>
                            <p >Apartment</p>
                        </Link>
                    </div>
                    <div className="PoolHouse-help-option-buy">
                        <Link to="/buy" className="PoolHouse-help-option-buy-noton">
                            <img src={homeImage} alt="House"/>
                            <p>House</p>
                        </Link>
                    </div>
                    <div className="PoolHouse-help-option-buy">
                        <Link to="/BeachHousebuy" className="PoolHouse-help-option-buy-noton">
                            <img src={beach} alt="Beach House"/>
                            <p>Beach House</p>
                        </Link>
                    </div>
                    <div className="PoolHouse-help-option-buy">
                        <Link to="" className="PoolHouse-help-option-buy-on">
                            <img src={poolhouse} alt="Pool House"/>
                            <p>Pool House</p>
                        </Link>
                    </div>
                    <div className="PoolHouse-help-option-buy">
                        <Link to="/land-buy" className="PoolHouse-help-option-buy-noton">
                            <img src={vally} alt="Land"/>
                            <p>Land</p>
                        </Link>
                    </div>
                    <div className="PoolHouse-help-option-buy">
                        <Link to="/FarmHousebuy" className="PoolHouse-help-option-buy-noton">
                            <img src={countryhouse} alt="Farm House"/>
                            <p>Farm House</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Filter Options */}
            <div className="PoolHouse-FilterOptions-buy">
                <select className="PoolHouse-filter-button-buy">Filter
                <option>Filter</option></select>
                <select className="PoolHouse-bed-button-buy">Beds
                <option>BHK</option>
                <option>1 bhk</option>
                <option>2 bhk</option>
                <option>3 bhk</option>
                <option>4+ bhk</option></select>
                <select className="PoolHouse-price-button-buy">Price
                <option>Price</option></select>
            </div>
            <br/>
            {/* Property Listings */}
            <div className="PoolHouse-container-Buy mx-auto p-4">
                <div className="PoolHouse-grid-Buy grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {allProperties.slice(0, visibleProperties).map((property, index) => (
                        <div key={index} className="Apt-cardrelative-Buy">
                            <button className="PoolHouse-Fav-Button-Buy"
                                    onClick={() => toggleFavorite(index)}
                            >
                                {favorites.includes(index) ? "❤" : "🤍"}
                            </button>
                            <img src={property.image} alt="House" className="Apt-Houes-Buy"/>
                            <div className="PoolHouse-card-content-Buy">
                                <p className="PoolHouse-text-lg font-bold">{property.price}</p>
                                <p>{`${property.beds} bed • ${property.baths} bath • ${property.sqft}`}</p>
                                <p className="text-sm text-gray-600">{property.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {visibleProperties<allProperties.length &&(
            <div className="PoolHouse-text-center-Buy my-6">
                <button onClick={loadMoreProperties}>Continue Exploring House</button>
            </div>
            )}
            {/* Top Cities Section */}
            <div className="PoolHouse-top-cities-Buy">
                <h2 className="PoolHouse-Buy-Foot">Search In Top Cities</h2><br/>
                <div className="PoolHouse-cities-container-Buy">
                    <div className="PoolHouse-city-column-Buy">
                        <p>Saravanampatti</p>
                        <p>Vadavalli</p>
                        <p>Thudiyalur</p>
                        <p>Kavundampalayam</p>
                        <p>Kalapatti</p>
                        <p>Sundarapuram</p>
                        <p>Perur</p>
                        <p>Kinathukadavu</p>
                        <p>Sulur</p>
                        <p>Madukkarai</p>
                    </div>
                    <div className="PoolHouse-city-column-Buy">
                        <p>Singanallur</p>
                        <p>RS Puram</p>
                        <p>Saibaba Colony</p>
                        <p>Gandhipuram</p>
                        <p>Race Course</p>
                        <p>Peelamedu</p>
                        <p>Ukkadam</p>
                        <p>Town Hall</p>
                        <p>Sidhapudur</p>
                        <p>Ganapathy</p>
                    </div>
                </div>
            </div>
            {/* House Illustration Bar */}
            <div className="PoolHouse-house-bar-Buy"></div>
            {/* Footer Section */}
            <div className="PoolHouse-footer-Buy">
                <h2 className="PoolHouse-footer-title-Buy">
                    <span>Real</span>Estate
                </h2><br/>
                <div className="PoolHouse-footer-content-Buy">
                    <div className="PoolHouse-footer-section-Buy">
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Rental Guides</p>
                    </div>
                    <div className="PoolHouse-footer-section-Buy">
                        <h3>SUPPORT</h3>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Terms and Conditions</p>
                        <p>Feedback</p>
                    </div>
                    <div className="PoolHouse-footer-section-Buy">
                        <h3>EXPLORE</h3>
                        <p>Advertise with Us</p>
                        <p>List Property</p>
                        <p>Landlord Resources</p>
                        <p>Become an Agent</p>
                    </div>
                </div>
            </div>
        </div>
    );
}