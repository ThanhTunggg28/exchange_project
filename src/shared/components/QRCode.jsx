import React from "react";
import QRcode from "../../image/QRCode.png";

import "./QRCode.scss"

function QRCode({ trigger }) {
  return trigger ? (
    <div className="qrcode">
      <img src={QRcode} alt="QRCode" />
      <h3>Scan to download app IOS & Android</h3>
      {/* <Button /> */}
    </div>
  ) : (
    ""
  );
}



export default QRCode;
