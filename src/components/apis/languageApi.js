import axiosClient from "./axiosClient.js";

const languageApi = {
  getAll(params) {
    const url = "api/common/languages";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/common/languages/${id}`;
    return axiosClient.get(url);
  },
  //   add(data) {
  //     const url = "/api/common/languages";
  //     return axiosClient.post(url, data);
  //   },
  //   update(data) {
  //     const url = `/api/common/languages/${data.id}`;
  //     return axiosClient.put(url, data);
  //   },
  //   remove(id) {
  //     const url = `/api/common/languages/${id}`;
  //     return axiosClient.delete(url);
  //   },
};

export default languageApi;
