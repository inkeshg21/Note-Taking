import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL || "http://localhost:6969",
});

export default api;
