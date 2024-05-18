import React from 'react';
import Navbar from '../navbar.jsx';
import './profile.css';
import Footer from '../Footer/footer.jsx';

import { FaUserAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Font Awesome ikonlarını içe aktarır

function Profile() {
    const userInfo = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+123456789",
        address: "1234, Example Street, City, Country",
        materials: {
            paper: "150 kg",
            metal: "50 kg",
            glass: "30 kg",
            plastic: "70 kg"
        }
    };

    return (
        <div className="profile-container">
            <Navbar />
            <div className="profile-content">
                <div className="user-info">
                    <h1>{userInfo.name} <FaUserAlt /></h1>
                    <p><FaEnvelope /> {userInfo.email}</p>
                    <p><FaPhone /> {userInfo.phone}</p>
                    <p><FaMapMarkerAlt /> {userInfo.address}</p>
                </div>
                <div className="user-materials">
                    <h2>Recycled Materials</h2>
                    <p>Paper: {userInfo.materials.paper}</p>
                    <p>Metal: {userInfo.materials.metal}</p>
                    <p>Glass: {userInfo.materials.glass}</p>
                    <p>Plastic: {userInfo.materials.plastic}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;