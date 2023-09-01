import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ApiService from "../../services/ApiService";
import * as Yup from "yup";
import { useFormik } from "formik";

import { setIsAuthenticated } from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

export default function CompanySignin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your username"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please enter your password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      loginHandler(values);
    },
  });

  let isAuth =
    useSelector((state) => state?.auth?.isAuthenticated) ||
    JSON.parse(localStorage.getItem("isAuthenticated"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // console.log(isAuth);

  const loginHandler = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await ApiService(
        "employer-login",
        "POST",
        payload,
        false
      );

      if (response?.response?.data?.is_otp_verified == false) {
        navigate("/verify-otp");
      }

      if (response?.data?.status_code == 200) {
        dispatch(setIsAuthenticated(true));
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setError("");
        navigate("/");
        window.location.reload();
      } else {
        console.log(response?.response?.data?.message);
        setError(response?.response?.data?.message);
      }
      //   setJobDetails(responseData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }

    // const result = await ApiService('employer-login', 'POST', payload, false).then(({ response }) => {

    // if (response.status_code === 200) {

    //     // console.log(response.data.data)
    //     // dispatch(setIsAuthenticated(true));
    //     // localStorage.setItem('user', JSON.stringify(response.data.data));
    //     // setError('');
    //     // navigate("/")
    //     // window.location.reload();

    // } else {

    //     setError(response.data.message);
    // }
    //
    // Swal.fire({
    //     icon: "success",
    //     text: data.message
    // })

    // }).catch(({ err }) => {

    //     console.log(err)
    //     setError('Something went wrong');
    //     // if( response.status === 400 ) {
    //     //   Swal.fire({
    //     //       icon:"error",
    //     //       text:response.data.message
    //     //   })
    //     // } else {
    //     //   Swal.fire({
    //     //     text: "Something went wrong",
    //     //     icon:"error"
    //     //   })
    //     // }
    // })
  };

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
                          <h5>Welcome Back !</h5>
                          <p className='text-white-70'>
                            Sign in to continue to Nuvo Hire.
                          </p>
                        </div>
                        <form
                          onSubmit={formik.handleSubmit}
                          className='auth-form'
                        >
                          <div className='mb-3'>
                            <label for='usernameInput' className='form-label'>
                              Email
                            </label>
                            <input
                              type='text'
                              className='form-control'
                              name='user_name'
                              id='usernameInput'
                              placeholder='Enter your email'
                              value={email}
                              onChange={(event) => {
                                formik.handleChange(event);
                                setEmail(event.target.value);
                              }}
                            />
                            {formik.touched.email && formik.errors.email && (
                              <span className='error'>
                                {formik.errors.email}
                              </span>
                            )}
                          </div>
                          <div className='mb-3'>
                            <label for='passwordInput' className='form-label'>
                              Password
                            </label>
                            <input
                              type='password'
                              className='form-control'
                              name='password'
                              id='passwordInput'
                              placeholder='Enter your password'
                              value={password}
                              onChange={(event) => {
                                formik.handleChange(event);
                                setPassword(event.target.value);
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
                          <div className='mb-4'>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                id='flexCheckDefault'
                              />
                              <Link
                                to='/forget-password'
                                className='float-end text-white'
                              >
                                Forgot Password?
                              </Link>
                              <label
                                className='form-check-label'
                                for='flexCheckDefault'
                              >
                                Remember me
                              </label>
                            </div>
                            {error ? (
                              <div className='text-left mt-4'>
                                <span className='error'>{error}</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className='text-center'>
                            <button
                              type='submit'
                              className='btn btn-white btn-hover w-100'
                            >
                              Sign In
                            </button>
                          </div>
                        </form>
                        <div className='mt-4 text-center'>
                          <p className='mb-0'>
                            Don't have an account ?{" "}
                            <Link
                              to='/jobseeker-signup'
                              className='fw-medium text-white text-decoration-underline'
                            >
                              {" "}
                              Sign Up{" "}
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
    </div>
  );
}
