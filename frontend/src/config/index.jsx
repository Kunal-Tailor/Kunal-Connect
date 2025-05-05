const { default: axios } = require("axios");


export const BASE_URL = "https://proconnect-linkedin-clone.onrender.com";

  export const clientServer = axios.create({
  baseURL: "https://proconnect-linkedin-clone.onrender.com",
  withCredentials: true,
});