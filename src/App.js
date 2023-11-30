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
import Managejobs from "./Dashboard/ManageJobs";
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
import VerifyOtp from "./components/employer/VerifyOtp";
import CreateNewJobs from "./components/employer/CreateNewJobs";
import CreateNewJob from "./Dashboard/CreatNewJobs";
import MyTickets from "./components/tickets/MyTickets";
import RaiseNewTicket from "./components/tickets/RaiseNewTicket";
import ViewTickets from "./components/tickets/ViewTickets";
import EditJobPost from "./components/EditJobPost";
import MyJobs from "./components/jobseeker/MyJobs";
import EmployerProfile from "./components/employer/EmployerProfile";
import ViewCart from "./components/Cart/ViewCart";
import AppliedJobsList from "./components/employer/AppliedJobsList";
import Profile from "./Dashboard/Profile";
import Tickets from "./Dashboard/Tickets";
import SavedJobs from "./Dashboard/SavedJobs";

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
          <Route path='/my-jobs' element={<MyJobs />}></Route>
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/verify-otp' element={<VerifyOtp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/applied-jobs/:id?' element={<AppliedJobsList />} />
          
          {/* Dashboard */}
          <Route path='/dashboard-profile/:id?' element={<Profile />} />
          <Route path='/dashboard-tickets' element={<Tickets />} />
          <Route path='/dashboard-manage-jobs' element={<Managejobs />} />
          <Route path='/dashboard-create-jobs' element={<CreateNewJob />} />
          <Route path="/saved-jobs" element={<SavedJobs />}/>


          {/* <Route path="/jobseeker-signup" element={<JobSeekerSignup />} /> */}

          <Route path='/employer-signup' element={<CompanySignup />} />
          <Route path='/employer-signin' element={<CompanySignin />} />
          <Route path='/employer-profile/:id' element={<EmployerProfile />} />
          <Route path='/faqs' element={<Faq />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/jobs/:id?' element={<Jobs />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/sub-categories' element={<JobCategories />} />
          <Route path='/job-detail/:id' element={<JobDetail />} />
          <Route path='/manage-jobs' element={<ManageJobs />} />
          <Route path='/create-new-job' element={<CreateNewJobs />} />
          <Route path='/edit-jobs-post/:id' element={<EditJobPost />} />
          <Route path='/bookmark-jobs' element={<BookmarkJobs />} />
          <Route path='/profile/:id' element={<MyProfile />} />
          <Route path='/candidates' element={<Candidates />} />
          <Route path='/candidate-detail' element={<CandidateDetail />} />
          <Route path='/candidate-grid' element={<CandidateGrid />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/pricing-plans/:user_type' element={<Pricing />} />
          <Route path='/view-cart' element={<ViewCart />} />

          <Route path='/my-tickets' element={<MyTickets />} />
          <Route path='/raise-new-ticket' element={<RaiseNewTicket />} />
          <Route path='/view-tickets/:id' element={<ViewTickets />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
