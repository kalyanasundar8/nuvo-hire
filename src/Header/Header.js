import './Header.css';

import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();

   const jobSeekerSignup = () => {
       
        navigate('/jobseeker-signup');
    }
    const employerSignup = () => {
        navigate('/employer-signup');
    }

    return (
        <div className='HeaderScreen'>
            <div className="top-bar">
                <div className="container-fluid custom-container">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-7">
                            <ul className="list-inline mb-0 text-center text-md-start">
                                <li className="list-inline-item">
                                    <p className="fs-13 mb-0"> <i className="mdi mdi-map-marker"></i> Your Location: <a href="javascript:void(0)" className="text-dark">New Caledonia</a></p>
                                </li>
                                <li className="list-inline-item">
                                    <ul className="topbar-social-menu list-inline mb-0">
                                        <li className="list-inline-item"><a href="javascript:void(0)" className="social-link"><i
                                                    className="uil uil-whatsapp"></i></a></li>
                                        <li className="list-inline-item"><a href="javascript:void(0)" className="social-link"><i
                                                    className="uil uil-facebook-messenger-alt"></i></a></li>
                                        <li className="list-inline-item"><a href="javascript:void(0)" className="social-link"><i
                                                    className="uil uil-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="javascript:void(0)" className="social-link"><i
                                                    className="uil uil-envelope"></i></a></li>
                                        <li className="list-inline-item"><a href="javascript:void(0)" className="social-link"><i
                                                    className="uil uil-twitter-alt"></i></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <ul className="list-inline mb-0 text-center text-md-end">
                                <li className="list-inline-item py-2 me-2 align-middle">
                                    <a href="#signupModal"  onClick={jobSeekerSignup} className="text-dark fw-medium fs-13" data-bs-toggle="modal"><i className="uil uil-lock"></i>
                                        Sign Up</a>
                                </li>
                                <li className="list-inline-item align-middle">
                                    <div className="dropdown d-inline-block language-switch">
                                        <button type="button" className="btn" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" height="16" />
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="eng">
                                                <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12" />
                                                <span className="align-middle">English</span>
                                            </a>
                                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                                                <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12" />
                                                <span className="align-middle">Spanish</span>
                                            </a>
                                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                                                <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12" />
                                                <span className="align-middle">German</span>
                                            </a>
                                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                                                <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" />
                                                <span className="align-middle">Italian</span>
                                            </a>
                                            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                                                <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12" />
                                                <span className="align-middle">Russian</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* TopBar End */}

            <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
                <div className="container-fluid custom-container">
                    <a className="navbar-brand text-dark fw-bold me-auto" href="index.html">
                        <img src="assets/images/logo-dark.png" height="22" alt="" className="logo-dark" />
                        <img src="assets/images/logo-light.png" height="22" alt="" className="logo-light" />
                    </a>
                    <div>
                        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto navbar-center">
                            <li className="nav-item dropdown dropdown-hover">
                                <a className="nav-link" href="javascript:void(0)" id="homedrop" role="button" data-bs-toggle="dropdown">
                                    Home <div className="arrow-down"></div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-center" aria-labelledby="homedrop">
                                    <li><a className="dropdown-item" href="index.html">Home 1</a></li>
                                    <li><a className="dropdown-item" href="index-2.html">Home 2</a></li>
                                    <li><a className="dropdown-item" href="index-3.html">Home 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown dropdown-hover">
                                <a className="nav-link" href="javascript:void(0)" id="jobsdropdown" role="button" data-bs-toggle="dropdown">
                                    Company <div className="arrow-down"></div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-center" aria-labelledby="jobsdropdown">
                                    <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                    <li><a className="dropdown-item" href="services.html">Services</a></li>
                                    <li><a className="dropdown-item" href="team.html">Team</a></li>
                                    <li><a className="dropdown-item" href="pricing.html">Pricing</a></li>
                                    <a className="dropdown-item" href="privacy-policy.html">Priacy & Policy</a>
                                    <li><a className="dropdown-item" href="faqs.html">Faqs</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown dropdown-hover">
                                <a className="nav-link" href="javascript:void(0)" id="pagesdoropdown" role="button" data-bs-toggle="dropdown">
                                    Pages
                                    <div className="arrow-down"></div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-center" aria-labelledby="pagesdoropdown">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <span className="dropdown-header">Jobs</span>
                                            <div>
                                                <a className="dropdown-item" href="job-list.html">Job List</a>
                                                <a className="dropdown-item" href="job-list-2.html">Job List-2</a>
                                                <a className="dropdown-item" href="job-grid.html">Job Grid</a>
                                                <a className="dropdown-item" href="job-grid-2.html">Job Grid-2</a>
                                                <a className="dropdown-item" href="job-details.html">Job Details</a>
                                                <a className="dropdown-item" href="job-categories.html">Jobs Categories</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <span className="dropdown-header">Candidates / Companys</span>
                                            <div>
                                                <a className="dropdown-item" href="candidate-list.html">Candidate List</a>
                                                <a className="dropdown-item" href="candidate-grid.html">Candidate Grid</a>
                                                <a className="dropdown-item" href="candidate-details.html">Candidate Details</a>
                                                <a className="dropdown-item" href="company-list.html">Company List</a>
                                                <a className="dropdown-item" href="company-details.html">Company Details</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <span className="dropdown-header">Extra Pages</span>
                                            <div>
                                                <a className="dropdown-item" href="sign-up.html">Sign Up</a>
                                                <a className="dropdown-item" href="sign-in.html">Sign In</a>
                                                <a className="dropdown-item" href="sign-out.html">Sign Out</a>
                                                <a className="dropdown-item" href="reset-password.html">Reset Password</a>
                                                <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                                <a className="dropdown-item" href="404-error.html">404 Error</a>
                                                <a className="dropdown-item" href="components.html">Components</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown dropdown-hover">
                                <a className="nav-link" href="javascript:void(0)" id="productdropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog 
                                    <div className="arrow-down"></div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-center" aria-labelledby="productdropdown">
                                    <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                                    <li><a className="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                                    <li><a className="dropdown-item" href="blog-modern.html">Blog Modern</a></li>
                                    <li><a className="dropdown-item" href="blog-masonry.html">Blog Masonry</a></li>
                                    <li><a className="dropdown-item" href="blog-details.html">Blog details</a></li>
                                    <li><a className="dropdown-item" href="blog-author.html">Blog Author</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">Contact</a>
                            </li>
                             {/* <li className="nav-item">
                               <a  onclick="getJob();" className="nav-link">Job Seeker</a> 
                                <button onClick={jobSeekerSignup}>Job Seeker</button>
                            </li>*/}
                            <li className="nav-item">
                                {/* <a  onclick="getJob();" className="nav-link">Job Seeker</a> */}
                                <button onClick={employerSignup}>Employer</button>
                            </li>
                        </ul>
                    </div>
                    <ul className="header-menu list-inline d-flex align-items-center mb-0">
                        <li className="list-inline-item dropdown me-4">
                            <a href="javascript:void(0)" className="header-item noti-icon position-relative" id="notification" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i className="mdi mdi-bell fs-22"></i>
                                <div className="count position-absolute">3</div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end p-0" aria-labelledby="notification">
                                <div className="notification-header border-bottom bg-light">
                                    <h6 className="mb-1"> Notification </h6>
                                    <p className="text-muted fs-13 mb-0">You have 4 unread Notification</p>
                                </div>
                                <div className="notification-wrapper dropdown-scroll">
                                    <a href="javascript:void(0)" className="text-dark notification-item d-block active">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs bg-primary text-white rounded-circle text-center">
                                                    <i className="uil uil-user-check"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mt-0 mb-1 fs-14">22 verified registrations</h6>
                                                <p className="mb-0 fs-12 text-muted"><i className="mdi mdi-clock-outline"></i> <span>3 min
                                                    ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)" className="text-dark notification-item d-block">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="assets/images/user/img-02.jpg" className="rounded-circle avatar-xs" alt="user-pic" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mt-0 mb-1 fs-14">James Lemire</h6>
                                                <p className="text-muted fs-12 mb-0"><i className="mdi mdi-clock-outline"></i> <span>15 min
                                                    ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)" className="text-dark notification-item d-block">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="assets/images/featured-job/img-04.png" className="rounded-circle avatar-xs"
                                                    alt="user-pic" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mt-0 mb-1 fs-14">Applications has been approved</h6>
                                                <p className="text-muted mb-0 fs-12"><i className="mdi mdi-clock-outline"></i> <span>45 min
                                                    ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)" className="text-dark notification-item d-block">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="assets/images/user/img-01.jpg" className="rounded-circle avatar-xs"
                                                    alt="user-pic" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mt-0 mb-1 fs-14">Kevin Stewart</h6>
                                                <p className="text-muted mb-0 fs-12"><i className="mdi mdi-clock-outline"></i> <span>1 hour
                                                    ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0)" className="text-dark notification-item d-block">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="assets/images/featured-job/img-01.png" className="rounded-circle avatar-xs"
                                                    alt="user-pic" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mt-0 mb-1 fs-15">Creative Agency</h6>
                                                <p className="text-muted mb-0 fs-12"><i className="mdi mdi-clock-outline"></i> <span>2 hour
                                                    ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="notification-footer border-top text-center">
                                    <a className="primary-link fs-13" href="javascript:void(0)">
                                        <i className="mdi mdi-arrow-right-circle me-1"></i> <span>View More..</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="list-inline-item dropdown">
                            <a href="javascript:void(0)" className="header-item" id="userdropdown" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="assets/images/profile.jpg" alt="mdo" width="35" height="35" className="rounded-circle me-1" /> <span className="d-none d-md-inline-block fw-medium">Hi, Jansh</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown">
                                <li><a className="dropdown-item" href="manage-jobs.html">Manage Jobs</a></li>
                                <li><a className="dropdown-item" href="bookmark-jobs.html">Bookmarks Jobs</a></li>
                                <li><a className="dropdown-item" href="profile.html">My Profile</a></li>
                                <li><a className="dropdown-item" href="sign-out.html">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Header;