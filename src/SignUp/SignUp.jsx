import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import logo from "../assets/logo.png";
import bgImage from "../assets/bgimg.png";
import axios from "axios";

function SignUp() {
    const [user, setUser] = useState(null); // Store Google user info
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({}); // Store form validation errors
    const navigate = useNavigate();
    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Remove validation error as user types
        setErrors({ ...errors, [e.target.name]: "" });
    };
    // Validate form before submission
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Please enter your name.";
        if (!formData.email) newErrors.email = "Please enter an email address.";
        if (!formData.password) newErrors.password = "Please enter a password.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // ✅ Return true if no errors
    };
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        axios.post('http://localhost:3001/register', formData)
            .then(response => {
                console.log(response.data);
                alert("✅ Signup successful!");
                navigate('/login');  // Redirect to the login page after successful signup
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    setErrors({ ...errors, email: "This email is already registered." });
                } else {
                    setErrors({ ...errors, general: "An error occurred during registration. Please try again." });
                }
                console.error(error);
            });
    };

    // Handle Google Signup
    const handleGoogleSignup = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        setUser(decoded);
        console.log("Google User:", decoded);
    };

    const handleLogout = () => {
        googleLogout();
        setUser(null);
        console.log("User logged out successfully");
    };

    return (
        <GoogleOAuthProvider clientId="246997270474-5sc5r8dldl3i3mfqk3filj092kn08qgf.apps.googleusercontent.com">
            <div className="signup-container">
                <div className="signup-left-section">
                    <div>
                        <img className="signlogo-image" src={logo} alt="logo" width={100} />
                    </div>
                    <br />
                    {!user ? (
                        <form className="signUp-form" onSubmit={handleSubmit}>
                            <div className="text">
                                <h3>Get Started Now!</h3>
                            </div>

                            {/* Name Field */}
                            <div className="form-group">
                                <label htmlFor="name">Name
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? "input-error" : ""}
                                />
                                {errors.name && <p className="error-message">{errors.name}</p>}
                                </label>
                            </div>
                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email">Email address
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your work email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? "input-error" : ""}
                                />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                                </label>
                            </div>
                            {/* Password Field */}
                            <div className="form-group">
                                <label htmlFor="password">Password
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={errors.password ? "input-error" : ""}
                                />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                                </label>
                            </div>

                            {/* Terms & Conditions Checkbox */}
                            <div className="checkbox-container">
                                <input type="checkbox" id="terms" name="terms" />
                                <label htmlFor="terms">
                                    I agree to the <a href="#" className="terms-link">terms & policy</a>
                                </label>
                            </div>

                            {/* Signup Button */}
                            <button type="submit" className="btn-signup">Signup</button>
                            <br />

                            {/* Google Signup */}
                            <br /><GoogleLogin className="btn-google-signup"
                                onSuccess={handleGoogleSignup}
                                onError={() => {
                                    console.log("Google Login Failed");
                                }}
                            />
                        </form>
                    ) : (
                        <div>
                            <p>Welcome, {user.name}!</p>
                            <button className="btn-logoutgoogle" onClick={handleLogout}>Logout</button><br/>
                            <br/><Link to="login"><button className="btn-logingoogle" onClick={handleSubmit}>Login</button></Link>
                        </div>
                    )}

                    <br />
                    <div className="SignIn">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>

                {/* Right Section - Background Image */}
                <div className="signup-right-section">
                    <img className="bg-img-signup" src={bgImage} alt="BackgroundImage" />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}
export default SignUp;
