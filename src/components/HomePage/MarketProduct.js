import React from "react";
import styled from "styled-components";

function MarketProduct({ image, codeName, name, lastPrice, increase, market }) {
  return (
    <MarketProductStyled>
      <div className="name_coin">
        <img src={image} alt="" />
        {codeName} | {name}
      </div>
      <div>{lastPrice}</div>
      <div style={increase > 0 ? { color: "green" } : { color: "red" }}>
        {increase}
      </div>
      <div>{market}</div>
    </MarketProductStyled>
  );
}

const MarketProductStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  text-align: right;
  height: 90px;
  align-items: center;
  font-size: 20px;
  .name_coin {
    text-align: left;
    display: flex;
    gap: 10px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  div {
    padding: 10px 20px 10px 20px;
  }
`;

export default MarketProduct;
