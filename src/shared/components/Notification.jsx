import React, { useEffect, useState } from "react";
import "./Notification.scss";

import notificationApi from "../../apis/notificationApi";

function Notification() {
  const [notis, setNotis] = useState([]);
  const [notiUnread, setNotiUnread] = useState([]);

  useEffect(() => {
    const fetchNotification = async () => {
      const notificationList = await notificationApi.get();
      setNotis(notificationList);
    };
    fetchNotification();
  }, []);

  useEffect(() => {
    const fetchNotificationUnRead = async () => {
      const notificationUnReadList = await notificationApi.getCountUnread();
      setNotiUnread(notificationUnReadList);
    };
    fetchNotificationUnRead();
  }, []);

  return (
    <div className="notification">
      <div className="noti_header">
        <div className="count-unread">{notiUnread} pending notifications</div>
        <div className="clear">Clear All</div>
        <div className="viewall">View All &gt;</div>
      </div>
      <div className="noti_body">
        {notis?.map((noti, index) => (
          <div key={index} className="noti-item">
            <p className="noti-title">{noti.title}</p>
            <p className="noti-content">{noti.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
