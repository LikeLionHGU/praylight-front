import axios, { AxiosRequestConfig } from "axios";

// ----------------------------------------------------------------------

export const HOST_URL = process.env.REACT_APP_HOST_URL;
const axiosInstance = axios.create({ baseURL: HOST_URL });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

// export const endpoints = {
//   myRoom: `/rooms/user/${localStorage.getItem("UserIdState")}`,
//   //   space: {
//   //     list: `/space/list/${deptId}`,
//   //   },
//   //   user: {
//   //     list: `/deptMember/list/${deptId}`,
//   //     update: `/deptMember/${UserId}`,
//   //   },
// };
