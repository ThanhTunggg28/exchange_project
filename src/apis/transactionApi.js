import axiosClient from "./axiosClient.js";

const transactionApi = {
  getAll(params) {
    const url = "api/public/transactions";
    return axiosClient.get(url, { params });
  },
};

export default transactionApi;
