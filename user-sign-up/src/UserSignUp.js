import React, { useState } from "react";
import "./UserSignUp.css";

function UserSignUp() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Full Name:", fullName);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Address:", address);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div className="user-sign-up">
      <form onSubmit={handleSubmit} className="user-sign-up-form">
        <div className="form-group">
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserSignUp;
