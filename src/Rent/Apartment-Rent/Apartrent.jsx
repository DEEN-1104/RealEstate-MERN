import {Link} from "react-router-dom";
import { useState } from "react";
import "./Aptrent.css"
import buliding from '../../assets/buliding.jpg'
import homeImage from "../../assets/Home/home.jpg";
import beach from "../../assets/beach.jpg";
import poolhouse from "../../assets/poolhouse.jpg";
import vally from "../../assets/vally.jpg";
import countryhouse from "../../assets/countryhouse.jpg";
import apt1 from "../../assets/Apartment/apt1.jpg";
import apt2 from "../../assets/Apartment/apt2.jpg";
import apt3 from "../../assets/Apartment/apt3.jpg";
import apt4 from "../../assets/Apartment/apt4.jpg";
import apt5 from "../../assets/Apartment/apt5.jpg";
import apt6 from "../../assets/Apartment/apt6.jpg";
import apt7 from "../../assets/Apartment/apt7.jpg";
import apt8 from "../../assets/Apartment/apt8.jpg";
import apt9 from "../../assets/Apartment/apt9.jpg";
import apt10 from "../../assets/Apartment/apt10.jpg";
import apt11 from "../../assets/Apartment/apt11.jpg";
import apt12 from "../../assets/Apartment/apt12.jpg";
import apt13 from "../../assets/Apartment/apt13.jpg";
import apt14 from "../../assets/Apartment/apt14.jpg";
import apt15 from "../../assets/Apartment/apt15.jpg";
import apt16 from "../../assets/Apartment/apt16.jpg";
import apt17 from "../../assets/Apartment/apt17.jpg";
import apt18 from "../../assets/Apartment/apt18.jpg";
import apt19 from "../../assets/Apartment/apt19.jpg";
import apt20 from "../../assets/Apartment/apt20.jpg";
import apt21 from "../../assets/Apartment/apt21.jpg";
import apt22 from "../../assets/Apartment/apt22.jpg";
import apt23 from "../../assets/Apartment/apt23.jpg";
import apt24 from "../../assets/Apartment/apt24.jpg";
const allProperties = [
    { image: apt1, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt2, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt3, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt4, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt5, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt6, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt7, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt8, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt9, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt10, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt11, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt12, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt13, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt14, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt15, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt16, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt17, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt18, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt19, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt20, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: apt21, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt22, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt23, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: apt24, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
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
        setVisibleProperties((prev) => prev + 6);
    };

    return (
        <div className="Apt-Buy-container">
            {/* Navbar */}
            <header className="Apt-navbar-buy">
                <div className="Apt-logo-Buy">
                    <h2><span>Real</span>Estate</h2>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/buy" >Buy</Link></li>
                        <li><Link to="/sale">Sale</Link></li>
                        <li><Link to="/rent" className="AptBuy-nav-High">Rent</Link></li>
                        <li><Link to="/Agent">Agent</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
            </header>
            {/* Search Bar */}
            <div className="Apt-search-bar-buy">
                <input type="text" placeholder="Address, School, City, Pin Code"/>
                <button className="Apt-search-button-buy">🔍</button>
            </div>

            {/* Help Section */}
            <section className="Apt-help-section-buy">
                <div className="Apt-help-options-buy">
                    <div className="Apt-help-option-buy">
                        <Link to="" className="Apt-help-option-buy-on">
                            <img src={buliding} alt="Apartment"/>
                            <p >Apartment</p>
                        </Link>
                    </div>
                    <div className="Apt-help-option-buy">
                        <Link to="/rent" className="Apt-help-option-buy-noton">
                            <img src={homeImage} alt="House"/>
                            <p>House</p>
                        </Link>
                    </div>
                    <div className="Apt-help-option-buy">
                        <Link to="/BeachHouserent" className="Apt-help-option-buy-noton">
                            <img src={beach} alt="Beach House"/>
                            <p>Beach House</p>
                        </Link>
                    </div>
                    <div className="Apt-help-option-buy">
                        <Link to="/PoolHouserent" className="Apt-help-option-buy-noton">
                            <img src={poolhouse} alt="Pool House"/>
                            <p>Pool House</p>
                        </Link>
                    </div>
                    <div className="Apt-help-option-buy">
                        <Link to="/landrent" className="Apt-help-option-buy-noton">
                            <img src={vally} alt="Land"/>
                            <p>Land</p>
                        </Link>
                    </div>
                    <div className="Apt-help-option-buy">
                        <Link to="/FarmHouserent" className="Apt-help-option-buy-noton">
                            <img src={countryhouse} alt="Farm House"/>
                            <p>Farm House</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Filter Options */}
            <div className="Apt-FilterOptions-buy">
                <select className="Apt-filter-button-buy">Filter
                    <option>Filter</option>
                </select>
                <select className="Apt-bed-button-buy">BHK
                    <option>BHK</option>
                    <option>1 bhk</option>
                    <option>2 bhk</option>
                    <option>3 bhk</option>
                    <option>4+ bhk</option>
                </select>
                <select className="Apt-price-button-buy">Price
                    <option>Price</option></select>
            </div>

            {/* Property Listings */}
            <div className="Apt-container-Buy mx-auto p-4">
                <div className="Apt-grid-Buy grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {allProperties.slice(0, visibleProperties).map((property, index) => (
                        <div key={index} className="Apt-cardrelative-Buy">
                            <button className="Apt-Fav-Button-Buy" onClick={() => toggleFavorite(index)}>
                                {favorites.includes(index) ? "❤" : "🤍"}
                            </button>
                            <img src={property.image} alt="House" className="Apt-Houes-Buy"/>
                            <div className="Apt-card-content-Buy">
                                <p className="Apt-text-lg font-bold">{property.price}</p>
                                <p>{`${property.beds} bed • ${property.baths} bath • ${property.sqft}`}</p>
                                <p className="text-sm text-gray-600">{property.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Load More Button */}
            {visibleProperties < allProperties.length && (
                <div className="Apt-text-center-Buy my-6">
                    <button onClick={loadMoreProperties}>Continue Exploring House</button>
                </div>
            )}
    <div className="Apt-top-cities-Buy">
        <h2 className="Apt-Buy-Foot">Search In Top Cities</h2><br/>
        <div className="Apt-cities-container-Buy">
            <div className="Apt-city-column-Buy">
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
            <div className="Apt-city-column-Buy">
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
    <div className="Apt-house-bar-Buy"></div>
    {/* Footer Section */}
    <div className="Apt-footer-Buy">
        <h2 className="Apt-footer-title-Buy">
            <span>Real</span>Estate
        </h2><br/>
        <div className="Apt-footer-content-Buy">
            <div className="Apt-footer-section-Buy">
                <h3>COMPANY</h3>
                <p>About Us</p>
                <p>Career</p>
                <p>Blog</p>
                <p>Rental Guides</p>
            </div>
            <div className="Apt-footer-section-Buy">
                <h3>SUPPORT</h3>
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Terms and Conditions</p>
                <p>Feedback</p>
            </div>
            <div className="Apt-footer-section-Buy">
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