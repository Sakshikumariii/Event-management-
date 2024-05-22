import React from 'react';

const Restaurant=()=>{
    return(
        <section className="restaurants" id="Restaurants">
  <div className="container mt-5 mb-5">
    <div className="main-text">
      <h1 id="res-top">Affordable Resort</h1>
    </div>
    <div className="card-res">
    <div className="row">
      <div className="col-md-4">
      <img src={require("../../img/Resort Image1.jpg")}  alt="" height="220" width="350"/>
      </div>
      <div className='col-md-8'>
        <h3 className='card-tittle'>The Corinthians Resort & Club</h3>
        <p id="res-p">The Corinthians is a five-star hotel located in the verdant hilltop of South Pune. Well-appointed Rooms, Executive and Presidential Suites designed in Moroccan architecture, The Corinthians Boutique Hotel reflects the glory of a bygone era, re-created with all minute details, providing all the modern amenities that the business traveler would wish to have. A stay at The Corinthians Resort & Club promises to be a visual and sensual delight, in true sense.</p>
        <a href="/booking" id="btn-res">Book Now</a>
      </div>
      </div>
      </div>
      <div className="card-res">
    <div className="row">
      <div className="col-md-4">
      <img src={require("../../img/Resort Image2.jpeg")}  alt="" height="220" width="350"/>
      </div>
      <div className='col-md-8'>
        <h3 className='card-tittle'>Pride Amber Villas Resort</h3>
        <p id="res-p">Ever wanted an unforgettable wedding event in Jaipur? Without thinking twice, I would suggest you choose Pride Amber Villas Resort. Experience the royal treatment like never before. This resort is specialized in providing royal treatment to all guests, hosting the wedding events, finest food, fireworks and a lot more. Everything is well planned and arranged to make your big day perfect. </p>
        <a href="/booking" id="btn-res">Book Now</a>
      </div>
      </div>
      </div>
      <div className="card-res">
    <div className="row">
      <div className="col-md-4">
      <img src={require("../../img/Resort Image3.jpg")}  alt="" height="220" width="350"/>
      </div>
      <div className='col-md-8'>
        <h3 className='card-tittle'>Best resorts for destination wedding</h3>
        <p id="res-p">Looking for fine and inspiring destinations for wedding. we in this blog help you find best  resorts for destination wedding and marriage.These resorts are boutique, handpick by our team so that you can save time and we can plan your wedding destination . These resorts provide unique experience in terms of location, offering nature, swimming pool, activities and is far off from city life and ideal for weekend getaway which you always wished.</p>
        <a href="/booking" id="btn-res">Book Now</a>
      </div>
      </div>
      </div>
      <div className="card-res">
    <div className="row">
      <div className="col-md-4">
      <img src={require("../../img/venue-3.jpg")}  alt="" height="220" width="350"/>
      </div>
      <div className='col-md-8'>
        <h3 className='card-tittle'>Luxury wedding venues in Delhi</h3>
        <p id="res-p">Weddings in India has always been a grand and special affair. Whether we talk about the serene decoration or the delicious food, people leave no stone unturned to make their wedding a blockbuster. There are many beautiful wedding venues in Delhi that will surely take your breath away but as your wedding venue.</p>
        <a href="/booking" id="btn-res">Book Now</a>
      </div>
      </div>
      </div>
      <div className="card-res">
    <div className="row">
      <div className="col-md-4">
      <img src={require("../../img/Resort Image5.jpg")}  alt="" height="220" width="350"/>
      </div>
      <div className='col-md-8'>
        <h3 className='card-tittle'>Suryagarh Fort, Jaisalmer</h3>
        <p id="res-p">Suryagarh lies on an outset looking east towards the old city of Jaisalmer and west towards the Thar Desert. Its natural charm provides venues and backdrops straight out of a royal fairy tale. The property comes with 6 wedding venues which includes lawns and courtyards that leave you spellbound while planning a dreamy palatial destination wedding in Rajasthan. </p>
        <a href="/booking" id="btn-res">Book Now</a>
      </div>
      </div>
      </div>
      <div className="card-res">
    <div className="row">
      <div className="col-md-4">
      <img src={require("../../img/Resort Image6.jpg")}  alt="" height="220" width="350"/>
      </div>
      <div className='col-md-8'>
        <h3 className='card-tittle'>Chomu Palace Hotel in Rajasthan</h3>
        <p id="res-p">Chomu Palace, a reflection of the Royal Palaces of India, is a 300 year old elegant fortified palace hotel and one of the places to visit in Rajasthan. It revives the gracious lifestyles of the princes of Rajasthan and the heritage of India. It is an authentic and historic palace that discreetly blends with the modern amenities and facilities. A wedding hosted in Chomu Palace will definitely give a touch of royalty.</p>
        <a href="/booking" id="btn-res">Book Now</a>
      </div>
      </div>
      </div>

      </div>
</section>
    );
};
export default Restaurant;