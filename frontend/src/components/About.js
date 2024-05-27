import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="main-text">
          <h1>About<span> us</span></h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 py-3 py-md-0">
            <div className="card">
              {/* Add content for the left column if needed */}
            </div>
          </div>
          <div className="col-lg-8 col-md-6 py-3 py-md-0" data-aos="fade-left" data-aos-duration="1000">
            <h2>How event work</h2>
            <p>Event management is a process of organizing a professional and focused event, for a particular target audience. It involves visualizing concepts, planning, budgeting, organizing and executing events such as wedding, musical concerts, corporate seminars, exhibitions, birthday celebrations, theme parties, etc. Event Management is a multi-million-dollar industry, growing rapidly, with events hosted regularly. Event management is the application of project management to the creation and development of large-scale events. An event refers to a social gathering or activity, such as a festival, (for example a musical festival), a ceremony( for example a marriage ) and a party(for example a birthday party).</p>
            <button className="btn btn-primary" id="about-btn">Read more....</button>
          </div>
        </div>
      </div>
    </section>
  );
}
