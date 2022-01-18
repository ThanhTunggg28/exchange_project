import axiosClient from "./axiosClient.js";

const notificationApi = {
  get() {
    const url = `/api/public/notifications`;
    return axiosClient.get(url);
  },
  getCountUnread() {
    const url = `/api/public/notifications/count-unread`;
    return axiosClient.get(url);
  },
};

export default notificationApi;
