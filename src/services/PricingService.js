import ApiService from "./ApiService";

export const fetchPricing = async (userTypes) => {
  try {
    const response = await ApiService(
      `packages?value=${userTypes}`,
      "GET",
      null,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while fetching price details", error);
  }
};
