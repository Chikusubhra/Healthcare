import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1 className="home-title">Health Discharge Predictor</h1>
        <p className="home-subtitle">
          Predict if a patient with chronic illness is ready for safe discharge.
        </p>
        <div className="home-buttons">
          <Link to="/login">
            <button className="login-btn">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
