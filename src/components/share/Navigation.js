import React from "react";
import styled from "styled-components";
import QRCode from "./QRCode";
import { useState } from "react";
import MountLang from "./MountLang";
import Notification from "./Notification";

import { logout } from "./userSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

function Navigation() {
  const [popUpQr, setPopUpQr] = useState(false);
  const [popUpLang, setpopUpLang] = useState(false);
  const [profile, setProfile] = useState(false);
  const [noti, setNoti] = useState(false);

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const action = logout();
    dispatch(action);
  };

  return (
    <NavigationStyled>
      {!isLoggedIn && (
        <a href="/register" className="nav_register">
          Register
        </a>
      )}
      {!isLoggedIn && (
        <a href="/login" className="nav_login">
          Login
        </a>
      )}

      {isLoggedIn && (
        <div>
          <FontAwesomeIcon
            className="nav_account"
            icon={faUserCircle}
            onClick={() => setProfile(!profile)}
          />
          {profile && (
            <div className="profile">
              <p
                style={{
                  margin: "0",
                  paddingBottom: "40px",
                  textAlign: "left",
                  borderBottom: "1px solid",
                }}
              >
                ********@gmail.com
              </p>
              <div onClick={handleLogOut}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>
            </div>
          )}
        </div>
      )}
      {isLoggedIn && (
        <div>
          <FontAwesomeIcon
            className="nav_notification"
            icon={faBell}
            onClick={() => setNoti(!noti)}
          />
          {noti && <Notification />}
        </div>
      )}
      <div
        className="nav_dowload"
        onMouseEnter={() => setPopUpQr(true)}
        onMouseLeave={() => setPopUpQr(false)}
      >
        Download
      </div>
      <QRCode trigger={popUpQr} />
      <div className="nav_lang-cur" onClick={() => setpopUpLang(!popUpLang)}>
        English | USD
      </div>

      {/* {popUpLang == true && <Language />} */}
      {/* <LangAndCurr trigger={popUpLang} /> */}
      <MountLang trigger={popUpLang} />
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  .nav_login {
    position: absolute;
    width: 39px;
    height: 16px;
    left: calc(50% - 39px / 2 + 326.5px);
    top: 26px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .nav_register {
    position: absolute;
    width: 52px;
    height: 16px;
    left: calc(50% - 52px / 2 + 399px);
    top: 26px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .nav_dowload {
    position: absolute;
    width: 70px;
    height: 16px;
    left: calc(50% - 70px / 2 + 487px);
    top: 26px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .nav_lang-cur {
    position: absolute;
    width: 83px;
    height: 16px;
    left: calc(50% - 83px / 2 + 589.5px);
    top: 26px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #000000;
  }
  .nav_notification {
    position: absolute;
    left: 1170px;
    top: 26px;
  }
  .nav_account {
    position: absolute;
    left: 1140px;
    top: 26px;
  }
  .profile {
    position: absolute;
    z-index: 1;
    left: 1042px;
    top: 64px;
    background-color: #eee;
    border-radius: 5px;
    width: 150px;
    padding: 10px;
  }
`;

export default Navigation;
