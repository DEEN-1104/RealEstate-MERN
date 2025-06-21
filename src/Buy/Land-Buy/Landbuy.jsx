import { Link } from "react-router-dom";
import { useState } from "react";
import "./Landbuy.css"
import buliding from '../../assets/buliding.jpg'
import homeImage from "../../assets/Home/home.jpg";
import beach from "../../assets/beach.jpg";
import poolhouse from "../../assets/poolhouse.jpg";
import vally from "../../assets/vally.jpg";
import countryhouse from "../../assets/countryhouse.jpg";
import land1 from "../../assets/Land/land1.jpg"
import land2 from "../../assets/Land/land2.jpg"
import land3 from "../../assets/Land/land3.jpg"
import land4 from "../../assets/Land/land4.jpg"
import land5 from "../../assets/Land/land5.jpg"
import land6 from "../../assets/Land/land6.jpg"
import land7 from "../../assets/Land/land7.jpg"
import land8 from "../../assets/Land/land8.jpg"
import land9 from "../../assets/Land/land9.jpg"
import land10 from "../../assets/Land/land10.jpg"
import land11 from "../../assets/Land/land11.jpg"
import land12 from "../../assets/Land/land12.jpg"
import land13 from "../../assets/Land/land13.jpg"
import land14 from "../../assets/Land/land14.jpg"
import land15 from "../../assets/Land/land15.jpg"
import land16 from "../../assets/Land/land16.jpg"
import land17 from "../../assets/Land/land17.jpg"
import land18 from "../../assets/Land/land18.jpg"
import land19 from "../../assets/Land/land19.jpg"
import land20 from "../../assets/Land/land20.jpg"
import land21 from "../../assets/Land/land21.jpg"
import land22 from "../../assets/Land/land22.jpg"
import land23 from "../../assets/Land/land23.jpg"
import land24 from "../../assets/Land/land24.jpg"
const allProperties = [
    { image: land1, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land2, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land3, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land4, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land5, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land6, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land7, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land8, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land9, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land10, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land11, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land12, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land13, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land14, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land15, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land16, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land17, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land18, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land19, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land20, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: land21, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land22, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land23, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: land24, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
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
        <div className="Land-Buy-container">
            {/* Navbar */}
            <header className="Land-navbar-buy">
                <div className="Land-logo-Buy">
                    <h2>
                        <span>Real</span>Estate
                    </h2><br/></div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/buy" className="LandBuy-nav-High">Buy</Link></li>
                        {/* <li><Link to="/sale">Sale</Link></li> */}
                        <li><Link to="/rent" >Rent</Link></li>
                        <li><Link to="/Agent">Agent</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Search Bar */}
            <div className="Land-search-bar-buy">
                <input type="text" placeholder="Address, School, City, Pin Code"/>
                <button className="Land-search-button-buy">🔍</button>
            </div>

            {/* Help Section */}
            <section className="Land-help-section-buy">
                <div className="Land-help-options-buy">
                    <div className="Land-help-option-buy">
                    <Link to="/Apt-buy" className="Land-help-option-buy-noton">
                        <img src={buliding} alt="Apartment"/>
                        <p>Apartment</p>
                    </Link>
                    </div>
                    <div className="Land-help-option-buy">
                        <Link to="/buy" className="Land-help-option-buy-noton">
                        <img src={homeImage} alt="House"/>
                        <p>House</p>
                            </Link>
                    </div>
                    <div className="Land-help-option-buy">
                        <Link to="/BeachHousebuy" className="Land-help-option-buy-noton">
                        <img src={beach} alt="Beach House"/>
                        <p>Beach House</p>
                            </Link>
                    </div>
                    <div className="Land-help-option-buy">
                        <Link to="/PoolHousebuy" className="Land-help-option-buy-noton">
                        <img src={poolhouse} alt="Pool House"/>
                        <p>Pool House</p>
                        </Link>
                    </div>
                    <div className="Land-help-option-buy">
                        <Link to="" className="Land-help-option-buy-on">
                        <img src={vally} alt="Land"/>
                        <p>Land</p>
                        </Link>
                    </div>
                    <div className="Land-help-option-buy">
                        <Link to="/FarmHousebuy" className="Land-help-option-buy-noton">
                        <img src={countryhouse} alt="Farm House"/>
                        <p>Farm House</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Filter Options */}
            <div className="Land-FilterOptions-buy">
                <select className="Land-filter-button-buy">Filter
                <option>Filter</option></select>
                <select className="Land-bed-button-buy">Acres
                <option>Acres</option>
                    <option>1 Acre</option>
                    <option>2 Acres</option>
                    <option>3 Acres</option>
                    <option>4+ Acres</option>
                </select>
                <select className="Land-price-button-buy">Price
                <option>Price</option></select>
            </div>
            <br/>
            {/* Property Listings */}
            <div className="Land-container-Buy mx-auto p-4">
                <div className="Land-grid-Buy grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {allProperties.slice(0,visibleProperties).map((property, index) => (
                        <div key={index} className="Land-cardrelative-Buy">
                            <button className="Land-Fav-Button-Buy"
                                    onClick={() => toggleFavorite(index)}
                            >
                                {favorites.includes(index) ? "❤" : "🤍"}
                            </button>
                            <img src={property.image} alt="House" className="Land-Houes-Buy"/>
                            <div className="Land-card-content-Buy">
                                <p className="Land-text-lg font-bold">{property.price}</p>
                                <p>{`${property.beds} bed • ${property.baths} bath • ${property.sqft}`}</p>
                                <p className="text-sm text-gray-600">{property.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {visibleProperties<allProperties.length &&(
            <div className="Land-text-center-Buy my-6">
                <button onClick={loadMoreProperties}>Continue Exploring House</button>
            </div>
            )}
            {/* Top Cities Section */}
            <div className="Land-top-cities-Buy">
                <h2 className="Land-Buy-Foot">Search In Top Cities</h2><br/>
                <div className="Land-cities-container-Buy">
                    <div className="Land-city-column-Buy">
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
                    <div className="Land-city-column-Buy">
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
            <div className="Land-house-bar-Buy"></div>
            {/* Footer Section */}
            <div className="Land-footer-Buy">
                <h2 className="Land-footer-title-Buy">
                    <span>Real</span>Estate
                </h2><br/>
                <div className="Land-footer-content-Buy">
                    <div className="Land-footer-section-Buy">
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Rental Guides</p>
                    </div>
                    <div className="Land-footer-section-Buy">
                        <h3>SUPPORT</h3>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Terms and Conditions</p>
                        <p>Feedback</p>
                    </div>
                    <div className="Land-footer-section-Buy">
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