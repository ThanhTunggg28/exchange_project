import React from "react";
import "./MarketProduct.scss"

function MarketProduct({ image, codeName, name, lastPrice, change, market }) {
  return (
    <div className="market-product">
      <div className="name_coin">
        <img src={image} alt="" />
        {codeName} | {name}
      </div>
      <div>{lastPrice}</div>
      <div style={parseFloat(change) > 0 ? { color: "green" } : { color: "red" }}>
        {change}
      </div>
      <div>{market}</div>
    </div>
  );
}


export default MarketProduct;
