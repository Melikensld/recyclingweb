import React from 'react';
import Navbar from '../navbar';
import Footer from '../Footer/footer';
import './about.css';

function AboutPage() {
  return (
    <div className="about-container">
      <Navbar />
      <section className="about-section">
        <h1 className="section-heading">About Us</h1>
        <p>Our project is designed to enhance sustainable environmental awareness and make recycling processes more comprehensible. Launched in 2023, this initiative aims to create awareness in society through intensive studies on various recycling materials.

          The Environmental Awareness and Effective Recycling Platform Project takes on a leading role in the industry by continuously focusing on improvement. This leadership reinforces our commitment to integrating environmental management and sustainable practices at all stages of our project.

          Our project is dedicated to raising environmental awareness and digitalizing recycling processes through innovative solutions. By leveraging software and hardware innovations, we collaborate with recycling companies, local governments, and municipalities to provide a more sustainable and digital process management.

          This platform offers a scalable, fully integrable, ultra-modern, and modular structure that allows users to manage their companies within a circular economy, achieve sustainability goals, and optimize business processes. With our customer-centric approach, we transparently meet the needs of our users and offer innovations that enhance business value and sustainability by adopting eco-friendly initiatives. Our project impacts millions, providing smart solutions designed for waste management companies, smart cities, and municipalities.
        </p>
        <h2>Development Process of Our Project</h2>
        <p>From the beginning, this project has focused on eco-friendly technologies and sustainable lifestyles. Various studies were conducted to make recycling processes more efficient and to disseminate this knowledge to the community.</p>
        <h2>Our Team</h2>
        <div className="team-section">
          <div className="team-member">
            <h3>Gülsün Görgülü</h3>
            <p>Gülsün, bilgisayar mühendisliği öğrencisi olarak projemizin teknoloji tarafında chatbot yapımı ve projemizin web kısmının kodlanmasında yer almıştır. Web projemizin backend ve frontend kısmında yer almıştır.
            </p>
          </div>
          <div className="team-member">
            <h3>Kürşat Varlı</h3>
            <p>Kürşat, bilgisayar mühendisliği öğrencisi olarak projemizin teknoloji tarafında ve machine learning algoritmasının geliştirilmesinde projemizin web kısmının kodlanmasında yer almıştır. Web projemizin backend ve frontend kısmında yer almıştır.</p>
          </div>
          <div className="team-member">
            <h3>Melike Ünsaldı</h3>
            <p>Melike,bilgisayar mühendisliği öğrencisi olarak projemizin teknoloji tarafında web kısmının kodlanmasında yer almıştır. Frontend, backend ve login kısmının yapımında yer almıştır.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
