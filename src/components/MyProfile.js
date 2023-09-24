import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProfiles, updateUserProfile } from "../services/JobService";
import { useFormik } from "formik";
import { Badge } from "react-bootstrap";

export default function MyProfile() {
  const { id } = useParams();

  // const [myProfileOverview, setMyProfileOverview] = useState("");
  const [profile, setProfile] = useState("");
  const [overView, setOverView] = useState("");
  const [contact, setContact] = useState("");
  const [skills, setSkills] = useState("");

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const response = await fetchProfiles(id);
        console.log(response);
        console.log(response.data.data.profile);
        console.log(response.data.data.over_view);
        console.log(response.data.data.contact);
        console.log(response.data.data.skills);
        setProfile(response.data.data.profile);
        setOverView(response.data.data.over_view);
        setContact(response.data.data.contact);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchMyProfile();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      lastName: "",
      password: "",
      work_status: "",
      jobseeker_type: "",
      country_id: "",
      state_id: "",
      city_id: "",
      address: "",
      avatar: "",
      resume: "",
      passport: "",
      pan_number: "",
      pan_front: "",
      pan_back: "",
      aadhaar_front: "",
      aadhaar_back: "",
      aadhaar_number: "",

      resume_title: "",
      work_experience: "",
      salary_range: "",
      current_location: "",
      preferred_location: "",
      designation_id: "",
      course_ug: "",
      course_pg: "",
      post_course_pg: "",
      dob: "",
      age: "",
      marital_status: "",

      college_id: "",

      year_from: "",
      year_to: "",
      exp_designation: "",
      exp_description: "",
      project_title: "",

      project_description: "",

      skills: [],
    },
    onSubmit: (values) => {
      // updateUserProfile(values);
      handleUpdateProfile(values);
      console.log(values);
    },
  });

  const [updateSkills, setUpdateSkills] = useState([]);
  const [skillsInput, setSkillsInput] = useState("");

  const handleInputChange = (e) => {
    setSkillsInput(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === " " && skillsInput.trim() !== "") {
      setUpdateSkills([...updateSkills, skillsInput.trim()]);
      setSkillsInput("");
    }
  };

  const handleSkillsRemove = (skillsToRemove) => {
    const updateSkills = skills.filter((skill) => skill !== skillsToRemove);
    setSkills(updateSkills);
  };

  const handleUpdateProfile = (values) => {
    const payload = {
      name: values.first_name,
      lastName: values.lastName,
      password: values.password,
      work_status: values.work_status,
      jobseeker_type: values.jobseeker_type,
      country_id: values.country_id,
      state_id: values.state_id,
      city_id: values.city_id,
      address: values.address,
      avatar: values.avatar,
      resume: values.resume,
      passport: values.passport,
      pan_number: values.pan_number,
      pan_front: values.pan_front,
      pan_back: values.pan_back,
      aadhaar_front: values.aadhaar_front,
      aadhaar_back: values.aadhaar_back,
      aadhaar_number: values.aadhaar_number,

      resume_title: values.resume_title,
      work_experience: values.work_experience,
      salary_range: values.salary_range,
      current_location: values.current_location,
      preferred_location: values.preferred_location,
      designation_id: values.designation_id,
      course_ug: values.course_ug,
      course_pg: values.course_pg,
      post_course_pg: values.post_course_pg,
      dob: values.dob,
      age: values.age,
      marital_status: values.marital_status,

      college_id: values.college_id,

      year_form: values.year_from,
      year_to: values.year_to,
      exp_designation: values.exp_designation,
      exp_description: values.exp_description,
      project_title: values.project_title,

      project_description: values.project_description,

      skills: updateSkills,
    };
    console.log(payload);

    // try {
    //   const response = updateUserProfile(payload);
    //   console.log(response);
    // } catch (error) {
    //   console.log("Error: ", error);
    // }
  };

  return (
    <div className='page-content'>
      {/* Start home */}
      <section className='page-title-box'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='text-center text-white'>
                <h3 className='mb-4'>My Profile</h3>
                <div className='page-next'>
                  <nav
                    className='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol className='breadcrumb justify-content-center'>
                      <li className='breadcrumb-item'>
                        <a href='index.php'>Home</a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href=''>My Profile</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        {" "}
                        My Profile{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/* end home */}

      {/* START SHAPE */}
      <div className='position-relative' style={{ zIndex: 1 }}>
        <div className='shape'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 250'>
            <path
              fill=''
              fill-opacity='1'
              d='M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            ></path>
          </svg>
        </div>
      </div>
      {/* END SHAPE */}

      {/* START PROFILE */}
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='card profile-sidebar me-lg-4'>
                <div className='card-body p-4'>
                  {Array.isArray(profile) &&
                    profile.map((profile) => (
                      <div
                        key={profile.id}
                        className='text-center pb-4 border-bottom'
                      >
                        <img
                          src={profile.avatar}
                          alt=''
                          className='avatar-lg img-thumbnail rounded-circle mb-4'
                        />
                        <h5 className='mb-0'>{profile.name}</h5>
                        <p className='text-muted'>{profile.designation}</p>
                        <ul className='list-inline d-flex justify-content-center align-items-center '>
                          <li className='list-inline-item text-warning fs-19'>
                            <i className='mdi mdi-star'></i>
                            <i className='mdi mdi-star'></i>
                            <i className='mdi mdi-star'></i>
                            <i className='mdi mdi-star'></i>
                            <i className='mdi mdi-star-half-full'></i>
                          </li>
                        </ul>
                        <ul className='candidate-detail-social-menu list-inline mb-0'>
                          <li className='list-inline-item'>
                            <a
                              href=''
                              className='social-link rounded-3 btn-soft-primary'
                            >
                              <i className='uil uil-facebook-f'></i>
                            </a>
                          </li>
                          <li className='list-inline-item'>
                            <a
                              href=''
                              className='social-link rounded-3 btn-soft-info'
                            >
                              <i className='uil uil-twitter-alt'></i>
                            </a>
                          </li>
                          <li className='list-inline-item'>
                            <a
                              href=''
                              className='social-link rounded-3 btn-soft-success'
                            >
                              <i className='uil uil-whatsapp'></i>
                            </a>
                          </li>
                          <li className='list-inline-item'>
                            <a
                              href=''
                              className='social-link rounded-3 btn-soft-danger'
                            >
                              <i className='uil uil-phone-alt'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    ))}
                  {/*end profile*/}
                  {/* <div className='mt-4 border-bottom pb-4'>
                    <h5 className='fs-17 fw-bold mb-3'>Overview</h5>
                    <ul className='profile-document list-unstyled mb-0'>
                      <li>
                        <div className='profile-document-list d-flex align-items-center mt-4 '>
                          <div className='icon flex-shrink-0'>
                            <i className='uil uil-file'></i>
                          </div>
                          <div className='ms-3'>
                            <h6 className='fs-16 mb-0'>Resume.pdf</h6>
                            <p className='text-muted mb-0'>1.25 MB</p>
                          </div>
                          <div className='ms-auto'>
                            <a
                              href='assets/images/dark-logo.png'
                              download
                              className='fs-20 text-muted'
                            >
                              <i className='uil uil-import'></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='profile-document-list d-flex align-items-center mt-4 '>
                          <div className='icon flex-shrink-0'>
                            <i className='uil uil-file'></i>
                          </div>
                          <div className='ms-3'>
                            <h6 className='fs-16 mb-0'>Cover-letter.pdf</h6>
                            <p className='text-muted mb-0'>1.25 MB</p>
                          </div>
                          <div className='ms-auto'>
                            <a
                              href='assets/images/dark-logo.png'
                              download='dark-logo'
                              className='fs-20 text-muted'
                            >
                              <i className='uil uil-import'></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                  {/*end document*/}
                  {/* Contact details */}
                  {Array.isArray(contact) &&
                    contact.map((contacts) => (
                      <div className='mt-4'>
                        <h5 className='fs-17 fw-bold mb-3'>Contact</h5>
                        <div key={contacts.id} className='profile-contact'>
                          <ul className='list-unstyled mb-0'>
                            <li>
                              <div className='d-flex'>
                                <label>Email</label>
                                <div>
                                  <p className='text-muted text-break mb-0'>
                                    {contacts.email}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='d-flex'>
                                <label>Mobile Number</label>
                                <div>
                                  <p className='text-muted mb-0'>
                                    {contacts.phone}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='d-flex'>
                                <label>Address</label>
                                <div>
                                  <p className='text-muted mb-0'>
                                    {contacts.address}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  {/* Contact details end */}

                  {/* Overview */}
                  {Array.isArray(overView) &&
                    overView.map((overview) => (
                      <div className='mt-4'>
                        <h5 className='fs-17 fw-bold mb-3'>Overview</h5>
                        <div key={overview.id} className='profile-contact'>
                          <ul className='list-unstyled mb-0'>
                            <li>
                              <div className='d-flex'>
                                <label>Current Location</label>
                                <div>
                                  <p className='text-muted text-break mb-0'>
                                    {overview.current_location}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='d-flex'>
                                <label>Designation</label>
                                <div>
                                  <p className='text-muted mb-0'>
                                    {overview.designation}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='d-flex'>
                                <label>Salary Range</label>
                                <div>
                                  <p className='text-muted mb-0'>
                                    {overview.salary_range}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='d-flex'>
                                <label>Work Experience</label>
                                <div>
                                  <p className='text-muted mb-0'>
                                    {overview.work_experience}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className='profile-document-list d-flex align-items-center mt-4 '>
                                <div className='icon flex-shrink-0'>
                                  <i className='uil uil-file'></i>
                                </div>
                                <div className='ms-3'>
                                  <Link
                                    to={overview.resume}
                                    className='fs-16 mb-0'
                                  >
                                    Resume.pdf
                                  </Link>
                                  {/* <p className='text-muted mb-0'>1.25 MB</p> */}
                                </div>
                                <div className='ms-auto'>
                                  <a
                                    href='assets/images/dark-logo.png'
                                    download
                                    className='fs-20 text-muted'
                                  >
                                    <i className='uil uil-import'></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  {/*end overview*/}
                </div>
                {/*end card-body*/}
              </div>
              {/*end profile-sidebar*/}
            </div>
            {/*end col*/}
            <div className='col-lg-8'>
              <div className='card profile-content-page mt-4 mt-lg-0'>
                <ul
                  className='profile-content-nav nav nav-pills border-bottom mb-4'
                  id='pills-tab'
                  role='tablist'
                >
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      id='overview-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#overview'
                      type='button'
                      role='tab'
                      aria-controls='overview'
                      aria-selected='true'
                    >
                      Overview
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='settings-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#settings'
                      type='button'
                      role='tab'
                      aria-controls='settings'
                      aria-selected='false'
                    >
                      Settings
                    </button>
                  </li>
                </ul>
                {/*end profile-content-nav*/}
                <div className='card-body p-4'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div
                      className='tab-pane fade show active'
                      id='overview'
                      role='tabpanel'
                      aria-labelledby='overview-tab'
                    >
                      <div>
                        <h5 className='fs-18 fw-bold'>About</h5>
                        <p className='text-muted mt-4'>
                          Developer with over 5 years' experience working in
                          both the public and private sectors. Diplomatic,
                          personable, and adept at managing sensitive
                          situations. Highly organized, self-motivated, and
                          proficient with computers. Looking to boost students’
                          satisfactions scores for{" "}
                          <b>International University</b>. Bachelor's degree in
                          communications.
                        </p>
                        <p className='text-muted'>
                          It describes the candidate's relevant experience,
                          skills, and achievements. The purpose of this career
                          summary is to explain your qualifications for the job
                          in 3-5 sentences and convince the manager to read the
                          whole resume document.
                        </p>
                      </div>
                      <div className='candidate-education-details mt-4'>
                        <h6 className='fs-18 fw-bold mb-0'>Education</h6>
                        <div className='candidate-education-content mt-4 d-flex'>
                          <div className='circle flex-shrink-0 primary-bg-subtle'>
                            B
                          </div>
                          <div className='ms-4'>
                            <h6 className='fs-16 mb-1'>
                              BCA - Bachelor of Computer Applications
                            </h6>
                            <p className='mb-2 text-muted'>
                              International University - (2004 - 2010)
                            </p>
                            <p className='text-muted'>
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </div>
                        </div>
                        <div className='candidate-education-content mt-3 d-flex'>
                          <div className='circle flex-shrink-0 primary-bg-subtle'>
                            M
                          </div>
                          <div className='ms-4'>
                            <h6 className='fs-16 mb-1'>
                              MCA - Master of Computer Application
                            </h6>
                            <p className='mb-2 text-muted'>
                              International University - (2010 - 2012)
                            </p>
                            <p className='text-muted'>
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </div>
                        </div>
                        <div className='candidate-education-content mt-3 d-flex'>
                          <div className='circle flex-shrink-0 primary-bg-subtle'>
                            D
                          </div>
                          <div className='ms-4'>
                            <h6 className='fs-16 mb-1'>
                              Design Communication Visual
                            </h6>
                            <p className='text-muted mb-2'>
                              International University - (2012-2015)
                            </p>
                            <p className='text-muted'>
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='candidate-education-details mt-4'>
                        <h6 className='fs-18 fw-bold mb-0'>Experiences</h6>
                        <div className='candidate-education-content mt-4 d-flex'>
                          <div className='circle flex-shrink-0 primary-bg-subtle'>
                            {" "}
                            W{" "}
                          </div>
                          <div className='ms-4'>
                            <h6 className='fs-16 mb-1'>
                              Web Design & Development Team Leader
                            </h6>
                            <p className='mb-2 text-muted'>
                              Creative Agency - (2013 - 2016)
                            </p>
                            <p className='text-muted'>
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </div>
                        </div>
                        <div className='candidate-education-content mt-4 d-flex'>
                          <div className='circle flex-shrink-0 primary-bg-subtle'>
                            {" "}
                            P{" "}
                          </div>
                          <div className='ms-4'>
                            <h6 className='fs-16 mb-1'>Project Manager</h6>
                            <p className='mb-2 text-muted'>
                              Nuvo Hire Technology Pvt.Ltd - (Pressent)
                            </p>
                            <p className='text-muted mb-0'>
                              There are many variations of passages of
                              available, but the majority alteration in some
                              form. As a highly skilled and successfull product
                              development and design specialist with more than 4
                              Years of My experience.
                            </p>
                          </div>
                        </div>
                      </div>
                      <h5 className='fs-18 fw-bold'>Skills</h5>
                      {Array.isArray(skills) &&
                        skills.map((skill) => (
                          <div key={skill.id} className='mt-4'>
                            <span className='badge fs-13 bg-soft-blue mt-2'>
                              Cloud Management
                            </span>
                          </div>
                        ))}
                    </div>
                    <div
                      className='tab-pane fade'
                      id='settings'
                      role='tabpanel'
                      aria-labelledby='settings-tab'
                    >
                      <form onSubmit={formik.handleSubmit}>
                        <h3 class='fs-17 fw-semibold mb-3'>
                          Personal Information
                        </h3>
                        <div class='row'>
                          <div class='col-lg-6 mb-3'>
                            <label for='first_name' class='form-label'>
                              First Name
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='first_name'
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div class='col-lg-6 mb-3'>
                            <label for='lastName' class='form-label'>
                              Last Name
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='lastName'
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div class='col-lg-6 mb-3'>
                            <label for='password' class='form-label'>
                              Password
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='password'
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div class='col-lg-6 mb-3'>
                            <label for='work_status' class='form-label'>
                              WorkStatus
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='work_status'
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div class='col-lg-6 mb-3'>
                            <label for='jobseeker_type' class='form-label'>
                              JobseekerType
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='jobseeker_type'
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>

                        <h3 class='fs-17 fw-semibold mb-3'>
                          Location Information
                        </h3>
                        <div class='row'>
                          <div class='col-lg-6 mb-3'>
                            <label for='country_id' class='form-label'>
                              Country
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='country_id'
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div class='col-lg-6 mb-3'>
                            <label for='state_id' class='form-label'>
                              State
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='state_id'
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div class='col-lg-6 mb-3'>
                            <label for='city_id' class='form-label'>
                              City
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='city_id'
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div class='col-lg-6 mb-3'>
                            <label for='address' class='form-label'>
                              Address
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='address'
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>

                        <h3 class='fs-17 fw-semibold mb-3'>Uploads</h3>
                        <div class='mb-3'>
                          <label for='avatar' class='form-label'>
                            Avatar
                          </label>
                          <input
                            class='form-control'
                            type='file'
                            id='avatar'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='resume' class='form-label'>
                            Resume
                          </label>
                          <input
                            class='form-control'
                            type='file'
                            id='resume'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='passport' class='form-label'>
                            Passport
                          </label>
                          <input
                            class='form-control'
                            type='file'
                            id='passport'
                            onChange={formik.handleChange}
                          />
                        </div>

                        <h3 class='fs-17 fw-semibold mb-3'>Identification</h3>
                        <div class='row'>
                          <div class='col-lg-6 mb-3'>
                            <label for='pan_number' class='form-label'>
                              PAN Number
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='pan_number'
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div class='col-lg-6 mb-3'>
                            <label for='aadhaar_number' class='form-label'>
                              Aadhaar Number
                            </label>
                            <input
                              type='text'
                              class='form-control'
                              id='aadhaar_number'
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                        <div class='mb-3'>
                          <label for='pan_front' class='form-label'>
                            PAN Front
                          </label>
                          <input
                            class='form-control'
                            type='file'
                            id='pan_front'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='pan_back' class='form-label'>
                            PAN Back
                          </label>
                          <input
                            class='form-control'
                            type='file'
                            id='pan_back'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='aadhaar_front' class='form-label'>
                            Aadhaar Front
                          </label>
                          <input
                            class='form-control'
                            type='file'
                            id='aadhaar_front'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='aadhaar_back' class='form-label'>
                            Aadhaar Back
                          </label>
                          <input
                            class='form-control'
                            type='file'
                            id='aadhaar_back'
                            onChange={formik.handleChange}
                          />
                        </div>

                        <h3 class='fs-17 fw-semibold mb-3'>
                          Resume Information
                        </h3>
                        <div class='mb-3'>
                          <label for='resume_title' class='form-label'>
                            Resume Title
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='resume_title'
                            name='resume_title'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='work_experience' class='form-label'>
                            Work Experience
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='work_experience'
                            name='work_experience'
                            onChange={formik.handleChange}
                          />
                        </div>

                        <div class='mb-3'>
                          <label for='salary_range' class='form-label'>
                            Salary Range
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='salary_range'
                            name='salary_range'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='current_location' class='form-label'>
                            Current Location
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='current_location'
                            name='current_location'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='preferred_location' class='form-label'>
                            Preferred Location
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='preferred_location'
                            name='preferred_location'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='designation_id' class='form-label'>
                            Designation ID
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='designation_id'
                            name='designation_id'
                            onChange={formik.handleChange}
                          />
                        </div>

                        <h3 class='fs-17 fw-semibold mb-3'>
                          Education Information
                        </h3>
                        <div class='mb-3'>
                          <label for='course_ug' class='form-label'>
                            Course (UG)
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='course_ug'
                            name='course_ug'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='course_pg' class='form-label'>
                            Course (PG)
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            name='course_pg'
                            id='course_pg'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='post_course_pg' class='form-label'>
                            Post Course (PG)
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='post_course_pg'
                            name='post_course_pg'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='dob' class='form-label'>
                            Date of Birth
                          </label>
                          <input
                            type='date'
                            class='form-control'
                            id='dob'
                            name='dob'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='age' class='form-label'>
                            Age
                          </label>
                          <input
                            type='number'
                            class='form-control'
                            id='age'
                            name='age'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='marital_status' class='form-label'>
                            Marital Status
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='marital_status'
                            name='marital_status'
                            onChange={formik.handleChange}
                          />
                        </div>

                        <h3 class='fs-17 fw-semibold mb-3'>
                          Experience Information
                        </h3>
                        <div class='mb-3'>
                          <label for='college_id' class='form-label'>
                            College
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='college_id'
                            name='college_id'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='year_from' class='form-label'>
                            Year From
                          </label>
                          <input
                            type='date'
                            class='form-control'
                            id='year_from'
                            name='year_from'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='year_to' class='form-label'>
                            Year To
                          </label>
                          <input
                            type='date'
                            class='form-control'
                            id='year_to'
                            name='year_to'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='exp_designation' class='form-label'>
                            Experience Designation
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='exp_designation'
                            name='exp_designation'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='exp_description' class='form-label'>
                            Experience Description
                          </label>
                          <textarea
                            class='form-control'
                            id='exp_description'
                            rows='5'
                            onChange={formik.handleChange}
                          ></textarea>
                        </div>

                        <h3 class='fs-17 fw-semibold mb-3'>
                          Project Information
                        </h3>
                        <div class='mb-3'>
                          <label for='project_title' class='form-label'>
                            Project Title
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='project_title'
                            name='project_title'
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div class='mb-3'>
                          <label for='project_description' class='form-label'>
                            Project Description
                          </label>
                          <textarea
                            class='form-control'
                            id='project_description'
                            name='project_description'
                            rows='5'
                            onChange={formik.handleChange}
                          ></textarea>
                        </div>

                        <h3 class='fs-17 fw-semibold mb-3'>Skills</h3>
                        <div class='mb-3'>
                          <label for='skills' class='form-label'>
                            Skills
                          </label>
                          <div class='col-lg-6'>
                            <input
                              type='text'
                              class='form-control'
                              id='joblocation'
                              name='joblocation'
                              placeholder='Enter Locations...'
                              value={skillsInput}
                              onChange={handleInputChange}
                              onKeyPress={handleInputKeyPress}
                            />
                            <div>
                              {updateSkills.map((updateSkill) => (
                                <Badge
                                  key={updateSkill}
                                  variant='light'
                                  className='tag-badge mt-2'
                                >
                                  {updateSkill}
                                  <span
                                    className='badge-remove'
                                    onClick={() =>
                                      handleSkillsRemove(updateSkill)
                                    }
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
                          </div>
                        </div>

                        <div class='mt-4 text-end'>
                          <button type='submit' class='btn btn-primary'>
                            Update
                          </button>
                        </div>
                      </form>
                      {/*end form*/}
                    </div>
                    {/*end tab-pane*/}
                  </div>
                  {/*end tab-content*/}
                </div>
                {/*end card-body*/}
              </div>
              {/*end profile-content-page*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/* END PROFILE */}
    </div>
  );
}
