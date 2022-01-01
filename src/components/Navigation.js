import React from "react";
import styled from "styled-components";
import QRCode from "./QRCode";
import { useState } from "react";
import MountLang from "./MountLang";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Navigation() {
  const [popUpQr, setPopUpQr] = useState(false);
  const [popUpLang, setpopUpLang] = useState(false);

  return (
    <NavigationStyled>
      <div className="nav_login">
        <Link to="/login">Login</Link>
      </div>
      <div className="nav_register">
        <Link to="/register">Register</Link>
      </div>
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
`;

export default Navigation;
