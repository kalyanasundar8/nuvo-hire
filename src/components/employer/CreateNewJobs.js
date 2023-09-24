import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
// Validations
import { useFormik } from "formik";
import * as Yup from "yup";
import useFetch from "../useFetch";
import ApiService from "../../services/ApiService";
import { Badge } from "react-bootstrap";

// Editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createJobPostService } from "../../services/JobService";

// ValidationSchema

const validationSchema = Yup.object({
  jobtitle: Yup.string()
    .required("Job Title is required")
    .min(1, "Job title is required"),
  jobdescription: Yup.string().required("Job Description is required"),
  categories: Yup.string().required("Categories is required"),
  // subcategories: Yup.string().required("Subcategories is required"),
  jobtype: Yup.string().required("Job type is required"),
  designation: Yup.string().required("Designation is required"),
  responsibilities: Yup.string().required("Responsibilities is required"),
  salary: Yup.string().required("Salary is required"),
  experience: Yup.string().required("Experience is required"),
  workmode: Yup.string().required("Workmode is required"),
  // employment: Yup.string().required("Employment is required"),
  // industry: Yup.string().required("Industry is required"),
  // // degree: Yup.string().required("Degree is required"),
  // // course: Yup.string().required("Course is required"),
  // education: Yup.string().required("Education is required"),
  // skills: Yup.array()
  //   .required("Skills is required")
  //   .min(1, "Select at least one skill"),
  // vacancy: Yup.number()
  //   .required("Vacancy is required")
  //   .typeError("Vacancy must be a number"),
  // lastdate: Yup.string().required("LastDate is required"),
  // country: Yup.string().required("Country is required"),
  // state: Yup.string().required("state is required"),
  // city: Yup.string().required("City is required"),
  // zipcode: Yup.string().required("ZipCode is required"),
});

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
      employment: [],
      industry: "",
      degree: "",
      course: "",
      education: "",
      skills: [],
      vacancy: "",
      featuredJob: "",
      lastdate: "",
      country: "",
      state: "",
      city: "",
      joblocation: [],
      zipcode: "",
      postLater: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      createJobPost(values);
    },
  });

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
  // Employment state
  const [employment, setEmployment] = useState("");
  const [selectedEmployment, setSelectedEmployment] = useState([]);
  const [industry, setIndustry] = useState("");
  // Degree state
  const [degree, setDegree] = useState("");
  const [selectedDegree, setSelectedDegree] = useState([]);
  // Course state
  const [course, setCourse] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([]);
  // Education state
  const [education, setEducation] = useState("");
  const [selectedEducation, setSelectedEducation] = useState([]);
  // Skills state
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

  const [vacancy, setVacancy] = useState("");
  const [featuredJob, setFeaturedJob] = useState("");
  const [lastdate, setLastDate] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  // location state
  const [locations, setLocations] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);

  // JobLocation state
  const [jobLocations, setJobLocations] = useState([]);
  const [locationInput, setLocationInput] = useState("");

  const [zipcode, setZipCode] = useState("");
  const [tags, setTags] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
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

  const employmentOptions = Array.isArray(employmentTypes)
    ? employmentTypes.map((employmentList) => ({
        value: employmentList.id,
        label: employmentList.name,
      }))
    : null;

  const handleEmploymentSelect = (employmentOptions) => {
    formik.setFieldValue("employment", selectedEmployment);

    if (selectedEmployment.length === 0) {
      formik.setFieldError("employment", "Employment is required");
    } else {
      formik.setFieldError("employment", "");
    }
    // Extract the id values of selected options
    const selectedEmploymentIds = employmentOptions.map(
      (option) => option.value
    );

    // Set the selected options in the state
    setSelectedEmployment(employmentOptions);

    // Now you can use selectedIds in your payload or wherever needed
    console.log(selectedEmploymentIds);

    const filteredOptions = employmentOptions.filter(
      (option) =>
        !employmentOptions.some((selected) => selected.value === option.value)
    );

    // Update the options in the dropdown
    setEmployment(filteredOptions);
  };

  const employmentValue = selectedEmployment.map((option) => option.value);

  // Industry
  const industryData = useFetch("industries", "GET", null, false);
  const industries = industryData.data;

  // Course
  const courseData = useFetch("courses", "GET", null, false);
  const courses = courseData.data;

  const courseOptions = Array.isArray(courses)
    ? courses.map((courseList) => ({
        value: courseList.id,
        label: courseList.name,
      }))
    : null;

  const handleCourseSelect = (courseOptions) => {
    // Extract the id values of selected options
    const selectedCourseIds = courseOptions.map((option) => option.value);

    // Set the selected options in the state
    setSelectedCourse(courseOptions);

    // Now you can use selectedIds in your payload or wherever needed
    console.log(selectedCourseIds);

    const filteredOptions = courseOptions.filter(
      (option) =>
        !courseOptions.some((selected) => selected.value === option.value)
    );

    // Update the options in the dropdown
    setCourse(filteredOptions);
  };

  const courseValue = selectedCourse.map((option) => option.value);

  // Degree
  const degreeData = useFetch("degrees", "GET", null, false);
  const degrees = degreeData.data;

  const degreeOptions = Array.isArray(degrees)
    ? degrees.map((degreesList) => ({
        value: degreesList.id,
        label: degreesList.name,
      }))
    : null;

  const handleDegreeSelect = (degreeOptions) => {
    // Extract the id values of selected options
    const selectedDegreeIds = degreeOptions.map((option) => option.value);

    // Set the selected options in the state
    setSelectedDegree(degreeOptions);

    // Now you can use selectedIds in your payload or wherever needed
    console.log(selectedDegreeIds);

    const filteredOptions = degreeOptions.filter(
      (option) =>
        !degreeOptions.some((selected) => selected.value === option.value)
    );

    // Update the options in the dropdown
    setDegree(filteredOptions);
  };

  const degreeValue = selectedDegree.map((option) => option.value);

  // Education
  const educationData = useFetch("educations", "GET", null, false);
  const educations = educationData.data;

  const educationOptions = Array.isArray(educations)
    ? educations.map((educationList) => ({
        value: educationList.id,
        label: educationList.name,
      }))
    : null;

  const handleEducationSelect = (educationOptions) => {
    // Extract the id values of selected options
    const selectedEducationIds = educationOptions.map((option) => option.value);

    // Set the selected options in the state
    setSelectedEducation(educationOptions);

    // Now you can use selectedIds in your payload or wherever needed
    console.log(selectedEducationIds);

    const filteredOptions = educationOptions.filter(
      (option) =>
        !educationOptions.some((selected) => selected.value === option.value)
    );

    // Update the options in the dropdown
    setEducation(filteredOptions);
  };

  const educationValue = selectedEducation.map((option) => option.value);

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

  // Tags
  const tagsData = useFetch("tags", "GET", null, false);
  const tag = tagsData.data;

  const tagsOptions = Array.isArray(tag)
    ? tag.map((tagsList) => ({
        value: tagsList.id,
        label: tagsList.name,
      }))
    : null;

  const handleTagSelect = (tagsOptions) => {
    // Extract the id values of selected options
    const selectedTagIds = tagsOptions.map((option) => option.value);

    // Set the selected options in the state
    setSelectedTags(tagsOptions);

    // Now you can use selectedIds in your payload or wherever needed
    console.log(selectedTagIds);

    const filteredOptions = tagsOptions.filter(
      (option) =>
        !tagsOptions.some((selected) => selected.value === option.value)
    );

    // Update the options in the dropdown
    setTags(filteredOptions);
  };

  const tagsValue = selectedTags.map((option) => option.value);

  // JobLocation
  const handleInputChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === " " && locationInput.trim() !== "") {
      setJobLocations([...jobLocations, locationInput.trim()]);
      setLocationInput("");
    }
  };

  const handleLocationRemove = (locationToRemove) => {
    const updatedLocations = jobLocations.filter(
      (location) => location !== locationToRemove
    );
    setJobLocations(updatedLocations);
  };

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
      subcategory_id: values.subcategories,
      job_type: values.jobtype,
      designation_id: values.designation,
      responsibilities: values.responsibilities,
      salary_id: values.salary,
      experience_id: values.experience,
      work_mode_id: values.workmode,
      employment_type_id: employmentValue,
      industry_id: values.industry,
      degree_id: degreeValue,
      course_id: courseValue,
      education_id: educationValue,
      skills_id: skillsValue,
      vacancy: values.vacancy,
      is_featured_job: featuredJob,
      application_deadline_date: values.lastdate,
      country_id: values.country,
      state_id: values.state,
      city_id: values.city,
      job_location: jobLocations,
      zipcode: values.zipcode,
      tags_id: tagsValue,
      is_post_later: postLater,
    };
    console.log(payload);
    try {
      const response = await createJobPostService(payload);
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
                <h3 class='mb-4'>Create New Job</h3>
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
                <h5 class='mb-0 fs-17'>Create a New Job!</h5>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      JobType
                      <span className='text-danger font-weight-bold'>*</span>
                    </label>
                    <select
                      class='form-select'
                      data-trigger=''
                      name='jobtype'
                      id='jobtype'
                      aria-label='Default select example'
                      value={jobtype}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setJobType(e.target.value);
                      }}
                    >
                      <option disabled></option>
                      <option>Professional</option>
                      <option>Worker</option>
                    </select>
                    {formik.touched.jobtype && formik.errors.jobtype && (
                      <span className='error'>{formik.errors.jobtype}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='designation' class='form-label'>
                      Designation
                      <span className='text-danger font-weight-bold'>*</span>
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
                <div class='col-lg-12 mb-4'>
                  <div style={{ marginBottom: "3rem" }}>
                    <label for='responsibilities' class='form-label'>
                      Responsibilities
                      <span className='text-danger font-weight-bold'>*</span>
                    </label>
                    <ReactQuill
                      modules={modules}
                      formats={formats}
                      value={formik.values.responsibilities}
                      onChange={(value) =>
                        formik.setFieldValue("responsibilities", value)
                      }
                      style={{ height: "200px" }}
                      name='responsibilities'
                    />
                  </div>
                  {formik.touched.responsibilities &&
                    formik.errors.responsibilities && (
                      <span className='error'>
                        {formik.errors.responsibilities}
                      </span>
                    )}
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='salary' class='form-label'>
                      Salary
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
                    </label>
                    <Select
                      options={employmentOptions}
                      value={selectedEmployment}
                      onChange={handleEmploymentSelect}
                      isMulti={true}
                      name='employment'
                    />
                    {formik.touched.employment && formik.errors.employment && (
                      <span className='error'>{formik.errors.employment}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='industry' class='form-label'>
                      Industry
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
                    </label>
                    <Select
                      options={degreeOptions}
                      value={selectedDegree}
                      onChange={handleDegreeSelect}
                      isMulti={true}
                      name='degree'
                    />
                    {formik.touched.degree && formik.errors.degree && (
                      <span className='error'>{formik.errors.degree}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='course' class='form-label'>
                      Course
                      <span className='text-danger font-weight-bold'>*</span>
                    </label>
                    <Select
                      options={courseOptions}
                      value={selectedCourse}
                      onChange={handleCourseSelect}
                      isMulti={true}
                      name='course'
                    />
                    {formik.touched.course && formik.errors.course && (
                      <span className='error'>{formik.errors.course}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='education' class='form-label'>
                      Education
                      <span className='text-danger font-weight-bold'>*</span>
                    </label>
                    <Select
                      options={educationOptions}
                      value={selectedEducation}
                      onChange={handleEducationSelect}
                      isMulti={true}
                      name='education'
                    />
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='skills' class='form-label'>
                      Skills
                      <span className='text-danger font-weight-bold'>*</span>
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
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='vacancy' class='form-label'>
                      Vacancy
                      <span className='text-danger font-weight-bold'>*</span>
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
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='vacancy' class='form-label'>
                      FeaturedJob
                      <span className='text-danger font-weight-bold'>*</span>
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
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='lastdate' class='form-label'>
                      Application Deadline Date
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                      <span className='text-danger font-weight-bold'>*</span>
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
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='joblocation' class='form-label'>
                      JobLocation
                      <span className='text-danger font-weight-bold'>*</span>
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='joblocation'
                      name='joblocation'
                      placeholder='Enter Locations...'
                      value={locationInput}
                      onChange={handleInputChange}
                      onKeyPress={handleInputKeyPress}
                    />
                    <div>
                      {jobLocations.map((jobLocation) => (
                        <Badge
                          key={jobLocation}
                          variant='light'
                          className='tag-badge mt-2'
                        >
                          {jobLocation}
                          <span
                            className='badge-remove'
                            onClick={() => handleLocationRemove(jobLocation)}
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginLeft: "5px",
                              cursor: "pointer",
                              color: "red",
                            }}
                          >
                            &nbsp;x
                          </span>
                        </Badge>
                      ))}
                    </div>
                    {formik.touched.zipcode && formik.errors.zipcode && (
                      <span className='error'>{formik.errors.zipcode}</span>
                    )}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='mb-4'>
                    <label for='skills' class='form-label'>
                      Tags
                    </label>
                    <Select
                      options={tagsOptions}
                      value={selectedTags}
                      onChange={handleTagSelect}
                      isMulti={true}
                      name='tags'
                    />
                    {formik.touched.tags && formik.errors.tags && (
                      <div className='invalid-feedback'>
                        {formik.errors.tags}
                      </div>
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
