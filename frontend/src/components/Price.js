import React from "react";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function Price() {

    useEffect(() => {
        AOS.init();
      }, [])
  return (
      <section className="pricing" id="pricing">
          <div className="container">
              <div className="main-text">
                  <h1 id="a2">Pricing</h1>
              </div>
              <div className="row">
                  <div className="col-lg-4 col-md-6 py-3">
                      <div className="card">
                          <img src={require("./../img/price1.png")}  alt="Wedding Ceremony"/>
                          <div className="card-body" >
                              <h3 data-aos="fade-left" data-aos-duration="1000">Destination Wedding</h3>
                              <p data-aos="fade-left" data-aos-duration="1000"> A great wedding venue can help make your wedding fantasy come to life. The costs may soar high as soon as the word ‘luxury’ comes into play. But as the saying goes,  you do get what you pay for luxury Hotel make wedding fantasy and that is luxury at its best.</p>
                              <div className="star">
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                              </div>
                              <h6>Price: <strong>₹80000-200000</strong></h6>
                              <a href="/booking" className="btn bg-black text-white">Book Now</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 py-3">
                      <div className="card">
                          <img src={require("./../img/price2.png")}  alt="Corporate Event"/>
                          <div className="card-body">
                              <h3 data-aos="fade-left" data-aos-duration="1000">Corporate Event</h3>
                              <p data-aos="fade-left" data-aos-duration="1000">Corporate event planning is the process of organizing and coordinating various events for businesses, product launch, company meetings, and organizations. These events can range from company meetings, product launches, conferences, employee training sessions.</p>
                              <div className="star">
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star"></i>
                              </div>
                              <h6>Price: <strong>₹80000-200000</strong></h6>
                              <a href="/booking" className="btn bg-black text-white">Book Now</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 py-3">
                      <div className="card">
                          <img src={require("./../img/price3.png")}  alt="VIP Events"/>
                          <div className="card-body">
                              <h3 data-aos="fade-left" data-aos-duration="1000">VIP Events</h3>
                              <p data-aos="fade-left" data-aos-duration="1000">VIP events are very different from formal events arrangements such as meet and greets, annual dinners, etc. VIP events mean to entertain some special guests or the chief guest is special. These events may be for entertainment and formal events etc.</p>
                              <div className="star">
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                              </div>
                              <h6>Price: <strong>₹80000-200000</strong></h6>
                              <a href="/booking" className="btn bg-black text-white">Book Now</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 py-3">
                      <div className="card">
                          <img src={require("./../img/price4.png")}  alt="Cultural Events"/>
                          <div className="card-body">
                              <h3 data-aos="fade-left" data-aos-duration="1000">Cultural Events</h3>
                              <p data-aos="fade-left" data-aos-duration="1000">Cultural activities bring out the creative side of the students and the participation and organization learning experience a student can have. ‘Vaudeville’, the annual cultural festival, cultural activities of the institute, is a rainbow event with dance, theatre, drama, the year.</p>
                              <div className="star">
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star"></i>
                              </div>
                              <h6>Price: <strong>₹80000-200000</strong></h6>
                              <a href="/booking" className="btn bg-black text-white">Book Now</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 py-3">
                      <div className="card">
                          <img src={require("./../img/price5.png")}  alt="Product Launch"/>
                          <div className="card-body">
                              <h3 data-aos="fade-left" data-aos-duration="1000">Product Launch</h3>
                              <p data-aos="fade-left" data-aos-duration="1000">Product launch events give brands an enormous opportunity to create awareness and generate buzz for a new product. They also generate excitement, and even sales. In this week’s Happy Hour, we explore ways to plan an effective product launch event.</p>
                              <div className="star">
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                              </div>
                              <h6>Price: <strong>₹80000-200000</strong></h6>
                              <a href="/booking" className="btn bg-black text-white">Book Now</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 py-3">
                      <div className="card">
                          <img src={require("./../img/price6.png")}  alt="Birthday Event"/>
                          <div className="card-body">
                              <h3 data-aos="fade-left" data-aos-duration="1000">Birthday Party</h3>
                              <p data-aos="fade-left" data-aos-duration="1000">We are involved in offering the best grade Birthday Events Management. We offer installation service provided to our respected and skilled personnel. We impart t within the given frame of time. All services provided to the patrons at the most affordable price.</p>
                              <div className="star">
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star checked"></i>
                                  <i className="fa-solid fa-star"></i>
                              </div>
                              <h6>Price: <strong>₹80000-200000</strong></h6>
                              <a href="/booking" className="btn bg-black text-white">Book Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
