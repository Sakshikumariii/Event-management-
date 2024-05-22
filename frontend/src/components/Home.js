import React from 'react';
import './All.css';
import About from './About';
import Booking from './Booking';
import Price from './Price';
import Service from './Service';
import Gallery from './Gallery';
import Blog from './Blog';
import Contact from './Contact';   
import Footer from './Footer';

function Home(){ 
    return(
      <div>
  <section className="home d-flex justify-content-center align-items-center" id="home">
  <div className="content-box text-center">
    <h1 className="text-white">Welcome to Event world</h1>
    <h1 className="h1"><span className="changecontent"></span></h1>
    <a href="/booking" className="btn bg-black text-white">Book Now</a>
  </div>
</section>


        <About/>
        <Booking/>
        <Price/>
        <Service/>
        <Gallery/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    );
}
export default Home;
