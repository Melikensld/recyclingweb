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
          <div className="info-box" onClick={() => handleOpenModal("Paper Wase Paper is produced by converting various plant materials into pulp and is considered waste paper or cardboard after its life cycle ends. " +
              "This includes a wide range such as paper packaging, notebooks, writing paper, newspapers, paper bags, books, cardboard boxes, and note papers." +
              " After use, paper materials are compressed and stored separately from other wastes to prevent them from getting wet." +
              " Paper waste undergoes various processes at recycling facilities and is reused in the production of new paper and cardboard." +
              "Recycling paper saves energy, reduces greenhouse gas emissions, and conserves natural resources." +
              "What does the recycling of 1 ton of paper save?" +
              "177 KG Greenhouse Gases" +
              "4100 kWh Energy" +
              "40% Energy Savings" +
              "17 Trees Saved" +
              "2.5 Storage Area")}>
            <h2>Paper</h2>
            <img src={paperIcon} alt="Paper Recycling Icon" />
          </div>
          <div className="info-box" onClick={() => handleOpenModal("Plastic is a substance that can be shaped under the influence of heat and pressure, and can be either organic or synthetic. " +
              "Not all plastics are the same, which means they cannot all be disposed of and recycled in the same way." +
              "Recycled plastics are used in the production of greenhouse coverings, automotive spare parts, plastic bags, sewage pipes, detergent bottles, trash bins, linoleum, and various plastic fillers. " +
              "Plastic waste includes plastic containers, PET cups, cleaning product packaging, personal care product packaging, plastic toys, PET bottles, bottle caps, water coolers, packaging, and nylon bags.\n" +
              "Plastic wastes are first separated according to their types, then subjected to the recycling process. Recyclable plastic wastes separated by type are broken down into small pieces using crushing machines. " +
              "Companies can use these pieces in production by mixing them with raw materials or can melt them again and add additives to use as secondary raw materials." +
              "Plastic recycling helps reduce waste in landfills, conserves resources, and decreases pollution." +
              "What does the recycling of 1 ton of plastic save?\n" +
              "41 KG Greenhouse Gases\n" +
              "5774 kWh Energy\n" +
              "80% Energy Savings\n" +
              "2.3 Storage Area")}>
            <h2>Plastic</h2>
            <img src={plasticIcon} alt="Paper Recycling Icon" />
          </div>
          <div className="info-box" onClick={() => handleOpenModal("Glass is obtained by melting a mixture of sand, soda, potassium, lime, and coloring or bleaching agents under appropriate conditions and shaping it using gradual cooling methods.\n" +
              "After their lifecycle, glass products are classified as glass waste. Glass wastes include beverage bottles, preserve jars, and jam jars.\n" +
              "Glass wastes should be stored separately according to their types of usage." +
              " For example, flat glass (window glass) and container glass (bottle glass) should not be stored together. " +
              "Glass can be recycled infinitely without any loss in quality, making it a very important material in recyclable wastes. " +
              "Recycling glass waste turns it back into raw materials and is remelted during production for reuse. Significant energy savings are achieved with the recycling of glass waste." +
              "Glass can be recycled endlessly without loss in quality or purity.")}>
            <h2>Glass</h2>
            <img src={glassIcon} alt="Paper Recycling Icon" />
          </div>
          <div className="info-box" onClick={() => handleOpenModal( "Metal is produced by processing and purifying various minerals that make up the earth's crust.\n" +
              "The scrap metal industry is vast and complex. Scrap metals have a significant variety and a vast resource base. " +
              "Metal wastes include aluminum beverage cans, oil and paste cans, and tin cans.\n" +
              "The main goals of recovery include reducing the volume of waste to be disposed of, conserving natural resources, and reducing environmental pollution. " +
              "Metals can be recycled indefinitely without compromising their quality. Metal recycling involves a multi-step process that includes collection, sorting, crushing-cutting-shredding, " +
              "transporting-unloading, baling, pressing, repairing for reuse, melting, cooking, refining, using chemicals, shaping, and other processes. Recycling metal waste turns it into raw materials and is remelted during production for reuse. Significant energy savings are achieved with the recovery of metal waste." +
              "Recycling metal saves precious resources, energy and reduces greenhouse gas emissions." +
              "What does the recycling of 1 ton of metal save?\n" +
              "95 KG Greenhouse Gases\n" +
              "642 kWh Energy\n" +
              "1.3 KG Raw Material Savings\n" +
              "90% Energy Savings\n" +
              "3 Storage Area")}>
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
