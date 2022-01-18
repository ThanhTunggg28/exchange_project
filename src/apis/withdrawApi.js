import axiosClient from "./axiosClient.js";

const withdrawApi = {
  post(data, coin) {
    const url = `/api/public/wallets/withdraw/${coin}`;
    return axiosClient.post(url, data);
  },
};

export default withdrawApi;
