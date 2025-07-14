import axios from "axios";

// Create an Axios instance with the base URL
const API = axios.create({ baseURL: "http://localhost:5000" });

// Attach token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // Retrieve the token from local storage
  if (token) {
    req.headers["x-auth-token"] = token; // Attach the token to the request headers
  }
  return req; // Return the modified request
});

// API functions
export const login = (formData) => API.post("/api/auth/login", formData);
export const register = (formData) => API.post("/api/auth/register", formData);
export const createProject = (formData) => API.post("/api/projects", formData);
export const getProjects = () => API.get("/api/projects");
export const getSubmissionID = (projectID) => API.get(`/api/projects/users/${projectID}`);
export const getOneProject = (PID) => API.get(`/api/projects/${PID}`);
export const getStudentSubmissions = (studentId) =>
  API.get(`/api/submissions/${studentId}`);
export const submitProject = (formData, studentId) =>
  API.post(`/api/submissions/${studentId}`, formData);

export const downloadFile = async (type, id) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/submissions/download/${type}/${id}`,
      {
        responseType: "arraybuffer", // Set the response type to handle binary data
      }
    );
    return response;
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};

export const getUserid = (id) => API.get(`/api/user/sid/:${id}`);
