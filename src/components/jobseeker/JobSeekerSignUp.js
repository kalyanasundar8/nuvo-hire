import React, { useState, useEffect } from "react";

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Alert } from "react-bootstrap";
import GoogleSignInBtn from "../atoms/GoogleSignIn/GoogleSignInBtn";
import useScrollToTop from "../../hooks/useScrollToTop";
import ApiService from "../../services/ApiService";
import "./JobSeeker.css";

export default function JobSeekerSignUp() {
  const navigate = useNavigate();

  const [supportDocs, setSupportDocs] = useState("");

  const handleSupportDocsChange = (files) => {
    setSupportDocs(files);
  };

  const validationSchema = Yup.object({
    jobseeker_type: Yup.string().required(
      "Please choose you are worker (or) professional"
    ),
    first_name: Yup.string().required("Please enter the first name"),
    // last_name: Yup.string().required('Please enter the last name'),
    email: Yup.string()
      .email("Please enter the valid email address")
      .required("Please enter the email"),
    mobile_no: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be at least 10 digits")
      .required("Please enter the mobile number"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please enter the password"),
    password_confirmation: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password and Confirm password must be equal"
      )
      .required("Please enter the confirm password"),
    work_status: Yup.string().required("Please choose work status"),
    terms: Yup.boolean()
      .oneOf([true])
      .required("Please accept the terms and conditions"),
    // resume: Yup.string().required('Resume is required'),
  });

  const handleTermsChange = (e) => {
    formik.setFieldValue("terms", e.target.checked);
  };

  const formik = useFormik({
    initialValues: {
      jobseeker_type: "",
      first_name: "",
      last_name: "",
      email: "",
      mobile_no: "",
      password: "",
      password_confirmation: "",
      work_status: "",
      terms: "",
      resume: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      jobseekerSignUp(values);
      // console.log(values);
      // return false;
    },
  });

  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const jobseekerSignUp = async (values) => {
    // e.preventDefault();

    const payload = {
      jobseeker_type: values.jobseeker_type,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
      mobile_no: values.mobile_no,
      work_status: values.work_status,
      resume: resumeFile,
    };
    console.log(payload);
    try {
      const response = await ApiService(
        "signup-as-jobseeker",
        "POST",
        payload,
        false
      );
      if (response.status === 200) {
        navigate("/verify-otp", { state: values.mobile_no });
        console.log(response);
      } else {
        setAlertMessage(
          <Alert variant='danger'>{response?.response?.data?.message}</Alert>
        );
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleFileChange = async (event) => {
    setLoading(true);
    event.preventDefault();

    const file = event.target.files[0];

    if (!file) {
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("type", "resume");

    try {
      const response = await ApiService("resume-upload", "POST", data, false);
      console.log("Resume uploaded successfully");
      setResumeFile(response.data.path);
    } catch (error) {
      console.error("Error uploading resume: ", error);
    } finally {
      setLoading(false);
    }
  };

  useScrollToTop();

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
                      {alertMessage && <div>{alertMessage}</div>}
                      <form onSubmit={formik.handleSubmit} class='auth-form'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div class='mb-3'>
                              <input
                                type='radio'
                                id='jobseeker_type'
                                name='jobseeker_type'
                                value='worker'
                                onChange={formik.handleChange}
                              />
                              <label for='Worker'> I am a Worker</label>
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div class='mb-3'>
                              <input
                                type='radio'
                                id='jobseeker_type'
                                name='jobseeker_type'
                                value='professional'
                                onChange={formik.handleChange}
                              />
                              <label for='Professional'>
                                {" "}
                                I am a Professional
                              </label>
                            </div>
                          </div>
                          {formik.errors.jobseeker_type && (
                            <div className='error'>
                              {formik.errors.jobseeker_type}
                            </div>
                          )}
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.first_name &&
                                formik.errors.first_name && (
                                  <div className='error'>
                                    {formik.errors.first_name}
                                  </div>
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.last_name &&
                                formik.errors.last_name && (
                                  <div className='error'>
                                    {formik.errors.last_name}
                                  </div>
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.email && formik.errors.email && (
                                <div className='error'>
                                  {formik.errors.email}
                                </div>
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.mobile_no &&
                                formik.errors.mobile_no && (
                                  <div className='error'>
                                    {formik.errors.mobile_no}
                                  </div>
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
                                placeholder='Password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.password &&
                                formik.errors.password && (
                                  <div className='error'>
                                    {formik.errors.password}
                                  </div>
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
                                placeholder='Confirm Password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.password_confirmation &&
                                formik.errors.password_confirmation && (
                                  <div className='error'>
                                    {formik.errors.password_confirmation}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <label htmlFor='expInput' className='form-label'>
                              Work Status *
                            </label>
                            <div className='mb-3 text-left'>
                              <input
                                type='radio'
                                id='Fresher'
                                name='work_status'
                                value='fresher'
                                onChange={formik.handleChange}
                              />
                              <label for='Fresher'>Fresher</label>
                              <input
                                type='radio'
                                id='Experienced'
                                name='work_status'
                                value='experienced'
                                onChange={formik.handleChange}
                              />
                              <label for='Experienced'>Experienced</label>
                            </div>
                            {formik.errors.work_status && (
                              <div className='error'>
                                {formik.errors.work_status}
                              </div>
                            )}
                          </div>
                          <div className='col-lg-12'>
                            <div className='mb-3 blockContent'>
                              <label
                                htmlFor='meassageInput'
                                className='form-label'
                              >
                                Upload Resume
                              </label>
                              <input
                                type='file'
                                className='form-control'
                                id='resume'
                                name='resume'
                                onChange={handleFileChange}
                              />
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
                              <label class='form-check-label' for='terms'>
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
                              <div className='error'>{formik.errors.terms}</div>
                            )}
                          </div>
                          <div class='text-center'>
                            <button
                              disabled={!formik.isValid}
                              type='submit'
                              class='btn btn-white btn-hover w-100'
                            >
                              Sign Up
                            </button>
                          </div>
                          <div class='mt-3 text-center'>
                            <p class='mb-0'>Or</p>
                          </div>
                          <div>
                            <GoogleSignInBtn />
                          </div>
                        </div>
                      </form>
                      <div class='mt-3 text-center'>
                        <p class='mb-0'>
                          Already a member ?{" "}
                          <Link
                            to='/jobseeker-signin'
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
