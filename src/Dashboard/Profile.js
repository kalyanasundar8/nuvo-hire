import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// React bootstrap Form
import { Modal } from "react-bootstrap";

// Icons from react-icons
import {
  IoLocationSharp,
  IoHomeOutline,
  IoFlagOutline,
  IoEarthOutline,
  IoLocationOutline,
  IoLocation,
  IoGlobeOutline,
  IoPeopleOutline,
  IoBusinessOutline,
  IoDocumentTextOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

// Services
import AvatarUploader from "../services/AvatarUploader";
import {
  companyStrength,
  getCompanyProfile,
  updateCompanyOverview,
  updateEmployerProfile,
} from "../services/ProfilePageService";
import useFetch from "../components/useFetch";
import { useFormik } from "formik";
import ErrorModel from "../components/layouts/ErrorModel";
import SuccessModel from "../components/layouts/SuccessModel";

function Profile() {
  const { id } = useParams();

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  const [strengthList, setStrengthList] = useState("");

  const strength = async () => {
    try {
      const response = await companyStrength();
      console.log(response);
      setStrengthList(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const [companyProfile, setCompanyProfile] = useState("");
  const [companyOverview, setCompanyOverview] = useState("");
  const [companyContact, setCompanyContact] = useState("");

  // Avatar handling
  const handleAvatarUpload = (avatarPath) => {
    console.log("Avatar uploaded: ", avatarPath);
  };

  // Fetching Company details
  const fetchCompanyProfileDetails = async () => {
    try {
      const response = await getCompanyProfile();
      console.log(response.data.data);
      setCompanyProfile(response.data.data.profile);
      setCompanyOverview(response.data.data.over_view);
      setCompanyContact(response.data.data.contact);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Edit functionalities
  const [profileForm, setProfileForm] = useState(false);
  const [overviewForm, setOverviewForm] = useState(false);

  const handleProfileForm = () => {
    setProfileForm(true);
  };

  const handleProfileFormClose = () => {
    setProfileForm(false);
  };

  const handleOverviewForm = () => {
    setOverviewForm(true);
  };

  const handleOverviewFormClose = () => {
    setOverviewForm(false);
  };

  // Edit functionalities end

  // Formik & create, edit functionalities
  let name = "";
  let lastName = "";
  let designation = "";

  if (Array.isArray(companyProfile)) {
    const firstProfile = companyProfile[0];
    console.log(firstProfile);
    name = firstProfile.name || "";
    lastName = firstProfile.last_name || "";
    designation = firstProfile.employer_designation || "";
    // console.log(firstProfile.name);
    // console.log(firstProfile.last_name);
    // console.log(firstProfile.employer_designation);
  } else {
    console.log("No data")
  }
  
  const profileFormik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      employer_designation: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const editProfileFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: name,
      last_name: lastName,
      employer_designation: designation,
    },
    onSubmit: (values) => {
      console.log(values);
      editProfileDetails(values);
    },
  });

  const editProfileDetails = async () => {
    const payload = {
      first_name: editProfileFormik.values.first_name,
      last_name: editProfileFormik.values.last_name,
      employer_designation: editProfileFormik.values.employer_designation,
    };

    try {
      const response = await updateEmployerProfile(payload);
      if (response?.data?.status_code === 200) {
        console.log(response?.data?.message);
        setSuccess(response?.data?.message);
    
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } else {
        console.log(response);
        setError("Please enter the firstname field");
    
        // Clear error message after 3 seconds
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };


  // Overview

  const overviewFormik = useFormik({
    initialValues: {
      company_name: "",
      website: "",
      company_strength: "",
      description: "",
      address: "",
      country: "",
      state: "",
      pincode: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  let companyName = "";
  let website = "";
  let comStrength = "";
  let description = "";
  let address = "";
  let Country = "";
  let State = "";
  let City = "";
  let PinCode = "";

  if (Array.isArray(companyOverview)) {
    const firstOverview = companyOverview[0];
    console.log(firstOverview);
    companyName = firstOverview.company_name || "";
    website = firstOverview.website || "";
    comStrength = firstOverview.company_strength || "";
    description = firstOverview.company_description || "";
    address = firstOverview.address || "";
    Country = firstOverview.country || "";
    State = firstOverview.state || "";
    City = firstOverview.city || "";
    PinCode = firstOverview.pincode || "";
    console.log(firstOverview.company_name);
    // console.log(firstProfile.last_name);
    // console.log(firstProfile.employer_designation);
  } else {
    console.log("No data")
  }

  const editOverviewFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      company_name: companyName,
      website: website,
      company_strength: comStrength,
      company_description: description,
      address: address,
      country: Country,
      state: State,
      city: City,
      pincode: PinCode,
    },
    onSubmit: (values) => {
      console.log(values);
      updateOverviewDetails(values);
    },
  });

  const updateOverviewDetails = async () => {
    const payload = {
      company_name: editOverviewFormik.values.company_name,
      website: editOverviewFormik.values.website,
      company_strength: editOverviewFormik.values.company_strength,
      company_description: editOverviewFormik.values.company_description,
      address: editOverviewFormik.values.address,
      country: editOverviewFormik.values.country,
      state: editOverviewFormik.values.state,
      city: editOverviewFormik.values.city,
      pincode: editOverviewFormik.values.pincode,
    };

    try {
      const response = await updateCompanyOverview(payload);
      console.log(response);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  // Formik functionality end

  useEffect(() => {
    strength();
    fetchCompanyProfileDetails();
    // profileDetails();
  }, []);

  return (
    <div
      className='page-content'
      style={{ marginBottom: "50px" }}
    >
        <div>
        <div className="row mt-3">
            <div className="col-xl-4 col-md-5 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#ADD8E6" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#1565C0" }}>
                      Job applied
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#1565C0" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-7 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#C1FFC1" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#2E7D32" }}>
                      Approved jobs
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#2E7D32" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#FFCCCC" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#B71C1C" }}>
                      Not approved Jobs
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#B71C1C" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#FFE4B5" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#E65100" }}>
                      Approval pending Jobs
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#E65100" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
              <div
                className="card text-white"
                style={{ background: "#FFF9C4" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title" style={{ color: "#FBC02D" }}>
                      Created Jobs
                    </h5>
                  </div>
                  <div>
                    <h1 className="card-text" style={{ color: "#FBC02D" }}>
                      8
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* All forms */}
      {/* ---------------- */}
      {/* Profile form */}
      <Modal
        show={profileForm}
        onHide={handleProfileFormClose}
        dialogClassName='centered-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { error ? (<ErrorModel error={error}/>) : success ? (<SuccessModel success={success}/>) : ""}
          <div className='p-4'>
            <form onSubmit={editProfileFormik.handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='first_name' className='form-label'>
                  First Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='firstName'
                  name='first_name'
                  placeholder='Enter your first name'
                  value={editProfileFormik.values.first_name}
                  onBlur={editProfileFormik.handleBlur}
                  onChange={editProfileFormik.handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='last_name' className='form-label'>
                  Last Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='lastName'
                  name='last_name'
                  placeholder='Enter your last name'
                  value={editProfileFormik.values.last_name}
                  onBlur={editProfileFormik.handleBlur}
                  onChange={editProfileFormik.handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='employer_designation' className='form-label'>
                  Designation
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='employer_designation'
                  name='employer_designation'
                  placeholder='Enter your designation'
                  value={editProfileFormik.values.employer_designation}
                  onBlur={editProfileFormik.handleBlur}
                  onChange={editProfileFormik.handleChange}
                />
              </div>
              <div className='text-end mt-4'>
                <button className='btn btn-primary' type='submit'>
                  Update
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* Profile form ends here */}
      {/* ------------------------- */}
      <Modal
        show={overviewForm}
        onHide={handleOverviewFormClose}
        dialogClassName='centered-modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4'>
            <form onSubmit={editOverviewFormik.handleSubmit}>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='company_name' className='form-label'>
                    Company Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='companyName'
                    name='company_name'
                    placeholder='Enter your company name'
                    value={editOverviewFormik.values.company_name}
                    onBlur={editOverviewFormik.handleBlur}
                    onChange={editOverviewFormik.handleChange}
                  />
                </div>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='website' className='form-label'>
                    Website
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='website'
                    name='website'
                    placeholder='Enter your website'
                    value={editOverviewFormik.values.website}
                    onBlur={editOverviewFormik.handleBlur}
                    onChange={editOverviewFormik.handleChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='company_strength' className='form-label'>
                    Company Strength
                  </label>
                  <select
                    className='form-control'
                    id='companyStrength'
                    name='company_strength'
                    placeholder='Select company strength'
                    onBlur={editOverviewFormik.handleBlur}
                    onChange={editOverviewFormik.handleChange}
                  >
                    {/* <option disabled>{comStrength}</option> */}
                    {Array.isArray(strengthList) &&
                      strengthList.map((strength) => (
                        <option value={strength.id}>{strength.strength}</option>
                      ))}
                  </select>
                </div>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='company_description' className='form-label'>
                    Description
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='description'
                    name='company_description'
                    placeholder='Enter your description'
                    value={editOverviewFormik.values.company_description}
                    onBlur={editOverviewFormik.handleBlur}
                    onChange={editOverviewFormik.handleChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='address' className='form-label'>
                    Address
                  </label>
                  <textarea
                    className='form-control'
                    id='address'
                    name='address'
                    placeholder='Enter your address'
                    value={editOverviewFormik.values.address}
                    onBlur={editOverviewFormik.handleBlur}
                    onChange={editOverviewFormik.handleChange}
                  />
                </div>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='country' className='form-label'>
                    Country
                  </label>
                  <select
                    className='form-select'
                    name='country'
                    value={editOverviewFormik.values.country}
                    onBlur={editOverviewFormik.handleBlur}
                    // value={country}
                    onChange={(e) => {
                      editOverviewFormik.handleChange(e);
                      setCountry(e.target.value);
                    }}
                  >
                    {/* <option disabled>{ Country }</option> */}
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
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='state' className='form-label'>
                    State
                  </label>
                  <select
                    className='form-select'
                    name='state'
                    value={editOverviewFormik.values.state}
                    onBlur={editOverviewFormik.handleBlur}
                    // value={state}
                    onChange={(e) => {
                      editOverviewFormik.handleChange(e);
                      setState(e.target.value);
                    }}
                  >
                    {/* <option disabled>{ State }</option> */}
                    {Array.isArray(statesData.data) &&
                      statesData.data.map((states) => (
                        <option key={states.id} value={states.id}>
                          {states.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='city' className='form-label'>
                    City
                  </label>
                  <select
                    className='form-select'
                    name='city'
                    value={editOverviewFormik.values.city}
                    onBlur={editOverviewFormik.handleBlur}
                    onChange={(e) => {
                      editOverviewFormik.handleChange(e);
                      setCity(e.target.value);
                    }}
                  >
                    {/* <option disabled>{ City }</option> */}
                    {Array.isArray(cityData.data) &&
                      cityData.data.map((cities) => (
                        <option key={cities.id} value={cities.id}>
                          {cities.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label htmlFor='pincode' className='form-label'>
                    Pincode
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='pincode'
                    name='pincode'
                    placeholder='Enter your pincode'
                    value={editOverviewFormik.values.pincode}
                    onBlur={editOverviewFormik.handleBlur}
                    onChange={editOverviewFormik.handleChange}
                  />
                </div>
              </div>
              <div className='text-end mt-4'>
                <button className='btn btn-primary' type='submit'>
                  Update
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {/* Overview form */}

      {/* Overview form ends here */}
      {/* Forms ends here */}

      <div className='row' style={{ maxWidth: "1000px", margin: "50px auto"}}>
        <div className='col-md-4'>
          {/* Profile Section */}
          <div className='card'>
            <h4 className='card-header'>Profile</h4>
            {Array.isArray(companyProfile) &&
              companyProfile.map((profile) => (
                <div className='card-body text-center'>
                  <AvatarUploader onAvatarUpload={handleAvatarUpload} />
                  <h5>
                    {profile.name} <span>{profile.last_name}</span>
                    <FaPencilAlt
                      class='text-muted'
                      style={{
                        marginLeft: "10px",

                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                      onClick={handleProfileForm}
                      title='Edit your basics'
                    />
                  </h5>

                  <p>{profile.employer_designation}</p>
                </div>
              ))}
          </div>
        </div>

        <div className='col-md-8'>
          {/* Overview Section */}
          {Array.isArray(companyOverview) &&
            companyOverview.map((overview) => (
              <div className='card'>
                <div className='card-header d-flex align-center justify-content-between'>
                  <h4>Overview</h4>
                  <FaPencilAlt
                    class='text-muted'
                    style={{
                      marginLeft: "10px",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                    onClick={handleOverviewForm}
                    title='Edit your company overview details'
                  />
                </div>
                {/* Description */}
                <div
                  class='d-flex align-items-center'
                  style={{
                    margin: "20px 0px 10px 20px",
                  }}
                >
                  <div
                    class='icon bg-primary-subtle text-primary flex-shrink-0'
                    style={{
                      padding: "5px 10px",
                      fontSize: "20px",
                      borderRadius: "50px",
                    }}
                  >
                    <IoDocumentTextOutline />
                  </div>
                  <div class='ms-3'>
                    <h6 class='fs-14 mb-1'>Description</h6>
                    <p class='text-muted mb-0'>
                      {overview.company_description
                        ? overview.company_description
                        : "Not Disclosed"}
                    </p>
                  </div>
                </div>
                <div className='card-body d-flex align-center justify-content-between'>
                  <div className='left'>
                    <ul class='list-unstyled mb-0'>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-primary-subtle text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoBusinessOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>Company Name</h6>
                            <p class='text-muted mb-0'>
                              {overview.company_name
                                ? overview.company_name
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-primary-subtle text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoGlobeOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>Website</h6>
                            <p class='text-muted mb-0'>
                              {overview.website
                                ? overview.website
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-primary-subtle text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoPeopleOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>Company Strength</h6>
                            <p class='text-muted mb-0'>
                              {overview.company_strength
                                ? overview.company_strength
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-primary-subtle text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoLocation />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>PinCode</h6>
                            <p class='text-muted mb-0'>
                              {overview.pincode
                                ? overview.pincode
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='right'>
                    <ul class='list-unstyled mb-0'>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-primary-subtle text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoHomeOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>Address</h6>
                            <p class='text-muted mb-0'>
                              {overview.address
                                ? overview.address
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-primary-subtle text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoFlagOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>Country</h6>
                            <p class='text-muted mb-0'>
                              {overview.country
                                ? overview.country
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-primary-subtle text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoLocationSharp />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>State</h6>
                            <p class='text-muted mb-0'>
                              {overview.state
                                ? overview.state
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-primary-subtle text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoLocationOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>City</h6>
                            <p class='text-muted mb-0'>
                              {overview.city ? overview.city : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}

          {/* Contact Section */}
          {Array.isArray(companyContact) &&
            companyContact.map((contact) => (
              <div className='card mt-4'>
                <div className='card-header'>
                  <h4>Contact Information</h4>
                </div>
                <div className='card-body d-flex align-center justify-content-between'>
                  <div className='left'>
                    <ul class='list-unstyled mb-0'>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-muted-gray text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoMailOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>Email</h6>
                            <p class='text-muted mb-0'>
                              {contact.email ? contact.email : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-muted-gray text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoCallOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>Phone</h6>
                            <p class='text-muted mb-0'>
                              {contact.phone ? contact.phone : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class='d-flex align-items-center mt-4'>
                          <div
                            class='icon bg-muted-gray text-primary flex-shrink-0'
                            style={{
                              padding: "5px 10px",
                              fontSize: "20px",
                              borderRadius: "50px",
                            }}
                          >
                            <IoLocationOutline />
                          </div>
                          <div class='ms-3'>
                            <h6 class='fs-14 mb-1'>Address</h6>
                            <p class='text-muted mb-0'>
                              {contact.address
                                ? contact.address
                                : "Not Disclosed"}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
