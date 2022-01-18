import axiosClient from "./axiosClient.js";
import { useSelector, useDispatch } from "react-redux";

const depositApi = {
  post(data, { coin }) {
    const url = `/api/public/wallets/faucet/BTC`;
    console.log(coin);
    return axiosClient.post(url, data, { coin });
  },
};

export default depositApi;
