import React from "react";
import "./LoginSignUp.css";

import email_icon from "../Assets/666162.png";
import user_icon from "../Assets/person-4.png";
import password_icon from "../Assets/password.jpg";

import { useState } from "react";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img
              src={user_icon}
              alt=""
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img
            src={email_icon}
            alt=""
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img
            src={password_icon}
            alt=""
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password ? <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign-Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
