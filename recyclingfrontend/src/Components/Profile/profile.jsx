import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import Footer from '../Footer/footer';
import './profile.css';
import { FaBookOpen, FaWineGlassAlt } from 'react-icons/fa';
import { GiSodaCan, GiPlasticDuck } from 'react-icons/gi';

function Profile() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        materials: {}
    });
    const [avatar, setAvatar] = useState(null);
    const [newMaterials, setNewMaterials] = useState({
        paper: 0,
        metal: 0,
        glass: 0,
        plastic: 0
    });

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
                        materials: data.materials
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

            // userInfo.materials içinde mevcut olan materyal miktarlarını güncelle
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

            // Yeni materyal girişlerini sıfırla
            setNewMaterials({
                paper: 0,
                metal: 0,
                glass: 0,
                plastic: 0
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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
                        <div className="material-item">
                            <FaBookOpen className="material-icon"/>
                            <div className="material-name">Paper</div>
                            <div className="material-value">{userInfo.materials.paper || 0}</div>
                        </div>
                        <div className="material-item">
                            <GiSodaCan className="material-icon"/>
                            <div className="material-name">Metal</div>
                            <div className="material-value">{userInfo.materials.metal || 0}</div>
                        </div>
                        <div className="material-item">
                            <FaWineGlassAlt className="material-icon"/>
                            <div className="material-name">Glass</div>
                            <div className="material-value">{userInfo.materials.glass || 0}</div>
                        </div>
                        <div className="material-item">
                            <GiPlasticDuck className="material-icon"/>
                            <div className="material-name">Plastic</div>
                            <div className="material-value">{userInfo.materials.plastic || 0}</div>
                        </div>
                    </div>
                    <div>
                    <form onSubmit={handleSubmit}>
                                            <h3 className="input-title">Update Materials</h3>
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
                                            <button type="submit" className="submit-button">Update Materials</button>
                                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
