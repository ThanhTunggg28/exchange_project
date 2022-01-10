import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BannerCoin from "./BannerCoin";
import Button from "../../../shared/components/Button";

import "./Banner.scss"

function Banner() {
  const [orders, setOrders] = useState([]);
  const currencyPair = "btcusd";

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser;

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
    <div className="banner">
      <div className="banner_content">Buy & sell Crypto in minutes</div>
      <div className="banner_description">
        Join the world's largest crypto exchange
      </div>
      <div className="abc">
        {isLoggedIn && <Button name="Trade Now" />}
        {!isLoggedIn && <Button name="Register Now" />}
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
    </div>
  );
}

export default Banner;
