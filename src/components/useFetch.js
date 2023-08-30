import { useState, useEffect } from "react";
import ApiService from "../services/ApiService";

function useFetch(endpoint) {
  // Create a state for reusable
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService(endpoint, "GET", null, false);
        if (response.data.status_code === 200) {
          const res = response.data.data;
          setData(res);
          // const responseData = await response.json();
          // setData(responseData.data);
        } else {
          setError("Error fetching data");
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error };
}

export default useFetch;
