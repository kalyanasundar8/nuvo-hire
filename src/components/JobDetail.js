import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ApiService from "../services/ApiService";

export default function JobDetail() {
  const { id } = useParams();

  // Fetch job-details
  const [jobDetails, setJobDetails] = useState([]);
  const fetchData = async () => {
    try {
      const response = await ApiService(
        `jobposts?id=${id}`,
        "GET",
        null,
        false
      );
      const jobDetailsData = response.data;
      const responseData = jobDetailsData.data.response;
      setJobDetails(responseData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class='page-content'>
      {/* Start home  */}
      <section class='page-title-box'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <div class='text-center text-white'>
                <h3 class='mb-4'>Job Details</h3>
                <div class='page-next'>
                  <nav
                    class='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol class='breadcrumb justify-content-center'>
                      <li class='breadcrumb-item'>
                        <Link to='index.php'>Home</Link>
                      </li>
                      <li class='breadcrumb-item'>
                        <Link to=''>Pages</Link>
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        {" "}
                        Job Details{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home  */}

      {/* START SHAPE  */}
      <div class='position-relative' style={{ zIndex: 1 }}>
        <div class='shape'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 250'>
            <path
              fill=''
              fill-opacity='1'
              d='M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>
      {/* END SHAPE  */}

      <section class='section'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-8'>
              <div class='card job-detail overflow-hidden'>
                <div>
                  <img
                    src='assets/images/job-detail.jpg'
                    alt=''
                    class='img-fluid'
                  />
                  <div class='job-details-compnay-profile'>
                    <img
                      src='assets/images/featured-job/img-10.png'
                      alt=''
                      class='img-fluid rounded-3 rounded-3'
                    />
                  </div>
                </div>
                <div class='card-body p-4'>
                  <div>
                    <div class='row'>
                      <div class='col-md-8'>
                        <h5 class='mb-1'>{jobDetails.job_title}</h5>
                        <ul class='list-inline text-muted mb-0'>
                          <li class='list-inline-item'>
                            <i class='mdi mdi-account'></i> vacancy
                          </li>
                          <li class='list-inline-item text-warning review-rating'>
                            <span class='badge bg-warning'>4.8</span>{" "}
                            <i class='mdi mdi-star align-middle'></i>
                            <i class='mdi mdi-star align-middle'></i>
                            <i class='mdi mdi-star align-middle'></i>
                            <i class='mdi mdi-star align-middle'></i>
                            <i class='mdi mdi-star-half-full align-middle'></i>
                          </li>
                        </ul>
                      </div>
                      <div class='col-lg-4'>
                        <ul class='list-inline mb-0 text-lg-end mt-3 mt-lg-0'>
                          <li class='list-inline-item'>
                            <div class='favorite-icon'>
                              <Link to=''>
                                <i class='uil uil-heart-alt'></i>
                              </Link>
                            </div>
                          </li>
                          <li class='list-inline-item'>
                            <div class='favorite-icon'>
                              <Link to=''>
                                <i class='uil uil-setting'></i>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class='mt-4'>
                    <div class='row g-2'>
                      <div class='col-lg-3'>
                        <div class='border rounded-start p-3'>
                          <p class='text-muted mb-0 fs-13'>Experience</p>
                          <p class='fw-medium fs-15 mb-0'>Minimum 1 Year</p>
                        </div>
                      </div>
                      <div class='col-lg-3'>
                        <div class='border p-3'>
                          <p class='text-muted fs-13 mb-0'>Employee type</p>
                          <p class='fw-medium mb-0'>Full Time</p>
                        </div>
                      </div>
                      <div class='col-lg-3'>
                        <div class='border p-3'>
                          <p class='text-muted fs-13 mb-0'>Position</p>
                          <p class='fw-medium mb-0'>Senior</p>
                        </div>
                      </div>
                      <div class='col-lg-3'>
                        <div class='border rounded-end p-3'>
                          <p class='text-muted fs-13 mb-0'>Offer Salary</p>
                          <p class='fw-medium mb-0'>$2150/ Month</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='mt-4'>
                    <h5 class='mb-3'>Job Description</h5>
                    <div class='job-detail-desc'>
                      <p class='text-muted mb-0'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent. You will help the team design beautiful
                        interfaces that solve business challenges for our
                        clients. We work with a number of Tier 1 banks on
                        building web-based applications for AML, KYC and
                        Sanctions List management workflows. This role is ideal
                        if you are looking to segue your career into the FinTech
                        or Big Data arenas.
                      </p>
                    </div>
                  </div>

                  <div class='mt-4'>
                    <h5 class='mb-3'>Responsibilities</h5>
                    <div class='job-detail-desc mt-2'>
                      <p class='text-muted'>
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent.
                      </p>
                      <ul class='job-detail-list list-unstyled mb-0 text-muted'>
                        <li>
                          <i class='uil uil-circle'></i> Have sound knowledge of
                          commercial activities.
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> Build next-generation
                          web applications with a focus on the client side
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> Work on multiple
                          projects at once, and consistently meet draft
                          deadlines
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> have already graduated
                          or are currently in any year of study
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> Revise the work of
                          previous designers to create a unified aesthetic for
                          our brand materials
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class='mt-4'>
                    <h5 class='mb-3'>Qualification </h5>
                    <div class='job-detail-desc mt-2'>
                      <ul class='job-detail-list list-unstyled mb-0 text-muted'>
                        <li>
                          <i class='uil uil-circle'></i> B.C.A / M.C.A under
                          National University course complete.
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> 3 or more years of
                          professional design experience
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> have already graduated
                          or are currently in any year of study
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> Advanced degree or
                          equivalent experience in graphic and web design
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class='mt-4'>
                    <h5 class='mb-3'>Skill & Experience</h5>
                    <div class='job-details-desc'>
                      <ul class='job-detail-list list-unstyled mb-0 text-muted'>
                        <li>
                          <i class='uil uil-circle'></i> Understanding of key
                          Design Principal
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> Proficiency With HTML,
                          CSS, Bootstrap
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> Wordpress: 1 year
                          (Required)
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> Experience designing
                          and developing responsive design websites
                        </li>
                        <li>
                          <i class='uil uil-circle'></i> web designing: 1 year
                          (Preferred)
                        </li>
                      </ul>
                      <div class='mt-4'>
                        <span class='badge bg-primary'>PHP</span>
                        <span class='badge bg-primary'>JS</span>
                        <span class='badge bg-primary'>Marketing</span>
                        <span class='badge bg-primary'>REACT</span>
                        <span class='badge bg-primary'>PHOTOSHOP</span>
                      </div>
                    </div>
                  </div>

                  <div class='mt-4 pt-3'>
                    <ul class='list-inline mb-0'>
                      <li class='list-inline-item mt-1'>Share this job:</li>
                      <li class='list-inline-item mt-1'>
                        <Link to='' class='btn btn-primary btn-hover'>
                          <i class='uil uil-facebook-f'></i> Facebook
                        </Link>
                      </li>
                      <li class='list-inline-item mt-1'>
                        <Link to='' class='btn btn-danger btn-hover'>
                          <i class='uil uil-google'></i> Google+
                        </Link>
                      </li>
                      <li class='list-inline-item mt-1'>
                        <Link to='' class='btn btn-success btn-hover'>
                          <i class='uil uil-linkedin-alt'></i> linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class='mt-4'>
                <h5>Related Jobs</h5>
                <div class='job-box card mt-4'>
                  <div class='p-4'>
                    <div class='row'>
                      <div class='col-lg-1'>
                        <img
                          src='assets/images/featured-job/img-01.png'
                          alt=''
                          class='img-fluid rounded-3'
                        />
                      </div>
                      <div class='col-lg-10'>
                        <div class='mt-3 mt-lg-0'>
                          <h5 class='fs-17 mb-1'>
                            <Link to='/job-detail' class='text-dark'>
                              HTML Developer
                            </Link>{" "}
                            <small class='text-muted fw-normal'>
                              (0-2 Yrs Exp.)
                            </small>
                          </h5>
                          <ul class='list-inline mb-0'>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                Nuvo Hire Technology Pvt.Ltd
                              </p>
                            </li>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                <i class='mdi mdi-map-marker'></i> California
                              </p>
                            </li>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                <i class='uil uil-wallet'></i> $250 - $800 /
                                month
                              </p>
                            </li>
                          </ul>
                          <div class='mt-2'>
                            <span class='badge bg-success-subtle text-success mt-1'>
                              Full Time
                            </span>
                            <span class='badge bg-warning-subtle text-warning mt-1'>
                              Urgent
                            </span>
                            <span class='badge bg-info-subtle text-info mt-1'>
                              Private
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='favorite-icon'>
                      <Link to=''>
                        <i class='uil uil-heart-alt fs-18'></i>
                      </Link>
                    </div>
                  </div>
                  <div class='p-3 bg-light'>
                    <div class='row justify-content-between'>
                      <div class='col-md-8'>
                        <div>
                          <ul class='list-inline mb-0'>
                            <li class='list-inline-item'>
                              <i class='uil uil-tag'></i> Keywords :
                            </li>
                            <li class='list-inline-item'>
                              <Link to='' class='primary-link text-muted'>
                                Ui designer
                              </Link>
                              ,
                            </li>
                            <li class='list-inline-item'>
                              <Link to='' class='primary-link text-muted'>
                                developer
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class='col-md-3'>
                        <div class='text-md-end'>
                          <Link to='' class='primary-link'>
                            Apply Now{" "}
                            <i class='mdi mdi-chevron-double-right'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='job-box bookmark-post card mt-4'>
                  <div class='p-4'>
                    <div class='row'>
                      <div class='col-lg-1'>
                        <img
                          src='assets/images/featured-job/img-02.png'
                          alt=''
                          class='img-fluid rounded-3'
                        />
                      </div>
                      <div class='col-lg-10'>
                        <div class='mt-3 mt-lg-0'>
                          <h5 class='fs-17 mb-1'>
                            <Link to='/job-detail' class='text-dark'>
                              Marketing Director
                            </Link>{" "}
                            <small class='text-muted fw-normal'>
                              (2-4 Yrs Exp.)
                            </small>
                          </h5>
                          <ul class='list-inline mb-0'>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                Creative Agency
                              </p>
                            </li>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                <i class='mdi mdi-map-marker'></i> New York
                              </p>
                            </li>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                <i class='uil uil-wallet'></i> $250 - $800 /
                                month
                              </p>
                            </li>
                          </ul>
                          <div class='mt-2'>
                            <span class='badge bg-danger-subtle text-danger mt-1'>
                              Part Time
                            </span>
                            <span class='badge bg-info-subtle text-info  mt-1'>
                              Private
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='favorite-icon'>
                      <Link to=''>
                        <i class='uil uil-heart-alt fs-18'></i>
                      </Link>
                    </div>
                  </div>
                  <div class='p-3 bg-light'>
                    <div class='row justify-content-between'>
                      <div class='col-md-8'>
                        <div>
                          <ul class='list-inline mb-0'>
                            <li class='list-inline-item'>
                              <i class='uil uil-tag'></i> Keywords :
                            </li>
                            <li class='list-inline-item'>
                              <Link to='' class='primary-link text-muted'>
                                Marketing
                              </Link>
                              ,
                            </li>
                            <li class='list-inline-item'>
                              <Link to='' class='primary-link text-muted'>
                                business
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class='col-md-3'>
                        <div class='text-md-end'>
                          <Link to='' class='primary-link'>
                            Apply Now{" "}
                            <i class='mdi mdi-chevron-double-right'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='job-box card mt-4'>
                  <div class='p-4'>
                    <div class='row'>
                      <div class='col-lg-1'>
                        <img
                          src='assets/images/featured-job/img-03.png'
                          alt=''
                          class='img-fluid rounded-3'
                        />
                      </div>
                      <div class='col-lg-10'>
                        <div class='mt-3 mt-lg-0'>
                          <h5 class='fs-17 mb-1'>
                            <Link to='/job-detail' class='text-dark'>
                              HTML Developer
                            </Link>{" "}
                            <small class='text-muted fw-normal'>
                              (2-4 Yrs Exp.)
                            </small>
                          </h5>
                          <ul class='list-inline mb-0'>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                Nuvo Hire Technology Pvt.Ltd
                              </p>
                            </li>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                <i class='mdi mdi-map-marker'></i> California
                              </p>
                            </li>
                            <li class='list-inline-item'>
                              <p class='text-muted fs-14 mb-0'>
                                <i class='uil uil-wallet'></i> $250 - $800 /
                                month
                              </p>
                            </li>
                          </ul>
                          <div class='mt-2'>
                            <span class='badge bg-primary-subtle text-primary mt-1'>
                              Freelance
                            </span>
                            <span class='badge bg-info-subtle text-info mt-1'>
                              Internship
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='favorite-icon'>
                      <Link to=''>
                        <i class='uil uil-heart-alt fs-18'></i>
                      </Link>
                    </div>
                  </div>
                  <div class='p-3 bg-light'>
                    <div class='row justify-content-between'>
                      <div class='col-md-8'>
                        <div>
                          <ul class='list-inline mb-0'>
                            <li class='list-inline-item'>
                              <i class='uil uil-tag'></i> Keywords :
                            </li>
                            <li class='list-inline-item'>
                              <Link to='' class='primary-link text-muted'>
                                Ui designer
                              </Link>
                              ,
                            </li>
                            <li class='list-inline-item'>
                              <Link to='' class='primary-link text-muted'>
                                developer
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class='col-md-3'>
                        <div class='text-md-end'>
                          <Link to='' class='primary-link'>
                            Apply Now{" "}
                            <i class='mdi mdi-chevron-double-right'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class='text-center mt-4'>
                <Link to='/jobs' class='primary-link form-text'>
                  View More <i class='mdi mdi-arrow-right'></i>
                </Link>
              </div>
            </div>

            <div class='col-lg-4 mt-4 mt-lg-0'>
              <div class='side-bar ms-lg-4'>
                <div class='card job-overview'>
                  <div class='card-body p-4'>
                    <h6 class='fs-17'>Job Overview</h6>
                    <ul class='list-unstyled mt-4 mb-0'>
                      <li>
                        <div class='d-flex mt-4'>
                          <i class='uil uil-user icon bg-primary-subtle text-primary'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Job Title</h6>
                            <p class='text-muted mb-0'>Product Designer</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex mt-4'>
                          <i class='uil uil-star-half-alt icon bg-primary-subtle text-primary'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Experience</h6>
                            <p class='text-muted mb-0'> 0-3 Years</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex mt-4'>
                          <i class='uil uil-location-point icon bg-primary-subtle text-primary'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Location</h6>
                            <p class='text-muted mb-0'> New york</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex mt-4'>
                          <i class='uil uil-usd-circle icon bg-primary-subtle text-primary'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Offered Salary</h6>
                            <p class='text-muted mb-0'>$35k - $45k</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex mt-4'>
                          <i class='uil uil-graduation-cap icon bg-primary-subtle text-primary'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Qualification</h6>
                            <p class='text-muted mb-0'>Bachelor Degree</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex mt-4'>
                          <i class='uil uil-building icon bg-primary-subtle text-primary'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Industry</h6>
                            <p class='text-muted mb-0'>Private</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex mt-4'>
                          <i class='uil uil-history icon bg-primary-subtle text-primary'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Date Posted</h6>
                            <p class='text-muted mb-0'>Posted 2 hrs ago</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class='mt-3'>
                      <Link
                        to='#applyNow'
                        data-bs-toggle='modal'
                        class='btn btn-primary btn-hover w-100 mt-2'
                      >
                        Apply Now <i class='uil uil-arrow-right'></i>
                      </Link>
                      <Link
                        to='bookmark-jobs.php'
                        class='btn btn-soft-warning btn-hover w-100 mt-2'
                      >
                        <i class='uil uil-bookmark'></i> Add Bookmark
                      </Link>
                    </div>
                  </div>
                </div>

                <div class='card company-profile mt-4'>
                  <div class='card-body p-4'>
                    <div class='text-center'>
                      <img
                        src='assets/images/featured-job/img-02.png'
                        alt=''
                        class='img-fluid rounded-3'
                      />

                      <div class='mt-4'>
                        <h6 class='fs-17 mb-1'>Nuvo Hire Technology Pvt.Ltd</h6>
                        <p class='text-muted'>Since July 2017</p>
                      </div>
                    </div>
                    <ul class='list-unstyled mt-4'>
                      <li>
                        <div class='d-flex'>
                          <i class='uil uil-phone-volume text-primary fs-4'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Phone</h6>
                            <p class='text-muted fs-14 mb-0'>+589 560 56555</p>
                          </div>
                        </div>
                      </li>
                      <li class='mt-3'>
                        <div class='d-flex'>
                          <i class='uil uil-envelope text-primary fs-4'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Email</h6>
                            <p class='text-muted fs-14 mb-0'>
                              pixltechnology@info.com
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class='mt-3'>
                        <div class='d-flex'>
                          <i class='uil uil-globe text-primary fs-4'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Website</h6>
                            <p class='text-muted fs-14 text-break mb-0'>
                              www.Jobcytechnology.pvt.ltd.com
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class='mt-3'>
                        <div class='d-flex'>
                          <i class='uil uil-map-marker text-primary fs-4'></i>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-2'>Location</h6>
                            <p class='text-muted fs-14 mb-0'>
                              Oakridge Lane Richardson.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class='mt-4'>
                      <Link
                        to='company-details.php'
                        class='btn btn-primary btn-hover w-100 rounded'
                      >
                        <i class='mdi mdi-eye'></i> View Profile
                      </Link>
                    </div>
                  </div>
                </div>

                <div class='mt-4'>
                  <h6 class='fs-16 mb-3'>Job location</h6>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin'
                    width='100%'
                    height='250'
                    allowfullscreen=''
                    loading='lazy'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class='modal fade'
        id='applyNow'
        tabindex='-1'
        aria-labelledby='applyNow'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered'>
          <div class='modal-content'>
            <div class='modal-body p-5'>
              <div class='text-center mb-4'>
                <h5 class='modal-title' id='staticBackdropLabel'>
                  Apply For This Job
                </h5>
              </div>
              <div class='position-absolute end-0 top-0 p-3'>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='mb-3'>
                <label for='nameControlInput' class='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='nameControlInput'
                  placeholder='Enter your name'
                />
              </div>
              <div class='mb-3'>
                <label for='emailControlInput2' class='form-label'>
                  Email Address
                </label>
                <input
                  type='email'
                  class='form-control'
                  id='emailControlInput2'
                  placeholder='Enter your email'
                />
              </div>
              <div class='mb-3'>
                <label for='messageControlTextarea' class='form-label'>
                  Message
                </label>
                <textarea
                  class='form-control'
                  id='messageControlTextarea'
                  rows='4'
                  placeholder='Enter your message'
                ></textarea>
              </div>
              <div class='mb-4'>
                <label class='form-label' for='inputGroupFile01'>
                  Resume Upload
                </label>
                <input type='file' class='form-control' id='inputGroupFile01' />
              </div>
              <button type='submit' class='btn btn-primary w-100'>
                Send Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
