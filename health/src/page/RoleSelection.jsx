import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/roleSelection.css'; // Import the CSS

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="role-wrapper">
      <div className="role-card">
        <h2 className="role-title">Select Your Role</h2>
        <button className="role-button doctor" onClick={() => navigate('/doctor')}>
          I'm a Doctor
        </button>
        <button className="role-button patient" onClick={() => navigate('/patient')}>
          I'm a Patient
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
