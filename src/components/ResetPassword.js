import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ApiService from "../services/ApiService";
import { Alert } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import useScrollToTop from "../hooks/useScrollToTop";

export default function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  // Get the values of 'token' and 'email' from the query parameters
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);
  

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter the email"),
    password: Yup.string().required("Please enter the password."),
    password_confirmation: Yup.string().required(
      "Please enter the confirm password."
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      token: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      sendResetLink(values);
    },
  });

  const [alertMessage, setAlertMessage] = useState("");

  const sendResetLink = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
      token: token
    };

    console.log(payload)
    try {
      setLoading(true);

      const response = await ApiService(
        "reset-password",
        "POST",
        payload,
        false
      );
      console.log(response?.data);

      if (response?.data?.status_code == 200) {
        setLoading(false)
        navigate("/");
        window.location.reload();
      } else {
        setLoading(false)
        setAlertMessage(
          <Alert variant = "danger">{response?.data?.message}</Alert>
        );

        setTimeout(() => {
          setAlertMessage("")
        }, 5000)
      }
      //   setJobDetails(responseData);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data: ", error);
    }
  };

  useScrollToTop();

  return (
    <div className='page-content'>
      <section className='bg-auth'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-10 col-lg-12'>
              <div className='card auth-box'>
                <div className='row g-0'>
                  <div className='col-lg-6 text-center'>
                    <div className='card-body p-4'>
                      <Link to='/'>
                        <img
                          src='assets/images/nuvo_logo.png'
                          alt='nuvo_logo'
                          height='120'
                          className='logo-light'
                        />
                        <img
                          src='/assets/images/nuvo_logo.png'
                          alt='nuvo_logo'
                          height='120'
                          className='logo-dark'
                        />
                      </Link>
                      <div className='mt-2'>
                        <img
                          src='assets/images/auth/sign-in.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='auth-content card-body p-5 h-100 text-white'>
                      <div className='w-100'>
                        <div className='text-center mb-4'>
                          <h5>Forgot your password?</h5>
                          <p className='text-white-70'>
                            {" "}
                            No problem. Just let us know your email address and
                            we will email you a password reset link that will
                            allow you to choose a new one.
                          </p>
                        </div>
                        <form
                          onSubmit={formik.handleSubmit}
                          className='auth-form'
                        >
                          {alertMessage && (
                          <div>
                            {alertMessage}
                          </div>
                        )}
                          <div className='mb-3'>
                            <label for='usernameInput' className='form-label'>
                              Email
                            </label>
                            <input
                              type='email'
                              className='form-control'
                              id='email'
                              placeholder='Enter your email'
                              // required="required"
                              name='email'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                              <span className='error'>
                                {formik.errors.email}
                              </span>
                            )}
                          </div>

                          <div className='mb-3'>
                            <label for='usernameInput' className='form-label'>
                              Password
                            </label>
                            <input
                              type='password'
                              className='form-control'
                              id='password'
                              placeholder='Enter your password'
                              // required="required"
                              name='password'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && (
                              <span className='error'>
                                {formik.errors.password}
                              </span>
                            )}
                          </div>

                          <div className='mb-3'>
                            <label for='password_confirmation' className='form-label'>
                              Confirm Password
                            </label>
                            <input
                              type='password'
                              className='form-control'
                              id='confirmpassword'
                              placeholder='Re-enter your password'
                              // required="required"
                              name='password_confirmation'
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.password_confirmation && formik.errors.password_confirmation && (
                              <span className='error'>
                                {formik.errors.password_confirmation}
                              </span>
                            )}
                          </div>
                          <div className='text-center'>
                            <button
                              type='submit'
                              className={`btn btn-white btn-hover w-100 ${
                                loading ? "disabled" : ""
                              }`}
                              disabled = { loading || !formik.isValid }
                            >
                              { loading ? "Resetting..." : "Email Reset Password Link" }
                            </button>
                          </div>
                        </form>
                        <div className='mt-4 text-center'>
                          <p className='mb-0'>
                            Back to{" "}
                            <Link
                              to='/home'
                              className='fw-medium text-white text-decoration-underline'
                            >
                              {" "}
                              Home{" "}
                            </Link>
                          </p>
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
  );
}
