

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaRegUser, FaLock } from "react-icons/fa";
import './LoginSignup.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); // Clear previous errors
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password.");
      }

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/"); // Redirect to home page on successful login
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid" style={{backgroundColor:"rgb(143 207 231 / 66%)"}}>
      <div className="login-container shadow">
        <h2 className="text-center">Login</h2>
        <div className="input-group mb-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="input-group-text"><FaRegUser /></span>
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           <span className="input-group-text"><FaLock /></span>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} className="form-control btn btn-dark btn-md btn-block custom-rounded-button" type="button">
          <FaSignInAlt className="login-icon" /> Login
        </button>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <span className="text-center text-sm">or</span>
          <span>Don't have an account, <a href="/signup" className="text-center text-link">SignUp</a></span>
        </div>
      </div>
    </div>
  );
};

export default Login;


