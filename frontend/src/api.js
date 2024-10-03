import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Attach token to every request
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers["x-auth-token"] = localStorage.getItem("token");
  }
  return req;
});

export const login = (formData) => API.post("/api/auth/login", formData);
export const register = (formData) => API.post("/api/auth/register", formData);
export const getProjects = () => API.get("/api/projects");
export const createProject = (formData) => API.post("/api/projects", formData);
export const getStudentSubmissions = (studentId) =>
  API.get(`/api/submissions/:${studentId}`);
export const submitProject = (formData) =>
  API.post("/api/submissions", formData);
