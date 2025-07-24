import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/predictForm.css'; // Import the CSS file

const PredictForm = () => {
  const [form, setForm] = useState({
    age: '', gender: '', bp: '', glucose: '', disease: '', test_score: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
  try {
    const res = await axios.post('http://localhost:5000/predict', form);
    const prediction = res.data.result;

    // Save both input and result together for patient
    const sharedData = {
      ...form,
      prediction
    };
    localStorage.setItem('patientData', JSON.stringify(sharedData));

    // Optional: also store just the result (if needed)
    localStorage.setItem('prediction', prediction);

    navigate('/result');
  } catch (error) {
    alert("Prediction failed. Please try again.");
  }
};


  return (
    <div className="predict-container">
      <h2 className="predict-title">Patient Data Input</h2>
      {Object.keys(form).map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          className="predict-input"
        />
      ))}
      <button onClick={handleSubmit} className="predict-button">
        Predict
      </button>
    </div>
  );
};

export default PredictForm;
