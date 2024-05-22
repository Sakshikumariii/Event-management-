import React from 'react';

export default function Blog() {
  return (
    <section className="Blog" id="Blog">
      <div className="container">
        <div className="main-text">
          <h1><span>B</span>log</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <img src={require("./../img/blog1.png")} alt="Blog 1" />
              <div className="card-body">
                <h4>Important things to keep in mind before booking mehendi artist</h4>
                <p>Important things to keep in mind before booking mehendi artist - looking for the best bridal mehendi artist in India.</p>
                <button className="btn bg-black text-white">Read more</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <img src={require("./../img/blog2.png")} alt="Blog 2" />
              <div className="card-body">
                <h4>Important things to keep in mind before booking mehendi artist</h4>
                <p>Important things to keep in mind before booking mehendi artist - looking for the best bridal mehendi artist in India.</p>
                <button className="btn bg-black text-white">Read more</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 py-3">
            <div className="card">
              <img src={require("./../img/blog3.png")} alt="Blog 3" />
              <div className="card-body">
                <h4>Important things to keep in mind before booking mehendi artist</h4>
                <p>Important things to keep in mind before booking mehendi artist - looking for the best bridal mehendi artist in India.</p>
                <button className="btn bg-black text-white">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
