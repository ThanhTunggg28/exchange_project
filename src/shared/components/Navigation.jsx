import React from "react";
import QRCode from "./QRCode";
import { useState } from "react";
import MountLang from "./MountLang";
import Notification from "./Notification";

import { logout } from "../../redux/userSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";

import "./Navigation.scss"

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
    <nav className="navigation">
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
    </nav>
  );
}


export default Navigation;
