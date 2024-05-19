import React, { useState } from 'react';
import Navbar from '../navbar';
import Footer from '../Footer/footer';
import './profile.css';
import {
    FaUserAlt,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaRegLifeRing,
    FaGlassMartiniAlt,
    FaRegPaperPlane, FaRegHourglass, FaBookOpen, FaGlassMartini, FaWineGlassAlt
} from 'react-icons/fa';
import {GiPlasticDuck, GiSodaCan} from "react-icons/gi";

function Profile() {
    const [avatar, setAvatar] = useState(null);
    const userInfo = {
        name: "Kürşat Varlı",
        email: "kursat@example.com",
        phone: "+123456789",
        address: "1234, Example Street, City, Country",
        materials: {
            paper: "150 kg",
            metal: "50 kg",
            glass: "30 kg",
            plastic: "70 kg"
        }
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setAvatar(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-container">
            <Navbar />
            <div className="profile-content">
                <div className="user-info">
                    <div className="avatar-info">
                        <div className="avatar-wrapper">
                            {avatar ? (
                                <img src={avatar} alt="Avatar" className="avatar" />
                            ) : (
                                <div className="avatar-placeholder">No Avatar</div>
                            )}
                            <input
                                type="file"
                                id="avatarUpload"
                                onChange={handleAvatarChange}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor="avatarUpload" className="avatar-label">Change Photo</label>
                        </div>
                        <h1> {userInfo.name}</h1>
                    </div>
                    <p className="icon-text"><FaEnvelope /> {userInfo.email}</p>
                    <p className="icon-text"><FaPhone /> {userInfo.phone}</p>
                    <p className="icon-text"><FaMapMarkerAlt /> {userInfo.address}</p>
                </div>
                <div className="user-materials">
                    <h2>Recycled Materials</h2>
                    <div className="material-items">
                        <div className="material-item">
                            <FaBookOpen className="material-icon"/>
                            <div className="material-name">Paper</div>
                            <div className="material-value">{userInfo.materials.paper}</div>
                        </div>
                        <div className="material-item">
                            <GiSodaCan className="material-icon"/>
                            <div className="material-name">Metal</div>
                            <div className="material-value">{userInfo.materials.metal}</div>
                        </div>
                        <div className="material-item">
                            <FaWineGlassAlt className="material-icon"/>
                            <div className="material-name">Glass</div>
                            <div className="material-value">{userInfo.materials.glass}</div>
                        </div>
                        <div className="material-item">
                            <GiPlasticDuck className="material-icon"/>
                            <div className="material-name">Plastic</div>
                            <div className="material-value">{userInfo.materials.plastic}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
