import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Routing */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorPage from './components/DoctorPage';
import PatientPage from './components/PatientPage';
import AdminPage from './components/AdminPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="doctor" element={<DoctorPage />} />
        <Route path="patient" element={<PatientPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
