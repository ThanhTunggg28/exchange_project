import axiosClient from "./axiosClient.js";

const userLoginApi = {
  login(data) {
    const url = "/api/login";
    return axiosClient.post(url, data);
  },
};

export default userLoginApi;
