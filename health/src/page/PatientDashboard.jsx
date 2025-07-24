import React, { useEffect, useState } from 'react';
import '../styles/patientDashboard.css'; // Import the CSS file

const PatientDashboard = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('patientData');
    if (data) {
      setPatientData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="patient-dashboard">
      <h1 className="patient-title">Welcome, Patient</h1>

      {patientData ? (
        <div className="patient-info">
          <p><strong>Age:</strong> {patientData.age}</p>
          <p><strong>Gender:</strong> {patientData.gender}</p>
          <p><strong>Blood Pressure:</strong> {patientData.bp}</p>
          <p><strong>Glucose Level:</strong> {patientData.glucose}</p>
          <p><strong>Disease:</strong> {patientData.disease}</p>
          <p><strong>Test Score:</strong> {patientData.test_score}</p>
          <p className={patientData.prediction === 'Ready' ? 'result-ready' : 'result-notready'}>
            <strong>Prediction:</strong>{' '}
            {patientData.prediction === 'Ready'
              ? '✅ Patient is ready for discharge'
              : '❌ Patient needs more treatment'}
          </p>
        </div>
      ) : (
        <p className="patient-info">Waiting for the doctor to enter health data...</p>
      )}
    </div>
  );
};

export default PatientDashboard;
