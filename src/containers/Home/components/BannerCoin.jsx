import React from "react";
import { useSelector } from "react-redux";

import "./BannerCoin.scss"

function BannerCoin({ coinCode, change, price, curr }) {
  const data = useSelector((state) => state.theCurrency.value);

  return (
    <div className="banner-coin">
      <div className="title">
        {coinCode}/{data || "USD"}
      </div>
      <div
        className="change"
        style={parseFloat(change) > 0 ? { color: "green" } : { color: "red" }}
      >
        {change}
      </div>
      <div className="price">1.000</div>
      <div className="price2">{curr}</div>
    </div>
  );
}


export default BannerCoin;
