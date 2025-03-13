import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/logo.png";
import bgImage from "../assets/bgimg.png";
import axios from "axios";

function Login() {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = "⚠ Email is required!";
        if (!formData.password) newErrors.password = "⚠ Password is required!";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.post("http://localhost:3001/login", formData);
            console.log(response.data); // Log the response data for debugging
            if (response.data === "Success") {
                navigate("/home");
            } else if (response.data === "❌ Incorrect Password") {
                setErrors({ ...errors, password: "Incorrect password, please try again." });
            } else if (response.data === "❌ No record found") {
                setErrors({ ...errors, email: "No account found with this email." });
            } else {
                alert(response.data);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const handleGoogleLogin = (credentialResponse) => {
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
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div className="login-container">
                <div className="login-left-section">
                    <img className="loginlogo-image" src={logo} alt="logo" width={100} />
                    <br />
                    {!user ? (
                        <form className="login-form" onSubmit={handleSubmit}>
                            <h3>Welcome!</h3>
                            <div className="form-group">
                                <label htmlFor="email">Email address
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? "input-error" : ""}
                                    />
                                    {errors.email && <p className="error-message">{errors.email}</p>}
                                </label>
                            </div>
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

                            <div className="remember-me">
                                <input type="checkbox" id="terms" name="terms" />
                                <label htmlFor="terms">
                                    I agree to the <a href="#" className="terms-link">terms & policy</a>
                                </label>
                            </div>
                            <button type="submit" className="btn-login">Login</button><br/>
                            <br/><GoogleLogin className="btn-logingoogle"
                                onSuccess={handleGoogleLogin}
                                onError={() => console.log("Google Login Failed")}
                            /> 
                        </form>
                    ) : (
                        <div>
                            <p>Welcome, {user.name}!</p>
                            <button className="btn-logoutgoogle" onClick={handleLogout}>Logout</button><br/>
                            <br/><button className="btn-logingoogle" onClick={handleSubmit}>Login</button>
                        </div>
                    )}
                    <br />
                    <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                </div>
                <div className="login-right-section">
                    <img className="bg-img-login" src={bgImage} alt="BackgroundImage" />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
