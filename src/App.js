import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage';
import DoctorPage from './pages/DoctorPage';
import PatientPage from './pages/PatientPage';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    setToken(token);
  }, []);

  const renderSuitablePage = () => {
    if (token.type === 'patient')
      return <Route path={`/patient`} element={<PatientPage />} />;
    else if (token.type === 'doctor')
      return <Route path={`/doctor`} element={<DoctorPage />} />;
    else if (token.type === 'admin')
      return <Route path={`/admin`} element={<AdminPage />} />;
  };

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {token ? (
            renderSuitablePage
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
