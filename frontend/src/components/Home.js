import React from 'react';
import About from './About';
import Booking from './Booking';
import Price from './Price';
import Service from './Service';
import Gallery from './Gallery';
import Blog from './Blog';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <section className="home d-flex justify-content-center align-items-center text-center" id="home">
        <div>
          <h1 className="text-white">Welcome to Event World</h1>
          <h1 className="h1"><span className="changecontent"></span></h1>
          <a href="/booking" className="btn bg-black text-white mt-3">Book Now</a>
        </div>
      </section>

      <About />
      <Booking />
      <Price />
      <Service />
      <Gallery />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
