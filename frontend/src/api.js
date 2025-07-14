import axios from "axios";
const API = axios.create({ baseURL: "https://project-portal-backend.onrender.com/" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); 
  if (token) {
    req.headers["x-auth-token"] = token;
  }
  return req;
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
        responseType: "arraybuffer",
      }
    );
    return response;
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};

export const getUserid = (id) => API.get(`/api/user/sid/:${id}`);
