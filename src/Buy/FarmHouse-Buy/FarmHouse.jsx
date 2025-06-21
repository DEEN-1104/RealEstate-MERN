import {Link} from "react-router-dom";
import { useState } from "react";
import "./FarmHouse.css"
import buliding from '../../assets/buliding.jpg'
import homeImage from "../../assets/Home/home.jpg";
import beach from "../../assets/beach.jpg";
import poolhouse from "../../assets/poolhouse.jpg";
import vally from "../../assets/vally.jpg";
import countryhouse from "../../assets/countryhouse.jpg";
import fh1 from "../../assets/FarmHouse/fh1.jpg";
import fh2 from "../../assets/FarmHouse/fh2.jpg";
import fh3 from "../../assets/FarmHouse/fh3.jpg";
import fh4 from "../../assets/FarmHouse/fh4.jpg";
import fh5 from "../../assets/FarmHouse/fh5.jpg";
import fh6 from "../../assets/FarmHouse/fh6.jpg";
import fh7 from "../../assets/FarmHouse/fh7.jpg";
import fh8 from "../../assets/FarmHouse/fh8.jpg";
import fh9 from "../../assets/FarmHouse/fh9.jpg";
import fh10 from "../../assets/FarmHouse/fh10.jpg";
import fh11 from "../../assets/FarmHouse/fh11.jpg"
import fh12 from "../../assets/FarmHouse/fh12.jpg";
import fh13 from "../../assets/FarmHouse/fh13.jpg";
import fh14 from "../../assets/FarmHouse/fh14.jpg";
import fh15 from "../../assets/FarmHouse/fh15.jpg";
import fh16 from "../../assets/FarmHouse/fh16.jpg";
import fh17 from "../../assets/FarmHouse/fh17.jpg";
import fh18 from "../../assets/FarmHouse/fh18.jpg";
import fh19 from "../../assets/FarmHouse/fh19.jpg";
import fh20 from "../../assets/FarmHouse/fh20.jpg";
import fh21 from "../../assets/FarmHouse/fh21.jpg";
import fh22 from "../../assets/FarmHouse/fh22.jpg";
import fh23 from "../../assets/FarmHouse/fh23.jpg";
import fh24 from "../../assets/FarmHouse/fh23.jpg";
const allProperties = [
    { image: fh1, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh2, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh3, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh4, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh5, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh6, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh7, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh8, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh9, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh10, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh11, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh12, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh13, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh14, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh15, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh16, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh17, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh18, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh19, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh20, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: fh21, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh22, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh23, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: fh24, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
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
        <div className="FarmHouse-Buy-container">
            {/* Navbar */}
            <header className="FarmHouse-navbar-buy">
                <div className="FarmHouse-logo-Buy">
                    <h2>
                        <span>Real</span>Estate
                    </h2><br/></div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/buy" className="FarmHouseBuy-nav-High">Buy</Link></li>
                        {/* <li><Link to="/sale">Sale</Link></li> */}
                        <li><Link to="/rent" >Rent</Link></li>
                        <li><Link to="/Agent">Agent</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Search Bar */}
            <div className="FarmHouse-search-bar-buy">
                <input type="text" placeholder="Address, School, City, Pin Code"/>
                <button className="FarmHouse-search-button-buy">🔍</button>
            </div>

            {/* Help Section */}
            <section className="FarmHouse-help-section-buy">
                <div className="FarmHouse-help-options-buy">
                    <div className="FarmHouse-help-option-buy">
                        <Link to="/Apt-buy" className="FarmHouse-help-option-buy-noton">
                            <img src={buliding} alt="Apartment"/>
                            <p >Apartment</p>
                        </Link>
                    </div>
                    <div className="FarmHouse-help-option-buy">
                        <Link to="/buy" className="FarmHouse-help-option-buy-noton">
                            <img src={homeImage} alt="House"/>
                            <p>House</p>
                        </Link>
                    </div>
                    <div className="FarmHouse-help-option-buy">
                        <Link to="/BeachHousebuy" className="FarmHouse-help-option-buy-noton">
                            <img src={beach} alt="Beach House"/>
                            <p>Beach House</p>
                        </Link>
                    </div>
                    <div className="FarmHouse-help-option-buy">
                        <Link to="/PoolHousebuy" className="FarmHouse-help-option-buy-noton">
                            <img src={poolhouse} alt="Pool House"/>
                            <p>Pool House</p>
                        </Link>
                    </div>
                    <div className="FarmHouse-help-option-buy">
                        <Link to="/land-buy" className="FarmHouse-help-option-buy-noton">
                            <img src={vally} alt="Land"/>
                            <p>Land</p>
                        </Link>
                    </div>
                    <div className="FarmHouse-help-option-buy">
                        <Link to="" className="FarmHouse-help-option-buy-on">
                            <img src={countryhouse} alt="Farm House"/>
                            <p>Farm House</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Filter Options */}
            <div className="FarmHouse-FilterOptions-buy">
                <select className="FarmHouse-filter-button-buy">Filter
                <option>Filter</option></select>
                {/*<button className="FarmHouse-bed-button-buy">Beds</button>*/}
                <select className="FarmHouse-price-button-buy">Price
                <option>Price</option></select>
            </div>
            <br/>
            {/* Property Listings */}
            <div className="FarmHouse-container-Buy mx-auto p-4">
                <div className="FarmHouse-grid-Buy grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {allProperties.slice(0,visibleProperties).map((property, index) => (
                        <div key={index} className="Apt-cardrelative-Buy">
                            <button className="FarmHouse-Fav-Button-Buy"
                                    onClick={() => toggleFavorite(index)}
                            >
                                {favorites.includes(index) ? "❤" : "🤍"}
                            </button>
                            <img src={property.image} alt="House" className="Apt-Houes-Buy"/>
                            <div className="FarmHouse-card-content-Buy">
                                <p className="FarmHouse-text-lg font-bold">{property.price}</p>
                                <p>{`${property.beds} bed • ${property.baths} bath • ${property.sqft}`}</p>
                                <p className="text-sm text-gray-600">{property.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {visibleProperties<allProperties.length &&(
            <div className="FarmHouse-text-center-Buy my-6">
                <button onClick={loadMoreProperties}>Continue Exploring House</button>
            </div>
            )}
            {/* Top Cities Section */}
            <div className="FarmHouse-top-cities-Buy">
                <h2 className="FarmHouse-Buy-Foot">Search In Top Cities</h2><br/>
                <div className="FarmHouse-cities-container-Buy">
                    <div className="FarmHouse-city-column-Buy">
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
                    <div className="FarmHouse-city-column-Buy">
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
            <div className="FarmHouse-house-bar-Buy"></div>
            {/* Footer Section */}
            <div className="FarmHouse-footer-Buy">
                <h2 className="FarmHouse-footer-title-Buy">
                    <span>Real</span>Estate
                </h2><br/>
                <div className="FarmHouse-footer-content-Buy">
                    <div className="FarmHouse-footer-section-Buy">
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Career</p>
                        <p>Blog</p>
                        <p>Rental Guides</p>
                    </div>
                    <div className="FarmHouse-footer-section-Buy">
                        <h3>SUPPORT</h3>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Terms and Conditions</p>
                        <p>Feedback</p>
                    </div>
                    <div className="FarmHouse-footer-section-Buy">
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