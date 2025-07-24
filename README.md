# Predict Hospital Readmission Risk for Patients with Chronic Conditions

## Objective
Predict readmission risk for patients with chronic conditions using ML.

## Tech Stack
- Python, Pandas, Sklearn
- LabelEncoder, StandardScaler
- Data visualization: Seaborn, Matplotlib

## Features Used
Age, Gender, Blood Type, Stay Duration, Medical Condition, Medication, Billing

#

## Results
- Accuracy: 50-70%
- Key Risk Factors: Stay Duration, Medical Condition, Medication




# 🏥 Patient Discharge Prediction Web App

This project is a web-based application that predicts whether a patient with chronic diseases (like diabetes, hypertension, etc.) is ready for discharge. It is designed for hospitals to assist doctors in making informed decisions and for patients to view their results conveniently.

---

## 📊 Project Type

> 🔍 Built using **Data Visualization techniques** with a pre-trained ML model (no live training on app). It demonstrates the integration of ML predictions in a real-world React-based UI.

---

## 🚀 Tech Stack

### 🌐 Frontend
- React.js
- React Router
- Custom CSS (converted from Tailwind)
- Axios for API calls

### 🧠 Backend
- Flask (Python)
- Trained ML Model (KNN / Random Forest saved as `model.pkl`)
- Joblib for model loading

### 📦 Others
- HTML/CSS
- LocalStorage (for passing prediction result)
- PowerPoint (for project report)
- GitHub (for version control)

---

## 📁 Folder Structure

```bash
patient-discharge-app/
├── health_predict(backend)/
│   ├── Hospital.ipynb       # Python dependencies
│
├── frontend(frontend)/
│   ├── public/
│   ├── src/
│   │   ├── page/        # DoctorDashboard, PatientDashboard, etc.
│   │   ├── styles/            # Custom CSS
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── assets/
│   ├── project_slides.pptx    # PPT for submission
│   └── demo_screenshot.png    # Screenshot of UI
│
├── README.md
└── .gitignore
