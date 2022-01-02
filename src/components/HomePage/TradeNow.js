import React from "react";
import styled from "styled-components";
import Button from "../share/Button";
import ButtonNonActive from "../share/ButtonNonActive";

function TradeNow() {
  return (
    <TradeNowStyled>
      <h1>Start Trading Now</h1>
      <div className="button1">
        <Button name="Register Now" />
      </div>
      <div className="button2">
        <ButtonNonActive name="Trade Now" />
      </div>
    </TradeNowStyled>
  );
}

const TradeNowStyled = styled.section`
  position: absolute;
  width: 100%;
  height: 200px;
  left: 0px;
  top: 1546px;

  background: #fafafa;
  h1 {
    position: absolute;
    width: 300px;
    height: 38px;
    left: 625px;
    top: 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;

    color: #000000;
  }
  .button1 {
    position: absolute;
    width: 158px;
    height: 37px;
    left: 600px;
    top: 100px;
  }
  .button2 {
    position: absolute;
    width: 158px;
    height: 37px;
    left: 800px;
    top: 100px;
  }
`;

export default TradeNow;
