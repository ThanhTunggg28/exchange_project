import React from "react";
import styled from "styled-components";
import QRcode from "../../image/QRCode.png";

function QRCode({ trigger }) {
  return trigger ? (
    <QRCodeStyled>
      <img src={QRcode} alt="QRCode" />
      <h3>Scan to download app IOS & Android</h3>
      {/* <Button /> */}
    </QRCodeStyled>
  ) : (
    ""
  );
}

const QRCodeStyled = styled.div`
  position: absolute;
  top: 47px;
  left: 1140px;
  height: 350px;
  width: 210px;
  z-index: 1;
  background-color: #fff;
  img {
    position: absolute;
    width: 179px;
    height: 178px;
    left: 16px;
    top: 14px;
  }
  h3 {
    position: absolute;
    width: 179px;
    height: 65px;
    left: 16px;
    top: 202px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000;
  }
`;

export default QRCode;
