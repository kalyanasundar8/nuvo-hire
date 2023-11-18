import ApiService from "./ApiService";

// cart details
export const cartDetails = async (payload) => {
  try {
    const response = await ApiService("add-to-cart", "POST", payload, true);
    return response;
  } catch (error) {
    throw new Error("Error while fetching cart details");
  }
};

// View Cart details
export const viewCartDetails = async (payload) => {
  try {
    const response = await ApiService("view-cart", "GET", payload, true);
    return response;
  } catch (error) {
    throw new Error("Error while fetching cart details");
  }
};

// Remove from the cart
export const removeFromCart = async (payload) => {
  try {
    const response = await ApiService(
      "remove-from-cart",
      "POST",
      payload,
      true
    );
    return response;
  } catch (error) {
    throw new Error("Error while removing cart details");
  }
};
