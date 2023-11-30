import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import useFetch from "./useFetch";
import { useLocation } from "react-router-dom";
import ApiService from "../services/ApiService";
import {
  fetchAllJobs,
  fetchAllSubCategories,
  fetchCategoriesJob,
} from "../services/JobService";
import { FaBan, FaBuilding } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import Loading from "./layouts/Loading";

export default function Jobs() {
  const { id } = useParams();
  console.log(id);

  // Recent, Featured, freelancing, partTime, fullTime Jobs list
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get("tab");
  const subCategoryId = searchParams.get("subcategory_id");
  console.log(subCategoryId);
  const searchedResult = location.state;

  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const timeoutId = setTimeout(() => {
          setLoading(false);
          setError(new Error("Network timeout"));
        }, 10000);

        let response;

        if (subCategoryId) {
          const response = await fetchCategoriesJob(subCategoryId);
          console.log(response);
          setJobsData(response.data);
        } else if (searchedResult) {
          console.log(searchedResult);
          setJobsData(searchedResult.data);
        } else {
          const response = await fetchAllJobs();
          console.log(response.data);
          setJobsData(response.data);
        }

        clearTimeout(timeoutId);

        setJobsData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, [subCategoryId, searchedResult]);

  let title = "";

  switch (activeTab) {
    case "recent-jobs":
      title = "Recent Jobs";
      break;
    case "featured-jobs":
      title = "Featured Jobs";
      break;
    case "freelancer-jobs":
      title = "Freelancer Jobs";
      break;
    case "part-time-jobs":
      title = "PartTime Jobs";
      break;
    case "full-time-jobs":
      title = "FullTime Jobs";
      break;
    default:
      title = "Job List";
  }

  // Job Search
  const countriesData = useFetch("countries");
  const countries = countriesData.data;
  const [countryId, setCountryId] = useState("101");

  // Experience
  const experienceData = useFetch("experiances", "GET", null, false);
  const experiences = experienceData.data;
  console.log(experiences);

  // Employment
  const employmentData = useFetch("employment-types", "GET", null, false);
  const employmentTypes = employmentData.data;

  // Salary
  const salaryData = useFetch("salaries", "GET", null, false);
  const salaries = salaryData.data;
  console.log(salaries);

  // WorkMode
  const workModeData = useFetch("workmodes", "GET", null, false);
  const workModes = workModeData.data;
  console.log(workModes);

  const [searchQuery, setSearchQuery] = useState("");

  // Category
  const jobData = useFetch("onsearch-jobs");
  const jobList = jobData.data;

  const [query, setQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState("");
  const [selectedJob, setSelectedJob] = useState("");

  const handleSuggestionClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setQuery(jobTitle);
    setShowSuggestion(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setShowSuggestion(inputValue !== "");
  };

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");

  const [employment, setEmployment] = useState("");
  const [datePosted, setPostDate] = useState("");

  const [workMode, setWorkmode] = useState("");
  const [selectedWorkMode, setSelectedWorkMode] = useState([]);

  const handleWorkMode = (e) => {
    const selectedModeId = e.target.value;

    // Check if the selected work mode is already in the array
    if (selectedWorkMode.includes(selectedModeId)) {
      // If it is, remove it from the array
      setSelectedWorkMode((prevSelectedWorkMode) =>
        prevSelectedWorkMode.filter((id) => id !== selectedModeId)
      );
    } else {
      // If it is not, add it to the array
      setSelectedWorkMode((prevSelectedWorkMode) => [
        ...prevSelectedWorkMode,
        selectedModeId,
      ]);
    }
  };

  // Experience selection
  const [noExperience, setNoExperience] = useState("");
  const [selectedExperience, setSelectedExperience] = useState([]);

  const handleExperience = (e) => {
    const selectedExperienceId = e.target.value;

    // Check if the selected experience is already in the array
    if (selectedExperience.includes(selectedExperienceId)) {
      // If it is, remove it from the array
      setSelectedExperience((prevSelectedExperience) =>
        prevSelectedExperience.filter((id) => id !== selectedExperienceId)
      );
    } else {
      // If it is not, add it to the array
      setSelectedExperience((prevSelectedExperience) => [
        ...prevSelectedExperience,
        selectedExperienceId,
      ]);
    }
  };

  // Salary selection
  const [salary, setSalary] = useState("");
  const [selectedSalaries, setSelectedSalaries] = useState([]);

  const handleSalaryChange = (e) => {
    const selectedSalaryId = e.target.value;

    // Check if the selected salary is already in the array
    if (selectedSalaries.includes(selectedSalaryId)) {
      // If it is, remove it from the array
      setSelectedSalaries((prevSelectedSalaries) =>
        prevSelectedSalaries.filter((id) => id !== selectedSalaryId)
      );
    } else {
      // If it is not, add it to the array
      setSelectedSalaries((prevSelectedSalaries) => [
        ...prevSelectedSalaries,
        selectedSalaryId,
      ]);
    }
  };

  console.log(selectedJob);
  console.log(country);
  console.log(category);
  console.log(selectedExperience);
  console.log(selectedWorkMode);
  console.log(selectedSalaries);
  console.log(employment);
  console.log(datePosted);

  const categoriesData = useFetch("categories", "GET", null, false);
  const categories = categoriesData.data;
  console.log(categories);

  // const formik = useFormik({
  //   initialValues: {
  //     value: "",
  //     country_id: "",
  //     designation_id: "",
  //     salary_id: [],
  //     experience_id: [],
  //     work_mode_id: [],
  //     created_at: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  console.log(
    selectedJob,
    countryId,
    selectedSalaries,
    category,
    selectedExperience,
    selectedWorkMode,
    datePosted
  );

  const filterJobs = async () => {
    const payload = {
      value: selectedJob || query,
      country_id: countryId,
      designation_id: category,
      salary_id: selectedSalaries,
      experience_id: selectedExperience,
      work_mode_id: selectedWorkMode,
      emploment_type_id: employment,
      created_at: datePosted,
    };
    console.log(payload);

    try {
      const response = await ApiService("jobs-filter", "POST", payload, true);
      console.log(response);
      setJobsData(response.data.data);
    } catch (error) {
      console.log(error);
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
    <div class="page-content">
      <section class="page-title-box">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="text-center text-white">
                <h3 class="mb-4">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="me-lg-5">
                <div
                  class="job-list-header"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <form>
                    <div class="row g-2">
                      <div class="col-lg-4 col-md-4">
                        <div class="filler-job-form">
                          <i class="uil uil-briefcase-alt"></i>
                          <input
                            type="search"
                            class="form-control filter-job-input-box"
                            id="exampleFormControlInput1"
                            placeholder="Job, company... "
                            value={query}
                            onChange={handleInputChange}
                            autoComplete="off"
                          />
                        </div>
                        {showSuggestion && renderSuggestions()}
                      </div>

                      <div class="col-lg-4 col-md-4">
                        <div class="filler-job-form">
                          <i class="uil uil-location-point"></i>
                          <select
                            class="form-select"
                            data-trigger
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

                      <div class="col-lg-4 col-md-4">
                        <div class="filler-job-form">
                          <i class="uil uil-clipboard-notes"></i>
                          <select
                            class="form-select "
                            data-trigger
                            name="choices-single-categories"
                            id="choices-single-categories"
                            aria-label="Default select example"
                            onChange={(e) => {
                              setCategory(e.target.value);
                            }}
                          >
                            {Array.isArray(categories) &&
                              categories.map((cat) => (
                                <option value={cat.id}>{cat.name}</option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* <div class="col-lg-2 col-md-2">
                    <Link
                      to=""
                      class="btn btn-primary w-100"
                      onClick={filterJobs}
                    >
                      <i class="uil uil-filter"></i> Fliter
                    </Link>
                  </div> */}
                </div>

                {loading ? (
                  <Loading />
                ) : error ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "100px",
                      textAlign: "center",
                    }}
                    className="text-muted"
                  >
                    <div>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                      <p>Check your newtwork</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {Array.isArray(jobsData) && jobsData.length > 0 ? (
                      jobsData.map((jobs) => (
                        <div key={jobs.id} class="job-box card mt-5">
                          <div class="p-4">
                            <div class="row align-items-center">
                              <div class="col-md-2">
                                <div class="text-center mb-4 mb-lg-0">
                                  <Link to="company-details.php">
                                    {jobs.company_logo ? (
                                      <img
                                        src={jobs.company_logo}
                                        alt=""
                                        className="img-fluid rounded-3"
                                      />
                                    ) : (
                                      <div style={{ color: "grey" }}>
                                        <FaBuilding size={32} />
                                      </div> // Replace this with your desired icon
                                    )}
                                  </Link>
                                </div>
                              </div>

                              <div class="col-md-3">
                                <div class="mb-2 mb-md-0">
                                  <h5 class="fs-18 mb-0">
                                    {" "}
                                    <Link
                                      to={`/job-detail/${jobs.id}`}
                                      class="text-dark"
                                    >
                                      {jobs.job_title}
                                    </Link>
                                  </h5>
                                  <p class="text-muted fs-14 mb-0">
                                    {jobs.company_name}
                                  </p>
                                </div>
                              </div>

                              <div class="col-md-3">
                                <div class="d-flex mb-2">
                                  <div class="flex-shrink-0">
                                    <i class="mdi mdi-map-marker text-primary me-1"></i>
                                  </div>
                                  <p class="text-muted">
                                    {" "}
                                    {jobs.city_id && jobs.city_id.name}
                                  </p>
                                </div>
                              </div>
                              {Array.isArray(jobs.employment_type_id) &&
                                jobs.employment_type_id.map((employment) => (
                                  <div class="col-lg-2 col-md-2">
                                    <div key={employment.employment_type_id}>
                                      <span class="badge bg-success-subtle text-success fs-13 mt-1">
                                        {employment.employment_type}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div class="p-3 bg-light">
                            <div class="row justify-content-between">
                              <div class="col-md-4">
                                <div>
                                  <p class="text-muted mb-0">
                                    <span class="text-dark">Experience :</span>{" "}
                                    {jobs.experience_id &&
                                      jobs.experience_id.year}
                                  </p>
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
                        <FaBan />
                        <p>
                          No jobs found
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div class="col-lg-3">
              <div class="side-bar mt-5 mt-lg-0">
                <div class="accordion" id="accordionExample">
                  {/* Experience */}
                  <div class="accordion-item mt-4">
                    <h2 class="accordion-header" id="experienceOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#experience"
                        aria-expanded="true"
                        aria-controls="experience"
                      >
                        Work experience
                      </button>
                    </h2>
                    <div
                      id="experience"
                      class="accordion-collapse collapse show"
                      aria-labelledby="experienceOne"
                    >
                      <div class="accordion-body">
                        {Array.isArray(experiences) &&
                          experiences.map((experience) => (
                            <div class="side-title" key={experience.id}>
                              <div class="form-check mt-2">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id={`flexCheckChecked1${experience.id}`}
                                  value={experience.id}
                                  onChange={handleExperience}
                                  checked={selectedExperience.includes(
                                    experience.id
                                  )}
                                />
                                <label
                                  class="form-check-label ms-2 text-muted"
                                  for={`flexCheckChecked1${experience.id}`}
                                >
                                  {experience.year} years
                                </label>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* WorkMode */}
                  <div class="accordion-item mt-4">
                    <h2 class="accordion-header" id="workmode">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#workmode"
                        aria-expanded="true"
                        aria-controls="workmode"
                      >
                        Work Mode
                      </button>
                    </h2>
                    <div
                      id="workmode"
                      class="accordion-collapse collapse show"
                      aria-labelledby="workmode"
                    >
                      <div class="accordion-body">
                        {Array.isArray(workModes) &&
                          workModes.map((modes) => (
                            <div class="side-title" key={modes.id}>
                              <div class="form-check mt-2">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id={`flexCheckChecked2${modes.id}`}
                                  value={modes.id}
                                  onChange={handleWorkMode}
                                  checked={selectedWorkMode.includes(modes.id)}
                                />
                                <label
                                  class="form-check-label ms-2 text-muted"
                                  for={`flexCheckChecked2${modes.id}`}
                                >
                                  {modes.name}
                                </label>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Salary range */}
                  <div class="accordion-item mt-4">
                    <h2 class="accordion-header" id="salary">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#salary"
                        aria-expanded="true"
                        aria-controls="salary"
                      >
                        Salary range
                      </button>
                    </h2>
                    <div
                      id="salary"
                      class="accordion-collapse collapse show"
                      aria-labelledby="salary"
                    >
                      <div class="accordion-body">
                        {Array.isArray(salaries) &&
                          salaries.map((salary) => (
                            <div class="side-title" key={salary.id}>
                              <div class="form-check mt-2">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id={`flexCheckChecked${salary.id}`}
                                  value={salary.id}
                                  onChange={handleSalaryChange}
                                  checked={selectedSalaries.includes(salary.id)}
                                />
                                <label
                                  class="form-check-label ms-2 text-muted"
                                  for={`flexCheckChecked${salary.id}`}
                                >
                                  {salary.name}
                                </label>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* Employment */}
                  <div class="accordion-item mt-3">
                    <h2 class="accordion-header" id="jobType">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#jobtype"
                        aria-expanded="false"
                        aria-controls="jobtype"
                      >
                        Type of employment
                      </button>
                    </h2>
                    {Array.isArray(employmentTypes) &&
                      employmentTypes.map((employment) => (
                        <div
                          id="jobtype"
                          class="accordion-collapse collapse show"
                          aria-labelledby="jobType"
                        >
                          <div class="accordion-body">
                            <div class="side-title">
                              <div class="form-check-all mt-2">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault6"
                                  value={employment.id}
                                  onChange={(e) => {
                                    setEmployment(e.target.value);
                                  }}
                                />
                                <label
                                  class="form-check-label ms-2 text-muted"
                                  for="flexRadioDefault6"
                                >
                                  {employment.name}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Date posted */}
                  <div class="accordion-item mt-3">
                    <h2 class="accordion-header" id="datePosted">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#dateposted"
                        aria-expanded="false"
                        aria-controls="dateposted"
                      >
                        Date Posted
                      </button>
                    </h2>
                    <div
                      id="dateposted"
                      class="accordion-collapse collapse show"
                      aria-labelledby="datePosted"
                    >
                      <div class="accordion-body">
                        <div class="side-title form-check-all">
                          <div class="form-check mt-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="datePosted"
                              value={7}
                              id="flexRadioChecked8"
                              onChange={(e) => {
                                setPostDate(e.target.value);
                              }}
                            />
                            <label
                              class="form-check-label ms-2 text-muted"
                              for="flexRadioChecked8"
                            >
                              Last 7 days
                            </label>
                          </div>
                          <div class="form-check mt-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="datePosted"
                              value={14}
                              id="flexRadioChecked8"
                              onChange={(e) => {
                                setPostDate(e.target.value);
                              }}
                            />
                            <label
                              class="form-check-label ms-2 text-muted"
                              for="flexCheckChecked8"
                            >
                              Last 14 days
                            </label>
                          </div>
                          <div class="form-check mt-2">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="datePosted"
                              value={30}
                              id="flexRadioChecked9"
                              onChange={(e) => {
                                setPostDate(e.target.value);
                              }}
                            />
                            <label
                              class="form-check-label ms-2 text-muted"
                              for="flexRadioChecked9"
                            >
                              Last 30 days
                            </label>
                          </div>
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
      <div
        class="modal fade"
        id="applyNow"
        tabindex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-5">
              <div class="text-center mb-4">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Apply For This Job
                </h5>
              </div>
              <div class="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="mb-3">
                <label for="nameControlInput" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nameControlInput"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="emailControlInput2" class="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="emailControlInput2"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="messageControlTextarea" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="messageControlTextarea"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div class="mb-4">
                <label class="form-label" for="inputGroupFile01">
                  Resume Upload
                </label>
                <input type="file" class="form-control" id="inputGroupFile01" />
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Send Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
