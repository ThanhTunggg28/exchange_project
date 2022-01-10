import React from "react";
import "./Notification.scss"

function Notification() {
  return (
    <div className="notification">
      <div className="noti_header">
        <div>63</div>
        <div>pending notifications</div>
        <div className="clear">Clear All</div>
        <div className="viewall">View All &gt;</div>
      </div>
    </div>
  );
}


export default Notification;
