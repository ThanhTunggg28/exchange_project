import axiosClient from "./axiosClient.js";

const addressApi = {
  get(param) {
    const url = `/api/public/wallets/address/${param}`;
    return axiosClient.get(url);
  },
  post(param) {
    const url = `/api/public/wallets/address/${param}`;
    return axiosClient.post(url, param);
  },
  //   update(data) {
  //     const url = `/api/common/languages/${data.id}`;
  //     return axiosClient.put(url, data);
  //   },
  //   remove(id) {
  //     const url = `/api/common/languages/${id}`;
  //     return axiosClient.delete(url);
  //   },
};

export default addressApi;
