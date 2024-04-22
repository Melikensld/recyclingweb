import React from "react";
import { useState } from "react";
import './Login.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from  '../Assets/password.png';

const Login = () => {
  const [action, setAction] = useState('Sign Up');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
      const newUser = {
          name: name,
          email: email,
          password: password
      };

      fetch("http://localhost:8080/user/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
      })
      .then(response => {
          if (response.ok) {
              console.log("User registered successfully");
              // Kullanıcı başarıyla kaydedildiyse, isteğin sonucuna göre yönlendirme veya bilgilendirme yapılabilir.
          } else {
              console.error("Error registering user");
              // Kayıt sırasında bir hata oluşursa kullanıcıya bilgilendirme yapılabilir.
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

      fetch("/user/login?email=" + loginUser.email + "&password=" + loginUser.password, {
          method: "POST"
      })
      .then(response => {
          if (response.ok) {
              console.log("Login successful");
              // Giriş başarılı olduğunda yönlendirme veya diğer işlemler burada yapılabilir.
          } else {
              console.error("Invalid credentials");
              // Hatalı giriş durumunda kullanıcıya bilgilendirme yapılabilir.
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