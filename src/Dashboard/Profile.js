import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Services
import {
  companyStrength,
  getCompanyProfile,
  updateCompanyOverview,
  updateEmployerProfile,
} from "../services/ProfilePageService";
import useFetch from "../components/useFetch";

// Formik
import { useFormik } from "formik";
import * as Yup from "yup";
import { fetchStats } from "../services/DashboardServices";

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
  const [stats, setStats] = useState("");

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
    console.log("No data");
  }

  //Profile formik
  const profileValidation = Yup.object({
    first_name: Yup.string().required("Please enter firstname"),
    employer_designation: Yup.string().required("Please enter designation"),
  });

  const editProfileFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: name,
      last_name: lastName,
      employer_designation: designation,
    },
    validationSchema: profileValidation,
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

  const overviewValidation = Yup.object({
    company_name: Yup.string().required("Please enter the company name"),
    company_strength: Yup.string().required(
      "Please select your company strength"
    ),
    address: Yup.string().required("Please enter your address"),
    country: Yup.string().required("Please enter your country"),
    state: Yup.string().required("Please enter your state"),
    city: Yup.string().required("Please enter your city"),
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
    console.log("No data");
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
    validationSchema: overviewValidation,
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

  // Stats
  const fetchDashboardStats = async () => {
    try {
      const response = await fetchStats();
      console.log(response.data.data);
      setStats(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    strength();
    fetchCompanyProfileDetails();
    fetchDashboardStats();
  }, []);

  return (
    <div className="page-content" style={{ marginBottom: "50px" }}>
      <div>
        <div className="row mt-3">
          <div className="col-xl-4 col-md-5 col-sm-6 mb-4">
            <div
              className="secondary-card text-white"
              style={{
                padding: "20px",
                borderRadius: "5px",
                background: "#ADD8E6",
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title" style={{ color: "#1565C0" }}>
                    Job applied
                  </h5>
                </div>
                <div>
                  <h1 className="card-text" style={{ color: "#1565C0" }}>
                  {stats.applied_jobs >= 0 ? stats.applied_jobs : "_"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-7 col-sm-6 mb-4">
            <div
              className="secondary-card text-white"
              style={{
                padding: "20px",
                borderRadius: "5px",
                background: "#C1FFC1",
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title" style={{ color: "#2E7D32" }}>
                    Approved jobs
                  </h5>
                </div>
                <div>
                  <h1 className="card-text" style={{ color: "#2E7D32" }}>
                    {stats.approved_jobs >= 0 ? stats.approved_jobs : "_"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
            <div
              className="secondary-card text-white"
              style={{
                padding: "20px",
                borderRadius: "5px",
                background: "#FFCCCC",
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title" style={{ color: "#B71C1C" }}>
                    Not approved Jobs
                  </h5>
                </div>
                <div>
                  <h1 className="card-text" style={{ color: "#B71C1C" }}>
                    {stats.rejected_jobs >= 0 ? stats.rejected_jobs : "_"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
            <div
              className="secondary-card text-white"
              style={{
                padding: "20px",
                borderRadius: "5px",
                background: "#FFCCCC",
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title" style={{ color: "#B71C1C" }}>
                    Closed Jobs
                  </h5>
                </div>
                <div>
                  <h1 className="card-text" style={{ color: "#B71C1C" }}>
                    {stats.closed_jobs >= 0 ? stats.closed_jobs : "_"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
            <div
              className="secondary-card text-white"
              style={{
                padding: "20px",
                borderRadius: "5px",
                background: "#FFE4B5",
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title" style={{ color: "#E65100" }}>
                    Approval pending Jobs
                  </h5>
                </div>
                <div>
                  <h1 className="card-text" style={{ color: "#E65100" }}>
                    {stats.pending_jobs >= 0 ? stats.pending_jobs : "_"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-6 mb-4">
            <div
              className="secondary-card text-white"
              style={{
                padding: "20px",
                borderRadius: "5px",
                background: "#FFF9C4",
              }}
            >
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title" style={{ color: "#FBC02D" }}>
                    Created Jobs
                  </h5>
                </div>
                <div>
                  <h1 className="card-text" style={{ color: "#FBC02D" }}>
                    {stats.all_jobs_count >= 0 ? stats.all_jobs_count : "_"}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
