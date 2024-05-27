import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './All.css';

const Service = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const serviceData = [
    {
      id: 1,
      icon: "fas fa-hotel",
      title: "Affordable Resort",
      description: "Escape to budget-friendly resorts for a relaxing retreat. Plan your next vacation and indulge in relaxation without worrying about your budget. Enjoy the serene environment and comfortable accommodations, making your getaway memorable.",
      link: "/restaurant"
    },
    {
      id: 2,
      icon: "fas fa-video-camera",
      title: "Decoration Available",
      description: "Discover a variety of available decorations to enhance your space. From elegant to stylish accents, find the perfect pieces to your home and create a welcoming atmosphere. Make your events and spaces uniquely beautiful and exceptionally inviting.",
      link: "/decoration"
    },
    {
      id: 3,
      icon: "fas fa-utensils",
      title: "Dishes Available",
      description: "Explore a diverse array of dishes available to tantalize your taste buds. From savory classics to exotic flavors, savor culinary delights that suit every palate. Enjoy a gourmet experience with our wide selection, perfect for all occasions.",
      link: "/dish"
    },
    {
      id: 4,
      icon: "fas fa-automobile",
      title: "Cars Services Book",
      description: "Book car services hassle-free! From routine maintenance to repairs, find trusted services for your vehicle needs. Ensure your car runs smoothly with reliable service providers. Keep your vehicle in top condition and running efficiently.",
      link: "/royal"
    },
    {
      id: 5,
      icon: "fa fa-plane",
      title: "Airplane Services Available",
      description: "Discover a range of airplane services available to cater to your needs. From ticket booking to flight management, travel comfortably with trusted providers offering quality service and reliability. Enhance your flying experience.",
      link: "/airplane"
    },
    {
      id: 6,
      icon: "fas fa-comment-dollar",
      title: "Finance Provide",
      description: "Access comprehensive finance services tailored to your needs. From investment advice to loan management, achieve your financial goals with expert guidance and personalized support. Secure your financial future with us.",
      link: "/finance"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="main-text mt-5">
          <h1>
            <span>S</span>ervices
          </h1>
        </div>
        <div className="row">
          {serviceData.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 py-3">
              <div className="card" data-aos="flip-left" data-aos-duration="500">
                <i className={service.icon}></i>
                <div className="card-body text-center">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="btn bg-gray text-white" onClick={() => navigate(service.link)}>Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
