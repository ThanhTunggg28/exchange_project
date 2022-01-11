import React, { useState} from "react";
import alert from "../../image/alert.png";
import cancle from "../../image/cancle.png";

import "./Alert.scss"

function Alert() {
  const [hide, setHide] = useState(true);
  return hide ? (
    <div className="alert">
      <img src={alert} alt="" className="alert" />
      <div className="text_alert">
        Introducing Highstreet (HIGH) on Binance Launchpool! Farm HIGH by
        Staking BNB and BUSD Tokens
      </div>
      <a href="#" className="text_more">
        More
      </a>
      <img src={cancle} alt="" className="cancle" onClick={() => setHide(false)}/>
    </div>
  ): "";
}

export default Alert;
