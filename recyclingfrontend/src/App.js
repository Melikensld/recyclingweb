import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Home/homepage';
import Login from './Components/LoginSignup/Login';
import AboutPage from './Components/About/about';
import ContactPage from './Components/Contact/contact'
import InfoPage from "./Components/Info/info";
import Profile from "./Components/Profile/profile";
import Flask from "./Components/Flask/flask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/info" element={<InfoPage />} />
        <Route path = "/profile" element={<Profile />} />
        <Route path = "/flask" element={<Flask />} />


        {/* Diğer Route tanımları */}

      </Routes>
    </Router>
  );
}

export default App;
