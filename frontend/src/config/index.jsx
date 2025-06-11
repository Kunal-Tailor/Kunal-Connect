const { default: axios } = require("axios");


export const BASE_URL =  "https://kunal-connect.onrender.com";

  export const clientServer = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});