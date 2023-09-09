import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
// Validations
import { useFormik } from "formik";
import * as Yup from "yup";
import useFetch from "../useFetch";

// Editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ApiService from "../../services/ApiService";

// ValidationSchema

// const validationSchema = Yup.object().shape({
//   jobtitle: Yup.string().required("Enter jobtitle"),
//   jobdescription: Yup.string()
//     .min(50, "Your description must have 50 characters")
//     .required("Enter your jobdescription"),
//   categories: Yup.string().required("Select categories"),
//   // subCategories: Yup.string().required("Select subCategory"),
//   jobtype: Yup.string().required("Enter your jobtype"),
//   designation: Yup.string().required("Enter a designation"),
//   responsibilities: Yup.string().required("Add responsibilities"),
//   workmode: Yup.string().required("Select work mode"),
//   salary: Yup.string().required("Select salary"),
//   experience: Yup.string().required("Select experience"),
//   employment: Yup.string().required("Select employment type"),
//   industry: Yup.string().required("Select industry"),
//   degree: Yup.string().required("Select a degree"),
//   course: Yup.string().required("Select a course"),
//   education: Yup.string().required("Select education"),
//   skills: Yup.string().required("select skills"),
//   vacancy: Yup.string().required("Enter a vacancy"),
//   // featuredJob: Yup.string().required("Check anyone"),
//   lastdate: Yup.string().required("Enter the application deadline"),
//   country: Yup.string().required("Select a country"),
//   state: Yup.string().required("Enter your state"),
//   city: Yup.string().required("Enter your city"),
//   zipcode: Yup.string().required("Enter your zipcode"),
// });

