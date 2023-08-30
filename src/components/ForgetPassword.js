import React, { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ApiService from '../services/ApiService';

import { useDispatch, useSelector } from 'react-redux';
import useScrollToTop from "../hooks/useScrollToTop";




export default function ForgetPassword() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

   

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const validationSchema = Yup.object({
        
        email: Yup.string().email('Invalid email address').required('Please enter your email.'),
      
    });

    const formik = useFormik({
        initialValues: {
            email: '',
           
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            sendResetLink(values)
        },
    });

    const sendResetLink = async (values) => {
       

        const payload = {
            email: values?.email,
           
        }
        try {
            const response = await ApiService('forget-password', 'POST', payload, false);
            console.log(response?.data);

            if ( response?.data?.status_code == 200 ) {

                setSuccess(response.data.message)
                setError('');
                navigate("/")
                window.location.reload();
            } else {
                setSuccess('');
                setError(response.data.message);
            }
        //   setJobDetails(responseData);
        } catch (error) {
            setSuccess('');
            setError('Something went wrong');
            console.error("Error fetching data: ", error);
        }
    }

        

    useScrollToTop();

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
                                                    <h5>Forgot your password?</h5>
                                                    <p className="text-white-70"> No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
                                                </div>
                                                <form onSubmit={formik.handleSubmit} className="auth-form">
                                                    <div className="mb-3">
                                                        <label for="usernameInput" className="form-label">Email</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="usernameInput"
                                                            placeholder="Enter your email"
                                                            // required="required"
                                                            name="email"
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                        />
                                                        {formik.touched.email && formik.errors.email && <span className="error">{formik.errors.email}</span>}
                                                    </div>

                                                    {error ? (
                                                        <div className="text-left mb-3">
                                                            <span className='error'>{error}</span>
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}
                                                    
                                                  
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-white btn-hover w-100">Email Reset Password Link</button>
                                                    </div>
                                                </form>
                                                <div className="mt-4 text-center">
                                                    <p className="mb-0">Back to <Link to="/home" className="fw-medium text-white text-decoration-underline"> Home </Link></p>
                                                </div>
                                                {/* <div className="mt-3 text-center">
                                                    <p className="mb-0">Or</p>
                                                </div> */}
                                               
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
