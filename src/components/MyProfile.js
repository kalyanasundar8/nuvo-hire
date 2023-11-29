import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProfiles, updateUserProfile } from "../services/JobService";
import { useFormik } from "formik";

import UploaderServices from "../services/UploaderServices";
import useFetch from "./useFetch";
import Select from "react-select";
import { FaUniversity } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Alert } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import {
  FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaFlag,
  FaMap,
  FaMapPin,
} from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import {
  candidateGeneralDetails,
  candidateUpdateGeneralDetails,
  createAbout,
  createEducation,
  createExperience,
  createProject,
  createResume,
  fetchAbout,
  fetchAvatar,
  fetchContactDetails,
  fetchEducation,
  fetchExperience,
  fetchProjects,
  fetchResumeDetails,
  fetchSkills,
  updateEducation,
  updateExperience,
  updateProject,
  updateSkills,
} from "../services/ProfilePageService";
import ApiService from "../services/ApiService";
import AvatarUploader from "../services/AvatarUploader";

export default function MyProfile() {
  const { id } = useParams();

  // Models
  const [showForm, setShowForm] = useState(false);
  const [skillsModel, setSkillsModel] = useState(false);
  const [resumeDetails, setResumeDetails] = useState(false);
  const [educationForm, setEducationForm] = useState(false);
  const [editEducationForm, setEditEducationForm] = useState(false);
  const [experienceForm, setExperienceForm] = useState(false);
  const [editExperienceForm, setEditExperienceForm] = useState(false);
  const [projectForm, setProjectForm] = useState(false);
  const [editProjectForm, setEditProjectForm] = useState(false);
  const [aboutForm, setAboutForm] = useState(false);
  const [linkedInForm, setLinkedInForm] = useState(false);

  // LinkedInForm
  const handleLinkedInForm = () => {
    setLinkedInForm(true);
  };

  const handleLinkeInFormClose = () => {
    setLinkedInForm(false);
  };

  // About details
  const handleAboutForm = () => {
    setAboutForm(true);
  };

  const handleCloseAboutForm = () => {
    setAboutForm(false);
  };
  // About details end

  // Personal details model controls
  const handleGeneralClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  // Personal details model controls end

  // Skills model controls
  const handleSkillsForm = () => {
    setSkillsModel(true);
  };

  const handleSkillsFormClose = () => {
    setSkillsModel(false);
  };
  // Skill model controls end

  // Resume model controls
  const handleResumeForm = () => {
    setResumeDetails(true);
  };

  const handleResumeFormClose = () => {
    setResumeDetails(false);
  };
  // Resume model controls end

  // Education model controls
  const handleAddEducation = () => {
    setEducationForm(true);
  };

  const [selectedEducationId, setSelectedEducationId] = useState(null);
  const handleEditEducationForm = (educationId) => {
    setEditEducationForm(true);
    setSelectedEducationId(educationId);
  };

  const handleEditEducationFormClose = () => {
    setEditEducationForm(false);
  };

  const handleEducationFormClose = () => {
    setEducationForm(false);
  };
  // Education controls End

  // Experience model controls
  const handleExperienceForm = () => {
    setExperienceForm(true);
  };

  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const handleEditExperienceForm = (experienceId) => {
    setEditExperienceForm(true);
    setSelectedExperienceId(experienceId);
  };

  const handleEditExperienceFormClose = () => {
    setEditExperienceForm(false);
  };

  const handleExperienceFormClose = () => {
    setExperienceForm(false);
  };
  // Experience model controls end

  // Projects modal controls

  const handleProjectForm = () => {
    setProjectForm(true);
  };

  const handleProjectFormClose = () => {
    setProjectForm(false);
  };

  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const handleEditProjectForm = (projectId) => {
    setEditProjectForm(true);
    setSelectedProjectId(projectId);
  };

  const handleEditProjectFormClose = () => {
    setEditProjectForm(false);
  };
  // Projects modal controls end
  // Modal end

  // Dowload resume
  const downloadResume = async () => {
    try {
      const response = await ApiService(
        "candidate-resume-download",
        "GET",
        null,
        true
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //? Dropdown data
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

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

  const salaryData = useFetch("salaries", "GET", null, false);
  const salaries = salaryData.data;

  const designationData = useFetch("designations", "GET", null, false);
  const designations = designationData.data;

  const maritalData = useFetch("marital-statuses", "GET", null, false);
  const maritalStatus = maritalData.data;

  const degreeData = useFetch("degrees", "GET", null, false);
  const degrees = degreeData.data;

  const courseData = useFetch("courses", "GET", null, false);
  const courses = courseData.data;

  const universityData = useFetch("universities", "GET", null, false);
  const universities = universityData.data;

  const collegeData = useFetch("colleges", "GET", null, false);
  const colleges = collegeData.data;

  const experienceDesignationData = useFetch(
    "designations",
    "GET",
    null,
    false
  );
  const experienceDesignations = experienceDesignationData.data;

  const [formSkills, setFormSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

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
    setFormSkills(filteredOptions);
  };

  const skillsValue = selectedSkill.map((option) => option.value);

  //? Dropdown data end

  const [aboutMe, setAboutMe] = useState(null);
  const [general, setGeneral] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [resume, setResume] = useState([]);

  console.log(skills);
  // About
  const aboutFormik = useFormik({
    initialValues: {
      about: "",
    },
    onSubmit: (values) => {
      console.log(values);
      updateAbout(values);
    },
  });

  const fetchingMyAbout = async () => {
    try {
      const response = await fetchAbout();
      console.log(response.data.data);
      setAboutMe(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const updateAbout = async () => {
    const payload = {
      about_me: aboutFormik.values.about,
    };

    try {
      const response = await createAbout(payload);
      console.log(response);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // About end

  // Fetch all details
  const fetchMyProfile = async () => {
    try {
      const response = await fetchProfiles(id);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Fetch candidateGeneralDetails
  const generalDetails = async () => {
    try {
      const response = await candidateGeneralDetails();
      console.log(response.data.data);
      setGeneral(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // General details form
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  let firstname = "";
  let lastname = "";
  let Country = "";
  let State = "";
  let City = "";
  let Address = "";
  let status = "";
  let type = "";
  let pincode = "";

  if (Array.isArray(general)) {
    const generalDetails = general[0];
    console.log(generalDetails);
    firstname = generalDetails.name || "";
    lastname = generalDetails.last_name || "";
    Country = generalDetails.country || "";
    State = generalDetails.state || "";
    City = generalDetails.city || "";
    Address = generalDetails.address || "";
    status = generalDetails.work_status || "";
    type = generalDetails.jobseeker_type || "";
    pincode = generalDetails.pincode || "";
    console.log(
      firstname,
      lastname,
      Country,
      State,
      City,
      Address,
      status,
      type,
      pincode
    );
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: firstname,
      lastName: lastname,
      country: Country,
      state: State,
      city: City,
      address: Address,
      work_status: status,
      jobseeker_type: type,
      pincode: pincode,
    },
    onSubmit: (values) => {
      console.log(values);
      updateGeneralDetails(values);
    },
  });

  const updateGeneralDetails = (values) => {
    const payload = {
      name: values.first_name,
      last_name: values.lastName,
      country_id: values.country,
      state_id: values.state,
      city_id: values.city,
      address: values.address,
      work_status: values.work_status,
      jobseeker_type: values.jobseeker_type,
      pincode: values.pincode,
    };
    try {
      const response = candidateUpdateGeneralDetails(id, payload);
      console.log(response);

      if (response?.data?.status === true) {
        setLoading(true);

        setAlertMessage(<Alert variant="success">Updated successfully</Alert>);

        setTimeout(() => {
          setAlertMessage("");
        }, 3000);

        setLoading(false);
      }

      if (response?.data?.status === false) {
        setLoading(false);

        setAlertMessage(
          <Alert variant="danger">Please fill all the fields</Alert>
        );

        setTimeout(() => {
          setAlertMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Skills

  const skillsFormik = useFormik({
    initialValues: {
      skills: [],
    },
    onSubmit: (values) => {
      console.log(values);
      updatedSkills(values);
    },
  });

  // Fetching skills
  const fetchingSkills = async () => {
    try {
      const response = await fetchSkills();
      console.log(response.data.data);
      setSkills(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Update skills
  const updatedSkills = async () => {
    const payload = {
      skills: skillsValue,
    };
    try {
      setLoading(true);
      const response = await updateSkills(payload);
      console.log(response);
      setAlertMessage(<Alert variant="success">Updated successfuly</Alert>);

      setTimeout(() => {
        setAlertMessage("");
      }, 3000);

      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Resume details fetching
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [filePath, setFilePath] = "";

  const handleFileChange = async (event) => {
    setLoading(true);
    event.preventDefault();

    const selectedFile = event.target.files[0] || null;

    if (!selectedFile) {
      setLoading(false);
      return;
    }

    await uploadFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles.length > 0) {
      const selectedFile = droppedFiles[0];
      await uploadFile(selectedFile);
    }
  };

  const uploadFile = async (selectedFile) => {
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("type", "resume");

    try {
      const response = await ApiService("resume-upload", "POST", data, true);
      console.log("File uploaded successfully", response.data.path);
      setFiles(selectedFile);
      setFilePath(response.data.path); // Callback to handle the uploaded file path
    } catch (error) {
      console.error("Error uploading file: ", error);
    } finally {
      setLoading(false);
    }
  };

  const buttonStyle = {
    width: "100%",
    height: "90px",
    textAlign: "center",
    cursor: loading ? "not-allowed" : "pointer",
    border: "1px dotted #999",
    background: "none",
    color: "#999",
    display: "flex", // Center horizontally and vertically
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  };

  const resumeFormik = useFormik({
    initialValues: {
      resume_title: "",
      work_experience: "",
      salary: "",
      current_location: "",
      preferred_location: [],
      designation: "",
      course_ug: "",
      course_pg: "",
      post_course_pg: "",
      dob: "",
      age: "",
      marital_status: "",
    },
    onSubmit: (values) => {
      console.log(values);
      createResumeDetails(values);
    },
  });

  const [updateLocations, setUpdateLocations] = useState([]);
  const [locationInput, setLocationInput] = useState("");

  const handleInputChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === " " && locationInput.trim() !== "") {
      setUpdateLocations([...updateLocations, locationInput.trim()]);
      setLocationInput("");
    }
  };

  const handleLocationRemove = (locationToRemove) => {
    const updateLocations = updateLocations.filter(
      (location) => location !== locationToRemove
    );
    setLocationInput(updateLocations);
  };

  const createResumeDetails = async () => {
    const payload = {
      resume_title: resumeFormik.values.resume_title,
      work_experience: resumeFormik.values.work_experience,
      salary_range: resumeFormik.values.salary,
      current_location: resumeFormik.values.current_location,
      preferred_location: updateLocations,
      designation: resumeFormik.values.designation,
      course_ug: resumeFormik.values.course_ug,
      course_pg: resumeFormik.values.course_pg,
      post_course_pg: resumeFormik.values.post_course_pg,
      dob: resumeFormik.values.dob,
      age: resumeFormik.values.age,
      marital_status: resumeFormik.values.marital_status,
    };

    try {
      const response = await createResume(payload);
      console.log(response);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const fetchResume = async () => {
    try {
      const response = await fetchResumeDetails();
      console.log(response);
      setResume(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Resume end

  // Contact details
  const [contactDetails, setContactDetails] = useState("");

  const getContact = async () => {
    try {
      const response = await fetchContactDetails();
      console.log(response.data.data);
      setContactDetails(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Education
  const educationFormik = useFormik({
    initialValues: {
      degree: "",
      course: "",
      university: "",
      college: "",
      edu_year_from: "",
      edu_year_to: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      createEducationDetails(values);
    },
  });

  const degree = education.length > 0 ? education[0].name : "";

  const updateEducationFormik = useFormik({
    initialValues: {
      degree: degree,
      course: "",
      university: "",
      college: "",
      edu_year_from: "",
      edu_year_to: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      updateEducationDetails(values);
    },
  });

  const fetchEducationDetails = async () => {
    try {
      

      const response = await fetchEducation();
      console.log(response.data.data);

      

      
      setEducation(response.data.data);

      

    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const createEducationDetails = async () => {
    const payload = {
      degree_id: educationFormik.values.degree,
      course_id: educationFormik.values.course,
      college_id: educationFormik.values.college,
      university_id: educationFormik.values.university,
      edu_year_from: educationFormik.values.edu_year_from,
      edu_year_to: educationFormik.values.edu_year_to,
      description: educationFormik.values.description,
    };

    try {
      setLoading(true);
      const response = await createEducation(payload, id);
      console.log(response);
      setAlertMessage(
        <Alert variant="success">Updated successfuly</Alert>
      )
      setLoading(false);

      setTimeout(() => {
        setAlertMessage("")
      }, 3000)
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const updateEducationDetails = async () => {
    const payload = {
      degree_id: updateEducationFormik.values.degree,
      course_id: updateEducationFormik.values.course,
      college_id: updateEducationFormik.values.college,
      university_id: updateEducationFormik.values.university,
      edu_year_from: updateEducationFormik.values.edu_year_from,
      edu_year_to: updateEducationFormik.values.edu_year_to,
      description: updateEducationFormik.values.description,
    };

    const educationId = selectedEducationId;

    try {
      setLoading(true);
      const response = await updateEducation(payload, educationId);
      console.log(response);
      setAlertMessage(
        <Alert variant="success">Updated successfuly</Alert>
      )
      setLoading(false);

      setTimeout(() => {
        setAlertMessage("")
      }, 3000)
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  // Education end

  // Experience
  const experienceFormik = useFormik({
    initialValues: {
      company_name: "",
      year_from: "",
      year_to: "",
      exp_designation: "",
      exp_description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      createExperienceDetails(values);
    },
  });

  const editExperienceFormik = useFormik({
    initialValues: {
      company_name: "",
      year_from: "",
      year_to: "",
      exp_designation: "",
      exp_description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      updateExperienceDetails(values);
    },
  });

  const fetchingExperienceDetails = async () => {
    try {
      const response = await fetchExperience();
      console.log(response.data.data);
      setExperience(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const createExperienceDetails = async () => {
    const payload = {
      company_name: experienceFormik.values.company_name,
      year_from: experienceFormik.values.year_from,
      year_to: experienceFormik.values.year_to,
      exp_designation: experienceFormik.values.exp_designation,
      exp_description: experienceFormik.values.exp_description,
    };

    try {
      setLoading(true);
      const response = await createExperience(payload, id);
      console.log(response);
      setAlertMessage(
        <Alert variant="success">Updated successfuly</Alert>
      )
      setLoading(false);

      setTimeout(() => {
        setAlertMessage("")
      }, 3000)
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const updateExperienceDetails = async () => {
    const payload = {
      company_name: editExperienceFormik.values.company_name,
      year_from: editExperienceFormik.values.year_from,
      year_to: editExperienceFormik.values.year_to,
      exp_designation: editExperienceFormik.values.exp_designation,
      exp_description: editExperienceFormik.values.exp_description,
    };

    const experienceId = selectedExperienceId;

    try {
      setLoading(true)
      const response = await updateExperience(payload, experienceId);
      console.log(response);
      setAlertMessage(
        <Alert variant="success">Updated successfuly</Alert>
      )
      setLoading(false);

      setTimeout(() => {
        setAlertMessage("")
      }, 3000)
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Projects
  const projectFormik = useFormik({
    initialValues: {
      project_title: "",
      project_description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      createProjectDetails(values);
    },
  });

  const editProjectFormik = useFormik({
    initialValues: {
      project_title: "",
      project_description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      updateProjectDetails(values);
    },
  });

  const fetchProjectDetails = async () => {
    try {
      const response = await fetchProjects();
      console.log(response.data.data);
      setProjects(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const createProjectDetails = async () => {
    const payload = {
      project_title: projectFormik.values.project_title,
      project_description: projectFormik.values.project_description,
    };
    console.log(payload);

    try {
      setLoading(true)
      const response = await createProject(payload, id);
      console.log(response);
      setAlertMessage(
        <Alert variant="success">Updated successfuly</Alert>
      )
      setLoading(false);

      setTimeout(() => {
        setAlertMessage("")
      }, 3000)
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const updateProjectDetails = async () => {
    const payload = {
      project_title: editProjectFormik.values.project_title,
      project_description: editProjectFormik.values.project_description,
    };
    const projectId = selectedProjectId;
    console.log(projectId);
    console.log(payload);

    try {
      setLoading(true);
      const response = await updateProject(payload, projectId);
      console.log(response);
      setAlertMessage(
        <Alert variant="success">Updated successfuly</Alert>
      )
      setLoading(false);

      setTimeout(() => {
        setAlertMessage("")
      }, 3000)
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleUserAvatarUpload = (avatarPath) => {
    console.log("Avatar upload: ", avatarPath);
  };

  // Linkedin profile

  const linkedInProfile = async () => {
    const payload = {
      linkedin_profile: linkedinFormik.values.linkedin_profile,
    };
    console.log(payload);

    try {
      setLoading(true);

      const response = await ApiService(
        "linkedin-profile-update",
        "POST",
        payload,
        true
      );
      console.log(response);

      setAlertMessage(
        <Alert variant="success">Updated successfuly</Alert>
      )

      setTimeout(() => {
        setAlertMessage("");
      }, 3000)

      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const linkedinFormik = useFormik({
    initialValues: {
      linkedin_profile: "",
    },
    onSubmit: (values) => {
      console.log(values);
      linkedInProfile(values);
    },
  });

  useEffect(() => {
    fetchingMyAbout();
    fetchMyProfile();
    generalDetails();
    fetchingSkills();
    fetchResume();
    fetchEducationDetails();
    fetchingExperienceDetails();
    fetchProjectDetails();
    getContact();
  }, [id]);

  const kycFormik = useFormik({
    initialValues: {
      pan_number: "",
      aadhaar_number: "",
      pan_front: "",
      aadhaarFront: "",
      pan_back: "",
      aadhaar_back: "",
      passport: "",
    },
    onSubmit: (values) => {
      console.log(values);
      uploadDetails(values);
    },
  });

  const uploadDetails = async () => {
    const payload = {
      pan_number: kycFormik.values.pan_number,
      aadhaar_number: kycFormik.values.aadhaar_number,
      pan_front: panFrontFileUpload,
      aadhaarFront: aadhaarFrontFileUpload,
      pan_back: panBackFileUpload,
      aadhaar_back: aadhaarBackFileUpload,
      passport: passportFileUpload,
    };
    console.log(payload);
  };

  const [avatarPath, setAvatarPath] = useState("");
  const [resumeFileUpload, setResumeFileUpload] = useState("");
  const [passportFileUpload, setPassportFileUpload] = useState("");
  const [panFrontFileUpload, setPanFrontFileUpload] = useState("");
  const [panBackFileUpload, setPanBackFileUpload] = useState("");
  const [aadhaarFrontFileUpload, setAadhaarFrontFileUpload] = useState("");
  const [aadhaarBackFileUpload, setAadhaarBackFileUpload] = useState("");

  //! File Uploader
  const handleAvatarUpload = (path) => {
    // Handle the avatar file upload
    console.log("Avatar uploaded. File path:", path);
    setAvatarPath(path);
  };

  const handleResumeUpload = (filePath) => {
    // Handle the resume file upload
    console.log("Resume uploaded. File path:", filePath);
    setResumeFileUpload(filePath);
  };

  const handlePassportUpload = (filePath) => {
    // Handle the passport file upload
    console.log("Passport uploaded. File path:", filePath);
    setPassportFileUpload(filePath);
  };

  const handlePanFrontUpload = (filePath) => {
    // Handle the passport file upload
    console.log("PanFront page uploaded. File path:", filePath);
    setPanFrontFileUpload(filePath);
  };

  const handlePanBackUpload = (filePath) => {
    // Handle the passport file upload
    console.log("PanBack page uploaded. File path:", filePath);
    setPanBackFileUpload(filePath);
  };

  const handleAadhaarFrontUpload = (filePath) => {
    // Handle the passport file upload
    console.log("Aadhaar Front page uploaded. File path:", filePath);
    setAadhaarFrontFileUpload(filePath);
  };

  const handleAadhaarBackUpload = (filePath) => {
    // Handle the passport file upload
    console.log("Aadhaar Back page uploaded. File path:", filePath);
    setAadhaarBackFileUpload(filePath);
  };

  //! File uploader end

  return (
    <div className="page-content">
      {/* Start home */}
      <section className="page-title-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center text-white">
                <h3 className="mb-4">My Profile</h3>
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
      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill=""
              fill-opacity="1"
              d="M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* END SHAPE */}

      {/* START PROFILE */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div class="col-lg-5">
              <div class="card side-bar">
                {Array.isArray(general) &&
                  general.map((gen) => (
                    <>
                      <div key={gen.id} class="card-body p-4">
                        <div class="candidate-profile text-center">
                          <div>
                            <AvatarUploader
                              onAvatarUpload={handleAvatarUpload}
                            />
                          </div>
                          <Modal
                            show={showForm}
                            onHide={handleCloseForm}
                            dialogClassName="centered-modal"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>General</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div class="p-4">
                                <form onSubmit={formik.handleSubmit}>
                                  <div className="row">
                                    <div className="col-lg-6 mb-3">
                                      <label htmlFor="first_name">
                                        First Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="first_name"
                                        // placeholder={gen.name}
                                        value={formik.values.first_name}
                                        onChange={formik.handleChange}
                                      />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                      <label htmlFor="lastName">
                                        Last Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                      />
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-6 mb-4">
                                      <label htmlFor="country">Country</label>
                                      <select
                                        className="form-select"
                                        name="country"
                                        value={country}
                                        onChange={(e) => {
                                          formik.handleChange(e);
                                          setCountry(e.target.value);
                                        }}
                                      >
                                        <option></option>
                                        {Array.isArray(countries)
                                          ? countries.map((country) => (
                                              <option
                                                key={country.id}
                                                value={country.id}
                                              >
                                                {country.name}
                                              </option>
                                            ))
                                          : null}
                                      </select>
                                      {formik.touched.country &&
                                        formik.errors.country && (
                                          <span className="text-danger">
                                            {formik.errors.country}
                                          </span>
                                        )}
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                      <label htmlFor="state">State</label>
                                      <select
                                        className="form-select"
                                        name="state"
                                        value={state}
                                        onChange={(e) => {
                                          formik.handleChange(e);
                                          setState(e.target.value);
                                        }}
                                      >
                                        <option></option>
                                        {Array.isArray(statesData.data) &&
                                          statesData.data.map((states) => (
                                            <option
                                              key={states.id}
                                              value={states.id}
                                            >
                                              {states.name}
                                            </option>
                                          ))}
                                      </select>
                                      {formik.touched.state &&
                                        formik.errors.state && (
                                          <span className="text-danger">
                                            {formik.errors.state}
                                          </span>
                                        )}
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-6 mb-4">
                                      <label htmlFor="city">City</label>
                                      <select
                                        className="form-select"
                                        name="city"
                                        value={city}
                                        onChange={(e) => {
                                          formik.handleChange(e);
                                          setCity(e.target.value);
                                        }}
                                      >
                                        <option value="" disabled></option>
                                        {Array.isArray(cityData.data) &&
                                          cityData.data.map((cities) => (
                                            <option
                                              key={cities.id}
                                              value={cities.id}
                                            >
                                              {cities.name}
                                            </option>
                                          ))}
                                      </select>
                                      {formik.touched.city &&
                                        formik.errors.city && (
                                          <span className="text-danger">
                                            {formik.errors.city}
                                          </span>
                                        )}
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                      <label htmlFor="address">Address</label>
                                      <textarea
                                        className="form-control"
                                        name="address"
                                        onChange={formik.handleChange}
                                      />
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-6 mb-3">
                                      <label>Work Status</label>
                                      <select
                                        className="form-select"
                                        name="work_status"
                                        value={formik.values.work_status}
                                        onChange={formik.handleChange}
                                      >
                                        <option value="Fresher">Fresher</option>
                                        <option value="Experienced">
                                          Experienced
                                        </option>
                                      </select>
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                      <label htmlFor="jobseeker_type">
                                        Jobseeker Type
                                      </label>
                                      <select
                                        className="form-select"
                                        name="jobseeker_type"
                                        value={formik.values.jobseeker_type}
                                        onChange={formik.handleChange}
                                      >
                                        <option value="Worker">Worker</option>
                                        <option value="Professional">
                                          Professional
                                        </option>
                                      </select>
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                      <label htmlFor="pincode">Pincode</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="pincode"
                                        value={formik.values.pincode}
                                        onChange={formik.handleChange}
                                      />
                                    </div>
                                  </div>

                                  <div className="text-end">
                                    <button
                                      className={`btn btn-primary ${
                                        loading ? "disabled" : ""
                                      }`}
                                      type="submit"
                                      disabled={loading || !formik.isValid}
                                    >
                                      {loading ? "Updating..." : "Update"}
                                    </button>
                                  </div>
                                  {alertMessage ? (
                                    <div className="mt-2">{alertMessage}</div>
                                  ) : (
                                    ""
                                  )}
                                </form>
                              </div>
                            </Modal.Body>
                          </Modal>
                          <h6 class="fs-18 mb-4 mt-4">
                            {gen.name}{" "}
                            <span class="text-muted">{gen.last_name}</span>
                            <FaPencilAlt
                              class="text-muted"
                              style={{
                                marginLeft: "10px",
                                fontSize: "12px",
                                cursor: "pointer",
                              }}
                              onClick={handleGeneralClick}
                              title="Edit your basics"
                            />
                          </h6>
                        </div>
                        <div class="candidate-profile-overview  card-body border-top p-4">
                          <h6 class="fs-17 fw-semibold mb-3">
                            Profile Overview
                          </h6>
                          <ul class="list-unstyled mb-0">
                            <li>
                              <div class="d-flex">
                                <label class="text-dark">Work Status</label>
                                <div>
                                  <p
                                    class="text-muted mb-0"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    {gen.work_status
                                      ? gen.work_status
                                      : "Not disclosed"}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex">
                                <label class="text-dark">JobSeeker Type</label>
                                <div>
                                  <p
                                    class="text-muted mb-0"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    {gen.jobseeker_type
                                      ? gen.jobseeker_type
                                      : "Not disclosed"}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex">
                                <label class="text-dark">Country</label>
                                <div>
                                  <p
                                    class="text-muted mb-0"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    {gen.country_id && gen.country_id.name
                                      ? gen.country_id.name
                                      : "Not disclosed"}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex">
                                <label class="text-dark">State</label>
                                <div>
                                  <p
                                    class="text-muted mb-0"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    {gen.state_id && gen.state_id.name
                                      ? gen.state_id.name
                                      : "Not disclosed"}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex">
                                <label class="text-dark">City</label>
                                <div>
                                  <p
                                    class="text-muted mb-0"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    {gen.city_id && gen.city_id.name
                                      ? gen.city_id.name
                                      : "Not disclosed"}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex">
                                <label class="text-dark">Address</label>
                                <div>
                                  <p
                                    class="text-muted mb-0"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    {gen.address
                                      ? gen.address
                                      : "Not disclosed"}
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex">
                                <label class="text-dark">Pincode</label>
                                <div>
                                  <p
                                    class="text-muted mb-0"
                                    style={{ marginLeft: "10px" }}
                                  >
                                    {gen.pincode
                                      ? gen.pincode
                                      : "Not disclosed"}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="mt-3">
                            <a
                              onClick={downloadResume}
                              href=""
                              class="btn btn-primary btn-hover w-100 mt-2"
                            >
                              <i class="uil uil-import"></i> Download CV
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                {/*end candidate-profile*/}

                {/*candidate-profile-overview*/}

                <div class="card-body p-4 border-top">
                  <h6 class="fs-17 fw-semibold mb-3">
                    Professional Skills
                    <FaPencilAlt
                      class="text-muted"
                      style={{
                        marginLeft: "10px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                      onClick={handleSkillsForm}
                      title="Edit your basics"
                    />
                  </h6>
                  <Modal
                    show={skillsModel}
                    onHide={handleSkillsFormClose}
                    dialogClassName="centered-modal"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Skills</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div class="p-4">
                        <form onSubmit={skillsFormik.handleSubmit}>
                          <label for="skills" class="form-label">
                            Skills
                          </label>
                          <Select
                            options={skillsOptions}
                            value={selectedSkill}
                            onChange={handleSelect}
                            isMulti={true}
                            name="skills"
                          />
                          <div>
                            <div className="d-flex item-center mt-2">
                              {Array.isArray(skills) && skills.length > 0
                                ? skills.map((skill) => (
                                    <div
                                      key={skill.id}
                                      style={{
                                        display: "flex",
                                      }}
                                    >
                                      <span class="badge bg-success-subtle text-success fs-13 mt-1 ml-1">
                                        {skill.name}
                                      </span>
                                    </div>
                                  ))
                                : "Add skills"}
                            </div>
                          </div>
                          <div className="text-end mt-4">
                            <button
                              className={`btn btn-primary ${
                                loading ? "disabled" : ""
                              }`}
                              type="submit"
                              disabled={loading || !skillsFormik.isValid}
                            >
                              {loading ? "Updating..." : "Update"}
                            </button>
                          </div>
                          {alertMessage ? (
                            <div className="mt-2">{alertMessage}</div>
                          ) : (
                            ""
                          )}
                        </form>
                      </div>
                    </Modal.Body>
                  </Modal>
                  <div>
                    <div className="d-flex item-center">
                      {Array.isArray(skills) && skills.length > 0
                        ? skills.map((skill) => (
                            <div
                              key={skill.id}
                              style={{
                                display: "flex",
                              }}
                            >
                              <span class="badge bg-success-subtle text-success fs-13 mt-1 ml-1">
                                {skill.name}
                              </span>
                            </div>
                          ))
                        : "Add skills"}
                    </div>
                  </div>
                </div>
                {/* LinkedIn model */}
                <Modal
                  show={linkedInForm}
                  onHide={handleLinkeInFormClose}
                  dialogClassName="centered-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>LinkedIn</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div class="p-4">
                      <form onSubmit={linkedinFormik.handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <label htmlFor="first_name">
                              LinkedIn profile link
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="linkedin_profile"
                              // placeholder={gen.name}
                              value={formik.values.linkedin_profile}
                              onChange={linkedinFormik.handleChange}
                            />
                          </div>
                        </div>
                        <div className="text-end">
                          <button className={`btn btn-primary ${
                            loading ? "disabled" : ""
                          }`} type="submit" disabled = { loading || !linkedinFormik.isValid }>
                            { loading ? "Updating..." : "Update" }
                          </button>
                        </div>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
                {/* Linkedinmodel end */}
                {/*end card-body*/}
                {Array.isArray(contactDetails) &&
                  contactDetails.map((contact) => (
                    <div
                      key={contact.id}
                      class="candidate-contact-details card-body p-4 border-top"
                    >
                      <h6 class="fs-17 fw-semibold mb-3">Contact Details</h6>
                      <ul class="list-unstyled mb-0">
                        <li>
                          <div class="d-flex align-items-center mt-4">
                            <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                              <i class="uil uil-envelope-alt"></i>
                            </div>
                            <div class="ms-3">
                              <h6 class="fs-14 mb-1">Email</h6>
                              <p class="text-muted mb-0">
                                {contact.email
                                  ? contact.email
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex align-items-center mt-4">
                            <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                              <i class="uil uil-map-marker"></i>
                            </div>
                            <div class="ms-3">
                              <h6 class="fs-14 mb-1">Address</h6>
                              <p class="text-muted mb-0">
                                {contact.address
                                  ? contact.address
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex align-items-center mt-4">
                            <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                              <i class="uil uil-phone"></i>
                            </div>
                            <div class="ms-3">
                              <h6 class="fs-14 mb-1">Phone</h6>
                              <p class="text-muted mb-0">
                                {contact.phone
                                  ? contact.phone
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex align-items-center mt-4">
                            <div class="icon bg-primary-subtle text-primary flex-shrink-0">
                              <i class="uil uil-skype-alt"></i>
                            </div>
                            <div class="ms-3">
                              <h6 class="fs-14 mb-1">
                                LinkedIn
                                <FaPencilAlt
                                  class="text-muted"
                                  style={{
                                    marginLeft: "10px",
                                    fontSize: "12px",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleLinkedInForm}
                                  title="Edit your basics"
                                />
                              </h6>
                              <p class="text-muted mb-0">
                                {contact.linkedin_profile
                                  ? contact.linkedin_profile
                                  : "Not disclosed"}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))}
                {/*end candidate-overview*/}
              </div>
              {/*end card*/}
            </div>

            {/*end col*/}
            <div className="col-lg-7 mt-0">
              <div className="card profile-content-page mt-4 mt-lg-0">
                <ul
                  className="profile-content-nav nav nav-pills border-bottom mb-4"
                  id="pills-tab"
                  role="tablist"
                  style={{
                    fontSize: "16px",
                  }}
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="overview-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#overview"
                      type="button"
                      role="tab"
                      aria-controls="overview"
                      aria-selected="true"
                    >
                      Summary
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="resume-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#resume"
                      type="button"
                      role="tab"
                      aria-controls="resume"
                      aria-selected="true"
                    >
                      Resume
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="education-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#education"
                      type="button"
                      role="tab"
                      aria-controls="education"
                      aria-selected="false"
                    >
                      Education
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="experience-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#experience"
                      type="button"
                      role="tab"
                      aria-controls="experience"
                      aria-selected="false"
                    >
                      Experience
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="projects-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#projects"
                      type="button"
                      role="tab"
                      aria-controls="projects"
                      aria-selected="false"
                    >
                      Projects
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="kyc-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#kyc"
                      type="button"
                      role="tab"
                      aria-controls="kyc"
                      aria-selected="false"
                    >
                      kyc
                    </button>
                  </li>
                </ul>
                {/* --- Summary --- */}
                <div className="card-body p-4">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="overview"
                      role="tabpanel"
                      aria-labelledby="overview-tab"
                    >
                      <Modal
                        show={aboutForm}
                        onHide={handleCloseAboutForm}
                        dialogClassName="centered-modal"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>About</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="p-4">
                            <form onSubmit={aboutFormik.handleSubmit}>
                              <div className="mb-3">
                                <label htmlFor="about" className="form-label">
                                  About
                                </label>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  id="about"
                                  value={aboutFormik.values.about}
                                  onChange={aboutFormik.handleChange}
                                />
                              </div>
                              <div className="text-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Update
                                </button>
                              </div>
                            </form>
                          </div>
                        </Modal.Body>
                      </Modal>
                      <div className="container">
                        <div className="bg-white p-4 rounded">
                          <div>
                            <h5>
                              About
                              <FaPencilAlt
                                class="text-muted"
                                style={{
                                  marginLeft: "10px",
                                  fontSize: "12px",
                                  cursor: "pointer",
                                }}
                                onClick={handleAboutForm}
                                title="Edit your basics"
                              />
                            </h5>
                            {Array.isArray(aboutMe) ? (
                              aboutMe.map((about) => (
                                <p key={about.id}>
                                  {about.about_me || (
                                    <p>
                                      Unlock the full potential of your profile
                                      by adding an 'About' section! Share your
                                      story, skills, and aspirations to make
                                      meaningful connections.
                                    </p>
                                  )}
                                </p>
                              ))
                            ) : (
                              <p>Try to add your about</p>
                            )}
                          </div>
                          <div className="mt-4">
                            <h5>Upload Your Resume</h5>
                            <p>
                              Elevate your resume by providing a comprehensive
                              overview of your skills, experience, and
                              accomplishments. A well-crafted resume opens doors
                              to new opportunities
                            </p>
                            <div
                              onDragOver={handleDragOver}
                              onDrop={handleDrop}
                            >
                              <input
                                type="file"
                                id="resumeUploadInput"
                                accept=".pdf, .doc, .docx"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                              />
                              <label
                                htmlFor="resumeUploadInput"
                                className={`btn${loading ? " disabled" : ""}`}
                                style={buttonStyle}
                              >
                                {loading ? "Uploading..." : "Upload Resume"}
                              </label>
                              {files && <p>Uploaded: {files.name}</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* --- Summary end --- */}

                    <div
                      className="tab-pane fade"
                      id="settings"
                      role="tabpanel"
                      aria-labelledby="settings-tab"
                    >
                      <div>
                        <div className="container mt-4">
                          <div className="d-flex">
                            <div
                              className="mb-3 text-center fw-bold"
                              style={{ fontSize: "32px", color: "#333" }}
                            >
                              Kalyanasundar{" "}
                              <span className="text-muted">Arunachalam</span>
                              <FaPencilAlt
                                class="text-muted"
                                style={{
                                  marginLeft: "10px",
                                  fontSize: "18px",
                                  cursor: "pointer",
                                }}
                                // onClick={handlePencilIconClick}
                                title="Edit your basics"
                              />
                            </div>
                            <div className="container text-center">
                              <div className="row">
                                <div className="col-12">
                                  <div className="">
                                    <div className="d-flex align-center justify-content-around">
                                      <p className="text-muted">
                                        <FaUser /> Fresher
                                      </p>
                                      <p className="text-muted">
                                        <FaBriefcase /> Professional
                                      </p>
                                      <p className="text-muted">
                                        <FaMapMarkerAlt /> 6/97, Kovil Street
                                      </p>
                                    </div>
                                    <div className="d-flex align-center justify-content-around">
                                      <p className="text-muted">
                                        <FaFlag /> India
                                      </p>
                                      <p className="text-muted">
                                        <FaMap /> Tamilnadu
                                      </p>
                                      <p className="text-muted">
                                        <FaMapPin /> Tenkasi
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* --- Edit personal details form --- */}
                    </div>
                    {/* --- Personal information tab end--- */}

                    {/* --- Education information tab --- */}
                    <div
                      className="tab-pane fade"
                      id="education"
                      role="tabpanel"
                      aria-labelledby="education-tab"
                    >
                      <div>
                        <div className="container mt-0">
                          <div className="">
                            <div class="candidate-education-details mt-0 pt-3">
                              <h6 class="fs-17 fw-bold mb-0">
                                Education
                                <AiOutlinePlusCircle
                                  title="Add education details"
                                  className="text-muted fw-bold"
                                  style={{
                                    marginLeft: "10px",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleAddEducation}
                                />
                              </h6>
                              {Array.isArray(education) &&
                              education.length > 0 ? (
                                education.map((educationDetails) => (
                                  <div class="candidate-education-content mt-4 d-flex">
                                    <div class="circle flex-shrink-0 bg-primary-subtle text-primary">
                                      {" "}
                                      B{" "}
                                    </div>
                                    <div class="ms-4">
                                      <h6 class="fs-16 mb-1">
                                        {educationDetails.degree &&
                                          educationDetails.degree.name}{" "}
                                        -{" "}
                                        {educationDetails.course &&
                                          educationDetails.course.name}
                                        <FaPencilAlt
                                          class="text-muted"
                                          style={{
                                            marginLeft: "10px",
                                            fontSize: "12px",
                                            cursor: "pointer",
                                          }}
                                          onClick={() =>
                                            handleEditEducationForm(
                                              educationDetails.id
                                            )
                                          }
                                          title="Edit your basics"
                                        />
                                      </h6>
                                      <p class="mb-2 text-muted">
                                        {educationDetails.college &&
                                          educationDetails.college.name}{" "}
                                        -{" "}
                                        {educationDetails.university &&
                                          educationDetails.university.name}{" "}
                                        ({educationDetails.edu_year_from} to{" "}
                                        {educationDetails.edu_year_to})
                                      </p>
                                      <p class="text-muted">
                                        {educationDetails.description}
                                      </p>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p className="mt-2 text-muted">
                                  Enhance your profile's completeness by adding
                                  your education details. Highlight your
                                  academic achievements and showcase your
                                  commitment to learning and growth.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* --- Add education form model --- */}
                      <Modal
                        show={educationForm}
                        onHide={handleEducationFormClose}
                        dialogClassName="centered-modal"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Add Education</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="p-4">
                            <form onSubmit={educationFormik.handleSubmit}>
                              <div className="form-group row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="degree">Degree</label>
                                  <select
                                    className="form-control"
                                    name="degree"
                                    value={educationFormik.values.degree}
                                    onChange={educationFormik.handleChange}
                                  >
                                    <option value="">Select Degree</option>
                                    {Array.isArray(degrees)
                                      ? degrees.map((degree) => (
                                          <option
                                            key={degree.id}
                                            value={degree.id}
                                          >
                                            {degree.name}
                                          </option>
                                        ))
                                      : null}
                                  </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="course">Course</label>
                                  <select
                                    className="form-control"
                                    name="course"
                                    value={educationFormik.values.course}
                                    onChange={educationFormik.handleChange}
                                  >
                                    <option value="">Select Course</option>
                                    {Array.isArray(courses)
                                      ? courses.map((course) => (
                                          <option
                                            key={course.id}
                                            value={course.id}
                                          >
                                            {course.name}
                                          </option>
                                        ))
                                      : null}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="college">College</label>
                                  <select
                                    className="form-control"
                                    name="college"
                                    value={educationFormik.values.college}
                                    onChange={educationFormik.handleChange}
                                  >
                                    <option value="">Select College</option>
                                    {Array.isArray(colleges)
                                      ? colleges.map((college) => (
                                          <option
                                            key={college.id}
                                            value={college.id}
                                          >
                                            {college.name}
                                          </option>
                                        ))
                                      : null}
                                  </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="university">University</label>
                                  <select
                                    className="form-control"
                                    name="university"
                                    value={educationFormik.values.university}
                                    onChange={educationFormik.handleChange}
                                  >
                                    <option value="">Select University</option>
                                    {Array.isArray(universities)
                                      ? universities.map((university) => (
                                          <option
                                            key={university.id}
                                            value={university.id}
                                          >
                                            {university.name}
                                          </option>
                                        ))
                                      : null}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col-md-6 mb-3">
                                  <label
                                    htmlFor="edu_year_from"
                                    className="mt-4"
                                  >
                                    Year From
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="edu_year_from"
                                    value={educationFormik.values.edu_year_from}
                                    onChange={educationFormik.handleChange}
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="edu_year_to" className="mt-4">
                                    Year To
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="edu_year_to"
                                    value={educationFormik.values.edu_year_to}
                                    onChange={educationFormik.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col-md-12 mb-3">
                                  <label htmlFor="description" className="mt-4">
                                    Description
                                  </label>
                                  <textarea
                                    className="form-control"
                                    rows="2"
                                    name="description"
                                    value={educationFormik.values.description}
                                    onChange={educationFormik.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <button
                                  className={`btn btn-primary mt-4 ${
                                    loading ? "disabled" : ""
                                  }`}
                                  type="submit"
                                  disabled={ loading || !educationFormik.isValid }
                                >
                                  { loading ? "Saving..." : "Save Changes"}
                                </button>
                              </div>
                            </form>
                          </div>
                        </Modal.Body>
                      </Modal>

                      {/* --- Add education form model end --- */}

                      {/* --- Edit education form model --- */}
                      <Modal
                        show={editEducationForm}
                        onHide={handleEditEducationFormClose}
                        dialogClassName="centered-modal"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Edit Education</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="p-4">
                            <form onSubmit={updateEducationFormik.handleSubmit}>
                              <div className="form-group row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="degree">Degree</label>
                                  <select
                                    className="form-control"
                                    name="degree"
                                    value={updateEducationFormik.values.degree}
                                    onChange={
                                      updateEducationFormik.handleChange
                                    }
                                  >
                                    {Array.isArray(degrees)
                                      ? degrees.map((degree) => (
                                          <option
                                            key={degree.id}
                                            value={degree.id}
                                          >
                                            {degree.name}
                                          </option>
                                        ))
                                      : null}
                                  </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="course">Course</label>
                                  <select
                                    className="form-control"
                                    name="course"
                                    value={updateEducationFormik.values.course}
                                    onChange={
                                      updateEducationFormik.handleChange
                                    }
                                  >
                                    <option value="">Select Course</option>
                                    {Array.isArray(courses)
                                      ? courses.map((course) => (
                                          <option
                                            key={course.id}
                                            value={course.id}
                                          >
                                            {course.name}
                                          </option>
                                        ))
                                      : null}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="college">College</label>
                                  <select
                                    className="form-control"
                                    name="college"
                                    value={updateEducationFormik.values.college}
                                    onChange={
                                      updateEducationFormik.handleChange
                                    }
                                  >
                                    <option value="">Select College</option>
                                    {Array.isArray(colleges)
                                      ? colleges.map((college) => (
                                          <option
                                            key={college.id}
                                            value={college.id}
                                          >
                                            {college.name}
                                          </option>
                                        ))
                                      : null}
                                  </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="university">University</label>
                                  <select
                                    className="form-control"
                                    name="university"
                                    value={
                                      updateEducationFormik.values.university
                                    }
                                    onChange={
                                      updateEducationFormik.handleChange
                                    }
                                  >
                                    <option value="">Select University</option>
                                    {Array.isArray(universities)
                                      ? universities.map((university) => (
                                          <option
                                            key={university.id}
                                            value={university.id}
                                          >
                                            {university.name}
                                          </option>
                                        ))
                                      : null}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col-md-6 mb-3">
                                  <label
                                    htmlFor="edu_year_from"
                                    className="mt-4"
                                  >
                                    Year From
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="edu_year_from"
                                    value={
                                      updateEducationFormik.values.edu_year_from
                                    }
                                    onChange={
                                      updateEducationFormik.handleChange
                                    }
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label htmlFor="edu_year_to" className="mt-4">
                                    Year To
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="edu_year_to"
                                    value={
                                      updateEducationFormik.values.edu_year_to
                                    }
                                    onChange={
                                      updateEducationFormik.handleChange
                                    }
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col-md-12 mb-3">
                                  <label htmlFor="description" className="mt-4">
                                    Description
                                  </label>
                                  <textarea
                                    className="form-control"
                                    rows="2"
                                    name="description"
                                    value={
                                      updateEducationFormik.values.description
                                    }
                                    onChange={
                                      updateEducationFormik.handleChange
                                    }
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <button
                                  className={`btn btn-primary mt-4 ${
                                    loading ? "disabled" : ""
                                  }`}
                                  type="submit"
                                  disabled={ loading || !updateEducationFormik.isValid}
                                >
                                  { loading ? "Saving..." : "Save Changes"}
                                </button>
                              </div>
                            </form>
                          </div>
                        </Modal.Body>
                      </Modal>

                      {/* --- Edit education form model --- */}
                    </div>
                    {/* --- Education information tab end --- */}

                    {/* --- Experience information tab --- */}
                    <div
                      className="tab-pane fade"
                      id="experience"
                      role="tabpanel"
                      aria-labelledby="experience-tab"
                    >
                      <div>
                        <div className="container mt-4">
                          <div className="">
                            <div class="candidate-education-details mt-4 pt-3">
                              {/* Add experience */}
                              <Modal
                                show={experienceForm}
                                onHide={handleExperienceFormClose}
                                dialogClassName="centered-modal"
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>Add Experience</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="p-4">
                                    <form
                                      onSubmit={experienceFormik.handleSubmit}
                                    >
                                      <div className="mb-4">
                                        <label
                                          htmlFor="company_name"
                                          className="form-label"
                                        >
                                          Company Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="company_name"
                                          value={experienceFormik.company_name}
                                          onChange={
                                            experienceFormik.handleChange
                                          }
                                        />
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="mb-4">
                                            <label
                                              htmlFor="year_from"
                                              className="form-label"
                                            >
                                              Year From
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control"
                                              name="year_from"
                                              value={experienceFormik.year_from}
                                              onChange={
                                                experienceFormik.handleChange
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="mb-4">
                                            <label
                                              htmlFor="year_to"
                                              className="form-label"
                                            >
                                              Year To
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control"
                                              name="year_to"
                                              value={experienceFormik.year_to}
                                              onChange={
                                                experienceFormik.handleChange
                                              }
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mb-4">
                                        <label htmlFor="exp_designation">
                                          Designation
                                        </label>
                                        <select
                                          className="form-control"
                                          name="exp_designation"
                                          value={
                                            experienceFormik.values
                                              .exp_designation
                                          }
                                          onChange={
                                            experienceFormik.handleChange
                                          }
                                        >
                                          <option disabled></option>
                                          {Array.isArray(designations)
                                            ? designations.map(
                                                (designation) => (
                                                  <option
                                                    key={designation.id}
                                                    value={designation.id}
                                                  >
                                                    {designation.name}
                                                  </option>
                                                )
                                              )
                                            : null}
                                        </select>
                                      </div>
                                      <div className="mb-4">
                                        <label
                                          htmlFor="exp_description"
                                          className="form-label"
                                        >
                                          Description
                                        </label>
                                        <textarea
                                          className="form-control"
                                          name="exp_description"
                                          value={experience.exp_description}
                                          rows="5"
                                          onChange={
                                            experienceFormik.handleChange
                                          }
                                        ></textarea>
                                      </div>

                                      <div className="mt-4 text-end">
                                        <button
                                          type="submit"
                                          className={`btn btn-primary ${
                                            loading ? "disabled" : ""
                                          }`}
                                          disabled={ loading || !experienceFormik.isValid }
                                        >
                                          { loading ? "Updating" : "Update"}
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </Modal.Body>
                              </Modal>
                              {/* Add experience end */}

                              {/* Edit experience */}
                              <Modal
                                show={editExperienceForm}
                                onHide={handleEditExperienceFormClose}
                                dialogClassName="centered-modal"
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>Edit Experience</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="p-4">
                                    <form
                                      onSubmit={
                                        editExperienceFormik.handleSubmit
                                      }
                                    >
                                      <div className="mb-4">
                                        <label
                                          htmlFor="company_name"
                                          className="form-label"
                                        >
                                          Company Name
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="company_name"
                                          value={
                                            editExperienceFormik.company_name
                                          }
                                          onChange={
                                            editExperienceFormik.handleChange
                                          }
                                        />
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <div className="mb-4">
                                            <label
                                              htmlFor="year_from"
                                              className="form-label"
                                            >
                                              Year From
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control"
                                              name="year_from"
                                              value={
                                                editExperienceFormik.year_from
                                              }
                                              onChange={
                                                editExperienceFormik.handleChange
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="mb-4">
                                            <label
                                              htmlFor="year_to"
                                              className="form-label"
                                            >
                                              Year To
                                            </label>
                                            <input
                                              type="date"
                                              className="form-control"
                                              name="year_to"
                                              value={
                                                editExperienceFormik.year_to
                                              }
                                              onChange={
                                                editExperienceFormik.handleChange
                                              }
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mb-4">
                                        <label htmlFor="exp_designation">
                                          Designation
                                        </label>
                                        <select
                                          className="form-control"
                                          name="exp_designation"
                                          value={
                                            editExperienceFormik.values
                                              .exp_designation
                                          }
                                          onChange={
                                            editExperienceFormik.handleChange
                                          }
                                        >
                                          <option disabled></option>
                                          {Array.isArray(designations)
                                            ? designations.map(
                                                (designation) => (
                                                  <option
                                                    key={designation.id}
                                                    value={designation.id}
                                                  >
                                                    {designation.name}
                                                  </option>
                                                )
                                              )
                                            : null}
                                        </select>
                                      </div>
                                      <div className="mb-4">
                                        <label
                                          htmlFor="exp_description"
                                          className="form-label"
                                        >
                                          Description
                                        </label>
                                        <textarea
                                          className="form-control"
                                          name="exp_description"
                                          value={
                                            editExperienceFormik.exp_description
                                          }
                                          rows="5"
                                          onChange={
                                            editExperienceFormik.handleChange
                                          }
                                        ></textarea>
                                      </div>

                                      <div className="mt-4 text-end">
                                        <button
                                          type="submit"
                                          className={`btn btn-primary ${
                                            loading ? "disabled" : ""
                                          }`}
                                          disabled = { loading || !editExperienceFormik.isValid }
                                        >
                                          { loading ? "Updating..." : "Update"}
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </Modal.Body>
                              </Modal>
                              {/* Edit experience end */}

                              <h6 class="fs-17 fw-bold mb-0">
                                Experience
                                <AiOutlinePlusCircle
                                  title="Add experience details"
                                  className="text-muted fw-bold"
                                  style={{
                                    marginLeft: "10px",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleExperienceForm}
                                />
                              </h6>
                              {Array.isArray(experience) &&
                              experience.length > 0 ? (
                                experience.map((experienceDetails) => (
                                  <div
                                    key={experienceDetails.id}
                                    class="candidate-education-content mt-4 d-flex"
                                  >
                                    <div class="circle flex-shrink-0 bg-primary-subtle text-primary">
                                      {" "}
                                      B{" "}
                                    </div>
                                    <div class="ms-4">
                                      <h6 class="fs-16 mb-1">
                                        {experienceDetails.company_name}
                                        <FaPencilAlt
                                          class="text-muted"
                                          style={{
                                            marginLeft: "10px",
                                            fontSize: "12px",
                                            cursor: "pointer",
                                          }}
                                          onClick={() =>
                                            handleEditExperienceForm(
                                              experienceDetails.id
                                            )
                                          }
                                          title="Edit your basics"
                                        />
                                      </h6>
                                      <p class="mb-2 text-muted">
                                        {experienceDetails.exp_designation
                                          ? experienceDetails.exp_designation
                                              .name
                                          : "No Designation"}{" "}
                                        - ({experienceDetails.year_from} -{" "}
                                        {experienceDetails.year_to})
                                      </p>
                                      <p class="text-muted">
                                        {experienceDetails.exp_description}
                                      </p>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p className="mt-2 text-muted">
                                  Maximize the impact of your profile by adding
                                  your work experience. Share your professional
                                  journey, accomplishments, and expertise to
                                  stand out in the professional community.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* --- Experience information tab end --- */}

                    {/* --- Projects information tab  */}
                    <div
                      className="tab-pane fade"
                      id="projects"
                      role="tabpanel"
                      aria-labelledby="projects-tab"
                    >
                      {/* Add projects */}
                      <Modal
                        show={projectForm}
                        onHide={handleProjectFormClose}
                        dialogClassName="centered-modal"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Add your Project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="p-4">
                            <form onSubmit={projectFormik.handleSubmit}>
                              <div className="mb-4">
                                <label
                                  htmlFor="project_title"
                                  className="form-label"
                                >
                                  Project Title
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="project_title"
                                  value={projectFormik.project_title}
                                  onChange={projectFormik.handleChange}
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="project_description"
                                  className="form-label"
                                >
                                  Project Description
                                </label>
                                <textarea
                                  className="form-control"
                                  name="project_description"
                                  value={projectFormik.project_description}
                                  rows="5"
                                  onChange={projectFormik.handleChange}
                                ></textarea>
                              </div>

                              <div className="mt-4 text-end">
                                <button
                                  type="submit"
                                  className={`btn btn-primary ${
                                    loading ? "disabled" : ""
                                  }`}
                                  disabled={ loading || !projectFormik.isValid }
                                >
                                  { loading ? "Updating..." : "Update"}
                                </button>
                              </div>
                            </form>
                          </div>
                        </Modal.Body>
                      </Modal>
                      {/* Add Projects end */}

                      {/* Edit Projects */}
                      <Modal
                        show={editProjectForm}
                        onHide={handleEditProjectFormClose}
                        dialogClassName="centered-modal"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Edit project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="p-4">
                            <form onSubmit={editProjectFormik.handleSubmit}>
                              <div className="mb-4">
                                <label
                                  htmlFor="project_title"
                                  className="form-label"
                                >
                                  Project Title
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="project_title"
                                  value={editProjectFormik.project_title}
                                  onChange={editProjectFormik.handleChange}
                                />
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="project_description"
                                  className="form-label"
                                >
                                  Project Description
                                </label>
                                <textarea
                                  className="form-control"
                                  name="project_description"
                                  value={editProjectFormik.project_description}
                                  rows="5"
                                  onChange={editProjectFormik.handleChange}
                                ></textarea>
                              </div>

                              <div className="mt-4 text-end">
                                <button
                                  type="submit"
                                  className={`btn btn-primary ${
                                    loading ? "disabled" : ""
                                  }`}
                                  disabled={ loading || !editProjectFormik.isValid}
                                >
                                  { loading ? "Updating..." : "Update"}
                                </button>
                              </div>
                            </form>
                          </div>
                        </Modal.Body>
                      </Modal>
                      {/* Edit projects end */}
                      <h6 class="fs-17 fw-bold mb-0">
                        Projects
                        <AiOutlinePlusCircle
                          title="Add experience details"
                          className="text-muted fw-bold"
                          style={{
                            marginLeft: "10px",
                            fontSize: "18px",
                            cursor: "pointer",
                          }}
                          onClick={handleProjectForm}
                        />
                      </h6>
                      {Array.isArray(projects) && projects.length > 0 ? (
                        projects.map((projectDetails) => (
                          <div
                            key={projectDetails.project_id}
                            class="candidate-education-content mt-4 d-flex"
                          >
                            <div class="circle flex-shrink-0 bg-primary-subtle text-primary">
                              {" "}
                              B{" "}
                            </div>
                            <div class="ms-4">
                              <h6 class="fs-16 mb-1">
                                {projectDetails.project_title}
                                <FaPencilAlt
                                  class="text-muted"
                                  style={{
                                    marginLeft: "10px",
                                    fontSize: "12px",
                                    cursor: "pointer",
                                  }}
                                  onClick={handleEditProjectForm}
                                  title="Edit your basics"
                                />
                              </h6>

                              <p class="text-muted">
                                {projectDetails.project_description}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="mt-2 text-muted">
                          Complete your profile with project details to showcase
                          your hands-on experience and accomplishments. Let your
                          projects speak volumes about your skills and
                          expertise.
                        </p>
                      )}
                    </div>
                    {/* --- Projects information tab end --- */}

                    {/* --- KYC Information tab --- */}
                    <div
                      className="tab-pane fade"
                      id="kyc"
                      role="tabpanel"
                      aria-labelledby="kyc-tab"
                    >
                      <form onSubmit={kycFormik.handleSubmit}>
                        <h3 className="fs-17 fw-semibold mb-3">
                          Identification
                        </h3>
                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <label htmlFor="pan_number" className="form-label">
                              PAN Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="pan_number"
                              onChange={kycFormik.handleChange}
                            />
                          </div>
                          <div className="col-lg-6 mb-3">
                            <label
                              htmlFor="aadhaar_number"
                              className="form-label"
                            >
                              Aadhaar Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="aadhaar_number"
                              onChange={kycFormik.handleChange}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <label htmlFor="pan_front" className="form-label">
                              PAN Front
                            </label>
                            <UploaderServices
                              onFileUpload={handlePanFrontUpload}
                              Filetype="pan_front"
                            />
                          </div>
                          <div className="col-lg-6 mb-3">
                            <label htmlFor="pan_back" className="form-label">
                              PAN Back
                            </label>
                            <UploaderServices
                              onFileUpload={handlePanBackUpload}
                              Filetype="pan_back"
                            />
                          </div>
                          <div className="col-lg-6 mb-3">
                            <label
                              htmlFor="aadhaar_front"
                              className="form-label"
                            >
                              Aadhaar Front
                            </label>
                            <UploaderServices
                              onFileUpload={handleAadhaarFrontUpload}
                              Filetype="aadhaar_front"
                            />
                          </div>
                          <div className="col-lg-6 mb-3">
                            <label
                              htmlFor="aadhaar_back"
                              className="form-label"
                            >
                              Aadhaar Back
                            </label>
                            <UploaderServices
                              onFileUpload={handleAadhaarBackUpload}
                              Filetype="aadhar_back"
                            />
                          </div>
                          <div className="col-lg-6 mb-3">
                            <label htmlFor="passport" className="form-label">
                              Passport
                            </label>
                            <UploaderServices
                              onFileUpload={handlePassportUpload}
                              Filetype="passport"
                            />
                          </div>
                        </div>
                        <div className="mt-4 text-end">
                          <button type="submit" className="btn btn-primary">
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* --- KYC information tab end --- */}

                    {/* --- Resume information tab --- */}
                    <div
                      className="tab-pane fade"
                      id="resume"
                      role="tabpanel"
                      aria-labelledby="resume-tab"
                    >
                      {Array.isArray(resume)
                        ? resume.map((resumeDetails) => (
                            <div className="container">
                              <header className="text-dark text-center p-4">
                                <h1>
                                  {resumeDetails.resume_title
                                    ? resumeDetails.resume_title
                                    : "Your Name"}
                                  <FaPencilAlt
                                    class="text-muted"
                                    style={{
                                      marginLeft: "10px",
                                      fontSize: "12px",
                                      cursor: "pointer",
                                    }}
                                    onClick={handleResumeForm}
                                    title="Edit your basics"
                                  />
                                </h1>
                                <p>{resumeDetails.designation}</p>
                              </header>
                              <main className="p-4">
                                <section className="">
                                  <h2>Contact Information</h2>
                                  <ul className="list-unstyled">
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        Work Experience:
                                      </strong>{" "}
                                      {resumeDetails.work_experience}
                                    </li>
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        Salary Range:
                                      </strong>{" "}
                                      {resumeDetails.salary_range}
                                    </li>
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        Current Location:
                                      </strong>{" "}
                                      {resumeDetails.current_location}
                                    </li>
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        Preferred Location:
                                      </strong>{" "}
                                      {resumeDetails.preferred_location}
                                    </li>
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        Date of Birth:
                                      </strong>{" "}
                                      {resumeDetails.dob} ({resumeDetails.age})
                                    </li>
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        Marital Status:
                                      </strong>{" "}
                                      {resumeDetails.marital_status}
                                    </li>
                                  </ul>
                                </section>

                                <section className="mb-4">
                                  <h2>Education</h2>
                                  <ul className="list-unstyled">
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        UG:
                                      </strong>{" "}
                                      {resumeDetails.course_ug}
                                    </li>
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        PG:
                                      </strong>{" "}
                                      {resumeDetails.course_pg}
                                    </li>
                                    <li>
                                      <strong
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      >
                                        Post PG:
                                      </strong>{" "}
                                      {resumeDetails.post_course_pg}
                                    </li>
                                  </ul>
                                </section>
                              </main>
                            </div>
                          ))
                        : null}
                    </div>
                    <Modal
                      show={resumeDetails}
                      onHide={handleResumeFormClose}
                      dialogClassName="centered-modal"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Resume Information</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form
                          className="p-4"
                          onSubmit={resumeFormik.handleSubmit}
                        >
                          <h3 className="fs-17 fw-semibold mb-3">
                            Resume Information
                          </h3>
                          <div className="row">
                            <div className="col-lg-6 mb-3">
                              <label
                                htmlFor="resume_title"
                                className="form-label"
                              >
                                Resume Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="resume_title"
                                name="resume_title"
                                onChange={resumeFormik.handleChange}
                              />
                            </div>

                            <div className="col-lg-6 mb-3">
                              <label
                                htmlFor="work_experience"
                                className="form-label"
                              >
                                Work Experience
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="work_experience"
                                name="work_experience"
                                onChange={resumeFormik.handleChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div class="col-lg-6">
                              <div class="mb-4">
                                <label for="salary" class="form-label">
                                  Salary
                                </label>
                                <select
                                  class="form-select"
                                  data-trigger=""
                                  name="salary"
                                  id="salary"
                                  aria-label="Default select example"
                                  value={resumeFormik.values.salary}
                                  onChange={resumeFormik.handleChange}
                                >
                                  <option></option>
                                  {Array.isArray(salaries)
                                    ? salaries.map((salary) => (
                                        <option
                                          key={salary.id}
                                          value={salary.id}
                                        >
                                          {salary.name}
                                        </option>
                                      ))
                                    : null}
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                              <label
                                htmlFor="current_location"
                                className="form-label"
                              >
                                Current Location
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="current_location"
                                name="current_location"
                                onChange={resumeFormik.handleChange}
                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="mb-3">
                              <label
                                htmlFor="locationInput"
                                className="form-label"
                              >
                                preferred Location
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="locationInput"
                                value={locationInput}
                                onChange={handleInputChange}
                                onKeyPress={handleInputKeyPress}
                              />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "10px", // Adjust the gap between locations
                              }}
                              className="mb-4"
                            >
                              {updateLocations.map((location, index) => (
                                <div
                                  key={index}
                                  className="d-flex align-items-center"
                                  style={{
                                    backgroundColor: "#f0f0f0",
                                    padding: "5px",
                                    borderRadius: "4px",
                                  }}
                                >
                                  <span
                                    style={{
                                      backgroundColor: "#337ab7",
                                      color: "#fff",
                                      padding: "5px",
                                      borderRadius: "4px",
                                      marginRight: "5px",
                                    }}
                                    className="bg-primary"
                                  >
                                    {location}
                                  </span>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-danger"
                                    onClick={() =>
                                      handleLocationRemove(location)
                                    }
                                  >
                                    X
                                  </button>
                                </div>
                              ))}
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-4">
                                <label for="designation" class="form-label">
                                  Designation
                                </label>
                                <select
                                  class="form-select"
                                  data-trigger=""
                                  name="designation"
                                  id="designation"
                                  aria-label="Default select example"
                                  value={resumeFormik.values.designation}
                                  onChange={resumeFormik.handleChange}
                                >
                                  <option></option>
                                  {Array.isArray(designations)
                                    ? designations.map((designation) => (
                                        <option
                                          key={designation.id}
                                          value={designation.id}
                                        >
                                          {designation.name}
                                        </option>
                                      ))
                                    : null}
                                </select>
                                {resumeFormik.touched.designation &&
                                  resumeFormik.errors.designation && (
                                    <span className="error">
                                      {resumeFormik.errors.designation}
                                    </span>
                                  )}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-6 mb-3">
                              <label htmlFor="course_ug" className="form-label">
                                Course (UG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="course_ug"
                                name="course_ug"
                                onChange={resumeFormik.handleChange}
                              />
                            </div>
                            <div className="col-lg-6 mb-3">
                              <label htmlFor="course_pg" className="form-label">
                                Course (PG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="course_pg"
                                id="course_pg"
                                onChange={resumeFormik.handleChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 mb-3">
                              <label
                                htmlFor="post_course_pg"
                                className="form-label"
                              >
                                Post Course (PG)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="post_course_pg"
                                name="post_course_pg"
                                onChange={resumeFormik.handleChange}
                              />
                            </div>
                            <div className="col-lg-6 mb-3">
                              <label htmlFor="dob" className="form-label">
                                Date of Birth
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="dob"
                                name="dob"
                                onChange={resumeFormik.handleChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 mb-3">
                              <label htmlFor="age" className="form-label">
                                Age
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="age"
                                name="age"
                                onChange={resumeFormik.handleChange}
                              />
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-4">
                                <label for="marital_status" class="form-label">
                                  Marital Status
                                </label>
                                <select
                                  class="form-select"
                                  data-trigger=""
                                  name="marital_status"
                                  id="marital_status"
                                  aria-label="Default select example"
                                  value={resumeFormik.values.marital_status}
                                  onChange={resumeFormik.handleChange}
                                >
                                  <option></option>
                                  {Array.isArray(maritalStatus)
                                    ? maritalStatus.map((marital) => (
                                        <option
                                          key={marital.id}
                                          value={marital.id}
                                        >
                                          {marital.name}
                                        </option>
                                      ))
                                    : null}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 text-end">
                            <button type="submit" className="btn btn-primary">
                              Update
                            </button>
                          </div>
                        </form>
                      </Modal.Body>
                    </Modal>
                    {/* --- Resume information tab end --- */}

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
