import React from 'react';

const Dish = () => {
    const dishData = [
        {
            id: 1,
            image: require("../../img/dis1.png"),
            title: "All Special Vegetable Recipes",
            description: "Delight in a variety of vegetarian dishes that showcase the richness of Indian cuisine. These flavorful curries and innovative appetizers will leave a lasting impression on your guests, ensuring everyone is delighted and satisfied.",
            link: "/booking"
        },
        {
            id: 2,
            image: require("../../img/dis2.png"),
            title: "Desi, Rustic Inspiration (Beverage Counters)",
            description: "Add a whimsical touch with rustic-inspired beverage counters. Using elements like straw, bamboo, and earthen pots, create an authentic village feel that adds charm and nostalgia to your event.",
            link: "/booking"
        },
        {
            id: 3,
            image: require("../../img/Dish3.webp"),
            title: "Latest Indian Wedding Food",
            description: "Stay ahead with the latest Indian wedding cuisine. Our menu features contemporary dishes with a fresh take on traditional flavors, ensuring your guests enjoy a memorable dining experience filled with diverse and delicious options.",
            link: "/booking"
        },
        {
            id: 4,
            image: require("../../img/dis4.png"),
            title: "All Dishes Non-Veg and Veg",
            description: "Introduce playful vibes with trending finger foods like cronuts, cheesecakes, and French fry cones. Perfect for weddings on a budget, these dishes create a friendly and welcoming atmosphere, adding fun and enjoyment to the celebration.",
            link: "/booking"
        },
        {
            id: 5,
            image: require("../../img/dis5.png"),
            title: "Wedding Special Recipes in Rajasthan",
            description: "Impress guests with traditional Rajasthani recipes. These authentic dishes showcase the rich culinary heritage of Rajasthan, offering bold flavors and intricate preparations that provide a taste of royalty.",
            link: "/booking"
        },
        {
            id: 6,
            image: require("../../img/dis6.png"),
            title: "Kerala Wedding Sadhya: The Making",
            description: "Experience the elegance of Kerala weddings with the traditional Sadhya. This feast, served on banana leaves, includes diverse dishes that highlight the rich heritage and flavors of Kerala.",
            link: "/booking"
        }
    ];
    
    

    return (
        <section className="dishs" id="Dishs">
            <div className="container mt-5 mb-5">
                <div className="main-text">
                    <h1 id="res-top">Dish</h1>
                </div>
                <div className="row">
                    {dishData.map((dish) => (
                        <div key={dish.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card">
                                <img src={dish.image} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{dish.title}</h5>
                                    <p className="card-text">{dish.description}</p>
                                    <a href={dish.link} className="btn bg-black text-white">Book Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dish;
