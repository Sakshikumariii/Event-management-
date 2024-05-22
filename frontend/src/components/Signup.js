import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import leftImage from '../img/sign.png';
import { FaSignInAlt, FaRegUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import './LoginSignup.css';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isInputFilled, setIsInputFilled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (name && email && password && confirmPassword && phone) {
      setIsInputFilled(true);
    } else {
      setIsInputFilled(false);
    }
  }, [name, email, password, confirmPassword, phone]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const collectData = async () => {
    setError(""); // Clear previous errors
    if (!validateEmail()) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber()) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      let result = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: "post",
        body: JSON.stringify({ name, email, password, phone }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(process.env.REACT_APP_API_URL);
      result = await result.json();
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "rgb(143 207 231 / 66%)" }}>
      <div className="row Signup-container shadow d-flex">
        <div className="col-lg-6">
          <div className="left-image">
            <img src={leftImage} alt="Left Image" width={300} height={400} />
          </div>
        </div>
        <div className="col-lg-6 right-container">
          <h2 className="text-center">Sign Up</h2>
          <div className="input-group mb-3">
            <input type="text" placeholder="Enter your name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            <span className="input-group-text"><FaRegUser /></span>
          </div>
          <div className="input-group mb-3">
            <input type="email" placeholder="Enter your email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span className="input-group-text"><FaEnvelope /></span>
          </div>
          <div className="input-group mb-3">
            <input type="password" placeholder="Enter your password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <span className="input-group-text"><FaLock /></span>
          </div>
          <div className="input-group mb-3">
            <input type="password" placeholder="Confirm your password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <span className="input-group-text"><FaLock /></span>
          </div>
          <div className="input-group mb-3">
            <input type="tel" placeholder="Enter your phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <span className="input-group-text"><FaPhone /></span>
          </div>
          {error && <p className="error-message text-white">{error}</p>}
          <button onClick={collectData} disabled={!isInputFilled} className="form-control btn btn-dark btn-md btn-block custom-rounded-button" type="button">
            <FaSignInAlt className="login-icon" /> Sign Up
          </button>
          <div className="d-flex justify-content-center text-white align-items-center flex-column">
            <span className="text-center text-sm">or</span>
            <span>Already have an account, <Link to="/login" className="text-center text-link text-white">Login</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
