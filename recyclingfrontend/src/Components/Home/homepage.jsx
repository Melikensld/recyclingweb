import React, {useState} from 'react';
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
import slide1 from '../image/slide1.png';
import slide2 from '../image/slide2.png';
import slide3 from '../image/slide3.png';


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
            <Navbar/>
            <div className="homepage-content">
                <Slider {...settings}>
                    <div>
                        <img src={slide1} alt="Home Recycling Routine" className="slider-image"/>
                        <h1>Make a Difference with Daily Recycling</h1>
                        <p>Coffee cups, newspapers, office papers... Do you know how to recycle these simple items in
                            your daily life? By properly separating your paper waste at home, school, or work, you
                            reduce your environmental impact. Recycled papers are used in the production of new
                            products, helping to conserve natural resources. Remember, every small step can make a big
                            difference!</p>
                    </div>
                    <div>
                        <img src={slide2} alt="Home Recycling Routine" className="slider-image"/>
                        <h1>Enhance Your Home Recycling Routine</h1>
                        <p>Are you utilizing your recycling bin effectively at home? Start by recycling common household
                            items like junk mail, magazines, and cereal boxes. Place a dedicated recycling bin in your
                            kitchen or office to make recycling as easy as throwing trash away. Educating your family
                            about what can be recycled increases the effectiveness of your efforts and helps cultivate a
                            sustainable lifestyle.</p>
                    </div>
                    <div>
                        <img src={slide3} alt="Home Recycling Routine" className="slider-image"/>
                        <h1>Understand the Impact of Recycling Paper</h1>
                        <p>Every ton of recycled paper can save 17 trees, 4,000 kilowatts of energy, and over 3 cubic
                            yards of landfill space. When you choose to recycle, not only are you saving trees but also
                            conserving energy and reducing landfill waste. Start by checking if your paper products are
                            recyclable and make sure they are clean and dry before tossing them in the recycling bin</p>
                    </div>
                </Slider>
                <div className="info-boxes">
                    {/* İnfo boxlar için tıklanabilir alanlar */}
                    <div className="info-box" onClick={() => handleOpenModal("Paper")}>
                        <h2>Paper</h2>
                        <img src={paperIcon} alt="Paper Recycling Icon"/>
                    </div>
                    <div className="info-box" onClick={() => handleOpenModal("Plastic")}>
                        <h2>Plastic</h2>
                        <img src={plasticIcon} alt="Plastic Recycling Icon"/>
                    </div>
                    <div className="info-box" onClick={() => handleOpenModal("Glass")}>
                        <h2>Glass</h2>
                        <img src={glassIcon} alt="Glass Recycling Icon"/>
                    </div>
                    <div className="info-box" onClick={() => handleOpenModal("Metal")}>
                        <h2>Metal</h2>
                        <img src={metalIcon} alt="Metal Recycling Icon"/>
                    </div>
                </div>

                {modalContent && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <h2>More Information</h2>
                                <button className="close-button" onClick={handleCloseModal}>&times;</button>
                            </div>
                            <div className="modal-body">
                                {modalContent === "Paper" && (
                                    <>
                                        <p>Paper is produced by converting various plant materials into pulp and is considered waste paper or cardboard after its life cycle ends. This includes a wide range such as paper packaging, notebooks, writing paper, newspapers, paper bags, books, cardboard boxes, and note papers. After use, paper materials are compressed and stored separately from other wastes to prevent them from getting wet.</p>
                                        <p>Paper waste undergoes various processes at recycling facilities and is reused in the production of new paper and cardboard.Recycling paper saves energy, reduces greenhouse gas emissions, and conserves natural resources.</p>
                                        <p className="bold">What does the recycling of 1 ton of paper save?</p>
                                        <ul>
                                            <li>177 KG Greenhouse Gases</li>
                                            <li>4100 kWh Energy</li>
                                            <li>40% Energy Savings</li>
                                            <li>17 Trees Saved</li>
                                            <li>2.5 Storage Area</li>
                                        </ul>
                                    </>
                                )}
                                {modalContent === "Plastic" && (
                                    <>
                                        <p>Plastic is a substance that can be shaped under the influence of heat and pressure, and can be either organic or synthetic. Not all plastics are the same, which means they cannot all be disposed of and recycled in the same way. Recycled plastics are used in the production of greenhouse coverings, automotive spare parts, plastic bags, sewage pipes, detergent bottles, trash bins, linoleum, and various plastic fillers.</p>
                                        <p>Plastic waste includes plastic containers, PET cups, cleaning product packaging, personal care product packaging, plastic toys, PET bottles, bottle caps, water coolers, packaging, and nylon bags. Plastic wastes are first separated according to their types, then subjected to the recycling process. Recyclable plastic wastes separated by type are broken down into small pieces using crushing machines.</p>
                                        <p>Companies can use these pieces in production by mixing them with raw materials or can melt them again and add additives to use as secondary raw materials. Plastic recycling helps reduce waste in landfills, conserves resources, and decreases pollution.</p>
                                        <p className="bold">What does the recycling of 1 ton of plastic save?</p>
                                        <ul>
                                            <li>41 KG Greenhouse Gases</li>
                                            <li>5774 kWh Energy</li>
                                            <li>80% Energy Savings</li>
                                            <li>2.3 Storage Area</li>
                                        </ul>
                                    </>
                                )}
                                {modalContent === "Glass" && (
                                    <>
                                        <p>Glass is obtained by melting a mixture of sand, soda, potassium, lime, and coloring or bleaching agents under appropriate conditions and shaping it using gradual cooling methods. After their lifecycle, glass products are classified as glass waste. Glass wastes include beverage bottles, preserve jars, and jam jars.</p>
                                        <p>Glass wastes should be stored separately according to their types of usage. For example, flat glass (window glass) and container glass (bottle glass) should not be stored together. Glass can be recycled infinitely without any loss in quality, making it a very important material in recyclable wastes.</p>
                                        <p>Recycling glass waste turns it back into raw materials and is remelted during production for reuse. Significant energy savings are achieved with the recycling of glass waste.</p>
                                        <p>Glass can be recycled endlessly without loss in quality or purity.</p>
                                    </>
                                )}
                                {modalContent === "Metal" && (
                                    <>
                                        <p>Metal is produced by processing and purifying various minerals that make up the earth's crust. The scrap metal industry is vast and complex. Scrap metals have a significant variety and a vast resource base. Metal wastes include aluminum beverage cans, oil and paste cans, and tin cans.</p>
                                        <p>The main goals of recovery include reducing the volume of waste to be disposed of, conserving natural resources, and reducing environmental pollution. Metals can be recycled indefinitely without compromising their quality. Metal recycling involves a multi-step process that includes collection, sorting, crushing-cutting-shredding, transporting-unloading, baling, pressing, repairing for reuse, melting, cooking, refining, using chemicals, shaping, and other processes. Recycling metal waste turns it into raw materials and is remelted during production for reuse. Significant energy savings are achieved with the recovery of metal waste. Recycling metal saves precious resources, energy, and reduces greenhouse gas emissions.</p>
                                        <p className="bold">What does the recycling of 1 ton of metal save?</p>
                                        <ul>
                                            <li>95 KG Greenhouse Gases</li>
                                            <li>642 kWh Energy</li>
                                            <li>1.3 KG Raw Material Savings</li>
                                            <li>90% Energy Savings</li>
                                            <li>3 Storage Area</li>
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default Homepage;
