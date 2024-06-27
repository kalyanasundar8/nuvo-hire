import React, { useState, useEffect } from "react";
import "./Header.css";

import { Link, useNavigate } from "react-router-dom";
import { setIsAuthenticated } from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let isAuth =
    useSelector((state) => state?.auth?.isAuthenticated) ||
    JSON.parse(localStorage.getItem("isAuthenticated"));

  const [user, setUser] = useState();

  useEffect(() => {
    if (isAuth && localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [isAuth]);

  console.log(user);

  const logOut = () => {
    localStorage.removeItem("user");
    dispatch(setIsAuthenticated(false));
    navigate("/");
    window.location.reload();
  };

  //    const jobSeekerSignup = () => {

  //         navigate('/jobseeker-signup');
  //     }

  //     const JobSeekerLogin = () => {

  //         navigate('/jobseeker-signin');
  //     }
  // const employerSignup = () => {
  //     navigate('/employer-signup');
  // }

  return (
    <div classNameName='HeaderScreen'>
      <div className='top-bar'>
        <div className='container-fluid custom-container'>
          <div className='row g-0 align-items-center'>
            <div className='col-md-7'>
              <ul className='list-inline mb-0 text-center text-md-start'>
                <li className='list-inline-item'>
                  <p className='fs-13 mb-0'>
                    {" "}
                    <i className='mdi mdi-map-marker'></i> Your Location:{" "}
                    <a href='' className='text-dark'>
                      Coimbatore
                    </a>
                  </p>
                </li>
                <li className='list-inline-item'>
                  <ul className='topbar-social-menu list-inline mb-0'>
                    <li className='list-inline-item'>
                      <a
                        href='https://www.linkedin.com/company/ready2jobs-manpower-suppliers-pvt-ltd/'
                        className='social-link'
                      >
                        <i className='uil uil-linkedin'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a
                        href='https://www.facebook.com/nuvohire/'
                        target='_blank'
                        className='social-link'
                      >
                        <i className='uil uil-facebook'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a
                        href='https://instagram.com/nuvohire'
                        target='_blank'
                        className='social-link'
                      >
                        <i className='uil uil-instagram'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a
                        href='https://www.youtube.com/channel/UCgkBlMK3ePbzl7LZlMrwU1Q'
                        className='social-link'
                      >
                        <i className='uil uil-youtube'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a
                        href='https://twitter.com/ready2jobs_offi'
                        className='social-link'
                      >
                        <i className='uil uil-twitter-alt'></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className='col-md-5'>
              <ul className='list-inline mb-0 text-center text-md-end'>
                <li className='list-inline-item py-2 me-2 align-middle'>
                  {/* <a href="#signupModal" className="text-dark fw-medium fs-13" data-bs-toggle="modal"><i className="uil uil-lock"></i>
                                        Sign Up</a> */}
                  {isAuth === true ? (
                    ""
                  ) : (
                    <Link
                      to='/jobseeker-signup'
                      className='text-dark fw-medium fs-13'
                    >
                      <i className='uil uil-lock'></i>
                      Sign Up
                    </Link>
                  )}
                </li>
                <li className='list-inline-item align-middle'>
                  <div className='dropdown d-inline-block language-switch'>
                    <button
                      type='button'
                      className='btn'
                      data-bs-toggle='dropdown--'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <img
                        id='header-lang-img'
                        src='/assets/images/flags/india.jpg'
                        alt='Header Language'
                        height='20'
                      />
                    </button>
                    <div className='dropdown-menu dropdown-menu-end'>
                      <a
                        href='javascript:void(0);'
                        className='dropdown-item notify-item language'
                        data-lang='eng'
                      >
                        <img
                          src='assets/images/flags/us.jpg'
                          alt='user-image'
                          className='me-1'
                          height='12'
                        />
                        <span className='align-middle'>English</span>
                      </a>

                      <a
                        href='javascript:void(0);'
                        className='dropdown-item notify-item language'
                        data-lang='sp'
                      >
                        <img
                          src='assets/images/flags/spain.jpg'
                          alt='user-image'
                          className='me-1'
                          height='12'
                        />
                        <span className='align-middle'>Spanish</span>
                      </a>

                      <a
                        href='javascript:void(0);'
                        className='dropdown-item notify-item language'
                        data-lang='gr'
                      >
                        <img
                          src='assets/images/flags/germany.jpg'
                          alt='user-image'
                          className='me-1'
                          height='12'
                        />
                        <span className='align-middle'>German</span>
                      </a>

                      <a
                        href='javascript:void(0);'
                        className='dropdown-item notify-item language'
                        data-lang='it'
                      >
                        <img
                          src='assets/images/flags/italy.jpg'
                          alt='user-image'
                          className='me-1'
                          height='12'
                        />
                        <span className='align-middle'>Italian</span>
                      </a>

                      <a
                        href='javascript:void(0);'
                        className='dropdown-item notify-item language'
                        data-lang='ru'
                      >
                        <img
                          src='assets/images/flags/russia.jpg'
                          alt='user-image'
                          className='me-1'
                          height='12'
                        />
                        <span className='align-middle'>Russian</span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className='navbar navbar-expand-lg fixed-top sticky' id='navbar'>
        <div className='container-fluid custom-container'>
          {/* <Link className='navbar-brand text-dark fw-bold me-auto' to='/'>
            <img
              src='assets/images/nuvo_logo.png'
              height='100'
              alt=''
              className='logo-dark'
            />
            <img
              src='assets/images/nuvo_logo.png'
              height='100'
              alt=''
              className='logo-light'
            />
          </Link> */}
          {/* <h4>LOGO</h4> */}
          <div>
            <button
              className='navbar-toggler me-3'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarCollapse'
              aria-controls='navbarCollapse'
              aria-label='Toggle navigation'
            >
              <i className='mdi mdi-menu'></i>
            </button>
          </div>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav mx-auto navbar-center'>
              <li className='nav-item dropdown dropdown-hover'>
                <Link to='/' className='nav-link' id='homedrop' role='button'>
                  Home
                </Link>
              </li>
              <li className='nav-item dropdown dropdown-hover'>
                <a
                  className='nav-link'
                  href=''
                  id='jobsdropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                >
                  About Us <div className='arrow-down'></div>
                </a>
                <ul
                  className='dropdown-menu dropdown-menu-center'
                  aria-labelledby='jobsdropdown'
                >
                  <li>
                    <Link
                      to='/about-us'
                      className='dropdown-item'
                      href='about.php'
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/services'
                      className='dropdown-item'
                      href='services.php'
                    >
                      Our Services
                    </Link>
                  </li>
                </ul>
              </li>
              
              { isAuth === true && user?.data?.user_type === "Employer" ? (
                ""   
              ) : (
                <li className='nav-item dropdown dropdown-hover'>
                <a
                  className='nav-link'
                  href=''
                  id='jobsdropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                >
                  Job Seeker <div className='arrow-down'></div>
                </a>
                <ul
                  className='dropdown-menu dropdown-menu-center'
                  aria-labelledby='jobsdropdown'
                >
                  {isAuth === true ? (
                    ""
                  ) : (
                    <li>
                      <Link
                        to='/jobseeker-signup'
                        className='dropdown-item'
                        href='sign-up.php'
                      >
                        Sign Up
                      </Link>
                    </li>
                  )}

                  {isAuth === true ? (
                    ""
                  ) : (
                    <li>
                      <Link
                        to='/jobseeker-signin'
                        className='dropdown-item'
                        href='sign-in.php'
                      >
                        Sign In
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link className='dropdown-item' to='/faqs'>
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/blogs'>
                      Blog
                    </Link>
                  </li>
                </ul>
              </li> 
              )}
            
              <li className='nav-item'>
                <Link to='/jobs' className='nav-link'>
                  Jobs
                </Link>
              </li>
              {isAuth === true ? (
                ""
              ) : (
                <li className='nav-item dropdown dropdown-hover'>
                  <a
                    className='nav-link'
                    href=''
                    id='jobsdropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                  >
                    Employer <div className='arrow-down'></div>
                  </a>

                  <ul
                    className='dropdown-menu dropdown-menu-center'
                    aria-labelledby='jobsdropdown'
                  >
                    <li>
                      <Link className='dropdown-item' to='/employer-signup'>
                        {" "}
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/employer-signin'>
                        {" "}
                        Sign In
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {isAuth === true ? (
                <li className='nav-item'>
                  <Link
                    to={`/pricing-plans/${user?.data?.user_type}`}
                    className='nav-link'
                  >
                    Pricing
                  </Link>
                </li>
              ) : (
                ""
              )}

              <li className='nav-item'>
                <Link to='/contact-us' className='nav-link'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <ul className='header-menu list-inline d-flex align-items-center mb-0'>
            <li className='list-inline-item dropdown me-4'>
              <a
                href=''
                className='header-item noti-icon position-relative'
                id='notification'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='mdi mdi-bell fs-22'></i>
                <div className='count position-absolute'>3</div>
              </a>
              <div
                className='dropdown-menu dropdown-menu-sm dropdown-menu-end p-0'
                aria-labelledby='notification'
              >
                <div className='notification-header border-bottom bg-light'>
                  <h6 className='mb-1'> Notification </h6>
                  <p className='text-muted fs-13 mb-0'>
                    You have 4 unread Notification
                  </p>
                </div>
                <div className='notification-wrapper dropdown-scroll'>
                  <a
                    href=''
                    className='text-dark notification-item d-block active'
                  >
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0 me-3'>
                        <div className='avatar-xs bg-primary text-white rounded-circle text-center'>
                          <i className='uil uil-user-check'></i>
                        </div>
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='mt-0 mb-1 fs-14'>
                          22 verified registrations
                        </h6>
                        <p className='mb-0 fs-12 text-muted'>
                          <i className='mdi mdi-clock-outline'></i>{" "}
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href='' className='text-dark notification-item d-block'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0 me-3'>
                        <img
                          src='/assets/images/user/img-02.jpg'
                          className='rounded-circle avatar-xs'
                          alt='user-pic'
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='mt-0 mb-1 fs-14'>James Lemire</h6>
                        <p className='text-muted fs-12 mb-0'>
                          <i className='mdi mdi-clock-outline'></i>{" "}
                          <span>15 min ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href='' className='text-dark notification-item d-block'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0 me-3'>
                        <img
                          src='assets/images/featured-job/img-04.png'
                          className='rounded-circle avatar-xs'
                          alt='user-pic'
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='mt-0 mb-1 fs-14'>
                          Applications has been approved
                        </h6>
                        <p className='text-muted mb-0 fs-12'>
                          <i className='mdi mdi-clock-outline'></i>{" "}
                          <span>45 min ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href='' className='text-dark notification-item d-block'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0 me-3'>
                        <img
                          src='assets/images/user/img-01.jpg'
                          className='rounded-circle avatar-xs'
                          alt='user-pic'
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='mt-0 mb-1 fs-14'>Kevin Stewart</h6>
                        <p className='text-muted mb-0 fs-12'>
                          <i className='mdi mdi-clock-outline'></i>{" "}
                          <span>1 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href='' className='text-dark notification-item d-block'>
                    <div className='d-flex align-items-center'>
                      <div className='flex-shrink-0 me-3'>
                        <img
                          src='assets/images/featured-job/img-01.png'
                          className='rounded-circle avatar-xs'
                          alt='user-pic'
                        />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='mt-0 mb-1 fs-15'>Creative Agency</h6>
                        <p className='text-muted mb-0 fs-12'>
                          <i className='mdi mdi-clock-outline'></i>{" "}
                          <span>2 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='notification-footer border-top text-center'>
                  <a className='primary-link fs-13' href=''>
                    <i className='mdi mdi-arrow-right-circle me-1'></i>{" "}
                    <span>View More..</span>
                  </a>
                </div>
              </div>
            </li>
            <li className='list-inline-item dropdown'>
              {isAuth === true ? (
                <div>
                  <a
                    href='javascript:void(0)'
                    className='header-item'
                    id='userdropdown'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <span className='d-none d-md-inline-block fw-medium'>
                      Hi, {user ? user?.data?.name || user?.name : "Guest"}
                    </span>
                  </a>
                  <ul
                    className='dropdown-menu dropdown-menu-end'
                    aria-labelledby='userdropdown'
                  >
                    {isAuth === true &&
                      user?.data?.user_type === "Employer" && (
                        <>
                          <li>
                            <Link className='dropdown-item' to='/dashboard'>
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              className='dropdown-item'
                              to='/create-new-job'
                            >
                              Create new Jobs
                            </Link>
                          </li>
                          <li>
                            <Link
                              className='dropdown-item'
                              to="/employer-profile"
                            >
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' to='/my-tickets'>
                              My Tickets
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' to='/manage-jobs'>
                              My Jobs
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' to='/view-cart'>
                              View cart
                            </Link>
                          </li>
                        </>
                      )}

                    {isAuth === true &&
                      user?.data?.user_type === "JobSeeker" && (
                        <>
                          <li>
                            <Link className='dropdown-item' to='/my-jobs'>
                              My Jobs
                            </Link>
                          </li>
                          <li>
                            <Link className='dropdown-item' to='/bookmark-jobs'>
                              Bookmarks Jobs
                            </Link>
                          </li>
                          <li>
                            <Link
                              className='dropdown-item'
                              to="/my-profile"
                            >
                              My Profile
                            </Link>
                          </li>
                        </>
                      )}
                    <li>
                      <Link className='dropdown-item' to='/' onClick={logOut}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </nav>

      <div
        className='modal fade'
        id='signupModal'
        tabindex='-1'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body p-5'>
              <div className='position-absolute end-0 top-0 p-3'>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='auth-content'>
                <div className='w-100'>
                  <div className='text-center mb-4'>
                    <h5>Sign Up</h5>
                    <p className='text-muted'>
                      Sign Up and get access to all the features of Nuvo Hire
                    </p>
                  </div>
                  <form action='#' className='auth-form'>
                    <div className='mb-3'>
                      <label for='usernameInput' className='form-label'>
                        Username
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        id='usernameInput'
                        placeholder='Enter your username'
                      />
                    </div>
                    <div className='mb-3'>
                      <label for='passwordInput' className='form-label'>
                        Email
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        id='emailInput'
                        placeholder='Enter your email'
                      />
                    </div>
                    <div className='mb-3'>
                      <label for='emailInput' className='form-label'>
                        Password
                      </label>
                      <input
                        type='password'
                        className='form-control'
                        id='passwordInput'
                        placeholder='Password'
                      />
                    </div>
                    <div className='mb-4'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='flexCheckDefault'
                        />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'
                        >
                          I agree to the{" "}
                          <a
                            href=''
                            className='text-primary form-text text-decoration-underline'
                          >
                            Terms and conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className='text-center'>
                      <button type='submit' className='btn btn-primary w-100'>
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div className='mt-3 text-center'>
                    <p className='mb-0'>
                      Already a member ?{" "}
                      <a
                        href='sign-in.php'
                        className='form-text text-primary text-decoration-underline'
                      >
                        {" "}
                        Sign-in{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
