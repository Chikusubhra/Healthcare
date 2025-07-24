import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/doctorDashboard.css'; // Import the CSS file

const DoctorDashboard = () => {
  const navigate = useNavigate();

  // Sample patient data
  const patients = [
    { name: 'John Doe', age: 45, gender: 'Male', condition: 'Diabetes' },
    { name: 'Jane Smith', age: 52, gender: 'Female', condition: 'Heart Disease' },
    { name: 'Rahul Kumar', age: 60, gender: 'Male', condition: 'Hypertension' },
    { name: 'Priya Patel', age: 35, gender: 'Female', condition: 'Asthma' }
  ];

  return (
    <div className="doctor-dashboard">
      <h1 className="dashboard-title">Doctor Dashboard</h1>
      <button
        onClick={() => navigate('/predict')}
        className="predict-button"
      >
        Predict Patient Discharge
      </button>

      <div className="card-container">
        {patients.map((patient, index) => (
          <div key={index} className="patient-card">
            <h3>{patient.name}</h3>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Condition:</strong> {patient.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDashboard;
