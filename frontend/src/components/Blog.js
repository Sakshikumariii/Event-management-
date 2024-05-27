import React from 'react';

const blogData = [
  {
    id: 1,
    image: require("./../img/blog1.png"),
    title: "Creative Decoration Ideas for Your Event",
    description: "Explore creative decoration ideas to enhance your event's atmosphere and leave a lasting impression on your guests.",
    link: "/blog1"
  },
  {
    id: 2,
    image: require("./../img/blog2.png"),
    title: "Top Tips for Planning a Flawless Wedding Event",
    description: "Learn essential tips for planning a flawless wedding event, ensuring every detail is perfect for your special day and memorable.",
    link: "/blog2"
  },
  {
    id: 3,
    image: require("./../img/blog3.png"),
    title: "How to Choose the Right Event Venue",
    description: "Discover how to choose the right event venue for your occasion, from weddings to corporate events, and make it unforgettable.",
    link: "/blog3"
  }
];

export default function Blog() {
  return (
    <section className="Blog" id="Blog">
      <div className="container">
        <div className="main-text">
          <h1><span>B</span>log</h1>
        </div>
        <div className="row">
          {blogData.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6 py-3">
              <div className="card">
                <img src={blog.image} alt={`Blog ${blog.id}`} />
                <div className="card-body">
                  <h4>{blog.title}</h4>
                  <p>{blog.description}</p>
                  <button className="btn bg-gray text-white">Read more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
