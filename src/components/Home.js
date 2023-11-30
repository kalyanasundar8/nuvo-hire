import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import useScrollToTop from "../hooks/useScrollToTop";
import "./Home.css";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Home() {
  const navigate = useNavigate();

  const [pageLoader, setPageLoader] = useState(true);

  // Job searching => countries
  const countriesData = useFetch("countries");
  const countries = countriesData.data;
  const [countryId, setCountryId] = useState("101");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const searchResults = await ApiService(
        `job-search?value=${encodeURIComponent(query)}&country_id=${countryId}`
      );
      const results = searchResults.data;
      navigate("/jobs", { state: results });
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  // Live search
  const [query, setQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setShowSuggestion(inputValue !== "");
  };

  const handleSuggestionClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setQuery(jobTitle);
    setShowSuggestion(false);
  };

  const jobsData = useFetch("onsearch-jobs");
  const jobList = jobsData.data;

  // Categories Fetching
  const categoriesData = useFetch("categories");
  const categories = categoriesData.data;

  // Browsing Job section ( Recent_jobs, Featured_jobs, Freelancer_jobs, PartTime_jobs, FullTime_jobs)
  const [activeTab, setActiveTab] = useState("recent-jobs");
  const [activeJobsData, setActiveJobsData] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await ApiService(endpoint, "GET", null, false);
      setActiveJobsData(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    let endpoint = "";

    switch (activeTab) {
      case "recent-jobs":
        endpoint = "filtered-jobs?value=recentjobs";
        break;
      case "featured-jobs":
        endpoint = "filtered-jobs?value=featuredjobs";
        break;
      case "freelancer-jobs":
        endpoint = "filtered-jobs?value=freelancerjobs";
        break;
      case "part-time-jobs":
        endpoint = "filtered-jobs?value=partimejobs";
        break;
      case "full-time-jobs":
        endpoint = "filtered-jobs?value=fulltimejobs";
        break;
      default:
        break;
    }

    fetchData(endpoint);
  }, [activeTab]);

  const HandleTabChange = async (tabId) => {
    setActiveTab(tabId);
  };

  const handleJobBookMark = async (jobId) => {
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
      console.log(response);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const renderSuggestions = () => {
    const filteredJobs = jobList.filter((jobs) =>
      jobs.job_title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredJobs.length === 0) {
      return null;
    }

    return (
      <ul
        style={{
          width: 300,
          position: "absolute",
          top: "105%",
          zIndex: 1000,
          left: 10,
          listStyleType: "none",
          backgroundColor: "#fff",
          borderRadius: "0 0 8px 8px",
          padding: 20,
          margin: 0,
          boxShadow: "0 20px 20px rgba(0, 0, 0, 0.1)",
          maxHeight: "150px", // Set a max height for scroll
          overflowY: "auto", // Enable scroll when needed
        }}
      >
        {filteredJobs.map((jobs, index) => (
          <li
            key={index}
            style={{
              padding: "8px",
              cursor: "pointer",
            }}
            onClick={() => handleSuggestionClick(jobs.job_title)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f0f0f0"; // Change background on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "initial"; // Reset background when not hovering
            }}
          >
            {jobs.job_title}
          </li>
        ))}
      </ul>
    );
  };

  useScrollToTop();

  return (
    <div className="main-content">
      <div className="page-content">
        <section className="bg-home3" id="home">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="mb-4 pb-3 me-lg-5">
                  <h6 className="sub-title">We have 150,000+ live jobs</h6>
                  <h1 className="display-5 fw-semibold mb-3">
                    Thousand of Jobs is Waiting for you
                  </h1>
                  <p className="fs-18 text-muted mb-0">
                    Find jobs, create trackable resumes and enrich your
                    applications.Carefully crafted after analyzing the needs of
                    different industries.
                  </p>
                </div>
                <form action="#">
                  <div className="registration-form">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div
                          className="filter-search-form filter-border mt-3 mt-md-0"
                          style={{ position: "relative" }}
                        >
                          <i className="uil uil-briefcase-alt"></i>
                          <input
                            type="search"
                            id="job-title"
                            className="form-control filter-input-box"
                            placeholder="Job, Company name..."
                            value={query}
                            onChange={handleInputChange}
                            autoComplete="off"
                          />
                        </div>
                        {showSuggestion && renderSuggestions()}
                      </div>

                      <div className="col-md-4">
                        <div className="filter-search-form mt-3 mt-md-0">
                          <i className="uil uil-map-marker"></i>
                          <select
                            className="form-select home-select"
                            // data-trigger
                            name="choices-single-location"
                            id="choices-single-location"
                            aria-label="Default select example"
                            value={countryId}
                            onChange={(e) => {
                              setCountryId(e.target.value);
                            }}
                          >
                            {Array.isArray(countries)
                              ? countries.map((country) => (
                                  <option key={country.id} value={country.id}>
                                    {country.name}
                                  </option>
                                ))
                              : null}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="mt-3 mt-md-0 h-100">
                          <button
                            className="btn btn-primary submit-btn w-100 h-100"
                            type="submit"
                            onClick={handleSearch}
                          >
                            <i className="uil uil-search me-1"></i> Find Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-5">
                <div className="mt-5 mt-lg-0 ms-xl-5">
                  <div className="quote-icon">
                    <i className="mdi mdi-format-quote-open icon"></i>
                    <i className="mdi mdi-format-quote-open icon-2 text-primary"></i>
                  </div>
                  <div className="swiper homeslider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="home-slide-box text-center">
                          <img
                            src="assets/images/home/img-02.png"
                            alt=""
                            className="img-fluid rounded-3"
                          />
                          <div className="bg-overlay"></div>
                          <div className="home-slide-content p-4">
                            <h2 className="slide-para fw-normal text-white">
                              " It looks perfect on all major browsers, tablets,
                              and mobile devices."
                            </h2>
                            <h6 className="text-white">- MichaeL Drake</h6>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="home-slide-box text-center">
                          <img
                            src="assets/images/home/img-03.png"
                            alt=""
                            className="img-fluid rounded-3"
                          />
                          <div className="bg-overlay"></div>
                          <div className="home-slide-content p-4">
                            <h2 className="slide-para fw-normal text-white">
                              " This template is well organized and very easy to
                              customize. "
                            </h2>
                            <h6 className="text-white">- Charles Dickens</h6>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="home-slide-box text-center">
                          <img
                            src="assets/images/home/img-04.png"
                            alt=""
                            className="img-fluid rounded-3"
                          />
                          <div className="bg-overlay"></div>
                          <div className="home-slide-content p-4">
                            <h2 className="slide-para fw-normal text-white">
                              " All your client websites if you are an agency or
                              freelancer. "
                            </h2>
                            <h6 className="text-white">- Rebecca Swartz</h6>
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

        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h3 className="title">Browser Jobs Categories </h3>
                  <p className="text-muted">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {Array.isArray(categories)
                ? categories.slice(0, 8).map((category) => (
                    <div
                      key={category.id}
                      className="col-lg-3 col-md-6 mt-4 pt-2"
                    >
                      <div className="popu-category-box rounded text-center">
                        <div className="popu-category-icon icons-md">
                          <img style={{ width: 30 }} src={category.icon} />
                        </div>
                        <div className="popu-category-content mt-4">
                          <Link
                            to={`/sub-categories/${category.id}`}
                            style={
                              category.jobs_count === 0
                                ? {
                                    pointerEvents: "none",
                                    color: "#007bff",
                                    textDecoration: "none",
                                  }
                                : { color: "inherit" }
                            }
                            className="text-dark stretched-link"
                          >
                            <h5 className="fs-18">{category.name}</h5>
                          </Link>
                          <p className="text-muted mb-0">
                            {category.jobs_count}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="mt-5 text-center">
                  <Link
                    to="/sub-categories/all"
                    className="btn btn-primary btn-hover"
                  >
                    Browse All Categories{" "}
                    <i className="uil uil-arrow-right MS-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title">New & Random Jobs</h4>
                  <p className="text-muted mb-1">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <ul
                  className="job-list-menu nav nav-pills nav-justified flex-column flex-sm-row mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "recent-jobs" ? "active" : ""
                      }`}
                      id="recent-jobs-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#recent-jobs"
                      type="button"
                      role="tab"
                      aria-controls="recent-jobs"
                      aria-selected="true"
                      onClick={() => HandleTabChange("recent-jobs")}
                    >
                      Recent Jobs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "featured-jobs" ? "active" : ""
                      }`}
                      id="featured-jobs-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#featured-jobs"
                      type="button"
                      role="tab"
                      aria-controls="featured-jobs"
                      aria-selected="false"
                      onClick={() => HandleTabChange("featured-jobs")}
                    >
                      Featured Jobs
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "freelancer-jobs" ? "active" : ""
                      }`}
                      id="freelancer-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#freelancer"
                      type="button"
                      role="tab"
                      aria-controls="freelancer"
                      aria-selected="false"
                      onClick={() => HandleTabChange("freelancer-jobs")}
                    >
                      Freelancer
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "part-time-jobs" ? "active" : ""
                      }`}
                      id="part-time-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#part-time"
                      type="button"
                      role="tab"
                      aria-controls="part-time"
                      aria-selected="false"
                      onClick={() => HandleTabChange("part-time-jobs")}
                    >
                      Part Time
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${
                        activeTab === "full-time-jobs" ? "active" : ""
                      }`}
                      id="full-time-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#full-time"
                      type="button"
                      role="tab"
                      aria-controls="full-time"
                      aria-selected="false"
                      onClick={() => HandleTabChange("full-time-jobs")}
                    >
                      Full Time
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "recent-jobs" ? "show active" : ""
                    }`}
                    id="recent-jobs"
                    role="tabpanel"
                    aria-labelledby="recent-jobs-tab"
                  >
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length > 0 ? (
                      activeJobsData.map((recent) => (
                        <div key={recent.id} className="job-box card mt-4">
                          <div className="bookmark-label text-center">
                            <Link
                              to=""
                              className="text-white align-middle"
                              onClick={() => handleJobBookMark(recent.id)}
                            >
                              <i className="mdi mdi-star"></i>
                            </Link>
                          </div>
                          <div className="p-4">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <div className="text-center mb-4 mb-md-0">
                                  <Link to="/company-details.php">
                                    <img
                                      src="assets/images/featured-job/img-01.png"
                                      alt=""
                                      className="img-fluid rounded-3"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="mb-2 mb-md-0">
                                  <h5 className="fs-18 mb-1">
                                    <Link
                                      to={`/job-detail/${recent.id}`}
                                      className="text-dark"
                                    >
                                      {recent.job_title}
                                    </Link>
                                  </h5>
                                  <p className="text-muted fs-14 mb-0">
                                    {recent.company_name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                                  </div>
                                  <p className="text-muted mb-0">
                                    {recent.city_id && recent.city_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-2">
                                    <span className="text-primary">$</span>
                                    {recent.salary_id && recent.salary_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                    {recent.employment_type_id &&
                                      recent.employment_type_id.name}
                                  </span>
                                  <span className="badge bg-info-subtle text-info fs-13 mt-1">
                                    {recent.industry_id &&
                                      recent.industry_id.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-light">
                            <div className="row">
                              <div className="col-md-4">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">
                                      Experience :
                                    </span>{" "}
                                    {recent.experience_id &&
                                      recent.experience_id.year}
                                  </p>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-5">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">Notes :</span>
                                    {recent.subcategory_id &&
                                      recent.subcategory_id.name}{" "}
                                  </p>
                                </div>
                              </div>

                              {/* <div className='col-lg-2 col-md-3'>
                                  <div className='text-start text-md-end'>
                                    <Link
                                      to='/#applyNow'
                                      data-bs-toggle='modal'
                                      className='primary-link'
                                    >
                                      Apply Now{" "}
                                      <i className='mdi mdi-chevron-double-right'></i>
                                    </Link>
                                  </div>
                                </div> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px"
                      }}>No jobs found</p>
                    )}
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length <= 0 ? (
                      ""
                    ) : (
                      <div className="text-center mt-4 pt-2">
                        <Link
                          to={{
                            pathname: "/jobs",
                            search: `?tab=${activeTab}`,
                          }}
                          className="btn btn-primary"
                        >
                          View More <i className="uil uil-arrow-right"></i>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="featured-jobs"
                    role="tabpanel"
                    aria-labelledby="featured-jobs-tab"
                  >
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length > 0 ? (
                      activeJobsData.map((feature) => (
                        <div
                          key={feature.id}
                          className="job-box bookmark-post card mt-4"
                        >
                          <div className="bookmark-label text-center">
                            <Link
                              to=""
                              className="text-white"
                              onClick={() => handleJobBookMark(feature.id)}
                            >
                              <i className="mdi mdi-star"></i>
                            </Link>
                          </div>
                          <div className="p-4">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <div className="text-center mb-4 mb-md-0">
                                  <Link to="/company-details.php">
                                    <img
                                      src="assets/images/featured-job/img-01.png"
                                      alt=""
                                      className="img-fluid rounded-3"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="mb-2 mb-md-0">
                                  <h5 className="fs-18 mb-1">
                                    <Link
                                      to={`/job-detail/${feature.id}`}
                                      className="text-dark"
                                    >
                                      {feature.job_title}
                                    </Link>
                                  </h5>
                                  <p className="text-muted fs-14 mb-0">
                                    {feature.company_name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                                  </div>
                                  <p className="text-muted mb-0">
                                    {feature.country_id &&
                                      feature.country_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-2">
                                    <span className="text-primary">$</span>
                                    {feature.salary_id &&
                                      feature.salary_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                    {feature.employment_type_id &&
                                      feature.employment_type_id.name}
                                  </span>
                                  <span className="badge bg-info-subtle text-info fs-13 mt">
                                    {feature.industry_id &&
                                      feature.industry_id.name}
                                  </span>
                                  <span className="badge bg-warning-subtle text-warning fs-13 mt-1">
                                    {feature.job_type}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-light">
                            <div className="row">
                              <div className="col-md-4">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">
                                      Experience :
                                    </span>{" "}
                                    {feature.experience_id &&
                                      feature.experience_id.year}
                                  </p>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-5">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">Notes :</span>
                                    {feature.subcategory_id &&
                                      feature.subcategory_id.name}{" "}
                                  </p>
                                </div>
                              </div>

                              {/* <div className='col-lg-2 col-md-3'>
                                  <div className='text-start text-md-end'>
                                    <Link
                                      to='/#applyNow'
                                      data-bs-toggle='modal'
                                      className='primary-link'
                                    >
                                      Apply Now{" "}
                                      <i className='mdi mdi-chevron-double-right'></i>
                                    </Link>
                                  </div>
                                </div> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px"
                      }}>No jobs found</p>
                    )}
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length <= 0 ? (
                      ""
                    ) : (
                      <div className="text-center mt-4 pt-2">
                        <Link
                          to={{
                            pathname: "/jobs",
                            search: `?tab=${activeTab}`,
                          }}
                          className="btn btn-primary"
                        >
                          View More <i className="uil uil-arrow-right"></i>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="freelancer"
                    role="tabpanel"
                    aria-labelledby="freelancer-tab"
                  >
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length > 0 ? (
                      activeJobsData.map((freelance) => (
                        <div key={freelance.id} className="job-box card mt-4">
                          <div className="bookmark-label text-center">
                            <Link
                              to=""
                              className="text-white align-middle"
                              onClick={() => handleJobBookMark(freelance.id)}
                            >
                              <i className="mdi mdi-star"></i>
                            </Link>
                          </div>
                          <div className="p-4">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <div className="text-center mb-4 mb-md-0">
                                  <Link to="/company-details.php">
                                    <img
                                      src="assets/images/featured-job/img-01.png"
                                      alt=""
                                      className="img-fluid rounded-3"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="mb-2 mb-md-0">
                                  <h5 className="fs-18 mb-1">
                                    <Link
                                      to={`/job-detail/${freelance.id}`}
                                      className="text-dark"
                                    >
                                      {freelance.job_title}
                                    </Link>
                                  </h5>
                                  <p className="text-muted fs-14 mb-0">
                                    {freelance.company_name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                                  </div>
                                  <p className="text-muted mb-0">
                                    {freelance.city_id &&
                                      freelance.city_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-2">
                                    <span className="text-primary">$</span>
                                    {freelance.salary_id &&
                                      freelance.salary_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <span className="badge bg-primary-subtle text-primary fs-13 mt-1">
                                    {freelance.employment_type_id &&
                                      freelance.employment_type_id.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-light">
                            <div className="row">
                              <div className="col-md-4">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">
                                      Experience :
                                    </span>{" "}
                                    {/* {freelance.experience_id} */}
                                  </p>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-5">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">Notes :</span>
                                    {freelance.subcategory_id &&
                                      freelance.subcategory_id.name}
                                    .{" "}
                                  </p>
                                </div>
                              </div>

                              {/* <div className='col-lg-2 col-md-3'>
                                  <div className='text-start text-md-end'>
                                    <Link
                                      to='/#applyNow'
                                      data-bs-toggle='modal'
                                      className='primary-link'
                                    >
                                      Apply Now{" "}
                                      <i className='mdi mdi-chevron-double-right'></i>
                                    </Link>
                                  </div>
                                </div> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px"
                      }}>No jobs found</p>
                    )}

                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length <= 0 ? (
                      ""
                    ) : (
                      <div className="text-center mt-4 pt-2">
                        <Link
                          to={{
                            pathname: "/jobs",
                            search: `?tab=${activeTab}`,
                          }}
                          className="btn btn-primary"
                        >
                          View More <i className="uil uil-arrow-right"></i>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="part-time"
                    role="tabpanel"
                    aria-labelledby="part-time-tab"
                  >
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length > 0 ? (
                      activeJobsData.map((parTime) => (
                        <div
                          key={parTime.id}
                          className="job-box bookmark-post card mt-4"
                        >
                          <div className="bookmark-label text-center">
                            <Link
                              to=""
                              className="text-white align-middle"
                              onClick={() => handleJobBookMark(parTime.id)}
                            >
                              <i className="mdi mdi-star"></i>
                            </Link>
                          </div>
                          <div className="p-4">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <div className="text-center mb-4 mb-md-0">
                                  <Link to="/company-details.php">
                                    <img
                                      src="assets/images/featured-job/img-01.png"
                                      alt=""
                                      className="img-fluid rounded-3"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="mb-2 mb-md-0">
                                  <h5 className="fs-18 mb-1">
                                    <Link
                                      to={`/job-detail/${parTime.id}`}
                                      className="text-dark"
                                    >
                                      {parTime.job_title}
                                    </Link>
                                  </h5>
                                  <p className="text-muted fs-14 mb-0">
                                    {parTime.company_name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                                  </div>
                                  <p className="text-muted mb-0">
                                    {parTime.city_id && parTime.city_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-2">
                                    <span className="text-primary">$</span>
                                    {parTime.salary_id &&
                                      parTime.salary_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <span className="badge bg-danger-subtle text-danger fs-13 mt-1">
                                    {parTime.employment_type_id &&
                                      parTime.employment_type_id.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-light">
                            <div className="row">
                              <div className="col-md-4">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">
                                      Experience :
                                    </span>{" "}
                                    {/* {parTime.experience_id && parTime.experience_id.name} */}
                                  </p>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-5">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">Notes :</span>
                                    {parTime.subcategory_id &&
                                      parTime.subcategory_id.name}{" "}
                                  </p>
                                </div>
                              </div>

                              {/* <div className='col-lg-2 col-md-3'>
                                  <div className='text-start text-md-end'>
                                    <Link
                                      to='/#applyNow'
                                      data-bs-toggle='modal'
                                      className='primary-link'
                                    >
                                      Apply Now{" "}
                                      <i className='mdi mdi-chevron-double-right'></i>
                                    </Link>
                                  </div>
                                </div> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px"
                      }}>No jobs found</p>
                    )}
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length <= 0 ? (
                      ""
                    ) : (
                      <div className="text-center mt-4 pt-2">
                        <Link
                          to={{
                            pathname: "/jobs",
                            search: `?tab=${activeTab}`,
                          }}
                          className="btn btn-primary"
                        >
                          View More <i className="uil uil-arrow-right"></i>
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="full-time"
                    role="tabpanel"
                    aria-labelledby="full-time-tab"
                  >
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length > 0 ? (
                      activeJobsData.map((fullTime) => (
                        <div
                          key={fullTime.id}
                          className="job-box bookmark-post card mt-4"
                        >
                          <div className="bookmark-label text-center">
                            <Link
                              to=""
                              className="text-white align-middle"
                              onClick={() => handleJobBookMark(fullTime.id)}
                            >
                              <i className="mdi mdi-star"></i>
                            </Link>
                          </div>
                          <div className="p-4">
                            <div className="row align-items-center">
                              <div className="col-md-2">
                                <div className="text-center mb-4 mb-md-0">
                                  <Link to="/company-details.php">
                                    <img
                                      src="assets/images/featured-job/img-01.png"
                                      alt=""
                                      className="img-fluid rounded-3"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="mb-2 mb-md-0">
                                  <h5 className="fs-18 mb-1">
                                    <Link
                                      to={`/job-detail/${fullTime.id}`}
                                      className="text-dark"
                                    >
                                      {fullTime.job_title}
                                    </Link>
                                  </h5>
                                  <p className="text-muted fs-14 mb-0">
                                    {fullTime.company_name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <i className="mdi mdi-map-marker text-primary me-1"></i>
                                  </div>
                                  <p className="text-muted mb-0">
                                    {fullTime.city_id && fullTime.city_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <p className="text-muted mb-2">
                                    <span className="text-primary">$</span>
                                    {fullTime.salary_id &&
                                      fullTime.salary_id.name}
                                  </p>
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div>
                                  <span className="badge bg-success-subtle text-success fs-13 mt-1">
                                    {fullTime.employment_type_id &&
                                      fullTime.employment_type_id.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-light">
                            <div className="row">
                              <div className="col-md-4">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">
                                      Experience :
                                    </span>{" "}
                                    {fullTime.experience_id &&
                                      fullTime.experience_id.year}
                                  </p>
                                </div>
                              </div>

                              <div className="col-lg-6 col-md-5">
                                <div>
                                  <p className="text-muted mb-0">
                                    <span className="text-dark">Notes :</span>
                                    {fullTime.subcategory_id &&
                                      fullTime.subcategory_id.name}{" "}
                                  </p>
                                </div>
                              </div>

                              {/* <div className='col-lg-2 col-md-3'>
                                  <div className='text-start text-md-end'>
                                    <Link
                                      to='/#applyNow'
                                      data-bs-toggle='modal'
                                      className='primary-link'
                                    >
                                      Apply Now{" "}
                                      <i className='mdi mdi-chevron-double-right'></i>
                                    </Link>
                                  </div>
                                </div> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px"
                      }}>No jobs found</p>
                    )}
                    {Array.isArray(activeJobsData) &&
                    activeJobsData.length <= 0 ? (
                      ""
                    ) : (
                      <div className="text-center mt-4 pt-2">
                        <Link
                          to={{
                            pathname: "/jobs",
                            search: `?tab=${activeTab}`,
                          }}
                          className="btn btn-primary"
                        >
                          View More <i className="uil uil-arrow-right"></i>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title me-5">
                  <h3 className="title">How It Work</h3>
                  <p className="text-muted">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                  <div
                    className="process-menu nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <Link
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <div className="d-flex">
                        <div className="number flex-shrink-0">1</div>
                        <div className="flex-grow-1 text-start ms-3">
                          <h5 className="fs-18">Register an account</h5>
                          <p className="text-muted mb-0">
                            Due to its widespread use as filler text for
                            layouts, non-readability is of great importance.
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <div className="d-flex">
                        <div className="number flex-shrink-0">2</div>
                        <div className="flex-grow-1 text-start ms-3">
                          <h5 className="fs-18">Find your job</h5>
                          <p className="text-muted mb-0">
                            There are many variations of passages of
                            avaibookmark-label, but the majority alteration in
                            some form.
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <div className=" d-flex">
                        <div className="number flex-shrink-0">3</div>
                        <div className="flex-grow-1 text-start ms-3">
                          <h5 className="fs-18">Apply for job</h5>
                          <p className="text-muted mb-0">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <img
                      src="assets/images/process-01.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <img
                      src="assets/images/process-02.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <img
                      src="assets/images/process-03.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="text-center">
                  <h2 className="text-primary mb-4">
                    Browse Our{" "}
                    <span className="text-warning fw-bold">5,000+</span> Latest
                    Jobs
                  </h2>
                  <p className="text-muted">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                  <div className="mt-4 pt-2">
                    <Link to="/" className="btn btn-primary btn-hover">
                      Started Now{" "}
                      <i className="uil uil-rocket align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-4 pb-2">
                  <h3 className="title mb-3">Happy Candidates</h3>
                  <p className="text-muted">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="swiper testimonialSlider pb-5">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="card testi-box">
                        <div className="card-body">
                          <div className="mb-4">
                            <img
                              src="assets/images/logo/mailchimp.svg"
                              height="50"
                              alt=""
                            />
                          </div>
                          <p className="testi-content lead text-muted mb-4">
                            " Very well thought out and articulate
                            communication. Clear milestones, deadlines and fast
                            work. Patience. Infinite patience. No shortcuts.
                            Even if the client is being careless. "
                          </p>
                          <h5 className="mb-0">Jeffrey Montgomery</h5>
                          <p className="text-muted mb-0">Product Manager</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card testi-box">
                        <div className="card-body">
                          <div className="mb-4">
                            <img
                              src="assets/images/logo/wordpress.svg"
                              height="50"
                              alt=""
                            />
                          </div>
                          <p className="testi-content lead text-muted mb-4">
                            " Very well thought out and articulate
                            communication. Clear milestones, deadlines and fast
                            work. Patience. Infinite patience. No shortcuts.
                            Even if the client is being careless. "
                          </p>
                          <h5 className="mb-0">Rebecca Swartz</h5>
                          <p className="text-muted mb-0">Creative Designer</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card testi-box">
                        <div className="card-body">
                          <div className="mb-4">
                            <img
                              src="assets/images/logo/instagram.svg"
                              height="50"
                              alt=""
                            />
                          </div>
                          <p className="testi-content lead text-muted mb-4">
                            " Very well thought out and articulate
                            communication. Clear milestones, deadlines and fast
                            work. Patience. Infinite patience. No shortcuts.
                            Even if the client is being careless. "
                          </p>
                          <h5 className="mb-0">Charles Dickens</h5>
                          <p className="text-muted mb-0">Store Assistant</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-5">
                  <h3 className="title mb-3">Quick Career Tips</h3>
                  <p className="text-muted">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img
                      src="assets/images/blog/img-01.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="bg-overlay"></div>
                    <div className="author">
                      <p className=" mb-0">
                        <i className="mdi mdi-account text-light"></i>{" "}
                        <Link
                          to="/javascript:void(0)"
                          className="text-light user"
                        >
                          Dirio Walls
                        </Link>
                      </p>
                      <p className="text-light mb-0 date">
                        <i className="mdi mdi-calendar-check"></i> 01 July, 2023
                      </p>
                    </div>
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <Link to="/javascript:void(0)" className="text-white">
                            <i className="mdi mdi-heart-outline me-1"></i> 33
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/javascript:void(0)" className="text-white">
                            <i className="mdi mdi-comment-outline me-1"></i> 08
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <Link to="/javascript:void(0)" className="primary-link">
                      <h5 className="fs-17">How apps is the IT world ?</h5>
                    </Link>
                    <p className="text-muted">
                      The final text is not yet avaibookmark-label. Dummy texts
                      have Internet tend been in use by typesetters.
                    </p>
                    <Link
                      to="/javascript:void(0)"
                      className="form-text text-primary"
                    >
                      Read more{" "}
                      <i className="mdi mdi-chevron-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img
                      src="assets/images/blog/img-02.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="bg-overlay"></div>
                    <div className="author">
                      <p className=" mb-0">
                        <i className="mdi mdi-account text-light"></i>{" "}
                        <Link
                          to="/javascript:void(0)"
                          className="text-light user"
                        >
                          Brandon Carney
                        </Link>
                      </p>
                      <p className="text-light mb-0 date">
                        <i className="mdi mdi-calendar-check"></i> 25 June, 2023
                      </p>
                    </div>
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <Link to="/javascript:void(0)" className="text-white">
                            <i className="mdi mdi-heart-outline me-1"></i> 44
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/javascript:void(0)" className="text-white">
                            <i className="mdi mdi-comment-outline me-1"></i> 25
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <Link to="/javascript:void(0)" className="primary-link">
                      <h5 className="fs-17">
                        Smartest Applications for Business ?
                      </h5>
                    </Link>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception.
                    </p>
                    <Link
                      to="/javascript:void(0)"
                      className="form-text text-primary"
                    >
                      Read more{" "}
                      <i className="mdi mdi-chevron-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img
                      src="assets/images/blog/img-03.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="bg-overlay"></div>
                    <div className="author">
                      <p className=" mb-0">
                        <i className="mdi mdi-account text-light"></i>{" "}
                        <Link
                          to="/javascript:void(0)"
                          className="text-light user"
                        >
                          William Mooneyhan
                        </Link>
                      </p>
                      <p className="text-light mb-0 date">
                        <i className="mdi mdi-calendar-check"></i> 16 March,
                        2023
                      </p>
                    </div>
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item">
                          <Link to="/javascript:void(0)" className="text-white">
                            <i className="mdi mdi-heart-outline me-1"></i> 68
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="/javascript:void(0)" className="text-white">
                            <i className="mdi mdi-comment-outline me-1"></i> 20
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <Link to="/javascript:void(0)" className="primary-link">
                      <h5 className="fs-17">
                        Design your apps in your own way ?
                      </h5>
                    </Link>
                    <p className="text-muted">
                      One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others.
                    </p>
                    <Link
                      to="/javascript:void(0)"
                      className="form-text text-primary"
                    >
                      Read more{" "}
                      <i className="mdi mdi-chevron-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="modal fade"
          id="applyNow"
          tabindex="-1"
          aria-labelledby="applyNow"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-5">
                <div className="text-center mb-4">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Apply For This Job
                  </h5>
                </div>
                <div className="position-absolute end-0 top-0 p-3">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="mb-3">
                  <label for="nameControlInput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameControlInput"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label for="emailControlInput2" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailControlInput2"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label for="messageControlTextarea" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="messageControlTextarea"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="form-label" for="inputGroupFile01">
                    Resume Upload
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
