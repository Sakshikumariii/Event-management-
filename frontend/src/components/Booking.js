import React, { useState, useEffect } from "react";
import './All.css';

const eventNames = [
  "Music Festival",
  "Tech Conference",
  "Art Exhibition",
  "Food Fair",
  "Sports Tournament",
  "Fashion Show",
  "Book Fair",
  "Film Festival",
  "Comic Con",
  "Trade Expo",
  "Craft Fair",
  "Cultural Festival",
  "Science Fair",
  "Gaming Expo",
  "Health Expo",
  "Automobile Expo",
  "Music Concert",
  "Dance Competition",
  "Job Fair",
  "Education Expo",
];

const indianStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

export default function Booking() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const myfunc = () => {
    alert('Successfully booked!');
  }

  const collectData = async () => {
    console.log(name, location, date1, date2, message)
    let result = await fetch(`${process.env.REACT_APP_API_URL}/Booking`, {
      method: 'post',
      body: JSON.stringify({ name, location, date1, date2, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.log(result)
    localStorage.setItem("bookings", JSON.stringify(result))
  }

  useEffect(() => {
    if (name && location && date1 && date2 && message) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, location, date1, date2, message]);

  const handleSubmit = () => {
    if (isFormValid) {
      collectData();
      myfunc();
    } else {
      alert('Please fill all inputs!');
    }
  }

  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="main-text">
          <h1><span>B</span>ooking</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 py-3 py-md-0">
            <div className="card">
              <img src={require('./../img/booking.png')} alt="img"/>
            </div>
          </div>

          <div className="col-lg-8 py-3 py-md-0" id="bor-book">
            <form action="#">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <select className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} required>
                    <option value="">Select Event Name</option>
                    {eventNames.map((eventName, index) => (
                      <option key={index} value={eventName}>{eventName}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <select className="form-control" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required>
                    <option value="">Select Event Location</option>
                    {indianStates.map((state, index) => (
                      <option key={index} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="date" className="form-control" name="date1" value={date1} onChange={(e) => setDate1(e.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="date" className="form-control" name="date2" value={date2} onChange={(e) => setDate2(e.target.value)} required />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <textarea rows="3" className="form-control" name="message" placeholder="Enter the Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <button onClick={handleSubmit} className="btn bg-black text-white" type="button">Book now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};