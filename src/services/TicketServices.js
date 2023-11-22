import ApiService from "./ApiService";

// Edit ticket details
export const editTicket = async (payload, id) => {
  try {
    const response = await ApiService(
        `ticket-edit?ticket_id=${id}`, 
        "POST", 
        payload, 
        true
        );
    return response;
  } catch (error) {
    throw new Error("Error while edit ticket");
  }
};

// Edit ticket details
export const fetchTicketDetails = async (id) => {
    try {
      const response = await ApiService(
          `view-ticket?ticket_id=${id}`, 
          "GET", 
          null, 
          true
          );
      return response;
    } catch (error) {
      throw new Error("Error while edit ticket");
    }
  };