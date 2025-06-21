import {Link} from "react-router-dom";
import { useState } from "react";
import "./BeachHouserent.css"
import buliding from '../../assets/buliding.jpg'
import homeImage from "../../assets/Home/home.jpg";
import beach from "../../assets/beach.jpg";
import poolhouse from "../../assets/poolhouse.jpg";
import vally from "../../assets/vally.jpg";
import countryhouse from "../../assets/countryhouse.jpg";
import bh1 from "../../assets/BeachHouse/bh1.jpeg";
import bh2 from "../../assets/BeachHouse/bh2.jpeg";
import bh3 from "../../assets/BeachHouse/bh3.jpeg";
import bh4 from "../../assets/BeachHouse/bh4.jpeg";
import bh5 from "../../assets/BeachHouse/bh5.jpeg";
import bh6 from "../../assets/BeachHouse/bh6.jpeg";
import bh7 from "../../assets/BeachHouse/bh7.jpeg";
import bh8 from "../../assets/BeachHouse/bh8.jpeg";
import bh9 from "../../assets/BeachHouse/bh9.jpeg";
import bh10 from "../../assets/BeachHouse/bh10.jpeg";
import bh11 from "../../assets/BeachHouse/bh11.jpeg";
import bh12 from "../../assets/BeachHouse/bh12.jpeg";
import bh13 from "../../assets/BeachHouse/bh13.jpeg";
import bh14 from "../../assets/BeachHouse/bh14.jpeg";
import bh15 from "../../assets/BeachHouse/bh15.jpeg";
import bh16 from "../../assets/BeachHouse/bh16.jpeg";
import bh17 from "../../assets/BeachHouse/bh17.jpeg";
import bh18 from "../../assets/BeachHouse/bh18.jpeg";
import bh19 from "../../assets/BeachHouse/bh19.jpeg";
import bh20 from "../../assets/BeachHouse/bh20.jpeg";
import bh21 from "../../assets/BeachHouse/bh21.jpeg";
import bh22 from "../../assets/BeachHouse/bh22.jpeg";
import bh23 from "../../assets/BeachHouse/bh23.jpeg";
import bh24 from "../../assets/BeachHouse/bh24.jpeg";
const allProperties = [
    { image: bh1, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh2, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh3, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh4, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh5, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh6, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh7, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh8, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh9, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh10, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh11, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh12, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh13, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh14, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh15, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh16, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh17, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh18, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh19, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh20, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: bh21, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh22, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh23, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: bh24, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
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
        setVisibleProperties((prev) =>prev +6);
    };
    return (
        <div className="BeachHouse-Buy-container">
            {/* Navbar */}
            <header className="BeachHouse-navbar-buy">
                <div className="BeachHouse-logo-Buy">
                    <h2>
                        <span>Real</span>Estate
                    </h2><br/></div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/buy" >Buy</Link></li>
                        {/* <li><Link to="/sale">Sale</Link></li> */}
                        <li><Link to="/rent" className="BeachHouseBuy-nav-High">Rent</Link></li>
                        <li><Link to="/Agent">Agent</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Search Bar */}
            <div className="BeachHouse-search-bar-buy">
                <input type="text" placeholder="Address, School, City, Pin Code"/>
                <button className="BeachHouse-search-button-buy">🔍</button>
            </div>

            {/* Help Section */}
            <section className="BeachHouse-help-section-buy">
                <div className="BeachHouse-help-options-buy">
                    <div className="BeachHouse-help-option-buy">
                        <Link to="/Aptrent" className="BeachHouse-help-option-buy-noton">
                            <img src={buliding} alt="Apartment"/>
                            <p >Apartment</p>
                        </Link>
                    </div>
                    <div className="BeachHouse-help-option-buy">
                        <Link to="/rent" className="BeachHouse-help-option-buy-noton">
                            <img src={homeImage} alt="House"/>
                            <p>House</p>
                        </Link>
                    </div>
                    <div className="BeachHouse-help-option-buy">
                        <Link to="" className="PoolHouse-help-option-buy-on">
                            <img src={beach} alt="Beach House"/>
                            <p>Beach House</p>
                        </Link>
                    </div>
                    <div className="BeachHouse-help-option-buy">
                        <Link to="/PoolHouserent" className="BeachHouse-help-option-buy-noton">
                            <img src={poolhouse} alt="Pool House"/>
                            <p>Pool House</p>
                        </Link>
                    </div>
                    <div className="BeachHouse-help-option-buy">
                        <Link to="/landrent" className="BeachHouse-help-option-buy-noton">
                            <img src={vally} alt="Land"/>
                            <p>Land</p>
                        </Link>
                    </div>
                    <div className="BeachHouse-help-option-buy">
                        <Link to="/FarmHouserent" className="BeachHouse-help-option-buy-noton">
                            <img src={countryhouse} alt="Farm House"/>
                            <p>Farm House</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Filter Options */}
            <div className="BeachHouse-FilterOptions-buy">
                <select className="BeachHouse-filter-button-buy">Filter
                <option>Filter</option></select>
                <select className="BeachHouse-bed-button-buy">Beds
                    <option>BHK</option>
                    <option>1 bhk</option>
                    <option>2 bhk</option>
                    <option>3 bhk</option>
                    <option>4+ bhk</option>
                </select>
                <select className="BeachHouse-price-button-buy">Price
                    <option>Price</option></select>
            </div>
            <br/>
            {/* Property Listings */}
            <div className="BeachHouse-container-Buy mx-auto p-4">
                <div className="BeachHouse-grid-Buy grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {allProperties.slice(0, visibleProperties).map((property, index) => (
                        <div key={index} className="Apt-cardrelative-Buy">
                            <button className="BeachHouse-Fav-Button-Buy"
                                    onClick={() => toggleFavorite(index)}
                            >
                                {favorites.includes(index) ? "❤" : "🤍"}
                            </button>
                            <img src={property.image} alt="House" className="Apt-Houes-Buy"/>
                            <div className="BeachHouse-card-content-Buy">
                                <p className="BeachHouse-text-lg font-bold">{property.price}</p>
                                <p>{`${property.beds} bed • ${property.baths} bath • ${property.sqft}`}</p>
                                <p className="text-sm text-gray-600">{property.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {visibleProperties <allProperties.length && (
            <div className="BeachHouse-text-center-Buy my-6">
                <button onClick={loadMoreProperties}>Continue Exploring House</button>
            </div>
            )}
            {/* Top Cities Section */}
            <div className="BeachHouse-top-cities-Buy">
                <h2 className="BeachHouse-Buy-Foot">Search In Top Cities</h2><br/>
                <div className="BeachHouse-cities-container-Buy">
                    <div className="BeachHouse-city-column-Buy">
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
                    <div className="BeachHouse-city-column-Buy">
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
            <div className="BeachHouse-house-bar-Buy"></div>
            {/* Footer Section */}
            <div className="BeachHouse-footer-Buy">
                <h2 className="BeachHouse-footer-title-Buy">
                    <span>Real</span>Estate
                </h2><br/>
                <div className="BeachHouse-footer-content-Buy">
                    <div className="BeachHouse-footer-section-Buy">
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Rental Guides</p>
                    </div>
                    <div className="BeachHouse-footer-section-Buy">
                        <h3>SUPPORT</h3>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Terms and Conditions</p>
                        <p>Feedback</p>
                    </div>
                    <div className="BeachHouse-footer-section-Buy">
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