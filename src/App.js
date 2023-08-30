import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./components/layouts/Footer";
import JobSeekerSignup from "./JobSeeker/JobSeekerSignup";
import CompanySignup from "./components/employer/CompanySignup";
import CompanySignin from "./components/employer/CompanySignin";
import JobSeekerLogin from "./JobSeeker/JopSeekerLogin";
import Home from "./components/Home";
import About from "./components/About";
import Faq from "./components/Faq";
import Blog from "./components/Blog";
import Jobs from "./components/Jobs";
import JobDetail from "./components/JobDetail";
import Contact from "./components/Contact";
import ManageJobs from "./components/ManageJobs";
import JobPost from "./components/JobPost";
import BookmarkJobs from "./components/BookmarkJobs";
import JobCategories from "./components/JobCategories";
import MyProfile from "./components/MyProfile";
import Services from "./components/Services";
import Candidates from "./components/Candidates";
import Pricing from "./components/Pricing";
import CandidateDetail from "./components/CandidateDetail";
import CandidateGrid from "./components/CandidateGrid";
import PrivacyPolicy from "./components/PrivacyPolicy";
import JobSeekerSignIn from "./components/jobseeker/JobSeekerSignIn";
import JobSeekerSignUp from "./components/jobseeker/JobSeekerSignUp";
import PrivateRoute from "./Routes/PrivateRoutes";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}> </Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<About />}></Route>

          <Route path='/services' element={<Services />}></Route>
          <Route path='/jobseeker-signin' element={<JobSeekerSignIn />}></Route>
          <Route path='/jobseeker-signup' element={<JobSeekerSignUp />}></Route>
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          {/* <Route path="/jobseeker-signup" element={<JobSeekerSignup />} /> */}

          <Route path='/employer-signup' element={<CompanySignup />} />
          <Route path='/employer-signin' element={<CompanySignin />} />
          <Route path='/faqs' element={<Faq />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/sub-categories/:id' element={<JobCategories />} />
          <Route path='/job-detail/:id' element={<JobDetail />} />
          <Route path='/manage-jobs' element={<ManageJobs />} />
          <Route path='/manage-jobs-post' element={<JobPost />} />
          <Route path='/bookmark-jobs' element={<BookmarkJobs />} />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/candidates' element={<Candidates />} />
          <Route path='/candidate-detail' element={<CandidateDetail />} />
          <Route path='/candidate-grid' element={<CandidateGrid />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/pricing-plans' element={<Pricing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
