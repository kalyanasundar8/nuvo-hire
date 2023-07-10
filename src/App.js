import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import JobSeekerSignup from './JobSeeker/JobSeekerSignup';
import EmployerSignup from './Employer/EmployerSignup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/jobseeker-signup" element={<JobSeekerSignup />} />
          <Route path="/employer-signup" element={<EmployerSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
