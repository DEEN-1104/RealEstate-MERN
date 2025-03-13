import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./agentlogin.css";
import "../assets/logo.png";
import "../assets/bgimg.png";

function SignUp() {
    const [user, setUser] = useState(null); // Store Google user info
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({}); // Store form validation errors

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form before submission
    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = "⚠ Email is required!";
        if (!formData.password) newErrors.password = "⚠ Password is required";
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
            <div className="Agent-log-container">
                {/* Left Section - Form */}
                <div className="Agent-log-left-section">
                    <div>
                        <img className="logo-image" src="/src/assets/logo.png" alt="logo" width={100} />
                    </div>
                   <br/> <h2>Welcome back!</h2>
                    <b>Agent Login !</b>
                    <br />
                    {!user ? (
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                {/*{errors.name && <p className="error">{errors.name}</p>}*/}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={errors.email || "Enter your email"}
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
                                    placeholder={errors.password || "Enter your password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={errors.password ? "input-error" : ""}
                                />
                                {/*{errors.password && <p className="error">{errors.password}</p>}*/}
                            </div>

                            <div className="remember-me-agentlogin">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me for 30 days</label>
                            </div>
                            <button type="submit" className="btn-agentlogin">LogIn</button>
                            {/* Google Login Button */}
                            <br /><br/>
                            <div className="GooLog">
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
                            <button className="btn-agentlogin" onClick={handleLogout}>Logout</button>
                        </div>
                    )}

                    <div className="SignIn">
                        <br/>Have an account? <Link to="/agentsignup">Sign Up</Link>
                    </div>
                </div>

                {/* Right Section - Background Image */}
                <div className="agentlogin-right-section">
                    <img className="bg-img-agentlogin" src="/src/assets/bgimg.png" alt="BackgroundImage" />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default SignUp;
