import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import Footer from '../Footer/footer';
import './profile.css';
import { FaBookOpen, FaWineGlassAlt } from 'react-icons/fa';
import { GiSodaCan, GiPlasticDuck } from 'react-icons/gi';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

function Profile() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        materials: {
            paper: 0,
            metal: 0,
            glass: 0,
            plastic: 0
        }
    });
    const [avatar, setAvatar] = useState(null);
    const [newMaterials, setNewMaterials] = useState({
        paper: 0,
        metal: 0,
        glass: 0,
        plastic: 0
    });
    const [showPopup, setShowPopup] = useState(false);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (userId) {
            fetch(`/api/user/${userId}`)
                .then(response => response.json())
                .then(data => {
                    setUserInfo({
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        address: data.address,
                        materials: data.materials || { paper: 0, metal: 0, glass: 0, plastic: 0 }
                    });
                    if (data.avatar) {
                        setAvatar(data.avatar);
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [userId]);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMaterials({
            ...newMaterials,
            [name]: parseFloat(value)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/user/${userId}/materials`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMaterials)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

                const updatedMaterials = { ...userInfo.materials };
                Object.keys(newMaterials).forEach((key) => {
                    if (updatedMaterials[key]) {
                        updatedMaterials[key] += newMaterials[key];
                    } else {
                        updatedMaterials[key] = newMaterials[key];
                    }
                });

                setUserInfo({
                    ...userInfo,
                    materials: updatedMaterials
                });
                setNewMaterials({
                    paper: 0,
                    metal: 0,
                    glass: 0,
                    plastic: 0
                });
                setShowPopup(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const chartData = {
        labels: ['Paper', 'Metal', 'Glass', 'Plastic'],
        datasets: [
            {
                label: 'Recycled Materials',
                data: [
                    userInfo.materials.paper,
                    userInfo.materials.metal,
                    userInfo.materials.glass,
                    userInfo.materials.plastic
                ],
                backgroundColor: [
                    'rgba(0, 128, 0, 0.6)', // Green for Paper
                    'rgba(178, 34, 34, 0.6)', // Firebrick Red for Metal
                    'rgba(30, 144, 255, 0.6)', // Dodger Blue for Glass
                    'rgba(253, 216, 53, 0.6)'
                ],
                borderColor: [
                    'rgba(0, 128, 0, 1)',
                    'rgba(178, 34, 34, 1)',
                    'rgba(30, 144, 255, 1)',
                    'rgba(253, 216, 53, 1)'
                ],
                borderWidth: 1,
            },
        ],
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
                        <h1>{userInfo.name}</h1>
                    </div>

                    <p className="icon-text">📧 {userInfo.email}</p>
                    <p className="icon-text">📞 {userInfo.phone}</p>
                    <p className="icon-text">📍 {userInfo.address}</p>
                </div>

                <div className="user-materials">
                    <h2>Recycled Materials</h2>
                    <div className="material-items">
                        <div className="material-item paper">
                            <FaBookOpen className="material-icon"/>
                            <div className="material-name">Paper</div>
                            <div className="material-value">{userInfo.materials.paper || 0} kg</div>
                        </div>
                        <div className="material-item metal">
                            <GiSodaCan className="material-icon"/>
                            <div className="material-name">Metal</div>
                            <div className="material-value">{userInfo.materials.metal || 0} kg</div>
                        </div>
                        <div className="material-item glass">
                            <FaWineGlassAlt className="material-icon"/>
                            <div className="material-name">Glass</div>
                            <div className="material-value">{userInfo.materials.glass || 0} kg</div>
                        </div>
                        <div className="material-item plastic">
                            <GiPlasticDuck className="material-icon"/>
                            <div className="material-name">Plastic</div>
                            <div className="material-value">{userInfo.materials.plastic || 0} kg</div>
                        </div>
                    </div>
                    <div className="chart-container">
                        <Pie data={chartData} />
                    </div>
                    <div className="updateMaterial">
                        <button
                            className={`submit-button`}
                            onClick={() => setShowPopup(true)}
                        >
                            Update Materials
                        </button>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-header">
                            <h2>Update Materials</h2>
                            <button className="popup-close" onClick={() => setShowPopup(false)}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="material-input">
                                <label>Paper:</label>
                                <input type="number" name="paper" value={newMaterials.paper} onChange={handleInputChange} />
                            </div>
                            <div className="material-input">
                                <label>Metal:</label>
                                <input type="number" name="metal" value={newMaterials.metal} onChange={handleInputChange} />
                            </div>
                            <div className="material-input">
                                <label>Glass:</label>
                                <input type="number" name="glass" value={newMaterials.glass} onChange={handleInputChange} />
                            </div>
                            <div className="material-input">
                                <label>Plastic:</label>
                                <input type="number" name="plastic" value={newMaterials.plastic} onChange={handleInputChange} />
                            </div>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Profile;