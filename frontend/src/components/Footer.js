import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white p-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Event</h1>
            <p className="text-white">Choose your favorite event.</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
        
          <a href="https://www.linkedin.com/in/sakshi-kumari-007a62192/" className="text-white social-icon me-3">
    <i className="fab fa-linkedin"></i>
</a>

    <a href="https://github.com/Sakshikumariii" className="text-white social-icon me-3">
        <i className="fab fa-github-square"></i>
    </a>
                                <a href="/" className="text-white social-icon">
                                    <i className="fab fa-twitter-square"></i>
                                </a>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h4>Project</h4>
            <div><a href="/" className="text-white footer-link">Changelog</a></div> 
            <div><a href="/" className="text-white footer-link">Status</a></div> 
            <div><a href="/" className="text-white footer-link">License</a></div> 
            <div><a href="/" className="text-white footer-link">All versions</a></div> 
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4>Community</h4>
            <div><a href="/" className="text-white footer-link">GitHub</a></div> 
            <div><a href="/" className="text-white footer-link">Issues</a></div> 
            <div><a href="/" className="text-white footer-link">Project</a></div> 
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4>Help</h4>
            <div><a href="/" className="text-white footer-link">Support</a></div>
            <div><a href="/" className="text-white footer-link">Status</a></div>
            <div><a href="/" className="text-white footer-link">Contact us</a></div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h4>Others</h4>
            <div><a href="/" className="text-white footer-link">Terms of Service</a></div> 
            <div><a href="/" className="text-white footer-link">Privacy Policy</a></div> 
            <div><a href="/" className="text-white footer-link">License</a></div> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
