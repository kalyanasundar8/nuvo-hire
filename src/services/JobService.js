import ApiService from "./ApiService";

// Fetching all jobs data service
export const fetchAllJobs = async () => {
  try {
    const response = await ApiService("jobs", "GET", null, false);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching all jobs data");
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
export const fetchAppliedJobs = async () => {
  try {
    const response = await ApiService("view-applied-jobs", "GET", null, true);
    return response;
  } catch (error) {
    throw "Error while fetching AppliedJobs: " + error;
  }
};

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
export const fetchEmployeeMyJobs = async () => {
  try {
    const response = await ApiService("myjobs", "GET", null, true);
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