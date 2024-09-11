import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:8081/api",
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("Request Sent:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log("Response Received:", response);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Response Error:", error.response);

      // Handle specific status codes
      switch (error.response.status) {
        case 400:
          console.error("Bad Request");
          break;
        case 404:
          console.error("Resource Not Found");
          break;
        case 500:
          console.error("Internal Server Error");
          break;
        default:
          console.error("An error occurred:", error.response.status);
      }
    } else if (error.request) {
      console.error("No Response:", error.request);
    } else {
      console.error("Error Setting Up Request:", error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
