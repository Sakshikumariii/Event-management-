import React from 'react';

const decorationsData = [
    {
        id: 1,
        image: require("../../img/dec1.png"),
        title: 'Weeding stage Decoration',
        description: 'Creating an enchanting stage decoration for your wedding or any special event is key to making the remarkably outstanding. The stage is the focal point of the venue, where most memorable moments will be captured, so its essential to make it visually stunning.' 
    },
    {
        id: 2,
        image: require("../../img/dec2.png"),
        title: 'dec Organised',
        description: 'Choosing a suitable venue and making appropriate alterations to match the event theme is crucial for dec organization. It involves collaboration between your team, venue management, and possibly an event decorator.'
    },
    {
        id: 3,
        image: require("../../img/dec3.png"),
        title: 'Elegance events decoration',
        description: 'Decorations set the ambiance of a dec, accentuating the venue and ceremony to suit the occasion. They are crucial for creating a grand and memorable event, allowing individuals to customize based on preferences and desired quality.'
    },
    {
        id: 4,
        image: require("../../img/dec4.png"),
        title: 'Table setting for an event dec',
        description: 'Table setting for an event dec or wedding reception, creating a picturesque scene with arrangement. It enhances the experience, complementing the beach ambiance.'
    },
    {
        id: 5,
        image: require("../../img/dec5.png"),
        title: 'Product Launch',
        description: 'Diet Coke launched new flavors and slimmer cans at AES NYC event space Ramscale, offering guests unique photo opportunities and experiences inside themed rooms.'
    },
    {
        id: 6,
        image: require("../../img/dec6.png"),
        title: 'Special decoration',
        description: 'We provide special decorations tailored to individual preferences, ensuring a memorable and well-crafted ambiance for parties and events.'
    }
];


const Decoration = () => {
    return (
        <section className="decorations" id="Decorations">
            <div className="container mt-5 mb-5">
                <div className="main-text">
                    <h1 id="res-top">Decoration</h1>
                </div>
                <div className="row">
                    {decorationsData.map(decoration => (
                        <div className="col-lg-4 col-md-6 mb-4" key={decoration.id}>
                            <div className="card">
                                <img src={decoration.image} className="card-img-top img-fluid" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{decoration.title}</h5>
                                    <p className="card-text">{decoration.description}</p>
                                    <a href="/booking" className="btn bg-black text-white">Book Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Decoration;
