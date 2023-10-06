import ApiService from "./ApiService";

//! Company and Employer profile
// Get company profile details
export const companyStrength = async () => {
  try {
    const response = await ApiService("company-strengths", "GET", null, true);
    return response;
  } catch (error) {
    throw new Error("Error while getting company strength");
  }
};

export const getCompanyProfile = async () => {
  try {
    const response = await ApiService(
      "employer-profile-details",
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Couldn't get company profile");
  }
};

export const updateEmployerProfile = async (payload) => {
  try {
    const response = await ApiService(
      "update-company-overview",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Couldn't get company profile");
  }
};

//! Jobseeker profile
// Get avatar
export const fetchAvatar = async () => {
  try {
    const response = await ApiService(
      "candidate-Avatar-or-logo-details",
      "GET",
      null,
      true
    );

    return response;
  } catch (error) {
    throw new Error("Error while fetching your avatar");
  }
};

// Contact details
export const fetchContactDetails = async () => {
  try {
    const response = await ApiService(
      "candidate-contact-details",
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching your contact details");
  }
};

// Create and edit about details
export const createAbout = async (payload) => {
  try {
    const response = await ApiService(
      "candidate-about-me-create-or-update",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while creating your about");
  }
};

export const fetchAbout = async () => {
  try {
    const response = await ApiService(
      "candidate-about-me-details",
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching your about");
  }
};

//  General details service
export const candidateGeneralDetails = async () => {
  try {
    const response = await ApiService(
      "candidate-general-details",
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while updating user profile");
  }
};

// Update General Details service
export const candidateUpdateGeneralDetails = async (id, payload) => {
  try {
    const response = await ApiService(
      `candidate-general-details-update?user_id=${id}`,
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while updating general profile");
  }
};

// Skill fetch and post services
export const fetchSkills = async () => {
  try {
    const response = await ApiService(
      "candidate-skill-details",
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching skills");
  }
};

export const createSkills = async (payload) => {
  try {
    const response = await ApiService(
      "candidate-skill-details-create",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while creating skills");
  }
};

// Update skills
export const updateSkills = async (payload) => {
  try {
    const response = await ApiService(
      "candidate-skill-details-update",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while creating skills");
  }
};

// Fetching resume details and updating
export const createResume = async (payload) => {
  try {
    const response = await ApiService(
      "candidate-resume-data-create-and-update",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching resume details");
  }
};

export const fetchResumeDetails = async () => {
  try {
    const response = await ApiService(
      "candidate-resume-data",
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching resume details");
  }
};

// Education add & update service
export const fetchEducation = async () => {
  try {
    const response = await ApiService(
      `candidate-education-details`,
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching education");
  }
};

// Create education
export const createEducation = async (payload, id) => {
  try {
    const response = await ApiService(
      `candidate-education-details-create?user_id=${id}`,
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while creating education");
  }
};

// Update Education Information
export const updateEducation = async (payload, educationId) => {
  try {
    const response = await ApiService(
      `candidate-education-details-update?candidate_edu_id=${educationId}`,
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while creating education");
  }
};

// Create and edit experience
export const fetchExperience = async () => {
  try {
    const response = await ApiService(
      "candidate-experience-details",
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching experience");
  }
};

export const createExperience = async (payload, id) => {
  try {
    const response = await ApiService(
      `candidate-experience-details-create?user_id=${id}`,
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while creating experience");
  }
};

export const updateExperience = async (payload, experienceId) => {
  try {
    const response = await ApiService(
      `candidate-experience-details-update?candiate_exp_id=${experienceId}`,
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while updating experience");
  }
};

// Create project and edit project
export const fetchProjects = async () => {
  try {
    const response = await ApiService(
      "candidate-project-details",
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching projects");
  }
};

export const createProject = async (payload, experienceId) => {
  try {
    const response = await ApiService(
      `candidate-project-details-create?user_id=${experienceId}`,
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while creating project");
  }
};

export const updateProject = async (payload, projectId) => {
  try {
    const response = await ApiService(
      `candidate-project-details-update?candiate_project_id=${projectId}`,
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while updating project");
  }
};

// JobSeeker KYC uploads
export const jobSeekerKyc = async (payload) => {
  try {
    const response = await ApiService(`user-kyc-update`, "POST", payload, true);
    return response;
  } catch (error) {
    throw new Error("Error while uploading");
  }
};
