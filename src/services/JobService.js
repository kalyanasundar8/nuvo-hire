import ApiService from "./ApiService";

// Update a job details
export const updateJob = async (payload, id) => {
  try {
    const response = await ApiService(
      `update-job?id=${id}`, 
      "POST", 
      payload, 
      true);
    return response;
  } catch (error) {
    throw new Error("Error while updating a Job");
  }
};

// Creating a new JobService
export const createJobPostService = async (payload) => {
  try {
    const response = await ApiService("post-new-job", "POST", payload, true);
    return response;
  } catch (error) {
    throw new Error("Error while creating a new Job");
  }
};

// Fetching all jobs data service
export const fetchAllJobs = async () => {
  try {
    const response = await ApiService("jobs", "GET", null, false);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching all jobs data");
  }
};

// Delete jobs
export const deleteEmployeeJobs = async (payload) => {
  try {
    const response = await ApiService(
      "delete-job",
      "POST",
      payload,
      true
    );
    return response
  } catch (error) {
    throw new Error("Error while deleting");
  }
};

// Fetching jobs based on subCategories
export const fetchCategoriesJob = async (subCategoryId) => {
  try {
    const response = await ApiService(
      `jobs?subcategory_id=${subCategoryId}`,
      "GET",
      null,
      false
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching jobs based on subCategories");
  }
};

// AppliedJobs Services
export const fetchAppliedJobs = async (id) => {
  try {
    const response = await ApiService(
      `view-applied-candidates?manage_job_id=${id}`, 
      "GET", 
      null, 
      true
      );
    return response;
  } catch (error) {
    throw "Error while fetching AppliedJobs: " + error;
  }
};

export const fetchJoseekerAppliedJobs = async () => {
  try {
    const response = await ApiService(
      "view-applied-jobs", 
      "GET", 
      null, 
      true
      );
    return response;
  } catch (error) {
    throw "Error while fetching AppliedJobs: " + error;
  }
};



export const addSorlistedCandidates = async (payload) => {
  try {
    const response = await ApiService(
      "candidate-shortlist-create", 
      "POST", 
      payload, 
      true
      );
    return response;
  } catch (error) {
    throw "Error while fetching AppliedJobs: " + error;
  }
};

export const fetchApplicationDetails = async (payload) => {
  try {
    const response = await ApiService(
      "view-shortlisted-candidates", 
      "GET", 
      payload, 
      true
      );
    return response;
  } catch (error) {
    throw "Error while fetching AppliedJobs: " + error;
  }
}

// BookmarkJob Services
export const fetchBookmarkJob = async () => {
  try {
    const response = await ApiService("bookmark-jobs", "GET", null, true);
    return response;
  } catch (error) {
    throw "Error while fetching BookmarkJob: " + error;
  }
};

// Manage Jobs Services
export const fetchEmployeeMyJobs = async (payload) => {
  try {
    console.log(payload)
    const response = await ApiService("myjobs", "POST", payload, true);
    return response;
  } catch (error) {
    throw "Error while fetching BookmarkJob: " + error;
  }
};

// Profiles Services
export const fetchProfiles = async (id) => {
  try {
    const response = await ApiService(
      `profile-details?user_id=${id}`,
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw "Error while fetching profile";
  }
};

// Update user profile service
export const updateUserProfile = async (payload) => {
  try {
    const response = await ApiService(
      "candidate-update",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while updating user profile");
  }
};

// All SubCategory Services
export const fetchAllSubCategories = async () => {
  try {
    const response = await ApiService("sub-categories", "GET", null, false);
    return response.data.data;
  } catch (error) {
    throw new Error("Error while fetching sub-category");
  }
};

// Fetches single SubCategory Services
export const fetchSingleSubCategories = async (id) => {
  try {
    const response = await ApiService(
      `sub-categories?category_id=${id}`,
      "GET",
      null,
      false
    );
    return response.data.data;
  } catch (error) {
    throw new Error("Error while fetching sub-category");
  }
};
