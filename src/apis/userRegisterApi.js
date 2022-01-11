import axiosClient from "./axiosClient.js";

const userRegisterApi = {
  add(data) {
    const url = "/api/register";
    return axiosClient.post(url, data);
  },
};

export default userRegisterApi;
