import ApiService from "./ApiService";

export const fetchRss = async () => {
  try {
    const response = await ApiService("employer-rss-feeds", "GET", null, true);
    return response;
  } catch (error) {
    throw new Error("Error while fetching RSS", error);
  }
};
