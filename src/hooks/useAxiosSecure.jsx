import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://tasty-pizza-server.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    instance.interceptors.request.use(
      function (config) {
        if (config) {
          config.headers.Authorization = localStorage.getItem("access-token");
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut().then(() => navigate("/auth"));
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [instance];
};

export default useAxiosSecure;
