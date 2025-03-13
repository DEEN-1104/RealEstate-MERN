import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./agentsignup.css"
import logo from "../assets/logo.png";
import bgImage from "../assets/bgimg.png";

function SignUp() {
    const [user, setUser] = useState(null); // Store Google user info
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        RefID: ""  // Added RefID here
    });
    const [errors, setErrors] = useState({}); // Store form validation errors

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form before submission
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "⚠ Name is required!";
        if (!formData.email) newErrors.email = "⚠ Email is required!";
        if (!formData.password) newErrors.password = "⚠ Password is required!";
        if (!formData.RefID) newErrors.RefID = "⚠ Reference ID is required!";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted:", formData);
            // Proceed with signup logic (e.g., API call)
        }
    };

    // Handle Logout
    const handleLogout = () => {
        googleLogout();
        setUser(null);
        console.log("User logged out successfully");
    };

    return (
        <GoogleOAuthProvider clientId="246997270474-5sc5r8dldl3i3mfqk3filj092kn08qgf.apps.googleusercontent.com">
            <div className="agentsigup-container">
                {/* Left Section - Form */}
                <div className="agentsignup-left-section">
                    <div>
                        <img className="agentSignlogo-image" src={logo} alt="logo" />
                    </div>
                    <br /><br />
                    {!user ? (
                        <form className="SignUp-form" onSubmit={handleSubmit}>
                            <div className="text">
                                <h3>Get Started Now !</h3>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? "input-error" : ""}
                                />
                                {/*{errors.name && <p className="error">{errors.name}</p>}*/}
                            </div>
                            <div className="form-group">
                                <label htmlFor="RefID">Reference-ID</label>
                                <input
                                    type="text"
                                    id="RefID"
                                    name="RefID"
                                    placeholder="Enter Your Reference ID"
                                    value={formData.RefID}
                                    onChange={handleChange}
                                    className={errors.RefID ? "input-error" : ""}
                                />
                                {/*{errors.RefID && <p className="error">{errors.RefID}</p>}*/}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? "input-error" : ""}
                                />
                                {/*{errors.email && <p className="error">{errors.email}</p>}*/}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={errors.password ? "input-error" : ""}
                                />
                                {/*{errors.password && <p className="error">{errors.password}</p>}*/}
                            </div>

                            <div className="checkbox-container-agentsignup">
                                <input type="checkbox" id="terms" name="terms" />
                                <label htmlFor="terms">
                                    I agree to the <a href="#" className="terms-link">terms & policy</a>
                                </label>
                            </div>
                            <button type="submit" className="signup-btn-agentsignup">Signup</button>
                            <br/><br/>
                            <div className="Googlelogin-agentsignup">
                            <GoogleLogin
                                onSuccess={(credentialResponse) => {
                                    const decoded = jwtDecode(credentialResponse.credential);
                                    setUser(decoded);
                                    console.log("User logged in:", decoded);
                                }}
                                onError={() => {
                                    console.log("Login Failed");
                                }}
                            />
                            </div>
                        </form>
                    ) : (
                        <div>
                            <p>Welcome, {user.name}!</p>
                            <button className="btn-login" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                    <div className="SignIn">
                        <p>Already have an account? <Link to="/AgentLogin">Login</Link></p>
                    </div>
                </div>

                {/* Right Section - Background Image */}
                <div className="agentsignup-right-section">
                    <img className="agentsignup-bg-img" src={bgImage} alt="BackgroundImage" />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default SignUp;
