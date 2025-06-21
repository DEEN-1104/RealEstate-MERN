import { Link } from "react-router-dom";
import { useState } from "react";  // ✅ Import useState
import "./buy.css";


import buliding from '../../assets/buliding.jpg'
import homeImage from "../../assets/Home/home.jpg";
import beach from "../../assets/beach.jpg";
import poolhouse from "../../assets/poolhouse.jpg";
import vally from "../../assets/vally.jpg";
import countryhouse from "../../assets/countryhouse.jpg";
import house1 from "../../assets/Home/house1.jpg";
import house2 from "../../assets/Home/house2.jpg";
import house3 from "../../assets/Home/house3.jpg";
import house4 from "../../assets/Home/house4.jpg";
import house5 from "../../assets/Home/house5.jpg";
import house6 from "../../assets/Home/house6.jpg";
import house7 from "../../assets/Home/house7.jpg";
import house8 from "../../assets/Home/house8.jpg";
import house9 from "../../assets/Home/house9.jpg";
import house10 from "../../assets/Home/house10.jpg";
import house11 from "../../assets/Home/house11.jpg";
import house12 from "../../assets/Home/house12.jpg";
import house13 from "../../assets/Home/house13.jpg";
import house14 from "../../assets/Home/house14.jpg";
import house15 from "../../assets/Home/house15.jpg";
import house16 from "../../assets/Home/house16.jpg";
import house17 from "../../assets/Home/house17.jpg";
import house18 from "../../assets/Home/house18.jpg";
import house19 from "../../assets/Home/house19.jpg";
import house20 from "../../assets/Home/house20.jpg";
import house21 from "../../assets/Home/house21.jpg";
import house22 from "../../assets/Home/house22.jpg";
// import house23 from "../assets/house23.jpg";
// import house24 from "../assets/house24.jpg";
const allProperties = [
    { image: house1, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house2, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house3, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house4, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house5, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house6, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house7, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house8, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house9, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house10, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house11, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house12, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house13, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house14, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house15, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house16, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house17, price: "₹45 Lakhs", beds: 5, baths: 6, sqft: "2,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house18, price: "₹35 Lakhs", beds: 3, baths: 4, sqft: "1,500 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house19, price: "₹46 Lakhs", beds: 6, baths: 4, sqft: "3,400 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house20, price: "₹32 Lakhs", beds: 2, baths: 3, sqft: "1,800 sqft", location: "57th Cross, Gandhipuram, TS No.12" },
    { image: house21, price: "₹50 Lakhs", beds: 4, baths: 3, sqft: "3,000 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    { image: house22, price: "₹40k/Per Month", beds: 4, baths: 3, sqft: "2,200 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    // { image: house23, price: "₹30k/Per Month", beds: 2, baths: 2, sqft: "1,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
    // { image: house24, price: "₹3.6 Cr", beds: 8, baths: 10, sqft: "5,500 sqft", location: "5th Cross, Gandhipuram, TS No.12" },
];

export default function Buy() {
    const [favorites, setFavorites] = useState([]);
    const [visibleProperties, setVisibleProperties] = useState(10);
    const userId = "test-user-123"; // Replace with real user ID if available

    const toggleFavorite = async (index) => {
        setFavorites((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    
        const property = allProperties[index];
    
        // Send like to backend only if it's a new favorite
        if (!favorites.includes(index)) {
            try {
                const response = await fetch("http://localhost:3002/like-property", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: userId,
                        propertyId: `${property.price}-${property.location}`, // can be adjusted for uniqueness
                    }),
                });
    
                if (response.ok) {
                    console.log("✅ Liked property saved to DB");
                } else {
                    console.error("❌ Failed to save liked property");
                }
            } catch (error) {
                console.error("❌ Error connecting to backend:", error);
            }
        }
    };
    
    const loadMoreProperties = () => {
        setVisibleProperties((prev) => prev + 6);
    };

    return (
        <div className="Buy-container">
            {/* Navbar */}
            <header className="navbar-buy">
                <div className="logo-Buy">
                    <h2>
                        <span>Real</span>Estate
                    </h2><br/></div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/buy" className="Buy-nav-High">Buy</Link></li>
                        {/* <li><Link to="/sale">Sale</Link></li> */}
                        <li><Link to="/rent" >Rent</Link></li>
                        <li><Link to="/Agent">Agent</Link></li>
                        <Link to="/AboutUS">
                        <li>About Us</li></Link>
                    </ul>
                </nav>
            </header>

            {/* Search Bar */}
            <div className="search-bar-buy">
                <input type="text" placeholder="Address, School, City, Pin Code"/>
                <button className="search-button-buy">🔍</button>
            </div>

            {/* Help Section */}
            <section className="help-section-buy">
                <div className="help-options-buy">
                    <div className="help-option-buy">
                        <Link to="/Apt-buy" className="house-help-option-buy-noton">
                        <img src={buliding} alt="Apartment"/>
                        <p>Apartment</p>
                        </Link>
                    </div>
                    <div className="help-option-buy">
                        <Link to="" className="house-help-option-buy-on">
                        <img src={homeImage} alt="House"/>
                        <p>House</p>
                        </Link>
                    </div>
                    <div className="help-option-buy">
                        <Link to="/BeachHousebuy" className="house-help-option-buy-noton">
                        <img src={beach} alt="Beach House"/>
                        <p>Beach House</p>
                        </Link>
                    </div>
                    <div className="help-option-buy">
                        <Link to="/PoolHousebuy" className="house-help-option-buy-noton">
                        <img src={poolhouse} alt="Pool House"/>
                        <p>Pool House</p>
                        </Link>
                    </div>
                    <div className="help-option-buy">
                        <Link to="/land-buy" className="house-help-option-buy-noton">
                        <img src={vally} alt="Land"/>
                        <p>Land</p>
                        </Link>
                    </div>
                    <div className="help-option-buy">
                        <Link to="/FarmHousebuy" className="house-help-option-buy-noton">
                        <img src={countryhouse} alt="Farm House"/>
                        <p>Farm House</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Filter Options */}
            <div className="FilterOptions-buy">
                <select className="filter-button-buy">Filter
                    <option>Filter</option></select>
                <select className="bed-button-buy">Beds
                    <option>BHK</option>
                    <option>1 bhk</option>
                    <option>2 bhk</option>
                    <option>3 bhk</option>
                    <option>4+ bhk</option>
                </select>
                <select className="price-button-buy">Price
                <option>Price</option></select>
            </div>
            <br/>
            {/* Property Listings */}
            <div className="container-Buy mx-auto p-4">
                <div className="grid-Buy grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {allProperties.slice(0, visibleProperties).map((property, index) => (
                        <div key={index} className="cardrelative-Buy">
                            <button className="Fav-Button-Buy"
                                    onClick={() => toggleFavorite(index)}>
                                {favorites.includes(index) ? "❤" : "🤍"}
                            </button>
                            <img src={property.image} alt="House" className="Houes-Buy"/>
                            <div className="card-content-Buy">
                                <p className="text-lg font-bold">{property.price}</p>
                                <p>{`${property.beds} bed • ${property.baths} bath • ${property.sqft}`}</p>
                                <p className="text-sm text-gray-600">{property.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {visibleProperties < allProperties.length && (
                <div className="Apt-text-center-Buy my-6">
                    <button onClick={loadMoreProperties}>Continue Exploring House</button>
                </div>
            )}
            {/* Top Cities Section */}
            <div className="top-cities-Buy">
                <h2 className="Buy-Foot">Search In Top Cities</h2><br/>
                <div className="cities-container-Buy">
                    <div className="city-column-Buy">
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
                    <div className="city-column-Buy">
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
            <div className="house-bar-Buy"></div>
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
        </div>
    );
}