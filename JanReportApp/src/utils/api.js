import axios from "axios";

const API = axios.create({
    baseURL: "/api", // change to your backend
    timeout: 8000,
});

export default API;
