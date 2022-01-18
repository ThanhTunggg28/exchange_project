import axiosClient from "./axiosClient.js";

const transactionApi = {
  getAll(page) {
    const url = `api/public/transactions?sort=asc&page=${page}`;
    return axiosClient.get(url);
  },
};

export default transactionApi;
