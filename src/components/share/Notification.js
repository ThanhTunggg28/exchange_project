import React from "react";
import styled from "styled-components";

function Notification() {
  return (
    <NotificationStyled>
      <div className="noti_header">
        <div>63</div>
        <div>pending notifications</div>
        <div className="clear">Clear All</div>
        <div className="viewall">View All &gt;</div>
      </div>
    </NotificationStyled>
  );
}

const NotificationStyled = styled.div`
  position: absolute;
  z-index: 1;
  left: 900px;
  top: 64px;
  background-color: #eee;
  border-radius: 10px;
  width: 400px;
  height: 450px;
  .noti_header {
    position: absolute;
    top: 10px;
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;

export default Notification;
