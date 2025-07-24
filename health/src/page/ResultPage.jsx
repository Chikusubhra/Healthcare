import React from 'react';
import '../styles/resultPage.css'; // Import the CSS file

const ResultPage = () => {
  const result = localStorage.getItem('prediction');

  return (
    <div className="result-wrapper">
      <h2 className="result-title">Prediction Result</h2>
      <div className={`result-box ${result === 'Ready' ? 'result-ready' : 'result-not-ready'}`}>
        {result === 'Ready' 
          ? '✅ Patient is ready for discharge' 
          : '❌ Patient needs more treatment'}
      </div>
    </div>
  );
};

export default ResultPage;
