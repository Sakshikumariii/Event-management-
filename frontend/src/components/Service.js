import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './All.css';

const Service = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="main-text mt-5">
          <h1>
            <span>S</span>ervices
          </h1>
        </div>
        <div className="row">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card" data-aos="flip-left" data-aos-duration="1000">
              <i className="fas fa-hotel"></i>
              <div className="card-body text-center" >
                <h3>Affordable Resort</h3>
                <p>Escape to budget-friendly resorts for a relaxing retreat. Plan your next vacation and indulge in relaxation without worrying about your budget</p>
                <button className="btn bg-black text-white " onClick={() => navigate("/restaurant")}>Learn more</button>
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card" data-aos="flip-left" data-aos-duration="1000">
              <i className="fas fa-video-camera"></i>
              <div className="card-body  text-center">
                <h3>Decoration Available</h3>
                <p>Discover a variety of available decorations to enhance your space. From elegant to stylish accents, find the perfect pieces to your home and create a welcoming atmosphere.</p>
                <button className="btn bg-black text-white" onClick={() => navigate("/decoration")}>Learn more</button>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card" data-aos="flip-right" data-aos-duration="1000">
              <i className="fas fa-utensils"></i>
              <div className="card-body text-center">
                <h3>Dishes Available</h3>
                <p>Explore a diverse array of dishes available to tantalize your taste buds. From savory classics to exotic flavors, savor culinary delights that suit every palate.</p>
                <button className="btn bg-black text-white" onClick={() => navigate("/dish")}>Learn more</button>
              </div>
            </div>
          </div>
          {/* Service 4 */}
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card" data-aos="flip-left" data-aos-duration="1000">
              <i className="fas fa-automobile"></i>
              <div className="card-body text-center">
                <h3>Cars Services Book</h3>
                <p>Book car services hassle-free! From routine maintenance to repairs, find trusted for your vehicle needs. Ensure your car runs smoothly with  reliable service providers.</p>
                <button className="btn bg-black text-white" onClick={() => navigate("/royal")}>Learn more</button>
              </div>
            </div>
          </div>
          {/* Service 5 */}
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card" data-aos="flip-left" data-aos-duration="1000">
              <i className="fa fa-plane"></i>
              <div className="card-body text-center">
                <h3>Airplane Services Available</h3>
                <p>Discover a range of airplane services available to cater to your needs. From ticket booking to flight, travel experience with trusted providers offering quality service and comfort.</p>
                <button className="btn bg-black text-white" onClick={() => navigate("/airplane")}>Learn more</button>
              </div>
            </div>
          </div>
          {/* Service 6 */}
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card" data-aos="flip-right" data-aos-duration="1000">
              <i className="fas fa-comment-dollar"></i>
              <div className="card-body text-center">
                <h3>Finance provide</h3>
                <p>Access comprehensive finance services tailored to your needs. From investment achieve your financial goals with expert guidance and personalized support.</p>
                <button className="btn bg-black text-white" onClick={() => navigate("/finance")}>Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
