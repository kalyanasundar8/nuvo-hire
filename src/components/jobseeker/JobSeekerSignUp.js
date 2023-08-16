import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleSignInBtn from "../atoms/GoogleSignIn/GoogleSignInBtn";

export default function JobSeekerSignUp() {

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

        if (jobseekerType === "") {
            Swal.fire({
                text: "Please select jobseeker Type",
                icon:"error"
              })

              return false;
        }
        if (firstName === "") {
            Swal.fire({
                text: "Please enter your First Name",
                icon:"error"
              })

              return false;
        }
        if (email === "") {
            Swal.fire({
                text: "Please enter your email ",
                icon:"error"
              })

              return false;
        }

        if (mobileNo === "") {
            Swal.fire({
                text: "Please enter your mobile number ",
                icon:"error"
              })

              return false;
        }

        if (password === "") {
            Swal.fire({
                text: "Please enter your password ",
                icon:"error"
              })

              return false;
        }
        if (password.length < 8) {
            Swal.fire({
                text: "Password must be 8 characters length",
                icon:"error"
              })

              return false;
        }
        if (password !== confirmPassword) {
            Swal.fire({
                text: "Password and confirm password must be equal",
                icon:"error"
              })

              return false;
        }
        if (workStatus === "") {
            Swal.fire({
                text: "Please select work status ",
                icon:"error"
              })

              return false;
        }

        
        if (resume === "") {
            Swal.fire({
                text: "Please upload your resume ",
                icon:"error"
              })

              return false;
        }
        if (terms === "") {
            Swal.fire({
                text: "Please confirm terms & conditions ",
                icon:"error"
              })

              return false;
        }
    
        await axios.post(`https://admin.demo.nuvohire.com/api/signup-as-jobseeker`, formData).then(({data}) => {
          Swal.fire({
            icon:"success",
            text:data.message
          })
          navigate("/")
        }).catch(({response}) => {
          if( response.status === 400 ) {
            Swal.fire({
                icon:"error",
                text:response.data.message
            })
          } else {
            Swal.fire({
              text: "Something went wrong",
              icon:"error"
            })
          }
        })
    }


  return (
    
    <section class="bg-auth">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12">
                    <div class="card auth-box">
                        <div class="row align-items-center">
                            <div class="col-lg-6 text-center">
                                <div class="card-body p-4">                                                    
                                    <a href="index.php">
                                        <img src="assets/images/nuvo_logo.png" alt="nuvo_logo" height="120" class="logo-light"/>
                                        <img src="assets/images/nuvo_logo.png" alt="nuvo_logo" height="120" class="logo-dark"/>
                                    </a>
                                    <div class="mt-2">
                                        <img src="assets/images/auth/sign-up.png" alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="auth-content card-body p-5 text-white">
                                    <div class="w-100">
                                        <div class="text-center">
                                            <h5>Let's Get Started</h5>
                                            <p class="text-white-70">Sign Up and get access to all the features of Nuvo Hire</p>
                                        </div>
                                        <form onSubmit={jobSeekerSignup}  class="auth-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div class="mb-3">
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
                                                    <div class="mb-3">
                                                        <input 
                                                            type="radio" 
                                                            id="job_seeker_type" 
                                                            name="job_seeker_type" 
                                                            value="Worker" 
                                                            onChange={(event)=> {
                                                                setJobseekerType(event.target.value)
                                                            }} 
                                                        />
                                                        <label for="Worker">I am a Professional</label>
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
                                                            placeholder="Confirm Password" 
                                                            value={confirmPassword} 
                                                            onChange={(event)=> {
                                                                setConfirmPassword(event.target.value)
                                                            }} 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                <label htmlFor="expInput" className="form-label">Work Status *</label>
                                                    <div className="mb-3 text-left">
                                                        
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
                                                {/* <div class="mb-3">
                                                    <label for="usernameInput" class="form-label">Username</label>
                                                    <input type="text" class="form-control" required id="usernameInput" placeholder="Enter your username"/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="passwordInput" class="form-label">Email</label>
                                                    <input type="email" class="form-control" required id="emailInput" placeholder="Enter your email"/>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="emailInput" class="form-label">Password</label>
                                                    <input type="password" class="form-control" id="passwordInput" placeholder="Enter your password"/>
                                                </div> */}
                                                <div class="mb-4">
                                                    <div class="form-check">
                                                        <input 
                                                            class="form-check-input" 
                                                            type="checkbox" 
                                                            id="flexCheckDefault"
                                                            name="terms" 
                                                            value="1" 
                                                            onChange={(event)=> {
                                                                setTerms(event.target.value)
                                                            }}
                                                        />
                                                        <label class="form-check-label" for="flexCheckDefault">I agree to the <a href="" class="text-white text-decoration-underline">Terms and conditions</a></label>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-white btn-hover w-100">Sign Up</button>
                                                </div>
                                                <div class="mt-3 text-center">
                                                    <p class="mb-0">Or</p>
                                                </div>
                                               <div>
                                                    <GoogleSignInBtn />
                                               </div>
                                            </div>
                                        </form>
                                        <div class="mt-3 text-center">
                                            <p class="mb-0">Already a member ? <Link to="/jobseeker-signin" class="fw-medium text-white text-decoration-underline"> Sign In </Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                   
  )
};
