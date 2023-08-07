import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


import "../assets/css/bootstrap.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/app.min.css";

import "./JobSeekerLoging.css"


const SignInForm = () => {
    const [name, setName] = useState("");
    const [password, set] = useState("");
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
      });
    
      // Create a formik instance with the validation schema and submit function
      const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          // Your form submission logic here (if needed)
        },
      });

  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          <section className="bg-auth">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12">
                  <div className="card auth-box">
                    <div className="row g-0">
                      <div className="col-lg-6 text-center">
                        <div className="card-body p-4">
                          <a href="index.html">
                            <img src="assets/images/logo-light.png" alt="" className="logo-light" />
                            <img src="assets/images/logo-dark.png" alt="" className="logo-dark" />
                          </a>
                          <div className="mt-5">
                            <img src="assets/images/auth/sign-in.png" alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="auth-content card-body p-5 h-100 text-white">
                          <div className="w-100">
                            <div className="text-center mb-4">
                              <h5>Welcome Back !</h5>
                              <p className="text-white-70">Sign in to continue to Jobcy.</p>
                            </div>
                            <form action="index.html" className="auth-form">
                              <div className="mb-3">
                                <label htmlFor="usernameInput" className="form-label"  style={{ color: 'white' }}>Username</label>
                                <input
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                placeholder="Enter your username"
                                {...formik.getFieldProps('username')}
                               />
                            {formik.touched.username && formik.errors.username ? (
                            <div className="text-danger">{formik.errors.username}</div>
                            ) : null}
                              </div>
                              <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label"  style={{ color: 'white' }}>Password</label>
                                <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="Enter your password"
                               {...formik.getFieldProps('password')}
                               />
                              {formik.touched.password && formik.errors.password ? (
                              <div className="text-danger">{formik.errors.password}</div>
                              ) : null}
                              </div>
                              <div className="mb-4">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                  <a href="reset-password.html" className="float-end text-white">Forgot Password?</a>
                                  <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                </div>
                              </div>
                              <div className="text-center">
                                <button type="submit" className="btn btn-white btn-hover w-100" disabled={formik.isSubmitting}>
                                  {formik.isSubmitting ? 'Submitting...' : 'Sign In'}
                                </button>
                              </div>
                            </form>
                            <div className="mt-4 text-center">
                              <p className="mb-0">Don't have an account ? <a href="sign-up.html" className="fw-medium text-white text-decoration-underline"> Sign Up </a></p>
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
      </div>

      
    </div>
  );
};

export default SignInForm;
