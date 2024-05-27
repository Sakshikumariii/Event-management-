import React from 'react';

const Restaurant = () => {
    const restaurantData = [
        {
            id: 1,
            image: require("../../img/res1.png"),
            title: "The Corinthians Resort ",
            description: "The Corinthians is a five-star hotel located in the verdant hilltop of South Pune. Well-appointed Rooms, Executive and Presidential Suites designed in Moroccan architecture...",
        link: "/booking"
        },
        {
            id: 2,
            image: require("../../img/res2.png"),
            title: "Pride Amber Villas Resort",
            description: "Ever wanted an unforgettable wedding event in Jaipur? Without thinking twice, I would suggest you choose Villas Resort. Experience the royal treatment like never before...",
            link: "/booking"
        },
        {
            id: 3,
            image: require("../../img/res3.png"),
            title: "Best resorts for  wedding",
            description: "Looking for fine and inspiring destinations for wedding. We help you find the best resorts for destination wedding. These resorts are boutique, handpicked by our team...",
            link: "/booking"
        },
        {
            id: 4,
            image: require("../../img/res4.png"),
            title: "Luxury wedding  in Delhi",
            description: "Weddings in India have always been a grand and special affair. There are many beautiful wedding venues in Delhi that will surely take your breath away...",
            link: "/booking"
        },
        {
            id: 5,
            image: require("../../img/res5.png"),
            title: "Suryagarh Fort, Jaisalmer",
            description: "Suryagarh lies on  looking east towards the old city of Jaisalmer and west towards the Thar Desert. Its natural charm provides venues and  straight out of a royal fairy tale...",
            link: "/booking"
        },
        {
            id: 6,
            image: require("../../img/res6.png"),
            title: "Chomu Palace,Rajasthan",
            description: "Chomu Palace, a reflection of the Royal Palaces of India, is a 300-year-old elegant fortified palace hotel and one of the places to visit in Rajasthan.",
            link: "/booking"
        }
    ];

    return (
        <section className="restaurants" id="Restaurants">
            <div className="container mt-5 mb-5">
                <div className="main-text">
                    <h1 id="res-top">Affordable Resort</h1>
                </div>
                <div className="row">
                    {restaurantData.map((restaurant) => (
                        <div key={restaurant.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <img src={restaurant.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h3 className='card-tittle'>{restaurant.title}</h3>
                                    <p id="res-p">{restaurant.description}</p>
                                    <a href={restaurant.link} className='btn bg-black text-white'>Book Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Restaurant;
