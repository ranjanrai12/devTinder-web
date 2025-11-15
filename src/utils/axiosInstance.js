import axios from "axios";
import appStore from "./appStore";
import { hideLoader, showLoader } from "./loaderSlice";

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

// Request Interceptor

axiosInstance.interceptors.request.use(
  (config) => {
    appStore.dispatch(showLoader());
    return config;
  },
  (err) => {
    appStore.dispatch(hideLoader());
    return Promise.reject(err);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (config) => {
    appStore.dispatch(hideLoader());
    return config;
  },
  (err) => {
    appStore.dispatch(hideLoader());
    return Promise.reject(err);
  }
);

export default axiosInstance;
