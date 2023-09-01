import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./CompanySignup.css";
import * as Yup from "yup";
import ApiService from "../../services/ApiService";

export default function CompanySignup() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    company_name: Yup.string().required("Please enter the company name"),
    first_name: Yup.string().required("Please enter the first name"),
    // last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter the email"),
    mobile_no: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be at least 10 digits")
      .required("Please enter the mobile number"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please enter the password"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please enter the confirm password"),
    address: Yup.string().required("Please enter the address"),
    terms: Yup.boolean()
      .oneOf([true], "Please accept the terms and conditions")
      .required("Please accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      company_name: "",
      first_name: "",
      //   last_name: "",
      email: "",
      mobile_no: "",
      password: "",
      password_confirmation: "",
      terms: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      employerSignUp(values);
    },
  });

  const handleTermsChange = (e) => {
    formik.setFieldValue("terms", e.target.checked);
  };

  // Signup form integration

  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const employerSignUp = async (values) => {
    // e.preventDefault();

    const payload = {
      company_name: values.company_name,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
      mobile_no: values.mobile_no,
      address: values.address,
    };
    try {
      const response = await ApiService(
        "signup-as-employer",
        "POST",
        payload,
        false
      );
      if (response.status === 200) {
        navigate("/verify-otp");
        console.log(response);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section class='bg-auth'>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-xl-12 col-lg-12'>
            <div class='card auth-box'>
              <div class='row align-items-center'>
                <div class='col-lg-6 text-center'>
                  <div class='card-body p-4'>
                    <a href='index.php'>
                      <img
                        src='assets/images/nuvo_logo.png'
                        alt='nuvo_logo'
                        height='120'
                        class='logo-light'
                      />
                      <img
                        src='assets/images/nuvo_logo.png'
                        alt='nuvo_logo'
                        height='120'
                        class='logo-dark'
                      />
                    </a>
                    <div class='mt-2'>
                      <img
                        src='assets/images/auth/sign-up.png'
                        alt=''
                        class='img-fluid'
                      />
                    </div>
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='auth-content card-body p-5 text-white'>
                    <div class='w-100'>
                      <div class='text-center'>
                        <h5>Let's Get Started</h5>
                        <p class='text-white-70'>
                          Sign Up and get access to all the features of Nuvo
                          Hire
                        </p>
                      </div>
                      <form onSubmit={formik.handleSubmit} class='auth-form'>
                        <div className='row'>
                          <div className='col-lg-12'>
                            <div className='mb-3'>
                              <label htmlFor='nameInput' className='form-label'>
                                Company Name *
                              </label>
                              <input
                                type='text'
                                name='company_name'
                                id='company_name'
                                className='form-control'
                                placeholder='Enter your company name'
                                value={companyName}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  setCompanyName(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.company_name &&
                                formik.errors.company_name && (
                                  <span className='error'>
                                    {formik.errors.company_name}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='mb-3'>
                              <label htmlFor='nameInput' className='form-label'>
                                First Name *
                              </label>
                              <input
                                type='text'
                                name='first_name'
                                id='first_name'
                                className='form-control'
                                placeholder='Enter your first name'
                                value={firstName}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  setFirstName(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.first_name &&
                                formik.errors.first_name && (
                                  <span className='error'>
                                    {formik.errors.first_name}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='mb-3'>
                              <label htmlFor='nameInput' className='form-label'>
                                Last Name
                              </label>
                              <input
                                type='text'
                                name='last_name'
                                id='last_name'
                                className='form-control'
                                placeholder='Enter your last name'
                                value={lastName}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  setLastName(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.last_name &&
                                formik.errors.last_name && (
                                  <span className='error'>
                                    {formik.errors.last_name}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='mb-3'>
                              <label
                                htmlFor='emailInput'
                                className='form-label'
                              >
                                Email *
                              </label>
                              <input
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  setEmail(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.email && formik.errors.email && (
                                <span className='error'>
                                  {formik.errors.email}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='mb-3'>
                              <label
                                htmlFor='mobileInput'
                                className='form-label'
                              >
                                Mobile No *
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                id='mobile-no'
                                name='mobile_no'
                                placeholder='Enter your mobile no'
                                value={mobileNumber}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  setMobileNumber(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.mobile_no &&
                                formik.errors.mobile_no && (
                                  <span className='error'>
                                    {formik.errors.mobile_no}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='mb-3'>
                              <label htmlFor='expInput' className='form-label'>
                                Password *
                              </label>
                              <input
                                type='password'
                                className='form-control'
                                id='password'
                                name='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  setPassword(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.password &&
                                formik.errors.password && (
                                  <span className='error'>
                                    {formik.errors.password}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='mb-3'>
                              <label htmlFor='expInput' className='form-label'>
                                Confirm Password *
                              </label>
                              <input
                                type='password'
                                className='form-control'
                                id='password_confirmation'
                                name='password_confirmation'
                                placeholder='Re-enter your password'
                                value={confirmPassword}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  setConfirmPassword(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.password_confirmation &&
                                formik.errors.password_confirmation && (
                                  <span className='error'>
                                    {formik.errors.password_confirmation}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='mb-3'>
                              <label htmlFor='expInput' className='form-label'>
                                Address *
                              </label>
                              <textarea
                                className='form-control'
                                id='address'
                                name='address'
                                placeholder='Enter your company address'
                                value={address}
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  setAddress(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.address &&
                                formik.errors.address && (
                                  <span className='error'>
                                    {formik.errors.address}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div class='mb-4'>
                            <div class='form-check'>
                              <input
                                class='form-check-input'
                                type='checkbox'
                                id='terms'
                                name='terms'
                                onChange={handleTermsChange}
                                onBlur={formik.handleBlur}
                              />
                              <label
                                class='form-check-label'
                                for='flexCheckDefault'
                              >
                                I agree to the{" "}
                                <a
                                  href=''
                                  class='text-white text-decoration-underline'
                                >
                                  Terms and conditions
                                </a>
                              </label>
                            </div>
                            {formik.errors.terms && (
                              <span className='error'>
                                {formik.errors.terms}
                              </span>
                            )}
                          </div>
                          <div class='text-center'>
                            <button
                              type='submit'
                              disabled={!formik.isValid}
                              class='btn btn-white btn-hover w-100'
                            >
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </form>
                      <div class='mt-3 text-center'>
                        <p class='mb-0'>
                          Already a member ?{" "}
                          <Link
                            to='/employer-signin'
                            class='fw-medium text-white text-decoration-underline'
                          >
                            {" "}
                            Sign In{" "}
                          </Link>
                        </p>
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
  );
}
