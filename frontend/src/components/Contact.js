import React, { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const validateFields = () => {
        if (!name || !email || !phone || !message) {
            alert("Please fill in all fields.");
            return false;
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        } else if (!validatePhoneNumber(phone)) {
            alert("Please enter a valid phone number.");
            return false;
        } else {
            alert("Successfully submitted");
        }
        return true;
    };

    const validateEmail = (email) => {
        // Email validation logic
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        // Phone number validation logic
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    const collectData = async () => {
        if (!validateFields()) {
            return;
        }

        console.log(name, email, phone, message);
        let result = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
            method: 'post',
            body: JSON.stringify({ name, email, phone, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        // Use localStorage to store the result if needed
        localStorage.setItem("contacts", JSON.stringify(result));
    };

    return (
        <div className="container mt-5 mb-5 contact-container">
            <h2 className="text-center mb-5">Contact us</h2>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-4">
                    {/* Left side information and social media icons */}
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="text-white">
                            Feel free to reach out to us via the following platforms:
                        </p>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <a href="/" className="text-white social-icon me-3">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="/" className="text-white social-icon me-3">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                            <a href="/" className="text-white social-icon me-3">
                                <i className="fab fa-github-square"></i>
                            </a>
                            <a href="/" className="text-white social-icon">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    {/* Form for users to input their contact details */}
                    <div className="contact">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            className="form-control mb-3"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            className="form-control mb-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Enter your phone"
                            name="phone"
                            className="form-control mb-3"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <textarea
                            rows="3"
                            placeholder="Enter your message"
                            className="form-control mb-3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button onClick={collectData} id="cont-btn" className="submit" type="button">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
}