export default function CreateNewJobs() {
  const formik = useFormik({
    initialValues: {
      jobtitle: "",
      jobdescription: "",
      categories: "",
      subCategories: "",
      jobtype: "",
      designation: "",
      responsibilities: "",
      salary: "",
      experience: "",
      workmode: "",
      employment: "",
      industry: "",
      degree: "",
      course: "",
      education: "",
      skills: "",
      vacancy: "",
      featuredJob: "",
      lastdate: "",
      country: "",
      state: "",
      city: "",
      zipcode: "",
      postLater: false,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      createJobPost(values);
    },
  });

  // // Custom validation for jobDescription
  // const validateJobDescription = (value) => {
  //   if (!value || value.trim() === "") {
  //     return "Job Description is required";
  //   }
  //   return undefined; // No validation error
  // };

  const [jobtitle, setJobTitle] = useState("");
  const [jobdescription, setJobDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [subCategories, setSubCategories] = useState("");
  const [jobtype, setJobType] = useState("");
  const [designation, setDesignation] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [workmode, setWorkMode] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [employment, setEmployment] = useState("");
  const [industry, setIndustry] = useState("");
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [vacancy, setVacancy] = useState("");
  const [featuredJob, setFeaturedJob] = useState("");
  const [lastdate, setLastDate] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [postLater, setPostLater] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  // Description Editor
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic"],
      ["link"],
      [{ align: [] }],
    ],
  };

  const formats = ["header", "font", "list", "bold", "italic", "link", "align"];

  const handleJobDescription = (value) => {
    setJobDescription(value);
  };

  // API integration
  // Countries
  const countryData = useFetch("countries", "GET", null, false);
  const countries = countryData.data;

  // State
  const statesData = useFetch(
    `states?country_id=${country}`,
    "GET",
    null,
    false
  );

  // City
  const cityData = useFetch(`cities?state_id=${state}`, "GET", null, false);
  // Categories
  const categoriesData = useFetch("categories", "GET", null, false);
  const category = categoriesData.data;

  // Subcategories
  const subCategoriesData = useFetch(
    `sub-categories?category_id=${categories}`
  );

  // designation
  const designationData = useFetch("designations", "GET", null, false);
  const designations = designationData.data;

  // WorkMode
  const workModeData = useFetch("workmodes", "GET", null, false);
  const workModes = workModeData.data;

  // Salary
  const salaryData = useFetch("salaries", "GET", null, false);
  const salaries = salaryData.data;

  // Experience
  const experienceData = useFetch("experiances", "GET", null, false);
  const experiences = experienceData.data;

  // Employment
  const employmentData = useFetch("employment-types", "GET", null, false);
  const employmentTypes = employmentData.data;

  // Industry
  const industryData = useFetch("industries", "GET", null, false);
  const industries = industryData.data;

  // Course
  const courseData = useFetch("courses", "GET", null, false);
  const courses = courseData.data;

  // Degree
  const degreeData = useFetch("degrees", "GET", null, false);
  const degrees = degreeData.data;

  // Education
  const educationData = useFetch("educations", "GET", null, false);
  const educations = educationData.data;

  // Skills
  const skillsData = useFetch("skills", "GET", null, false);
  const skill = skillsData.data;

  const skillsOptions = Array.isArray(skill)
    ? skill.map((skillList) => ({
        value: skillList.id,
        label: skillList.name,
      }))
    : null;

  const handleSelect = (skillsOptions) => {
    // Extract the id values of selected options
    const selectedIds = skillsOptions.map((option) => option.value);

    // Set the selected options in the state
    setSelectedSkill(skillsOptions);

    // Now you can use selectedIds in your payload or wherever needed
    console.log(selectedIds);

    const filteredOptions = skillsOptions.filter(
      (option) =>
        !skillsOptions.some((selected) => selected.value === option.value)
    );

    // Update the options in the dropdown
    setSkills(filteredOptions);
  };

  const skillsValue = selectedSkill.map((option) => option.value);

  // Post later
  const handleButtonClick = () => {
    const postLaterData = buttonClicked ? 0 : 1;
    setPostLater(postLaterData);
    setButtonClicked(!buttonClicked);
  };

  // Create a jobPost
  const createJobPost = async (values) => {
    const payload = {
      job_title: values.jobtitle,
      job_description: values.jobdescription,
      category_id: values.categories,
      subCategory_id: values.subcategories,
      job_type: values.jobtype,
      designation_id: values.designation,
      responsibilities: values.responsibilities,
      salary_id: values.salary,
      experience_id: values.experience,
      work_mode_id: values.workmode,
      employment_type_id: values.employment,
      industry_id: values.industry,
      degree_id: values.degree,
      course_id: values.course,
      education_id: values.education,
      skills_id: skillsValue,
      vacancy: values.vacancy,
      is_featured_job: featuredJob,
      application_deadline_date: values.lastdate,
      country_id: values.country,
      state_id: values.state,
      city_id: values.city,
      zipcode: values.zipcode,
      is_post_later: postLater,
    };
    console.log(payload);
    try {
      const response = await ApiService("post-new-job", "POST", payload, false);
      console.log(response);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <div class='page-content'>
      <section class='page-title-box'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <div class='text-center text-white'>
                <h3 class='mb-4'>Create Jobs</h3>
                <div class='page-next'>
                  {/* <nav
                    class='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol class='breadcrumb justify-content-center'>
                      <li class='breadcrumb-item'>
                        <a href='index.php'>Home</a>
                      </li>
                      <li class='breadcrumb-item'>
                        <a href=''>Manage Jobs</a>
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        {" "}
                        Manage Job Post{" "}
                      </li>
                    </ol>
                  </nav> */}
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
            <div class='col-lg-12'>
              <div class='primary-bg-subtle p-3'>
                <h5 class='mb-0 fs-17'>Post a New Job!</h5>
              </div>
            </div>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            class='job-post-form shadow mt-4'
          >
            <div class='job-post-content box-shadow-md rounded-3 p-4'>
              <div class='row'>
                <div class='col-lg-12'>
                  <div class='mb-4'>
                    <label for='jobtitle' class='form-label'>
                      Job Title
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='jobtitle'
                      name='jobtitle'
                      placeholder='Title'
                      value={jobtitle}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setJobTitle(e.target.value);
                      }}
                    />
                    {formik.touched.jobtitle && formik.errors.jobtitle && (
                      <span className='error'>{formik.errors.jobtitle}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-12 mb-4'>
                  <div style={{ marginBottom: "3rem" }}>
                    <label for='jobdescription' class='form-label'>
                      Job Description
                    </label>
                    <ReactQuill
                      modules={modules}
                      formats={formats}
                      value={formik.values.jobdescription}
                      onChange={(value) =>
                        formik.setFieldValue("jobdescription", value)
                      }
                      style={{ height: "200px" }}
                      name='jobdescription'
                    />
                  </div>
                  {formik.touched.jobdescription &&
                    formik.errors.jobdescription && (
                      <span className='error'>
                        {formik.errors.jobdescription}
                      </span>
                    )}
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='choices-single-categories' class='form-label'>
                      Categories
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='categories'
                      id='choices-single-categories'
                      aria-label='Default select example'
                      value={categories}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setCategories(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(category)
                        ? category.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                              {cat.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.categories && formik.errors.categories && (
                      <span className='error'>{formik.errors.categories}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='subcategories' class='form-label'>
                      SubCategories
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='subcategories'
                      id='subcategories'
                      aria-label='Default select example'
                      value={subCategories}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setSubCategories(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(subCategoriesData.data) &&
                        subCategoriesData.data.map((subcategory) => (
                          <option key={subcategory.id} value={subcategory.id}>
                            {subcategory.name}
                          </option>
                        ))}
                    </select>
                    {formik.touched.subCategories &&
                      formik.errors.subCategories && (
                        <span className='error'>
                          {formik.errors.subCategories}
                        </span>
                      )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='jobtype' class='form-label'>
                      Job Type
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='jobtype'
                      name='jobtype'
                      placeholder='Job type'
                      value={jobtype}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setJobType(e.target.value);
                      }}
                    />
                    {formik.touched.jobtype && formik.errors.jobtype && (
                      <span className='error'>{formik.errors.jobtype}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='designation' class='form-label'>
                      Designation
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='designation'
                      id='designation'
                      aria-label='Default select example'
                      value={designation}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setDesignation(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(designations)
                        ? designations.map((designation) => (
                            <option key={designation.id} value={designation.id}>
                              {designation.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.designation &&
                      formik.errors.designation && (
                        <span className='error'>
                          {formik.errors.designation}
                        </span>
                      )}
                  </div>
                </div>
                <div class='col-lg-12'>
                  <div class='mb-4'>
                    <label for='responsibilities' class='form-label'>
                      Responsibilities
                    </label>
                    <textarea
                      class='form-control'
                      id='responsibilities'
                      name='responsibilities'
                      rows='3'
                      placeholder='Enter Job Responsibilities'
                      value={responsibilities}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setResponsibilities(e.target.value);
                      }}
                    />
                    {formik.touched.responsibilities &&
                      formik.errors.responsibilities && (
                        <span className='error'>
                          {formik.errors.responsibilities}
                        </span>
                      )}
                  </div>
                </div>

                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='salary' class='form-label'>
                      Salary
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='salary'
                      id='salary'
                      aria-label='Default select example'
                      value={salary}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setSalary(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(salaries)
                        ? salaries.map((salary) => (
                            <option key={salary.id} value={salary.id}>
                              {salary.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.salary && formik.errors.salary && (
                      <span className='error'>{formik.errors.salary}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='experience' class='form-label'>
                      Experience
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='experience'
                      id='experience'
                      aria-label='Default select example'
                      value={experience}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setExperience(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(experiences)
                        ? experiences.map((experience) => (
                            <option key={experience.id} value={experience.id}>
                              {experience.year}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.experience && formik.errors.experience && (
                      <span className='error'>{formik.errors.experience}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='workmode' class='form-label'>
                      Work mode
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='workmode'
                      id='workmode'
                      aria-label='Default select example'
                      value={workmode}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setWorkMode(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(workModes)
                        ? workModes.map((workmode) => (
                            <option key={workmode.id} value={workmode.id}>
                              {workmode.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.workmode && formik.errors.workmode && (
                      <span className='error'>{formik.errors.workmode}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='employment' class='form-label'>
                      Employment
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='employment'
                      id='employment'
                      aria-label='Default select example'
                      value={employment}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setEmployment(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(employmentTypes)
                        ? employmentTypes.map((employment) => (
                            <option key={employment.id} value={employment.id}>
                              {employment.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.employment && formik.errors.employment && (
                      <span className='error'>{formik.errors.employment}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='industry' class='form-label'>
                      Industry
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='industry'
                      id='industry'
                      aria-label='Default select example'
                      value={industry}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setIndustry(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(industries)
                        ? industries.map((industry) => (
                            <option key={industry.id} value={industry.id}>
                              {industry.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.industry && formik.errors.industry && (
                      <span className='error'>{formik.errors.industry}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='degree' class='form-label'>
                      Degree
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='degree'
                      id='degree'
                      aria-label='Default select example'
                      value={degree}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setDegree(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(degrees)
                        ? degrees.map((degree) => (
                            <option key={degree.id} value={degree.id}>
                              {degree.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.degree && formik.errors.degree && (
                      <span className='error'>{formik.errors.degree}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='course' class='form-label'>
                      Course
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='course'
                      id='course'
                      aria-label='Default select example'
                      value={course}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setCourse(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(courses)
                        ? courses.map((courseList) => (
                            <option key={courseList.id} value={courseList.id}>
                              {courseList.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.course && formik.errors.course && (
                      <span className='error'>{formik.errors.course}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='education' class='form-label'>
                      Education
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='education'
                      id='education'
                      aria-label='Default select example'
                      value={education}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setEducation(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(educations)
                        ? educations.map((education) => (
                            <option key={education.id} value={education.id}>
                              {education.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.education && formik.errors.education && (
                      <span className='error'>{formik.errors.education}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='skills' class='form-label'>
                      Skills
                    </label>
                    <Select
                      options={skillsOptions}
                      value={selectedSkill}
                      onChange={handleSelect}
                      isMulti={true}
                      name='skills'
                    />
                    {formik.touched.skills && formik.errors.skills && (
                      <div className='invalid-feedback'>
                        {formik.errors.skills}
                      </div>
                    )}
                  </div>
                </div>
                <div class='col-lg-12'>
                  <div class='mb-4'>
                    <label for='vacancy' class='form-label'>
                      Vacancy
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='vacancy'
                      name='vacancy'
                      value={vacancy}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setVacancy(e.target.value);
                      }}
                    />
                    {formik.touched.vacancy && formik.errors.vacancy && (
                      <span className='error'>{formik.errors.vacancy}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-12'>
                  <div class='mb-4'>
                    <label for='vacancy' class='form-label'>
                      FeaturedJob
                    </label>
                    <input
                      type='checkbox'
                      class='form-check-input'
                      id='featuredjob'
                      name='featuredjob'
                      checked={featuredJob}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setFeaturedJob(isChecked ? 1 : 0);
                      }}
                    />
                  </div>
                </div>
                <div class='col-lg-12'>
                  <div class='mb-4'>
                    <label for='lastdate' class='form-label'>
                      Application Deadline Date
                    </label>
                    <input
                      type='date'
                      class='form-control'
                      id='lastdate'
                      name='lastdate'
                      value={lastdate}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setLastDate(e.target.value);
                      }}
                    />
                    {formik.touched.lastdate && formik.errors.lastdate && (
                      <span className='error'>{formik.errors.lastdate}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='country' class='form-label'>
                      Country
                    </label>
                    <select
                      class='form-select'
                      data-trigger
                      name='country'
                      id='country'
                      aria-label='Default select example'
                      value={country}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setCountry(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(countries)
                        ? countries.map((country) => (
                            <option key={country.id} value={country.id}>
                              {country.name}
                            </option>
                          ))
                        : null}
                    </select>
                    {formik.touched.country && formik.errors.country && (
                      <span className='error'>{formik.errors.country}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='state' class='form-label'>
                      State
                    </label>
                    <select
                      class='form-select'
                      data-trigger
                      name='state'
                      id='state'
                      aria-label='Default select example'
                      value={state}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setState(e.target.value);
                      }}
                    >
                      <option></option>
                      {Array.isArray(statesData.data) &&
                        statesData.data.map((states) => (
                          <option key={states.id} value={states.id}>
                            {states.name}
                          </option>
                        ))}
                    </select>
                    {formik.touched.state && formik.errors.state && (
                      <span className='error'>{formik.errors.state}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='city' class='form-label'>
                      City
                    </label>
                    <select
                      class='form-select'
                      data-trigger
                      name='city'
                      id='city'
                      aria-label='Default select example'
                      value={city}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setCity(e.target.value);
                      }}
                    >
                      <option value='' disabled selected>
                        City
                      </option>
                      {Array.isArray(cityData.data) &&
                        cityData.data.map((cities) => (
                          <option key={cities.id} value={cities.id}>
                            {cities.name}
                          </option>
                        ))}
                    </select>
                    {formik.touched.city && formik.errors.city && (
                      <span className='error'>{formik.errors.city}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-3'>
                  <div class='mb-4'>
                    <label for='zipcode' class='form-label'>
                      Zipcode
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='zipcode'
                      name='zipcode'
                      placeholder='ZipCode'
                      value={zipcode}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setZipCode(e.target.value);
                      }}
                    />
                    {formik.touched.zipcode && formik.errors.zipcode && (
                      <span className='error'>{formik.errors.zipcode}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-12'>
                  <div class='text-end'>
                    <a href='' class='btn btn-success mx-1'>
                      Back
                    </a>
                    <button
                      type='submit'
                      className='btn btn-primary mx-1'
                      onClick={handleButtonClick}
                    >
                      Save
                    </button>
                    <button type='submit' class='btn btn-primary mx-1'>
                      Post Now <i class='mdi mdi-send'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
