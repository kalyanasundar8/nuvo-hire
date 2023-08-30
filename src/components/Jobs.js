import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import useFetch from "./useFetch";
import { useLocation } from "react-router-dom";
import ApiService from "../services/ApiService";

export default function Jobs() {
  const { id } = useParams();

  // Recent, Featured, freelancing, partTime, fullTime Jobs list
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTab = searchParams.get("tab");
  const subCategoryId = searchParams.get("subcategory_id");
  const searchedResults = location.state;

  console.log(searchedResults);

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

  // All jobs list
  const allJobsData = useFetch("jobs");
  const allJobs = allJobsData.data;
  console.log(allJobs);

  // SubCategories Jobs
  const subCategoriesData = useFetch(`jobs?subcategory_id=${subCategoryId}`);
  const subCategory = subCategoriesData.data;
  console.log("Subcategory", subCategory);

  // Job Search
  const countriesData = useFetch("countries");
  const countries = countriesData.data;

  const [searchQuery, setSearchQuery] = useState("");
  const [countryId, setCountryId] = useState("101");

  const handleSearch = async () => {
    console.log(searchQuery);
    console.log(countryId);
    try {
      const searchResults = await ApiService(
        `job-search?value=${encodeURIComponent(
          searchQuery
        )}&country_id=${countryId}`
      );
      console.log(searchResults);
    } catch (error) {
      console.log(error);
    }
  };

  useScrollToTop();

  return (
    <div class='page-content'>
      <section class='page-title-box'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <div class='text-center text-white'>
                <h3 class='mb-4'>{title}</h3>
                <div class='page-next'>
                  <nav
                    class='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol class='breadcrumb justify-content-center'>
                      <li class='breadcrumb-item'>
                        {" "}
                        <Link to='index.php'>Home</Link>
                      </li>
                      <li class='breadcrumb-item'>
                        {" "}
                        <Link to=''>Pages</Link>
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        {" "}
                        {title}{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section class='section'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-9'>
              <div class='me-lg-5'>
                <div class='job-list-header'>
                  <form action='#'>
                    <div class='row g-2'>
                      <div class='col-lg-3 col-md-6'>
                        <div class='filler-job-form'>
                          <i class='uil uil-briefcase-alt'></i>
                          <input
                            type='search'
                            class='form-control filter-job-input-box'
                            id='exampleFormControlInput1'
                            placeholder='Job, company... '
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class='col-lg-3 col-md-6'>
                        <div class='filler-job-form'>
                          <i class='uil uil-location-point'></i>
                          <select
                            class='form-select'
                            data-trigger
                            name='choices-single-location'
                            id='choices-single-location'
                            aria-label='Default select example'
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

                      <div class='col-lg-3 col-md-6'>
                        <div class='filler-job-form'>
                          <i class='uil uil-clipboard-notes'></i>
                          <select
                            class='form-select '
                            data-trigger
                            name='choices-single-categories'
                            id='choices-single-categories'
                            aria-label='Default select example'
                          >
                            <option value='4'>Accounting</option>
                            <option value='1'>IT & Software</option>
                            <option value='3'>Marketing</option>
                            <option value='5'>Banking</option>
                          </select>
                        </div>
                      </div>

                      <div class='col-lg-3 col-md-6'>
                        <Link to='' class='btn btn-primary w-100'>
                          <i class='uil uil-filter'></i> Fliter
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>

                <div class='wedget-popular-title mt-4'>
                  <h6>Popular</h6>
                  <ul class='list-inline'>
                    <li class='list-inline-item'>
                      <div class='popular-box d-flex align-items-center'>
                        <div class='number flex-shrink-0 me-2'>20</div>
                        <Link to='' class='primary-link stretched-link'>
                          <h6 class='fs-14 mb-0'>UI/UX designer</h6>
                        </Link>
                      </div>
                    </li>
                    <li class='list-inline-item'>
                      <div class='popular-box d-flex align-items-center'>
                        <div class='number flex-shrink-0 me-2'>18</div>
                        <Link to='' class='primary-link stretched-link'>
                          <h6 class='fs-14 mb-0'>HR manager</h6>
                        </Link>
                      </div>
                    </li>
                    <li class='list-inline-item'>
                      <div class='popular-box d-flex align-items-center'>
                        <div class='number flex-shrink-0 me-2'>10</div>
                        <Link to='' class='primary-link stretched-link'>
                          <h6 class='fs-14 mb-0'>Product manager</h6>
                        </Link>
                      </div>
                    </li>
                    <li class='list-inline-item'>
                      <div class='popular-box d-flex align-items-center'>
                        <div class='number flex-shrink-0 me-2'>15</div>
                        <Link to='' class='primary-link stretched-link'>
                          <h6 class='fs-14 mb-0'>Sales manager</h6>
                        </Link>
                      </div>
                    </li>
                    <li class='list-inline-item'>
                      <div class='popular-box d-flex align-items-center'>
                        <div class='number flex-shrink-0 me-2'>28</div>
                        <Link to='' class='primary-link stretched-link'>
                          <h6 class='fs-14 mb-0'>Developer</h6>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  {subCategory && Array.isArray(subCategory)
                    ? subCategory.map((subCat) => (
                        <div key={subCat.id} class='job-box card mt-5'>
                          <div class='bookmark-label text-center'>
                            <Link to='' class='align-middle text-white'>
                              <i class='mdi mdi-star'></i>
                            </Link>
                          </div>
                          <div class='p-4'>
                            <div class='row align-items-center'>
                              <div class='col-md-2'>
                                <div class='text-center mb-4 mb-lg-0'>
                                  <Link to='company-details.php'>
                                    <img
                                      src='assets/images/featured-job/img-01.png'
                                      alt=''
                                      class='img-fluid rounded-3'
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div class='col-md-3'>
                                <div class='mb-2 mb-md-0'>
                                  <h5 class='fs-18 mb-0'>
                                    {" "}
                                    <Link to='/job-detail' class='text-dark'>
                                      {subCat.job_title}
                                    </Link>
                                  </h5>
                                  <p class='text-muted fs-14 mb-0'>
                                    Creative Agency
                                  </p>
                                </div>
                              </div>

                              <div class='col-md-3'>
                                <div class='d-flex mb-2'>
                                  <div class='flex-shrink-0'>
                                    <i class='mdi mdi-map-marker text-primary me-1'></i>
                                  </div>
                                  <p class='text-muted'>
                                    {" "}
                                    Escondido,California
                                  </p>
                                </div>
                              </div>

                              <div class='col-md-2'>
                                <div class='d-flex mb-0'>
                                  <div class='flex-shrink-0'>
                                    <i class='uil uil-clock-three text-primary me-1'></i>
                                  </div>
                                  <p class='text-muted mb-0'> 3 min ago</p>
                                </div>
                              </div>

                              <div class='col-md-2'>
                                <div>
                                  <span class='badge bg-success-subtle text-success fs-13 mt-1'>
                                    Full Time
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='p-3 bg-light'>
                            <div class='row justify-content-between'>
                              <div class='col-md-4'>
                                <div>
                                  <p class='text-muted mb-0'>
                                    <span class='text-dark'>Experience :</span>{" "}
                                    2 - 3 years
                                  </p>
                                </div>
                              </div>

                              <div class='col-lg-2 col-md-3'>
                                <div class='text-start text-md-end'>
                                  <Link
                                    to='#applyNow'
                                    data-bs-toggle='modal'
                                    class='primary-link'
                                  >
                                    Apply Now{" "}
                                    <i class='mdi mdi-chevron-double-right'></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : allJobs && Array.isArray(allJobs)
                    ? allJobs.map((allJob) => (
                        <div key={allJob.id} class='job-box card mt-5'>
                          <div class='bookmark-label text-center'>
                            <Link to='' class='align-middle text-white'>
                              <i class='mdi mdi-star'></i>
                            </Link>
                          </div>
                          <div class='p-4'>
                            <div class='row align-items-center'>
                              <div class='col-md-2'>
                                <div class='text-center mb-4 mb-lg-0'>
                                  <Link to='company-details.php'>
                                    <img
                                      src='assets/images/featured-job/img-01.png'
                                      alt=''
                                      class='img-fluid rounded-3'
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div class='col-md-3'>
                                <div class='mb-2 mb-md-0'>
                                  <h5 class='fs-18 mb-0'>
                                    {" "}
                                    <Link to='/job-detail' class='text-dark'>
                                      {allJob.job_title}
                                    </Link>
                                  </h5>
                                  <p class='text-muted fs-14 mb-0'>
                                    Creative Agency
                                  </p>
                                </div>
                              </div>

                              <div class='col-md-3'>
                                <div class='d-flex mb-2'>
                                  <div class='flex-shrink-0'>
                                    <i class='mdi mdi-map-marker text-primary me-1'></i>
                                  </div>
                                  <p class='text-muted'>
                                    {" "}
                                    Escondido,California
                                  </p>
                                </div>
                              </div>

                              <div class='col-md-2'>
                                <div class='d-flex mb-0'>
                                  <div class='flex-shrink-0'>
                                    <i class='uil uil-clock-three text-primary me-1'></i>
                                  </div>
                                  <p class='text-muted mb-0'> 3 min ago</p>
                                </div>
                              </div>

                              <div class='col-md-2'>
                                <div>
                                  <span class='badge bg-success-subtle text-success fs-13 mt-1'>
                                    Full Time
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='p-3 bg-light'>
                            <div class='row justify-content-between'>
                              <div class='col-md-4'>
                                <div>
                                  <p class='text-muted mb-0'>
                                    <span class='text-dark'>Experience :</span>{" "}
                                    2 - 3 years
                                  </p>
                                </div>
                              </div>

                              <div class='col-lg-2 col-md-3'>
                                <div class='text-start text-md-end'>
                                  <Link
                                    to='#applyNow'
                                    data-bs-toggle='modal'
                                    class='primary-link'
                                  >
                                    Apply Now{" "}
                                    <i class='mdi mdi-chevron-double-right'></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : searchedResults && Array.isArray(searchedResults)
                    ? searchedResults.map((searched) => (
                        <div key={searched.id} class='job-box card mt-5'>
                          <div class='bookmark-label text-center'>
                            <Link to='' class='align-middle text-white'>
                              <i class='mdi mdi-star'></i>
                            </Link>
                          </div>
                          <div class='p-4'>
                            <div class='row align-items-center'>
                              <div class='col-md-2'>
                                <div class='text-center mb-4 mb-lg-0'>
                                  <Link to='company-details.php'>
                                    <img
                                      src='assets/images/featured-job/img-01.png'
                                      alt=''
                                      class='img-fluid rounded-3'
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div class='col-md-3'>
                                <div class='mb-2 mb-md-0'>
                                  <h5 class='fs-18 mb-0'>
                                    {" "}
                                    <Link
                                      to={`/job-detail/${id}`}
                                      class='text-dark'
                                    >
                                      {searched.job_title}
                                    </Link>
                                  </h5>
                                  <p class='text-muted fs-14 mb-0'>
                                    {searched.company_name}
                                  </p>
                                </div>
                              </div>

                              <div class='col-md-3'>
                                <div class='d-flex mb-2'>
                                  <div class='flex-shrink-0'>
                                    <i class='mdi mdi-map-marker text-primary me-1'></i>
                                  </div>
                                  <p class='text-muted'>
                                    {" "}
                                    {searched.state_id &&
                                      searched.state_id.name}
                                  </p>
                                </div>
                              </div>

                              <div class='col-md-2'>
                                <div class='d-flex mb-0'>
                                  <div class='flex-shrink-0'>
                                    <i class='uil uil-clock-three text-primary me-1'></i>
                                  </div>
                                  <p class='text-muted mb-0'> 3 min ago</p>
                                </div>
                              </div>

                              <div class='col-md-2'>
                                <div>
                                  <span class='badge bg-success-subtle text-success fs-13 mt-1'>
                                    {searched.employment_type_id &&
                                      searched.employment_type_id.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class='p-3 bg-light'>
                            <div class='row justify-content-between'>
                              <div class='col-md-4'>
                                <div>
                                  <p class='text-muted mb-0'>
                                    <span class='text-dark'>Experience :</span>{" "}
                                    {searched.experience_id &&
                                      searched.experience_id.year}
                                  </p>
                                </div>
                              </div>

                              <div class='col-lg-2 col-md-3'>
                                <div class='text-start text-md-end'>
                                  <Link
                                    to='#applyNow'
                                    data-bs-toggle='modal'
                                    class='primary-link'
                                  >
                                    Apply Now{" "}
                                    <i class='mdi mdi-chevron-double-right'></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>

                <div class='row'>
                  <div class='col-lg-12 mt-4 pt-2'>
                    <nav aria-label='Page navigation example'>
                      <ul class='pagination job-pagination mb-0 justify-content-center'>
                        <li class='page-item disabled'>
                          <Link class='page-link' to='' tabindex='-1'>
                            <i class='mdi mdi-chevron-double-left fs-15'></i>
                          </Link>
                        </li>
                        <li class='page-item active'>
                          {" "}
                          <Link class='page-link' to=''>
                            1
                          </Link>
                        </li>
                        <li class='page-item'>
                          {" "}
                          <Link class='page-link' to=''>
                            2
                          </Link>
                        </li>
                        <li class='page-item'>
                          {" "}
                          <Link class='page-link' to=''>
                            3
                          </Link>
                        </li>
                        <li class='page-item'>
                          {" "}
                          <Link class='page-link' to=''>
                            4
                          </Link>
                        </li>
                        <li class='page-item'>
                          <Link class='page-link' to=''>
                            <i class='mdi mdi-chevron-double-right fs-15'></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-3'>
              <div class='side-bar mt-5 mt-lg-0'>
                <div class='accordion' id='accordionExample'>
                  <div class='accordion-item'>
                    <h2 class='accordion-header' id='locationOne'>
                      <button
                        class='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#location'
                        aria-expanded='true'
                        aria-controls='location'
                      >
                        Location
                      </button>
                    </h2>
                    <div
                      id='location'
                      class='accordion-collapse collapse show'
                      aria-labelledby='locationOne'
                    >
                      <div class='accordion-body'>
                        <div class='side-title'>
                          <div class='mb-3'>
                            <form class='position-relative'>
                              <input
                                class='form-control'
                                type='search'
                                placeholder='Search...'
                              />
                              <button
                                class='bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2'
                                type='submit'
                              >
                                <span class='mdi mdi-magnify text-muted'></span>
                              </button>
                            </form>
                          </div>
                          <div class='area-range'>
                            <div class='form-label mb-3'>
                              Area Range:{" "}
                              <span class='example-val mt-2' id='slider1-span'>
                                9.00
                              </span>{" "}
                              miles
                            </div>
                            <div
                              id='slider1'
                              class='noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr'
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='accordion-item mt-4'>
                    <h2 class='accordion-header' id='experienceOne'>
                      <button
                        class='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#experience'
                        aria-expanded='true'
                        aria-controls='experience'
                      >
                        Work experience
                      </button>
                    </h2>
                    <div
                      id='experience'
                      class='accordion-collapse collapse show'
                      aria-labelledby='experienceOne'
                    >
                      <div class='accordion-body'>
                        <div class='side-title'>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckChecked1'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked1'
                            >
                              No experience
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckChecked2'
                              checked
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked2'
                            >
                              0-3 years
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckChecked3'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked3'
                            >
                              3-6 years
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckChecked4'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked4'
                            >
                              More than 6 years
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='accordion-item mt-3'>
                    <h2 class='accordion-header' id='jobType'>
                      <button
                        class='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#jobtype'
                        aria-expanded='false'
                        aria-controls='jobtype'
                      >
                        Type of employment
                      </button>
                    </h2>
                    <div
                      id='jobtype'
                      class='accordion-collapse collapse show'
                      aria-labelledby='jobType'
                    >
                      <div class='accordion-body'>
                        <div class='side-title'>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='radio'
                              name='flexRadioDefault'
                              id='flexRadioDefault6'
                              checked
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexRadioDefault6'
                            >
                              Freelance
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='radio'
                              name='flexRadioDefault'
                              id='flexRadioDefault2'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexRadioDefault2'
                            >
                              Full Time
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='radio'
                              name='flexRadioDefault'
                              id='flexRadioDefault3'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexRadioDefault3'
                            >
                              Internship
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='radio'
                              name='flexRadioDefault'
                              id='flexRadioDefault4'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexRadioDefault4'
                            >
                              Part Time
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='accordion-item mt-3'>
                    <h2 class='accordion-header' id='datePosted'>
                      <button
                        class='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#dateposted'
                        aria-expanded='false'
                        aria-controls='dateposted'
                      >
                        Date Posted
                      </button>
                    </h2>
                    <div
                      id='dateposted'
                      class='accordion-collapse collapse show'
                      aria-labelledby='datePosted'
                    >
                      <div class='accordion-body'>
                        <div class='side-title form-check-all'>
                          <div class='form-check'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              id='checkAll'
                              value=''
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='checkAll'
                            >
                              All
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              name='datePosted'
                              value='last'
                              id='flexCheckChecked5'
                              checked
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked5'
                            >
                              Last Hour
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              name='datePosted'
                              value='last'
                              id='flexCheckChecked6'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked6'
                            >
                              Last 24 hours
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              name='datePosted'
                              value='last'
                              id='flexCheckChecked7'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked7'
                            >
                              Last 7 days
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              name='datePosted'
                              value='last'
                              id='flexCheckChecked8'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked8'
                            >
                              Last 14 days
                            </label>
                          </div>
                          <div class='form-check mt-2'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              name='datePosted'
                              value='last'
                              id='flexCheckChecked9'
                            />
                            <label
                              class='form-check-label ms-2 text-muted'
                              for='flexCheckChecked9'
                            >
                              Last 30 days
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='accordion-item mt-3'>
                    <h2 class='accordion-header' id='tagCloud'>
                      <button
                        class='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#tagcloud'
                        aria-expanded='false'
                        aria-controls='tagcloud'
                      >
                        Tags Cloud
                      </button>
                    </h2>
                    <div
                      id='tagcloud'
                      class='accordion-collapse collapse show'
                      aria-labelledby='tagCloud'
                    >
                      <div class='accordion-body'>
                        <div class='side-title'>
                          <Link to='' class='badge tag-cloud fs-13 mt-2'>
                            design
                          </Link>
                          <Link to='' class='badge tag-cloud fs-13 mt-2'>
                            marketing
                          </Link>
                          <Link to='' class='badge tag-cloud fs-13 mt-2'>
                            business
                          </Link>
                          <Link to='' class='badge tag-cloud fs-13 mt-2'>
                            developer
                          </Link>
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
      ]
    </div>
  );
}
