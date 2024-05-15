import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Home/homepage';
import Login from './Components/LoginSignup/Login';
import AboutPage from './Components/About/about';
import ContactPage from './Components/Contact/contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        {/* Diğer Route tanımları */}
      </Routes>
    </Router>
  );
}

export default App;
