const { default: axios } = require("axios");


export const BASE_URL = "http://localhost:9090";

  export const clientServer = axios.create({
  baseURL: "http://localhost:9090",
  withCredentials: true,
});