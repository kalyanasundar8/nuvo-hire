import React, { useState } from "react"
import './JobSeekerSignup.css';

import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

function JobSeekerSignup() {

    const navigate = useNavigate();

    const [jobseekerType, setJobseekerType ] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [workStatus, setWorkStatus] = useState("");
    const [resume, setResume] = useState("");
    const [terms, setTerms] = useState("");

    const [validationError,setValidationError] = useState({})

    const changeResumeHandler = (event) => {
		setResume(event.target.files[0]);
	};


    const jobSeekerSignup = async (e) => {

        e.preventDefault();
    
        const formData = new FormData()
    
        formData.append('jobseeker_type', jobseekerType)
        formData.append('first_name', firstName)
        formData.append('last_name', lastName)
        formData.append('email', email)
        formData.append('mobile_no', mobileNo)
        formData.append('password', password)
        formData.append('password_confirmation', confirmPassword)
        formData.append('work_status', workStatus)
        formData.append('terms', terms)
        formData.append('resume', resume)

    
        await axios.post(`http://localhost:8000/api/signup-as-jobseeker`, formData).then(({data}) => {
          Swal.fire({
            icon:"success",
            text:data.message
          })
          navigate("/")
        }).catch(({response}) => {
          if( response.status === 422 ) {
            setValidationError(response.data.errors)
          } else {
            Swal.fire({
              text:response.data.message,
              icon:"error"
            })
          }
        })
    }

    return (
        <div>
            <div className="main-content">
                <div className="page-content">
                    <section classname="page-title-box">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="text-center text-white">
                                        <h3 className="mb-4">Contact</h3>
                                        <div className="page-next">
                                            <nav className="d-inline-block" aria-label="breadcrumb text-center">
                                                <ol className="breadcrumb justify-content-center">
                                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Contact</a></li>
                                                    <li className="breadcrumb-item active" aria-current="page"> Contact </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="position-relative" >
                        <div className="shape">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                                <path fill="" fillOpacity="1"
                                    d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                   
                    <section className="section">
                        <div className="container">
                            <div className="row align-items-center mt-5">
                                <div className="col-lg-6">
                                    <div className="section-title mt-4 mt-lg-0">
                                        <h3 className="title">Job Seeker</h3>
                                        <p className="text-muted">Start working with Nuvo Hire that can provide everything you need to generate
                                            awareness, drive traffic, connect.</p>
                                            <br />
                                        <form method="post" onSubmit={jobSeekerSignup}  className="contact-form mt-4" name="myForm" id="myForm">
                                            <span id="error-msg"></span>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3 text-left">
                                                        {/* <label htmlFor="expInput" className="form-label">Worker / Professional</label> */}
                                                        <input 
                                                            type="radio" 
                                                            id="job_seeker_type" 
                                                            name="job_seeker_type" 
                                                            value="Worker" 
                                                            onChange={(event)=> {
                                                                setJobseekerType(event.target.value)
                                                            }} 
                                                        />
                                                        <label for="Worker">I am a Worker</label>
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 text-left">
                                                        {/* <label htmlFor="expInput" className="form-label">Worker / Professional</label> */}
                                                       
                                                        <input 
                                                            type="radio" 
                                                            id="job_seeker_type" 
                                                            name="job_seeker_type" 
                                                            value="Professional"
                                                            onChange={(event)=> {
                                                                setJobseekerType(event.target.value)
                                                            }} 
                                                        />
                                                        <label for="Professional">I am a Skilled Professional</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="nameInput" className="form-label">First Name *</label>
                                                        <input 
                                                            type="text" 
                                                            name="first_name" 
                                                            id="first_name" 
                                                            className="form-control"
                                                            placeholder="Enter your first name"
                                                            value={firstName} 
                                                            onChange={(event)=> {
                                                                setFirstName(event.target.value)
                                                            }} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="nameInput" className="form-label">Last Name</label>
                                                        <input 
                                                            type="text" 
                                                            name="last_name" 
                                                            id="last_name" 
                                                            className="form-control"
                                                            placeholder="Enter your last name" 
                                                            value={lastName} 
                                                            onChange={(event)=> {
                                                                setLastName(event.target.value)
                                                            }} 
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="emailInput" className="form-label">Email *</label>
                                                        <input 
                                                            type="email" 
                                                            className="form-control" 
                                                            id="email" 
                                                            name="email"
                                                            placeholder="Enter your email" 
                                                            value={email} 
                                                            onChange={(event)=> {
                                                                setEmail(event.target.value)
                                                            }} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="mobileInput" className="form-label">Mobile No *</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            id="mobile-no" 
                                                            name="mobile_no" 
                                                            placeholder="Enter your mobile no" 
                                                            value={mobileNo} 
                                                            onChange={(event)=> {
                                                                setMobileNo(event.target.value)
                                                            }} 
                                                            />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="expInput" className="form-label">Password *</label>
                                                        <input 
                                                            type="password" 
                                                            className="form-control" 
                                                            id="password"
                                                            name="password" 
                                                            placeholder="Password" 
                                                            value={password} 
                                                            onChange={(event)=> {
                                                                setPassword(event.target.value)
                                                            }} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="expInput" className="form-label">Confirm Password *</label>
                                                        <input 
                                                            type="password" 
                                                            className="form-control" 
                                                            id="confirm_password" 
                                                            name="confirm_password" 
                                                            placeholder="Password" 
                                                            value={confirmPassword} 
                                                            onChange={(event)=> {
                                                                setConfirmPassword(event.target.value)
                                                            }} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 text-left">
                                                        <label htmlFor="expInput" className="form-label">Work Status *</label>
                                                        <input 
                                                            type="radio" 
                                                            id="Fresher" 
                                                            name="work_status" 
                                                            value="Fresher" 
                                                            onChange={(event)=> {
                                                                setWorkStatus(event.target.value)
                                                            }}
                                                        />
                                                        <label for="Fresher">Fresher</label>

                                                        <input 
                                                            type="radio" 
                                                            id="Experienced" 
                                                            name="work_status" 
                                                            value="Experienced" 
                                                            onChange={(event)=> {
                                                                setWorkStatus(event.target.value)
                                                            }}
                                                            />
                                                        <label for="Experienced">Experienced</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="mb-3 blockContent">
                                                        <label htmlFor="meassageInput" className="form-label">Upload Resume</label>
                                                        <input 
                                                            type="file" 
                                                            id="resume" 
                                                            name="resume"
                                                            onChange={changeResumeHandler}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 text-left">
                                                <input 
                                                    type="checkbox" 
                                                    id="terms" 
                                                    name="terms" 
                                                    value="1" 
                                                    onChange={(event)=> {
                                                        setTerms(event.target.value)
                                                    }}

                                                />
                                                    <label for="vehicle1">Accept Terms of Use, Privacy Policy and Guideline</label>
                                                </div>
                                            </div>
                                            <div className="text-end blockContent">
                                                <button type="submit" id="submit" name="submit" className="btn btn-primary"> Submit <i className="uil uil-message ms-1"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5 ms-auto order-first order-lg-last">
                                    <div className="text-center">
                                        <img src="assets/images/contact.png" alt="" className="img-fluid" />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>
                </div>

                <section className="bg-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                                    <h4 className="text-white mb-4">Jobcy</h4>
                                    <p className="text-white-50">It is a long established fact that a reader will be of a page reader
                                        will be of at its layout.</p>
                                    <p className="text-white mt-3">Follow Us on:</p>
                                    <ul className="footer-social-menu list-inline mb-0">
                                        <li className="list-inline-item"><a href="#"><i className="uil uil-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="uil uil-linkedin-alt"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="uil uil-google"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="uil uil-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="footer-item mt-4 mt-lg-0">
                                    <p className="fs-16 text-white mb-4">Company</p>
                                    <ul className="list-unstyled footer-list mb-0">
                                        <li><a href="about.html"><i className="mdi mdi-chevron-right"></i> About Us</a></li>
                                        <li><a href="contact.html"><i className="mdi mdi-chevron-right"></i> Contact Us</a></li>
                                        <li><a href="services.html"><i className="mdi mdi-chevron-right"></i> Services</a></li>
                                        <li><a href="blog.html"><i className="mdi mdi-chevron-right"></i> Blog</a></li>
                                        <li><a href="team.html"><i className="mdi mdi-chevron-right"></i> Team</a></li>
                                        <li><a href="pricing.html"><i className="mdi mdi-chevron-right"></i> Pricing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="footer-item mt-4 mt-lg-0">
                                    <p className="fs-16 text-white mb-4">For Jobs</p>
                                    <ul className="list-unstyled footer-list mb-0">
                                        <li><a href="job-categories.html"><i className="mdi mdi-chevron-right"></i> Browser Categories</a></li>
                                        <li><a href="job-list.html"><i className="mdi mdi-chevron-right"></i> Browser Jobs</a></li>
                                        <li><a href="job-details.html"><i className="mdi mdi-chevron-right"></i> Job Details</a></li>
                                        <li><a href="bookmark-jobs.html"><i className="mdi mdi-chevron-right"></i> Bookmark Jobs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="footer-item mt-4 mt-lg-0">
                                    <p className="text-white fs-16 mb-4">For Candidates</p>
                                    <ul className="list-unstyled footer-list mb-0">
                                        <li><a href="candidate-list.html"><i className="mdi mdi-chevron-right"></i> Candidate List</a></li>
                                        <li><a href="candidate-grid.html"><i className="mdi mdi-chevron-right"></i> Candidate Grid</a></li>
                                        <li><a href="candidate-details.html"><i className="mdi mdi-chevron-right"></i> Candidate Details</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="footer-item mt-4 mt-lg-0">
                                    <p className="fs-16 text-white mb-4">Support</p>
                                    <ul className="list-unstyled footer-list mb-0">
                                        <li><a href="contact.html"><i className="mdi mdi-chevron-right"></i> Help Center</a></li>
                                        <li><a href="faqs.html"><i className="mdi mdi-chevron-right"></i> FAQ'S</a></li>
                                        <li><a href="privacy-policy.html"><i className="mdi mdi-chevron-right"></i> Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="footer-alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <p className="text-white-50 text-center mb-0">
                                    <script>document.write(new Date().getFullYear())</script> &copy; Jobcy - Job Listing Page
                                    Template by <a href="https://themeforest.net/search/themesdesign" target="_blank"
                                        className="text-reset text-decoration-underline">Themesdesign</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                

                <button  id="back-to-top">
                    <i className="mdi mdi-arrow-up"></i>
                </button>

            </div>
        </div>
    )
}

export default JobSeekerSignup;