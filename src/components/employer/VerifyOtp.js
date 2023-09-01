import React, { useState, useNavigate, useEffect } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ApiService from "../../services/ApiService";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [countDown, setCountDown] = useState(60);
  const [timerActive, setTimerActive] = useState(true);
  const [error, setError] = useState(null);

  //   Schema for validation
  const validationSchema = Yup.object({
    otp: Yup.string().required("OTP is required"),
  });

  // Initialize validation
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
  });

  //   CountDown timer
  useEffect(() => {
    if (countDown > 0 && timerActive) {
      const timer = setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countDown === 0) {
      setTimerActive(false);
    }
  }, [countDown, timerActive]);

  //   Handle resend OTP
  const handleResendOtp = async () => {
    if (!timerActive) {
      setCountDown(60);
      setTimerActive(true);

      try {
        const response = await ApiService("resend-otp", "POST", null, false);
        console.log(response);
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  //   Verify OTP
  const verifyOtp = async () => {
    try {
      const payload = {
        otp: otp,
      };

      const response = await ApiService("verify-otp", "POST", payload, false);

      if (response.status === 200) {
        console.log("Successfully verified");
      } else {
        console.log("Wrong OTP");
      }
    } catch (error) {
      setError("Invalid OTP");
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
                          <h5>Verify your OTP</h5>
                          <p className='text-white-70'>
                            {" "}
                            We send an OTP to your mobile number, Don't share
                            your OTP to anyone. If you didn't get your OTP click
                            the resendOTP and get your OTP again.
                          </p>
                        </div>
                        <form onSubmit={verifyOtp} className='auth-form'>
                          <div className='mb-3'>
                            <label for='usernameInput' className='form-label'>
                              Your OTP
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              id='usernameInput'
                              placeholder='Enter your OTP'
                              name='otp'
                              value={otp}
                              onChange={(e) => {
                                formik.handleChange(e);
                                setOtp(e.target.value);
                              }}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.otp && formik.errors.otp && (
                              <div className='invalid-feedback'>
                                {formik.errors.otp}
                              </div>
                            )}
                          </div>

                          <div className='text-center'>
                            <button
                              type='submit'
                              className='btn btn-white btn-hover w-100'
                              disabled={!formik.isValid || formik.isSubmitting}
                            >
                              {formik.isSubmitting ? "Verifying..." : "Verify"}
                            </button>
                          </div>
                        </form>
                        <div
                          className='text-center mt-3'
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              color: "#fff",
                              opacity: timerActive ? "50%" : "",
                              textDecoration: "none",
                              cursor: timerActive ? "not-allowed" : "pointer",
                            }}
                            onClick={handleResendOtp}
                            disabled={timerActive}
                          >
                            ResendOTP
                          </button>
                          {timerActive ? (
                            <button
                              style={{
                                color: "white",
                                backgroundColor: "transparent",
                                border: "none",
                              }}
                            >
                              Resend OTP in {countDown} seconds
                            </button>
                          ) : null}
                        </div>
                        <div className=''></div>
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
