import React from "react";
import styled from "styled-components";
import alert from "../../image/alert.png";
import cancle from "../../image/cancle.png";

function Alert() {
  return (
    <AlertStyled>
      <img src={alert} alt="" className="alert" />
      <div className="text_alert">
        Introducing Highstreet (HIGH) on Binance Launchpool! Farm HIGH by
        Staking BNB and BUSD Tokens
      </div>
      <a href="#" className="text_more">
        More
      </a>
      <img src={cancle} alt="" className="cancle" />
    </AlertStyled>
  );
}

const AlertStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  left: 0px;
  top: 64px;

  background: #fef6d8;
  .alert {
    position: absolute;
    width: 26px;
    height: 18px;
    left: 88px;
    top: 7px;
  }
  .text_alert {
    position: absolute;
    width: 623px;
    height: 16px;
    left: 134px;
    top: 7px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #000000;
  }
  .text_more {
    position: absolute;
    width: 33px;
    height: 16px;
    left: 796px;
    top: 7px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #c99400;
  }
  .cancle {
    position: absolute;
    width: 23px;
    height: 24px;
    left: 1400px;
    top: 5px;
  }
`;

export default Alert;
