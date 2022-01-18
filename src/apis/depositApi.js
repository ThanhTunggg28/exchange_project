import axiosClient from "./axiosClient.js";
import { useSelector, useDispatch } from "react-redux";

const depositApi = {
  post(data, coin) {
    const url = `/api/public/wallets/faucet/${coin}`;
    return axiosClient.post(url, data);
  },
};

export default depositApi;
