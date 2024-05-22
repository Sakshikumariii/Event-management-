import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import leftImage from '../img/sign.png';
import { FaSignInAlt, FaRegUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import './LoginSignup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [isInputFilled, setIsInputFilled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const { name, email, password, confirmPassword, phone } = formData;
    setIsInputFilled(!!(name && email && password && confirmPassword && phone));
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const collectData = async () => {
    setError(""); // Clear previous errors
    const { name, email, password, confirmPassword, phone } = formData;

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
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
          {['name', 'email', 'password', 'confirmPassword', 'phone'].map((field, idx) => (
            <div className="input-group mb-3" key={idx}>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'password'}
                placeholder={`Enter your ${field}`}
                className="form-control"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
              <span className="input-group-text">
                {field === 'name' && <FaRegUser />}
                {field === 'email' && <FaEnvelope />}
                {field === 'password' && <FaLock />}
                {field === 'confirmPassword' && <FaLock />}
                {field === 'phone' && <FaPhone />}
              </span>
            </div>
          ))}
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
