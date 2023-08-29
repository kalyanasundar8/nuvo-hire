import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ApiService from '../../services/ApiService';

import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated } from '../../redux/actions/AuthAction';

import './JobSeeker.css';
import GoogleSignInBtn from '../atoms/GoogleSignIn/GoogleSignInBtn';

export default function JobSeekerSignIn() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    let isAuth =
        useSelector((state) => state?.auth?.isAuthenticated) ||
        JSON.parse(localStorage.getItem('isAuthenticated'));

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();

        const payload = {
            email: userName,
            password: password
        }

        try {
            const response = await ApiService('login', 'POST', payload, false);
            

            if ( response?.data?.status_code == 200 ) {

                dispatch(setIsAuthenticated(true));
                localStorage.setItem('user', JSON.stringify(response.data.data));
                setError('');
                navigate("/")
                window.location.reload();
            } else {
                console.log(response?.response?.data?.message);
                setError(response?.response?.data?.message);
            }
        //   setJobDetails(responseData);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }

    };

    return (
        <div className="page-content">
            <section className="bg-auth">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12">
                            <div className="card auth-box">
                                <div className="row g-0">
                                    <div className="col-lg-6 text-center">
                                        <div className="card-body p-4">
                                            <Link to="/">
                                                <img src="assets/images/nuvo_logo.png" alt="nuvo_logo" height="120" className="logo-light" />
                                                <img src="/assets/images/nuvo_logo.png" alt="nuvo_logo" height="120" className="logo-dark" />
                                            </Link>
                                            <div className="mt-2">
                                                <img src="assets/images/auth/sign-in.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="auth-content card-body p-5 h-100 text-white">
                                            <div className="w-100">
                                                <div className="text-center mb-4">
                                                    <h5>Welcome Back !</h5>
                                                    <p className="text-white-70">Sign in to continue to Nuvo Hire.</p>
                                                </div>
                                                <form onSubmit={loginHandler} className="auth-form">
                                                    <div className="mb-3">
                                                        <label for="usernameInput" className="form-label">Username</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="usernameInput"
                                                            placeholder="Enter your username"
                                                            required="required"
                                                            value={userName}
                                                            onChange={(event) => {
                                                                setUserName(event.target.value)
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="passwordInput" className="form-label">Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            id="passwordInput"
                                                            placeholder="Enter your password"
                                                            required
                                                            value={password}
                                                            onChange={(event) => {
                                                                setPassword(event.target.value)
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <div className="form-check"><input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                            <Link to="/forget-password" className="float-end text-white">Forgot Password?</Link>
                                                            <label className="form-check-label" for="flexCheckDefault">Remember me</label>
                                                        </div>

                                                        {error ? (
                                                            <div className="text-left mt-4">
                                                                <span className='error'>{error}</span>
                                                            </div>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-white btn-hover w-100">Sign In</button>
                                                    </div>
                                                </form>
                                                <div className="mt-4 text-center">
                                                    <p className="mb-0">Don't have an account ? <Link to="/jobseeker-signup" className="fw-medium text-white text-decoration-underline"> Sign Up </Link></p>
                                                </div>
                                                <div className="mt-3 text-center">
                                                    <p className="mb-0">Or</p>
                                                </div>
                                                <div>
                                                    <GoogleSignInBtn />
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
        </div>

    )
}
