import axiosClient from "./axiosClient.js";

const walletApi = {
  getAll(params) {
    const url = `api/public/wallets?valuation=${params}`;

    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `api/common/currencies/${id}`;
    return axiosClient.get(url);
  },
};

export default walletApi;
