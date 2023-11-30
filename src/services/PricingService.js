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

export const addToCart = async (payload) => {
  try {
    const response = await ApiService(
      "add-to-cart",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while adding to cart", error);
  }
};

export const checkOut = async (payload) => {
  try {
    const response = await ApiService(
      "subscription",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while purchase", error);
  }
};