import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ApiService from "../services/ApiService";
import { Alert } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import useScrollToTop from "../hooks/useScrollToTop";
import SuccessModel from "./layouts/SuccessModel";
import ErrorModel from "./layouts/ErrorModel";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendResetLink(values);
    },
  });

  const sendResetLink = async (values) => {
    try {
      const payload = {
        email: values?.email,
      };
      setLoading(true);
      const response = await ApiService(
        "forget-password",
        "POST",
        payload,
        false
      );
      console.log(response);

      if (response?.response?.status === 401) {
        // console.log(response?.response?.data?.message);
        setLoading(false);
        setAlertMessage(
          <Alert variant="danger">{response?.response?.data?.message}</Alert>
        );
        setTimeout(() => {
          setAlertMessage("");
        }, 5000);
      }

      if (response?.data?.status_code == 200) {
        // console.log(response.data.message);
        setLoading(false);
        setAlertMessage(
          <Alert variant="success">{response?.data?.message}</Alert>
        );
        setTimeout(() => {
          setAlertMessage("");
        }, 5000);
      }
      //   setJobDetails(responseData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

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
                        <img
                          src="assets/images/nuvo_logo.png"
                          alt="nuvo_logo"
                          height="120"
                          className="logo-light"
                        />
                        <img
                          src="/assets/images/nuvo_logo.png"
                          alt="nuvo_logo"
                          height="120"
                          className="logo-dark"
                        />
                      </Link>
                      <div className="mt-2">
                        <img
                          src="assets/images/auth/sign-in.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="auth-content card-body p-5 h-100 text-white">
                      <div className="w-100">
                        {/* { success ? (<SuccessModel success={success}/>) : error ? (<ErrorModel error={error}/>) : ""} */}
                        <div className="text-center mb-4">
                          <h5>Forgot your password?</h5>
                          <p className="text-white-70">
                            {" "}
                            No problem. Just let us know your email address and
                            we will email you a password reset link that will
                            allow you to choose a new one.
                          </p>
                        </div>
                        {alertMessage && <div role="alert">{alertMessage}</div>}
                        <form
                          onSubmit={formik.handleSubmit}
                          className="auth-form"
                        >
                          <div className="mb-3">
                            <label for="usernameInput" className="form-label">
                              Email
                            </label>
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
                            {formik.touched.email && formik.errors.email && (
                              <span className="error">
                                {formik.errors.email}
                              </span>
                            )}
                          </div>
                          <div className="text-center">
                            <button
                              type="submit"
                              className={`btn btn-white btn-hover w-100 ${
                                loading ? "disabled" : ""
                              }`}
                              disabled = { loading || !formik.isValid }
                            >
                              { loading ? "Sending reset link..." : "Email Reset Password Link" }
                            </button>
                          </div>
                        </form>
                        {/* {error ? (
                                                        <div className="text-left mt-3 mb-3">
                                                            <span className='error'>{error}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="text-left mt-3 mb-3">
                                                            <span className='' style={{
                                                                color: "#C1FFC1"
                                                            }}>{success}</span>
                                                        </div>
                                                    )} */}
                        <div className="mt-4 text-center">
                          <p className="mb-0">
                            Back to{" "}
                            <Link
                              to="/"
                              className="fw-medium text-white text-decoration-underline"
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
