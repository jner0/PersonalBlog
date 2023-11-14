import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const blogApi = axios.create({
  baseURL: VITE_API_URL,
});

//Configurar interceptores
blogApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default blogApi;
