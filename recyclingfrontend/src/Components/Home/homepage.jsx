import React, { useState } from 'react';
import Navbar from '../navbar.jsx';
import Slider from 'react-slick';
import Footer from '../Footer/footer.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './homepage.css';
import paperIcon from '../image/paper.png';
import plasticIcon from '../image/plastic.png';
import metalIcon from '../image/metal.png';
import glassIcon from '../image/glass.png';


function Homepage() {
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="homepage-wrapper">>
      <Navbar />
      <div className="homepage-content">
        <Slider {...settings}>
          <div>
            <h1>Welcome to Our Recycling Info Page!</h1>
            <p>Learn about the importance of recycling and how it helps our planet.</p>
          </div>
          <div>
            <h1>Join Our Community</h1>
            <p>Connect with others dedicated to sustainable living.</p>
          </div>
          <div>
            <h1>Start Recycling Today</h1>
            <p>Find tips and tricks on how to start recycling at home or work.</p>
          </div>
        </Slider>
        <div className="info-boxes">
          <div className="info-box" onClick={() => handleOpenModal("Recycling paper saves energy, reduces greenhouse gas emissions, and conserves natural resources.")}>
            <h2>Paper</h2>
            <img src={paperIcon} alt="Paper Recycling Icon" />
          </div>
          <div className="info-box" onClick={() => handleOpenModal("Plastic recycling helps reduce waste in landfills, conserves resources, and decreases pollution.")}>
            <h2>Plastic</h2>
            <img src={plasticIcon} alt="Paper Recycling Icon" />
          </div>
          <div className="info-box" onClick={() => handleOpenModal("Glass can be recycled endlessly without loss in quality or purity.")}>
            <h2>Glass</h2>
            <img src={glassIcon} alt="Paper Recycling Icon" />
          </div>
          <div className="info-box" onClick={() => handleOpenModal("Recycling metal saves precious resources, energy and reduces greenhouse gas emissions.")}>
            <h2>Metal</h2>
            <img src={metalIcon} alt="Paper Recycling Icon" />
          </div>
        </div>


        {modalContent && (
          <>
            <div className="overlay" onClick={handleCloseModal}></div>
            <div className="modal">
              <p>{modalContent}</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
