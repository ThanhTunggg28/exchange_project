import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BannerCoin from "./BannerCoin";
import Button from "./../share/Button";

function Banner() {
  const [orders, setOrders] = useState([]);
  const currencyPair = "btcusd";

  useEffect(() => {
    const subscribe = {
      method: "SUBSCRIBE",
      topic: "MARKET_PRICE",
      data: {},
    };
    const ws = new WebSocket("ws://localhost:8080/stream");

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setOrders(response.data);
    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, [currencyPair]);

  const data = useSelector((state) => state.theCurrency.value);

  return (
    <BannerStyled>
      <div className="banner_content">Buy & sell Crypto in minutes</div>
      <div className="banner_description">
        Join the world's largest crypto exchange
      </div>
      <div className="abc">
        <Button name="Register Now" />
      </div>
      <div className="banner_coin-container">
        {orders?.map(
          (result, index) =>
            result[1] === (data || "USD") && (
              <div className="banner_coin-product" key={index}>
                <BannerCoin
                  coinCode={result[0]}
                  change={result[3] + " %"}
                  price={Math.round(result[2] * 100) / 100}
                  curr={result[2]}
                />
              </div>
            )
        )}
      </div>
    </BannerStyled>
  );
}

const BannerStyled = styled.section`
  position: absolute;
  width: 100%;
  height: 470px;
  left: 0px;
  top: 94px;

  background: #000000;
  .abc {
    position: absolute;
    width: 220px;
    height: 45px;
    left: 86px;
    top: 201px;
  }
  .banner_content {
    position: absolute;
    width: 594px;
    height: 56px;
    left: 83px;
    top: 81px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;

    color: #ffffff;
  }
  .banner_description {
    position: absolute;
    width: 321px;
    height: 21px;
    left: 83px;
    top: 147px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    color: #ffffff;
  }
  .btn {
    position: absolute;
    width: 220px;
    height: 45px;
    left: 86px;
    top: 314px;
  }
  .banner_coin-container {
    position: absolute;
    width: 1300px;
    height: 113px;
    left: 83px;
    top: 299px;

    display: flex;
    .banner_coin-product {
      width: 240px;
    }
  }
`;

export default Banner;
