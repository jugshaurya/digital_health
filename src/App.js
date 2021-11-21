import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage';
import DoctorPage from './pages/DoctorPage';
import PatientPage from './pages/PatientPage';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

import './App.css';
import SignUpPage from './pages/SignUpPage';

function App() {

  const token = JSON.parse(localStorage.getItem('token'));

  const renderSuitablePage = () => {
    if (token.type === 'patient')
      return <Route path={`/patient`} element={<PatientPage />} />;
    else if (token.type === 'doctor')
      return <Route path={`/doctor`} element={<DoctorPage />} />;
    else if (token.type === 'admin')
      return <Route path={`/admin`} element={<AdminPage />} />;

  };
  const onLogoutClick = () => {

    localStorage.removeItem("token")
    window.location.href = `/login`

  }
  const logout = () => {
    return (<Button variant="contained" onClick={
      onLogoutClick
    }>
      Log Out
    </Button >)

  };

  return (
    <div className="App">
      <Navbar />
      {
        token ?
          logout()
          : ""
      }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {token ? (
            renderSuitablePage()
          ) : (
            <Route path={`/error`} element={<ErrorPage />} />
          )}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
