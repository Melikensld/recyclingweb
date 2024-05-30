import React, { useState } from 'react';
import Navbar from '../navbar.jsx';
import Footer from '../Footer/footer.jsx';
import './contact.css'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Mesajınız alınmıştır, teşekkür ederiz!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-content">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-info">
          <p className="contact-detail">Telefon: (123) 456-7890</p>
          <p className="contact-detail">Email: info@example.com</p>
          <p className="contact-detail">Adres: Example Street 123, 45678 City</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınız"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail Adresiniz"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınız"
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-submit">Gönder</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;