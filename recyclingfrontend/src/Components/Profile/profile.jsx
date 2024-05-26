import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import Footer from '../Footer/footer';
import './profile.css';

function Profile() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",

    });
    const [avatar, setAvatar] = useState(null); // Avatar durum değişkeni
    const userId = localStorage.getItem("userId"); // Kullanıcı ID'sini al

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
                        //materials: data.materials
                    });
                    if (data.avatar) {
                        setAvatar(data.avatar); // Avatarı da yanıtta varsa duruma ata
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
                setAvatar(event.target.result); // Yüklenen dosyadan avatarı güncelle
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
                        <h1>{userInfo.name}</h1>
                    </div>

                    <p className="icon-text">📧 {userInfo.email}</p>
                    <p className="icon-text">📞 {userInfo.phone}</p>
                    <p className="icon-text">📍 {userInfo.address}</p>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Profile;