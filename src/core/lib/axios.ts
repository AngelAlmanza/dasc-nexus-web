// import { RoutesWithoutToken } from "@/core/constants";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axios.interceptors.request.use(
//   (config) => {
//     if (RoutesWithoutToken.includes(config.url ?? "")) {
//       return config;
//     }
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export abstract class ApiAxiosInstance {
  private static instance = api;

  static getInstance() {
    return this.instance;
  }
}