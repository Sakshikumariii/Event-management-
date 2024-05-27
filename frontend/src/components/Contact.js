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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
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
        localStorage.setItem("contacts", JSON.stringify(result));
    };

    return (
        <div className="container mt-5 mb-5 contact-container">
            <h2 className="text-center mb-5">Contact us</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="text-white">
                            Feel free to reach out to us via the following platforms:
                        </p>
                        <ul className="social-icons">
                   
                        <a href="https://www.linkedin.com/in/sakshi-kumari-007a62192/" className="text-white social-icon me-3">
    <i className="fab fa-linkedin"></i>
</a>

    <a href="https://github.com/Sakshikumariii" className="text-white social-icon me-3">
        <i className="fab fa-github-square"></i>
    </a>
                                <a href="/" className="text-white social-icon">
                                    <i className="fab fa-twitter-square"></i>
                                </a>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="contact">
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="tel"
                                placeholder="Enter your phone"
                                name="phone"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                rows="3"
                                placeholder="Enter your message"
                                className="form-control"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button onClick={collectData} id="cont-btn" className="btn bg-black text-white mt-3" type="button">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
