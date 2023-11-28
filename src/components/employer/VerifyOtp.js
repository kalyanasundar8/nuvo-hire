import React, { useState, useEffect } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ApiService from "../../services/ApiService";
import { Alert } from "react-bootstrap";

import { setIsAuthenticated } from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const mobileNumber = searchParams.get("mobile_no");
  const mobileNumber = location.state;
  const pathName = location.pathname;

  const [otp, setOtp] = useState("");
  const [countDown, setCountDown] = useState(60);
  const [timerActive, setTimerActive] = useState(true);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  //   Schema for validation
  const validationSchema = Yup.object({
    otp: Yup.string()
      .min(6, "OTP must minimum 6 digits")
      .max(6, "OTP must maximum 6 digits")
      .required("Please enter the OTP"),
  });

  // Initialize validation
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      verifyOtp(values);
    },
  });

  //   CountDown timer
  useEffect(() => {
    if (pathName === "/employer-signin") {
      handleResendOtp();
    }

    if (countDown > 0 && timerActive) {
      const timer = setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countDown === 0) {
      setTimerActive(false);
    }
  }, [countDown, timerActive, location.pathname]);

  //   Handle resend OTP
  const handleResendOtp = async () => {
    if (!timerActive) {
      setCountDown(60);
      setTimerActive(true);

      try {
        const payload = {
          mobile_no: mobileNumber,
        };
        const response = await ApiService("resend-otp", "POST", payload, false);
        console.log(response);
        setAlertMessage(
          <Alert variant="success">{response?.data?.message}</Alert>
        );

        setTimeout(() => {
          setAlertMessage("")
        }, 5000);

      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  //   Verify OTP
  const verifyOtp = async (values) => {
    try {
      const payload = {
        otp: values.otp,
        mobile_no: mobileNumber,
      };

      setLoading(true);

      const response = await ApiService("verify-otp", "POST", payload, false);

      if (response?.data?.status === true) {
        setLoading(false);
        dispatch(setIsAuthenticated(true));
        localStorage.setItem("user", JSON.stringify(response?.data));
        console.log(response?.data)
        console.log("Successfully verified");

        setAlertMessage(
          <Alert variant='success'>{response?.response?.data?.message}</Alert>
        );

        setTimeout(() => {
          setAlertMessage("")
        }, 5000)

        if (response?.data?.data?.user_type === "JobSeeker") {
          navigate("/");
        } else {
          navigate("/dashboard");
        }

        // navigate("/dashboard");
      } else {
        setLoading(false);

        setAlertMessage(
          <Alert variant='danger'>{response?.response?.data?.message}</Alert>
        );

        setTimeout(() => {
          setAlertMessage("");
        }, 5000)
      }
    } catch (error) {
      setLoading(false);
      setAlertMessage("Invalid OTP");
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
                            the resend OTP and get your OTP again.
                          </p>
                        </div>
                        {alertMessage && <div role='alert'>{alertMessage}</div>}
                        <form
                          onSubmit={formik.handleSubmit}
                          className='auth-form'
                        >
                          <div className='mb-3'>
                            <label for='usernameInput' className='form-label' style={{ display: "flex", alignItems: "center"}}>
                              Enter Your OTP <span style={{ fontSize: "8px", marginLeft: "10px", color: "white"}}>(Enter your 6 digit OTP)</span>
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
                                <span className='error'>
                                  {formik.errors.otp}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className='text-center'>
                            <button
                              type='submit'
                              className={`btn btn-white btn-hover w-100 ${
                                loading ? "disabled" : ""
                              }`}
                              disabled={loading || !formik.isValid}
                            >
                              {loading ? "Verifying..." : "Verify"}
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
                            Resend OTP
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
