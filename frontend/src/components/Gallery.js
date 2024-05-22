import React, { useState } from 'react';
import './All.css'; // Import your CSS file
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

// Define image data
const imageData = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12"
];

export default function Gallery() {
  // State to track which image is currently clicked
  const [selectedImg, setSelectedImg] = useState(null);

  // Function to handle click on an image
  const handleImageClick = (image) => {
    setSelectedImg(image === selectedImg ? null : image);
  };

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="main-text">
          <h1>Gallery</h1>
        </div>
        <div className="row">
          {/* Map through your image data */}
          {imageData.map((image, index) => (
            <div className="col-lg-4 col-md-6 mb-3" key={index}  data-aos="zoom-out-left" data-aos-duration="1000">
              <div className={`card ${selectedImg === image ? 'selected' : ''}`}>
                <div className="card-body">
                  {/* Attach click event handler */}
                  <img
                    src={require(`./../img/${image}.png`)}
                    alt=""
                    height="215"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

