import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ApiService from "../services/ApiService";

// Popups for the apply message
import { Modal, Button, Alert } from "react-bootstrap";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import {
  fetchBookmarkJob,
  fetchJoseekerAppliedJobs,
} from "../services/JobService";

export default function JobDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  // Fetch job-details
  const [jobDetails, setJobDetails] = useState([]);
  const [jobOverView, setJobOverView] = useState([]);
  const [companyDetails, setCompanyDetails] = useState([]);
  const [appliedCandidate, setAppliedCandidate] = useState([]);

  // Related Jobs
  const relatesJobsData = useFetch("jobs");
  const relatedJobs = relatesJobsData.data;
  console.log(relatedJobs);


  // Applied jobs list
  const [appliedList, setAppliedList] = useState([]);
  const appliedJobsList = async () => {
    try {
      const response = await fetchJoseekerAppliedJobs();
      console.log(response.data.data);
      setAppliedList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Bookmarked job list
  const [bookMarked, setBookmarked] = useState([]);
  const bookmarkedJobsList = async () => {
    try {
      const response = await fetchBookmarkJob();
      console.log(response.data.data);
      setBookmarked(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

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
      const jobOverView = jobDetailsData.data.job_over_view;
      const companyDetails = jobDetailsData.data.company_details;
      console.log(responseData, jobOverView, companyDetails);
      console.log(response.data.data);

      if (Array.isArray(appliedCandidate.applied_candidate)) {
        console.log("ok");
      }

      setAppliedCandidate(response.data.data);
      setJobDetails(responseData);
      setJobOverView(jobOverView);
      setCompanyDetails(companyDetails);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
    appliedJobsList();
    bookmarkedJobsList();
  }, []);

  // Apply jobs

  const [showPopUp, setShowPopUp] = useState(false);
  const [showPopUpMessage, setShowPopUpMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isApplyButtonDisabled, setApplyButtonDisabled] = useState(false);
  const [isBookmarkedDisabled, setIsBookmarkedDisabled] = useState(false);

  const handleApplyJob = async () => {
    const jobId = id;
    const payload = {
      manage_job_id: jobId,
    };
    console.log(payload);
    try {
      const response = await ApiService("apply-jobs", "POST", payload, true);
      console.log(response.data.status);
      if (response?.data?.status === false) {
        setApplyButtonDisabled(true);
        setShowPopUpMessage(response?.data?.message);
      }

      if (response.status === true) {
        setShowPopUp(response.message);
      }
    } catch (error) {
      console.log("Error: ", error);
    }

    setShowPopUp(true);
  };

  const isJobApplied = appliedList?.some((applied) => applied.job_id === id);
  console.log(isJobApplied);
  const isBookmarked = bookMarked?.some((marked) => marked.job_id === id);
  console.log(isBookmarked)

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  // Bookmark job
  const handleJobBookMark = async () => {
    const jobId = id;
    const payload = {
      manage_job_id: jobId,
    };

    try {
      const response = await ApiService(
        "add-to-bookmark",
        "POST",
        payload,
        true
      );
      console.log(response.data);
      if (response?.data?.status === true) {
        setIsBookmarkedDisabled(true);
        setShowPopUpMessage(response.data.message);
      } else {
        setIsBookmarkedDisabled(false);
        setShowPopUpMessage(response.data.message);
      }
    } catch (error) {
      console.log("Error: " + error);
    }

    setShowPopUp(true);
  };

  return (
    <div class="page-content">
      {/* PopUp Model */}
      <Modal show={showPopUp} onHide={handleClosePopUp}>
        <Modal.Header closeButton>
          <Modal.Title>Application Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{showPopUpMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClosePopUp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* PopUp model end */}

      {/* Start home  */}
      <section class="page-title-box">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="text-center text-white">
                <h3 class="mb-4">Job Details</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end home  */}

      {/* START SHAPE  */}
      <div class="position-relative" style={{ zIndex: 1 }}>
        <div class="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill=""
              fill-opacity="1"
              d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* END SHAPE  */}

      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="card job-detail overflow-hidden">
                <div>
                  <img
                    src="assets/images/job-detail.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <div class="job-details-compnay-profile">
                    <img
                      src="assets/images/featured-job/img-10.png"
                      alt=""
                      class="img-fluid rounded-3 rounded-3"
                    />
                  </div>
                </div>
                <div class="card-body p-4">
                  <div>
                    <div class="row">
                      <div class="col-md-8">
                        <h5 class="mb-1">
                          {jobDetails.job_title
                            ? jobDetails.job_title
                            : "Not disclosed"}
                        </h5>
                        <ul class="list-inline text-muted mb-0">
                          <li class="list-inline-item">
                            <i class="mdi mdi-account"></i>
                            {jobDetails.vacancy
                              ? jobDetails.vacancy
                              : "Not disclosed"}{" "}
                            vacancy
                          </li>
                          <li class="list-inline-item text-warning review-rating">
                            <span class="badge bg-warning">4.8</span>{" "}
                            <i class="mdi mdi-star align-middle"></i>
                            <i class="mdi mdi-star align-middle"></i>
                            <i class="mdi mdi-star align-middle"></i>
                            <i class="mdi mdi-star align-middle"></i>
                            <i class="mdi mdi-star-half-full align-middle"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="row g-2">
                      <div class="col-lg-3">
                        <div class="border rounded-start p-3">
                          <p class="text-muted mb-0 fs-13">Experience</p>
                          <p class="fw-medium fs-15 mb-0">
                            Minimum{" "}
                            {jobDetails.experience_id &&
                            jobDetails.experience_id.year
                              ? jobDetails.experience_id.year
                              : "Not disclosed"}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="border p-3">
                          <p class="text-muted fs-13 mb-0">Last date</p>
                          {jobOverView.application_deadline_date
                            ? jobOverView.application_deadline_date
                            : "Not disclosed"}
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="border p-3">
                          <p class="text-muted fs-13 mb-0">Position</p>
                          <p class="fw-medium mb-0">
                            {jobDetails.designation_id &&
                            jobDetails.designation_id.name
                              ? jobDetails.designation_id.name
                              : "Not disclosed"}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="border rounded-end p-3">
                          <p class="text-muted fs-13 mb-0">Offer Salary</p>
                          <p class="fw-medium mb-0">
                            ${" "}
                            {jobOverView.salary_id && jobOverView.salary_id.name
                              ? jobOverView.salary_id.name
                              : "Not disclosed"}
                            / Month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <h5 class="mb-3">Job Description</h5>
                    <div class="job-detail-desc">
                      <div
                        class="text-muted mb-0"
                        dangerouslySetInnerHTML={{
                          __html: jobDetails.job_description,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <h5 class="mb-3">Responsibilities</h5>
                    <div class="job-detail-desc mt-2">
                      <div
                        class="text-muted"
                        dangerouslySetInnerHTML={{
                          __html: jobDetails.responsibilities,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="job-details-desc">
                      <div class="mt-4">
                        {Array.isArray(jobDetails.tags) &&
                          jobDetails.tags.map((tag) => (
                            <span key={tag.tag_id} class="badge bg-primary">
                              {tag.tag}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* <div class='mt-4 pt-3'>
                    <ul class='list-inline mb-0'>
                      <li class='list-inline-item mt-1'>Share this job:</li>
                      <li class='list-inline-item mt-1'>
                        <Link to='' class='btn btn-primary btn-hover'>
                          <i class='uil uil-facebook-f'></i>
                        </Link>
                      </li>
                      <li class='list-inline-item mt-1'>
                        <Link to='' class='btn btn-danger btn-hover' style={{
                          width: "20px",
                          height: "20px"
                        }}>
                          <i class='uil uil-google' style={{ fontSize: "10px"}}></i>
                        </Link>
                      </li>
                      <li class='list-inline-item mt-1'>
                        <Link to='' class='btn btn-success btn-hover'>
                          <i class='uil uil-linkedin-alt'></i>
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>

              <div class="mt-4">
                <h5>Related Jobs</h5>
                {Array.isArray(relatedJobs) && relatedJobs.length > 0 ? (
                  relatedJobs.map((related) => (
                    <div class="job-box card mt-4">
                      <div class="p-4">
                        <div key={related.id} class="row">
                          <div class="col-lg-1">
                            <img
                              src="assets/images/featured-job/img-01.png"
                              alt=""
                              class="img-fluid rounded-3"
                            />
                          </div>
                          <div class="col-lg-10">
                            <div class="mt-3 mt-lg-0">
                              <h5 class="fs-17 mb-1">
                                <Link
                                  to={`/job-detail/${related.id}`}
                                  class="text-dark"
                                >
                                  {related.job_title
                                    ? related.job_title
                                    : "Not disclosed"}
                                </Link>{" "}
                                <small class="text-muted fw-normal">
                                  (
                                  {related.experience_id &&
                                  related.experience_id.year
                                    ? related.experience_id.year
                                    : "Not disclosed"}{" "}
                                  Yrs Exp.)
                                </small>
                              </h5>
                              <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                  <p class="text-muted fs-14 mb-0">
                                    {related.company_name
                                      ? related.company_name
                                      : "Not disclosed"}
                                  </p>
                                </li>
                                <li class="list-inline-item">
                                  <p class="text-muted fs-14 mb-0">
                                    <i class="mdi mdi-map-marker"></i>{" "}
                                    {related.city_id && related.city_id.name
                                      ? related.city_id.name
                                      : "Not disclosed"}
                                  </p>
                                </li>
                                <li class="list-inline-item">
                                  <p class="text-muted fs-14 mb-0">
                                    <i class="uil uil-wallet"></i> $
                                    {related.salary_id && related.salary_id.name
                                      ? related.salary_id.name
                                      : "Not disclosed"}
                                    / month
                                  </p>
                                </li>
                              </ul>
                              <div class="mt-2">
                                <span class="badge bg-success-subtle text-success mt-1">
                                  {related.employment_type_id &&
                                  related.employment_type_id.name
                                    ? related.employment_type_id.name
                                    : ""}
                                </span>
                                <span class="badge bg-warning-subtle text-warning mt-1">
                                  Urgent
                                </span>
                                <span class="badge bg-info-subtle text-info mt-1">
                                  Private
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="favorite-icon">
                          <Link to="">
                            <i class="uil uil-heart-alt fs-18"></i>
                          </Link>
                        </div>
                      </div>
                      <div class="p-3 bg-light">
                        <div class="row justify-content-between">
                          <div class="col-md-8">
                            <div>
                              <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                  <i class="uil uil-tag"></i> Keywords :
                                </li>
                                <li class="list-inline-item">
                                  <Link to="" class="primary-link text-muted">
                                    Ui designer
                                  </Link>
                                  ,
                                </li>
                                <li class="list-inline-item">
                                  <Link to="" class="primary-link text-muted">
                                    developer
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      marginTop: "50px",
                      textAlign: "center",
                    }}
                    className="text-muted"
                  >
                    <p>No jobs found </p>
                  </div>
                )}
              </div>
              <div class="text-center mt-4">
                <Link to="/jobs" class="primary-link form-text">
                  View More <i class="mdi mdi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="side-bar ms-lg-4">
                <div class="card job-overview">
                  <div class="card-body p-4">
                    <h6 class="fs-17">Job Overview</h6>
                    <ul class="list-unstyled mt-4 mb-0">
                      <li>
                        <div class="d-flex mt-4">
                          <i class="uil uil-user icon bg-primary-subtle text-primary"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Job Title</h6>
                            <p class="text-muted mb-0">
                              {jobDetails.job_title
                                ? jobDetails.job_title
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex mt-4">
                          <i class="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Experience</h6>
                            <p class="text-muted mb-0">
                              {jobDetails.experience_id &&
                              jobDetails.experience_id.year
                                ? jobDetails.experience_id.year
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex mt-4">
                          <i class="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Location</h6>
                            <p class="text-muted mb-0">
                              {jobOverView.job_locations
                                ? jobOverView.job_locations
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex mt-4">
                          <i className="uil uil-brain icon bg-primary-subtle text-primary"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Skills</h6>
                            {Array.isArray(jobOverView.skills) &&
                              jobOverView.skills.map((skill) => (
                                <p key={skill.id} class="text-muted mb-0">
                                  {skill.skill}
                                </p>
                              ))}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex mt-4">
                          <i class="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Offered Salary</h6>
                            <p class="text-muted mb-0">
                              $
                              {jobOverView.salary_id &&
                              jobOverView.salary_id.name
                                ? jobOverView.salary_id.name
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex mt-4">
                          <i class="uil uil-graduation-cap icon bg-primary-subtle text-primary"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Qualification</h6>
                            {Array.isArray(jobOverView.education_id) &&
                              jobOverView.education_id.map((education) => (
                                <p key={education.id} class="text-muted mb-0">
                                  {education.education
                                    ? education.education
                                    : "Not disclosed"}
                                </p>
                              ))}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex mt-4">
                          <i class="uil uil-building icon bg-primary-subtle text-primary"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Industry</h6>
                            <p class="text-muted mb-0">
                              {jobDetails.industry_id &&
                              jobDetails.industry_id.name
                                ? jobDetails.industry_id.name
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex mt-4">
                          <i class="uil uil-history icon bg-primary-subtle text-primary"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Date Posted</h6>
                            <p class="text-muted mb-0">
                              {jobOverView.created_at
                                ? jobOverView.created_at
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div class="mt-3">
                      {isJobApplied ? (
                        <Link
                          className="btn btn-primary btn-hover w-100 mt-2"
                          style={{ opacity: "20%" }}
                        >
                          Applied
                          <i className="uil uil-arrow-right"></i>
                        </Link>
                      ) : (
                        <Link
                          className={`btn btn-primary btn-hover w-100 mt-2`}
                          onClick={() => handleApplyJob(id)}
                          disabled={isApplyButtonDisabled}
                        >
                          Apply Now
                          <i className="uil uil-arrow-right"></i>
                        </Link>
                      )}

                      {/* Bookmark */}
                      {isBookmarked ? (
                        <Link
                          to=""
                          data-bs-toggle="modal"
                          className="btn btn-primary btn-hover w-100 mt-2"
                          style={{ opacity: "20%" }}
                        >
                          Bookmarked
                        </Link>
                      ) : (
                        <Link
                          to=""
                          data-bs-toggle="modal"
                          className={`btn btn-primary btn-hover w-100 mt-2 ${
                            isBookmarkedDisabled ? "disabled" : ""
                          }`}
                          onClick={handleJobBookMark}
                        >
                          Bookmark
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <div class="card company-profile mt-4">
                  <div class="card-body p-4">
                    <div class="text-center">
                      <img
                        src="assets/images/featured-job/img-02.png"
                        alt=""
                        class="img-fluid rounded-3"
                      />

                      <div class="mt-4">
                        <h6 class="fs-17 mb-1">
                          {companyDetails.company_name
                            ? companyDetails.company_name
                            : "Not disclosed"}
                        </h6>
                        <p class="text-muted">Since July 2017</p>
                      </div>
                    </div>
                    <ul class="list-unstyled mt-4">
                      <li>
                        <div class="d-flex">
                          <i class="uil uil-phone-volume text-primary fs-4"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Phone</h6>
                            <p class="text-muted fs-14 mb-0">
                              +
                              {companyDetails.phone
                                ? companyDetails.phone
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="mt-3">
                        <div class="d-flex">
                          <i class="uil uil-envelope text-primary fs-4"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Email</h6>
                            <p class="text-muted fs-14 mb-0">
                              {companyDetails.email
                                ? companyDetails.email
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="mt-3">
                        <div class="d-flex">
                          <i class="uil uil-globe text-primary fs-4"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Website</h6>
                            <p class="text-muted fs-14 text-break mb-0">
                              {companyDetails.website
                                ? companyDetails.website
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="mt-3">
                        <div class="d-flex">
                          <i class="uil uil-map-marker text-primary fs-4"></i>
                          <div class="ms-3">
                            <h6 class="fs-14 mb-2">Location</h6>
                            <p class="text-muted fs-14 mb-0">
                              {companyDetails.city_id &&
                              companyDetails.city_id.name
                                ? companyDetails.city_id.name
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* <div class='mt-4'>
                      <Link
                        to='company-details.php'
                        class='btn btn-primary btn-hover w-100 rounded'
                      >
                        <i class='mdi mdi-eye'></i> View Profile
                      </Link>
                    </div> */}
                  </div>
                </div>

                {/* <div class='mt-4'>
                  <h6 class='fs-16 mb-3'>Job location</h6>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1628067715234!5m2!1sen!2sin'
                    width='100%'
                    height='250'
                    allowfullscreen=''
                    loading='lazy'
                  ></iframe>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div
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
      </div> */}
    </div>
  );
}
