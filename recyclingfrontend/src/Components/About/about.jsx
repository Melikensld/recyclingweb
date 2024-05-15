import React from 'react';
import Navbar from '../navbar';
import Footer from '../Footer/footer';
import './about.css';

function AboutPage() {
  return (
    <div className="about-container">
      <Navbar />
      <section className="about-section">
        <h1 className="section-heading">Hakkımızda</h1>
        <p>Projemiz, sürdürülebilir çevre bilincini arttırmak ve geri dönüşüm süreçlerini daha anlaşılır kılmak amacıyla tasarlandı. 2023 yılında başlayan bu girişim, çeşitli geri dönüşüm materyalleri üzerinde yoğun çalışmalar yaparak toplumda farkındalık yaratmayı hedeflemektedir.</p>
        <h2>Projemizin Gelişim Süreci</h2>
        <p>Bu projede, başlangıçtan itibaren çevre dostu teknolojiler ve sürdürülebilir yaşam tarzları üzerine yoğunlaşıldı. Geri dönüşüm süreçlerini daha verimli hale getirmek ve bu bilgileri topluma aktarmak adına çeşitli araştırmalar yapıldı.</p>
        <h2>Ekibimiz</h2>
        <div className="team-section">
          <div className="team-member">
            <h3>Aylin Yıldırım</h3>
            <p>Aylin, çevre mühendisliği alanında uzmanlaşmış ve bu projenin lideridir. Sürdürülebilir çevre uygulamaları konusunda derin bir bilgiye sahiptir ve projemizdeki inovatif çözümlerin arkasındaki ana güçtür.</p>
          </div>
          <div className="team-member">
            <h3>Burak Demir</h3>
            <p>Burak, yazılım mühendisi olarak projemizde teknolojik altyapıyı sağlamaktadır. Geri dönüşüm süreçlerinin dijitalleştirilmesi ve kullanıcı deneyimini optimize etme konusunda kritik bir role sahiptir.</p>
          </div>
          <div className="team-member">
            <h3>Elif Çetin</h3>
            <p>Elif, projemizin araştırma ve geliştirme bölümünde çalışmakta olup, yeni geri dönüşüm metodolojileri üzerine çalışmalar yapmaktadır. Ayrıca, toplum içinde çevre bilincini artırmak için eğitim programları düzenlemektedir.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutPage;
