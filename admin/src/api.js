const apiBaseUrl = "http://localhost:3000/dev"; // Replace with your actual local server URL

export const fetchData = async (endpoint, options = {}) => {
  try {
    const defaultOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    const response = await fetch(`${apiBaseUrl}/${endpoint}`, defaultOptions);
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, details: ${errorDetails}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

// Admin endpoints
export const getAdmin = async () => {
  try {
    const response = await fetchData("getadmin");
    return response;
  } catch (error) {
    console.error("Error fetching admin:", error.message);
    throw error;
  }
};

export const addAdmin = async (adminData) => {
  try {
    const response = await fetchData("addadmin", {
      method: "POST",
      body: JSON.stringify(adminData),
    });
    return response;
  } catch (error) {
    console.error("Error adding admin:", error.message);
    throw error;
  }
};

export const updateAdmin = async (id, adminData) => {
  try {
    const response = await fetch(`${apiBaseUrl}/updateadmin/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, details: ${errorDetails}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating admin:", error.message);
    throw error;
  }
};

// Product endpoints
export const addProduct = async (productData) => {
  try {
    const response = await fetch(`${apiBaseUrl}/addproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, details: ${errorDetails}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding product:", error.message);
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${apiBaseUrl}/updateproduct/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(
      `HTTP error! status: ${response.status}, details: ${JSON.stringify(
        errorDetails
      )}`
    );
  }
  const data = await response.json();
  return data;
};

export const getProducts = async () => {
  try {
    const response = await fetchData("getproducts");
    console.log("Response from getProducts:", response); // Log response to inspect in console

    if (Array.isArray(response)) {
      return response; // Assuming response is an array of products
    } else {
      return []; // Return an empty array if response is not an array
    }
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};


export const getProductById = async (id) => {
  const response = await fetch(`${apiBaseUrl}/getproducts/${id}`);
  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(
      `HTTP error! status: ${response.status}, details: ${JSON.stringify(
        errorDetails
      )}`
    );
  }
  const data = await response.json();
  return data;
};

export const deleteProductById = async (id) => {
  try {
    const response = await fetch(`${apiBaseUrl}/deleteproduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, details: ${errorDetails}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting product:", error.message);
    throw error;
  }
};
