import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'; // Import the external CSS

const Signup = () => {
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem('role', role);
    navigate(role === 'doctor' ? '/doctor' : '/patient');
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <input type="text" placeholder="Name" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input type="password" placeholder="Password" className="signup-input" />
        <select onChange={(e) => setRole(e.target.value)} className="signup-input">
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button onClick={handleSignup} className="signup-button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
