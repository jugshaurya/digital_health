import Navbar from './components/Navbar';
import './App.css';

/* Routing */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DoctorPage from './components/DoctorPage';
import PatientPage from './components/PatientPage';
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';

function App() {

  let token = JSON.parse(localStorage.getItem("token"))

  if (token) {

    let page
    if (token.type == "patient") page = <Route path={`/patient`} element={< PatientPage />} />
    else if (token.type == "doctor") page = <Route path={`/doctor`} element={< DoctorPage />} />
    else if (token.type == "admin") page = <Route path={`/admin`} element={< AdminPage />} />

    return (
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {page}
            <Route path="/*" element={<h2>NOT FOUND</h2>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/patient" element={<LoginPage />} />
          <Route path="/doctor" element={<LoginPage />} />
          <Route path="/admin" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
