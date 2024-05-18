import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // useHistory yerine useNavigate import edin
import './Login.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
    const [action, setAction] = useState('Sign Up');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // useHistory yerine useNavigate kullanın

    const handleSignUp = () => {
        const newUser = {
            name: name,
            email: email,
            password: password
        };

        fetch("http://localhost:8080/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if (response.ok) {
                    console.log("User registered successfully");
                } else {
                    console.error("Error registering user");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    const handleLogin = () => {
        const loginUser = {
            email: email,
            password: password
        };

        fetch("/api/user/login?email=" + loginUser.email + "&password=" + loginUser.password, {
            method: "POST"
        })
            .then(response => {
                if (response.ok) {
                    console.log("Login successful");
                    navigate('/profile'); // Başarılı girişten sonra yönlendirme
                } else {
                    console.error("Invalid credentials");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" &&
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                }
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Sign Up" ?
                <div className="submit-container">
                    <div className="submit" onClick={handleSignUp}>Sign Up</div>
                    <div className="switch-action" onClick={() => setAction("Login")}>Already have an account? <button className="switch-button">Login</button></div>
                </div>
                :
                <div className="submit-container">
                    <div className="submit" onClick={handleLogin}>Login</div>
                    <div className="switch-action" onClick={() => setAction("Sign Up")}>Don't have an account? Sign Up</div>
                </div>
            }
        </div>
    );
}

export default Login;
