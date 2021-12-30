import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

function BannerCoin({ coinCode, change, price, curr }) {
  const data = useSelector((state) => state.theCurrency.value);

  return (
    <BannerCoinStyled>
      <div className="title">
        {coinCode}/{data || "USD"}
      </div>
      <div
        className="change"
        style={change < 0 ? { color: "green" } : { color: "red" }}
      >
        {change}
      </div>
      <div className="price">1.000</div>
      <div className="price2">{curr}</div>
    </BannerCoinStyled>
  );
}

const BannerCoinStyled = styled.div`
  position: absolute;
  width: 240px;
  height: 113px;

  .title {
    position: absolute;
    width: 96px;
    height: 23px;
    left: 0;
    top: 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }
  .change {
    position: absolute;
    width: 60px;
    height: 21px;
    left: 106px;
    top: 14px;
    text-align: left;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
  }
  .price {
    position: absolute;
    width: 78px;
    height: 30px;
    left: 0px;
    top: 42px;
    text-align: left;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    color: #ffffff;
  }
  .price2 {
    position: absolute;
    width: 46px;
    height: 21px;
    left: 0px;
    top: 79px;
    text-align: left;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #d2c8c8;
  }
`;

export default BannerCoin;