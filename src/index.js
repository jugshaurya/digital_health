import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
/* Routing */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import DoctorPage from './components/DoctorPage';
import PatientPage from './components/PatientPage';
import AdminPage from './components/AdminPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/doctor" element={<DoctorPage />} />
        <Route path="/login/patient" element={<PatientPage />} />
        <Route path="/login/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
=======
ReactDOM.render(
  <React.StrictMode>
    <App />
>>>>>>> main
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
