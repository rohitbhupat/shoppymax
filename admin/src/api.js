
const apiBaseUrl = "http://localhost:3000/dev"; // Replace with your actual local server URL

export const fetchData = async (endpoint, options = {}) => {
  try {
    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    const response = await fetch(`${apiBaseUrl}/${endpoint}`, defaultOptions);
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorDetails}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const getAdmin = async () => {
  try {
    const response = await fetchData('getadmin');
    return response;
  } catch (error) {
    console.error("Error fetching admin:", error.message);
    throw error;
  }
};

export const addAdmin = async (adminData) => {
  try {
    const response = await fetchData('addadmin', {
      method: 'POST',
      body: JSON.stringify(adminData),
    });
    return response;
  } catch (error) {
    console.error("Error adding admin:", error.message);
    throw error;
  }
};
