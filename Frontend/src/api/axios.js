import axios from "axios";
import { jwtDecode } from "jwt-decode"; 


const api = axios.create({
  baseURL: "http://localhost:5000", // Update this if your backend URL changes
});

// Request interceptor to attach token and check expiry
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        // Token expired
        localStorage.removeItem("authToken");
        window.location.href = "/login"; // or use navigate("/login") if using React Router
        return Promise.reject("Token expired");
      }

      config.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
      console.error("Invalid token");
    }
  }

  return config;
});

// Response interceptor to catch 401s
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;