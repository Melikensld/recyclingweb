import React from 'react';
import Navbar from '../navbar';
import Footer from '../Footer/footer';
import './info.css';
import plasticyb from "../image/plasticyb.jpg";
import paperrecycling from "../image/paperrecycling.jpg";

function InfoPage() {
    return (
        <div className="info-container">
            <Navbar />
            <section className="info-section">
                <h1 className="section-heading">What is recycling? Save Our Planet and Environment!</h1>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IsAg-JqJnA8?si=6ogexruqWBRpH6Gh"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <h1 className="section-subheading">How Does Paper Recycling Occur?</h1>
                <p>Paper recycling involves the collection, processing, and repurposing of used paper and cardboard into reusable material. This process is crucial for conserving natural resources, reducing environmental pollution, and improving waste management. Paper is commonly found in large quantities in schools, offices, and homes, making its recycling highly effective. The recycling process includes gathering used papers, washing them, and removing contaminants such as ink. The cleaned paper pulp is then used to produce new paper and cardboard.</p>
                <p>Paper recycling contributes to the preservation of forests as it requires fewer trees to be cut down. Additionally, the production of recycled paper consumes less energy and water compared to the production of new paper. This reduces the carbon footprint and lessens the overall pressure on the environment. Consumers and businesses can contribute to this process by reducing paper usage and properly separating recyclable materials. Awareness and participation from everyone are crucial for maintaining a sustainable environment.</p>
                <div className="image-container">
                    <img src={paperrecycling} alt="Paper Recycling" className="info-image" />
                </div>

                <h1 className="section-subheading">The Paper Recycling Process</h1>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jAqVxsEgWIM?si=wStutAeM-f4L3M4l"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <h1 className="section-subheading">Traceability is Key to Accountability in Plastic Recycling</h1>
                <p>Several reasons make traceability so crucial in plastic recycling, as we all know. To begin with, it is essential to be able to trace recycled plastic products so that the quality of the products can be guaranteed. By tracking the source and composition of plastic waste, you can identify any potential contaminants or impurities that may negatively impact recycling quality. By ensuring that the plastic you receive meets the quality requirements, you can produce high-quality recycled plastic products.</p>
                <p>Traceability also makes recycled plastic products safe for consumers to use. As a recycling company, you can identify hazardous materials or chemicals present in plastic by tracking its source and removing them before it is reused. Furthermore, many countries have legislation requiring companies to track the source and composition of their plastic waste. Using traceability can help you comply with these regulations and avoid any legal issues.</p>
                <div className="image-container">
                    <img src={plasticyb} alt="Plastic Recycling" className="info-image" />
                </div>

                <h1 className="section-subheading">Entire Recycling Process Explained</h1>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cNPEH0GOhRw?si=BqRgnFZQIzpFxxDw"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <h1 className="section-subheading">Recycling for Kids</h1>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6jQ7y_qQYUA?si=g0klAmnpn_Xmg7Ur"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default InfoPage;
