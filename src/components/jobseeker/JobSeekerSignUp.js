import React, { useState } from "react";

import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import GoogleSignInBtn from "../atoms/GoogleSignIn/GoogleSignInBtn";
import './JobSeeker.css';

export default function JobSeekerSignUp() {

    const navigate = useNavigate();

    const [resume, setResume] = useState("");

    const changeResumeHandler = (event) => {
        setResume(event.target.files[0]);
    };

    const validationSchema = Yup.object({
        jobseeker_type: Yup.string().required('Job seeker is required'),
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        mobile_no: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be at least 10 digits').required('Mobile number is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Password confirmation is required'),
        work_status: Yup.string().required('Work status is required'),
        terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required(),
        // resume: Yup.string().required('Resume is required'),
    });

    const handleTermsChange = (e) => {
        formik.setFieldValue('terms', e.target.checked);
    };

    const formik = useFormik({
        initialValues: {
            jobseeker_type: '',
            first_name: '',
            last_name: '',
            email: '',
            mobile_no: '',
            password: '',
            password_confirmation: '',
            work_status: '',
            terms: '',
            resume: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

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
                                            <img src="assets/images/nuvo_logo.png" alt="nuvo_logo" height="120" class="logo-light" />
                                            <img src="assets/images/nuvo_logo.png" alt="nuvo_logo" height="120" class="logo-dark" />
                                        </a>
                                        <div class="mt-2">
                                            <img src="assets/images/auth/sign-up.png" alt="" class="img-fluid" />
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
                                            <form onSubmit={formik.handleSubmit} class="auth-form">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div class="mb-3">
                                                            <input
                                                                type="radio"
                                                                id="jobseeker_type"
                                                                name="jobseeker_type"
                                                                value="worker"
                                                                onChange={formik.handleChange}
                                                            />
                                                            <label for="Worker"> I am a Worker</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div class="mb-3">
                                                            <input
                                                                type="radio"
                                                                id="jobseeker_type"
                                                                name="jobseeker_type"
                                                                value="professional"
                                                                onChange={formik.handleChange}
                                                                />
                                                            <label for="Professional"> I am a Professional</label>
                                                        </div>
                                                    </div>
                                                    {formik.errors.jobseeker_type && <span className="error">{formik.errors.jobseeker_type}</span>}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="nameInput" className="form-label">First Name *</label>
                                                            <input
                                                                type="text"
                                                                name="first_name"
                                                                id="first_name"
                                                                className="form-control"
                                                                placeholder="Enter your first name"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.first_name && formik.errors.first_name && <span className="error">{formik.errors.first_name}</span>}
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
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.last_name && formik.errors.last_name && <span className="error">{formik.errors.last_name}</span>}
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
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.email && formik.errors.email && <span className="error">{formik.errors.email}</span>}
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
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.mobile_no && formik.errors.mobile_no && <span className="error">{formik.errors.mobile_no}</span>}
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
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.password && formik.errors.password && <span className="error">{formik.errors.password}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="expInput" className="form-label">Confirm Password *</label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="password_confirmation"
                                                                name="password_confirmation"
                                                                placeholder="Confirm Password"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            {formik.touched.password_confirmation && formik.errors.password_confirmation && <span className="error">{formik.errors.password_confirmation}</span>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label htmlFor="expInput" className="form-label">Work Status *</label>
                                                        <div className="mb-3 text-left">
                                                            <input
                                                                type="radio"
                                                                id="Fresher"
                                                                name="work_status"
                                                                value="fresher"
                                                                onChange={formik.handleChange}
                                                            />
                                                            <label for="Fresher">Fresher</label>
                                                            <input
                                                                type="radio"
                                                                id="Experienced"
                                                                name="work_status"
                                                                value="experienced"
                                                                onChange={formik.handleChange}
                                                            />
                                                            <label for="Experienced">Experienced</label>
                                                        </div>
                                                        {formik.errors.work_status && <span className="error">{formik.errors.work_status}</span>}
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
                                                    <div class="mb-4">
                                                        <div class="form-check">
                                                            <input
                                                                class="form-check-input"
                                                                type="checkbox"
                                                                id="terms"
                                                                name="terms"
                                                                onChange={handleTermsChange}
                                                                onBlur={formik.handleBlur}
                                                            />
                                                            <label class="form-check-label" for="terms">I agree to the <a href="" class="text-white text-decoration-underline">Terms and conditions</a></label>
                                                        </div>
                                                        {formik.errors.terms && <span className="error">{formik.errors.terms}</span>}
                                                    </div>
                                                    <div class="text-center">
                                                        <button disabled={!formik.isValid} type="submit" class="btn btn-white btn-hover w-100">Sign Up</button>
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
