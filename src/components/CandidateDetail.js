import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  candidateGeneralDetails,
  fetchAbout,
  fetchContactDetails,
  fetchEducation,
  fetchExperience,
  fetchProjects,
  fetchSkills,
} from "../services/ProfilePageService";

export default function CandidateDetail() {
  const [overview, setOverview] = useState("");
  const [skills, setSkills] = useState("");
  const [contacts, setContacts] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [educations, setEducations] = useState("");
  const [experiences, setExperiences] = useState("");
  const [projects, setProjects] = useState("");

  const candidateOverview = async () => {
    try {
      const response = await candidateGeneralDetails();
      console.log(response.data.data);
      setOverview(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const candidateSkills = async () => {
    try {
      const response = await fetchSkills();
      console.log(response.data.data);
      setSkills(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const candidateContacts = async () => {
    try {
      const response = await fetchContactDetails();
      console.log(response.data.data);
      setContacts(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const candidateAboutMe = async () => {
    try {
      const response = await fetchAbout();
      console.log(response.data.data);
      setAboutMe(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const candidateEducation = async () => {
    try {
      const response = await fetchEducation();
      console.log(response.data.data);
      setEducations(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const candidateExperience = async () => {
    try {
      const response = await fetchExperience();
      console.log(response.data.data);
      setExperiences(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const candidateProjects = async () => {
    try {
      const response = await fetchProjects();
      console.log(response.data.data);
      setProjects(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    candidateOverview();
    candidateSkills();
    candidateContacts();
    candidateAboutMe();
    candidateEducation();
    candidateExperience();
    candidateProjects();
  }, []);

  return (
    <div class='page-content'>
      {/* Start home */}
      <section class='page-title-box'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <div class='text-center text-white'>
                <h3 class='mb-4'>Candidate Details</h3>
                <div class='page-next'>
                  <nav
                    class='d-inline-block'
                    aria-label='breadcrumb text-center'
                  >
                    <ol class='breadcrumb justify-content-center'>
                      <li class='breadcrumb-item'>
                        <Link to='/'>Home</Link>
                      </li>
                      <li class='breadcrumb-item'>
                        <a href=''>Pages</a>
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        {" "}
                        Candidate Details{" "}
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
      {/* END SHAPE */}

      {/* START CANDIDATE-DETAILS */}
      <section class='section'>
        <div class='container'>
          <div class='row'>
            {Array.isArray(overview) &&
              overview.map((view) => (
                <div class='col-lg-4'>
                  <div class='card side-bar'>
                    <div class='card-body p-4'>
                      <div class='candidate-profile text-center'>
                        <img
                          src='assets/images/user/img-01.jpg'
                          alt=''
                          class='avatar-lg rounded-circle'
                        />
                        <h6 class='fs-18 mb-0 mt-4'>{view.name}</h6>
                        <ul class='candidate-detail-social-menu list-inline mb-0'>
                          <li class='list-inline-item'>
                            <a href='' class='social-link'>
                              <i class='uil uil-twitter-alt'></i>
                            </a>
                          </li>
                          <li class='list-inline-item'>
                            <a href='' class='social-link'>
                              <i class='uil uil-whatsapp'></i>
                            </a>
                          </li>
                          <li class='list-inline-item'>
                            <a href='' class='social-link'>
                              <i class='uil uil-phone-alt'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*end candidate-profile*/}

                    <div class='candidate-profile-overview  card-body border-top p-4'>
                      <h6 class='fs-17 fw-semibold mb-3'>Profile Overview</h6>

                      <ul class='list-unstyled mb-0'>
                        <li>
                          <div class='d-flex'>
                            <label class='text-dark'>WorkStatus</label>
                            <div>
                              <p class='text-muted mb-0'>
                                {view.work_status
                                  ? view.work_status
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class='d-flex'>
                            <label class='text-dark'>Jobseeker Type</label>
                            <div>
                              <p class='text-muted mb-0'>
                                {view.jobseeker_type
                                  ? view.jobseeker_type
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class='d-flex'>
                            <label class='text-dark'>Country</label>
                            <div>
                              <p class='text-muted mb-0'>
                                {view.country_id && view.country_id.name
                                  ? view.country_id.name
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class='d-flex'>
                            <label class='text-dark'>State</label>
                            <div>
                              <p class='text-muted mb-0'>
                                {view.state_id && view.state_id.name
                                  ? view.state_id.name
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class='d-flex'>
                            <label class='text-dark'>City</label>
                            <div>
                              <p class='text-muted mb-0'>
                                {view.city_id && view.city_id.name
                                  ? view.city_id.name
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class='d-flex'>
                            <label class='text-dark'>Address</label>
                            <div>
                              <p class='text-muted mb-0'>
                                {view.address && view.address
                                  ? view.address
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class='d-flex'>
                            <label class='text-dark'>Pincode</label>
                            <div>
                              <p class='text-muted mb-0'>
                                {view.pincode && view.pincode
                                  ? view.pincode
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <div class='mt-3'>
                        <a href='' class='btn btn-primary btn-hover w-100 mt-2'>
                          <i class='uil uil-import'></i> Download CV
                        </a>
                      </div>
                    </div>
                    {/*candidate-profile-overview*/}

                    <div class='card-body p-4 border-top'>
                      <h6 class='fs-17 fw-semibold mb-3'>
                        Professional Skills
                      </h6>
                      {Array.isArray(skills) &&
                        skills.map((skill) => (
                          <div key={skill.id}>
                            <span class='badge bg-success-subtle text-success fs-13 mt-1'>
                              {skill.name}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/*end card-body*/}
                    <div class='candidate-contact-details card-body p-4 border-top'>
                      <h6 class='fs-17 fw-semibold mb-3'>Contact Details</h6>
                      {Array.isArray(contacts) &&
                        contacts.map((contact) => (
                          <ul class='list-unstyled mb-0'>
                            <li>
                              <div class='d-flex align-items-center mt-4'>
                                <div class='icon bg-primary-subtle text-primary flex-shrink-0'>
                                  <i class='uil uil-envelope-alt'></i>
                                </div>
                                <div class='ms-3'>
                                  <h6 class='fs-14 mb-1'>Email</h6>
                                  <p class='text-muted mb-0'>{contact.email}</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class='d-flex align-items-center mt-4'>
                                <div class='icon bg-primary-subtle text-primary flex-shrink-0'>
                                  <i class='uil uil-map-marker'></i>
                                </div>
                                <div class='ms-3'>
                                  <h6 class='fs-14 mb-1'>Address</h6>
                                  <p class='text-muted mb-0'>
                                    {contact.address}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class='d-flex align-items-center mt-4'>
                                <div class='icon bg-primary-subtle text-primary flex-shrink-0'>
                                  <i class='uil uil-phone'></i>
                                </div>
                                <div class='ms-3'>
                                  <h6 class='fs-14 mb-1'>Phone</h6>
                                  <p class='text-muted mb-0'>{contact.phone}</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class='d-flex align-items-center mt-4'>
                                <div class='icon bg-primary-subtle text-primary flex-shrink-0'>
                                  <i class='uil uil-skype-alt'></i>
                                </div>
                                <div class='ms-3'>
                                  <h6 class='fs-14 mb-1'>LinkedIn</h6>
                                  <p class='text-muted mb-0'>
                                    {contact.linked_in_profile}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        ))}
                    </div>
                    {/*end candidate-overview*/}
                  </div>
                  {/*end card*/}
                </div>
              ))}
            {/*end col*/}

            <div class='col-lg-8'>
              <div class='card candidate-details ms-lg-4 mt-4 mt-lg-0'>
                <div class='card-body p-4 candidate-personal-detail'>
                  <div>
                    <h6 class='fs-17 fw-semibold mb-3'>About Me</h6>
                    {Array.isArray(aboutMe) &&
                      aboutMe.map((about) => (
                        <p class='text-muted mb-2'>
                          {about.about_me ? about.about_me : "Not Disclosed"}
                        </p>
                      ))}
                  </div>
                  <div class='candidate-education-details mt-4 pt-3'>
                    <h6 class='fs-17 fw-bold mb-0'>Education</h6>
                    {Array.isArray(educations) &&
                      educations.map((education) => (
                        <div
                          key={education.id}
                          class='candidate-education-content mt-4 d-flex'
                        >
                          <div class='circle flex-shrink-0 bg-primary-subtle text-primary'>
                            {" "}
                            B{" "}
                          </div>
                          <div class='ms-4'>
                            <h6 class='fs-16 mb-1'>
                              {education.degree && education.degree.name
                                ? education.degree.name
                                : "Not disclosed"}{" "}
                              -{" "}
                              {education.course && education.course.name
                                ? education.course.name
                                : "Not disclosed"}
                            </h6>
                            <p class='mb-2 text-muted'>
                              {education.university && education.university.name
                                ? education.university.name
                                : "Not disclosed"}{" "}
                              - (
                              {education.edu_year_from
                                ? education.edu_year_from
                                : "Not disclosed"}{" "}
                              to{" "}
                              {education.edu_year_to
                                ? education.edu_year_to
                                : "Not disclosed"}
                              )
                            </p>
                            <p class='text-muted'>
                              {education.description
                                ? education.description
                                : "Not disclosed"}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/*end candidate-education-details*/}
                  <div class='candidate-education-details mt-4 pt-3'>
                    <h6 class='fs-17 fw-bold mb-0'>Experience</h6>
                    {Array.isArray(experiences) &&
                      experiences.map((experience) => (
                        <div
                          key={experience.id}
                          class='candidate-education-content mt-4 d-flex'
                        >
                          <div class='circle flex-shrink-0 bg-primary-subtle text-primary'>
                            {" "}
                            W{" "}
                          </div>
                          <div class='ms-4'>
                            <h6 class='fs-16 mb-1'>
                              {experience.company_name
                                ? experience.company_name
                                : "Not Disclosed"}
                            </h6>
                            <p class='mb-2 text-muted'>
                              {experience.exp_designation &&
                              experience.exp_designation.name
                                ? experience.exp_designation.name
                                : "Not Disclosed"}{" "}
                              - (
                              {experience.year_from
                                ? experience.year_from
                                : "Not Disclosed"}{" "}
                              -{" "}
                              {experience.year_to
                                ? experience.year_to
                                : "Not Disclosed"}
                              )
                            </p>
                            <p class='text-muted'>
                              {experience.exp_description
                                ? experience.exp_description
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div class='candidate-portfolio mt-4 pt-3'>
                    <h6 class='fs-17 fw-bold mb-0'>Projects</h6>
                    {Array.isArray(projects) &&
                      projects.map((project) => (
                        <div
                          key={project.id}
                          class='candidate-education-content mt-4 d-flex'
                        >
                          <div class='circle flex-shrink-0 bg-primary-subtle text-primary'>
                            {" "}
                            W{" "}
                          </div>
                          <div class='ms-4'>
                            <h6 class='fs-16 mb-1'>
                              {project.project_title
                                ? project.project_title
                                : "Not Disclosed"}
                            </h6>
                            <p class='text-muted'>
                              {project.project_description
                                ? project.project_description
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/*end candidate-portfolio*/}
                  <div class='mt-4 pt-3'>
                    <div class='d-sm-flex align-items-top'>
                      <div class='flex-shrink-0'>
                        <img
                          class='rounded-circle avatar-md img-thumbnail'
                          src='assets/images/user/img-04.jpg'
                          alt='img'
                        />
                      </div>
                      <div class='flex-grow-1 ms-sm-3'>
                        <div>
                          <p class='text-muted float-end fs-14 mb-2'>
                            Jun 23, 2023
                          </p>
                          <h6 class='mt-sm-0 mt-3 mb-1'>Michelle Durant</h6>
                          <div class='text-warning review-rating mb-2'>
                            <i class='mdi mdi-star'></i>
                            <i class='mdi mdi-star'></i>
                            <i class='mdi mdi-star'></i>
                            <i class='mdi mdi-star'></i>
                            <i class='mdi mdi-star-half-full'></i>
                          </div>
                          <p class='text-muted fst-italic'>
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class='d-sm-flex align-items-top mt-4'>
                      <div class='flex-shrink-0'>
                        <img
                          class='rounded-circle avatar-md img-thumbnail'
                          src='assets/images/user/img-02.jpg'
                          alt='img'
                        />
                      </div>
                      <div class='flex-grow-1 ms-sm-3'>
                        <div>
                          <p class='text-muted float-end fs-14 mb-2'>
                            Jun 25, 2023
                          </p>
                          <h6 class='mt-sm-0 mt-3 mb-1'>Jeffrey Montgomery</h6>
                          <div class='text-warning review-rating mb-2'>
                            <i class='mdi mdi-star'></i>
                            <i class='mdi mdi-star'></i>
                            <i class='mdi mdi-star'></i>
                            <i class='mdi mdi-star-half-full'></i>
                            <i class='mdi mdi-star-outline'></i>
                          </div>
                          <p class='text-muted fst-italic'>
                            " There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour "
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form action='#' class='mt-4 pt-3'>
                    <h6 class='fs-17 fw-semibold mb-2'>Add a review</h6>
                    <p class='text-muted mb-3'>Your Rating for this listing</p>
                    <div class='row'>
                      <div class='col-lg-12'>
                        <div class='mb-3'>
                          <label for='inputname' class='form-label'>
                            Your Name
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='inputname'
                            placeholder='Enter your name'
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div class='col-lg-6'>
                        <div class='mb-3'>
                          <label for='inputemail' class='form-label'>
                            Email
                          </label>
                          <input
                            type='email'
                            class='form-control'
                            id='inputemail'
                            placeholder='Enter your email'
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div class='col-lg-6'>
                        <div class='mb-3'>
                          <label for='inputsubject' class='form-label'>
                            Subject
                          </label>
                          <input
                            type='text'
                            class='form-control'
                            id='inputsubject'
                            placeholder='Subject'
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div class='col-lg-12'>
                        <div class='mb-3'>
                          <label for='inputcoment' class='form-label'>
                            Review
                          </label>
                          <textarea
                            class='form-control'
                            id='inputcoment'
                            rows='3'
                            placeholder='Add your review'
                          ></textarea>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div class='text-end'>
                      <button type='submit' class='btn btn-primary btn-hover'>
                        Submit Review <i class='uil uil-angle-right-b'></i>
                      </button>
                    </div>
                  </form>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/* END CANDIDATE-DETAILS */}
    </div>
  );
}
