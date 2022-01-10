import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import coinApi from "../../../apis/coinApi";
import MarketProduct from "./MarketProduct";

import "./Market.scss"

function Market() {
  const [orders, setOrders] = useState([]);
  const currencyPair = "btcusd";

  // const currencyArray = currencyPair.toUpperCase().match(/.{1,3}/g);

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

  const [coin, setCoin] = useState([]);
  useEffect(() => {
    const fetchCoin = async () => {
      const coinList = await coinApi.getAll();
      setCoin(coinList);
    };
    fetchCoin();
  }, []);

  return (
    <section className="market">
      <div className="market_title">
        <div>Name</div>
        <div>Last Price</div>
        <div>24h Change</div>
      </div>
      {orders?.map((result, index) =>
        coin?.map(
          (coi) =>
            result[1] === (data || "USD") &&
            coi.code === result[0] && (
              <div key={index}>
                <MarketProduct
                  image={coi.image}
                  codeName={result[0]}
                  name={coi.name}
                  lastPrice={result[2]}
                  change={result[3] + "%"}
                  market=""
                />
              </div>
            )
        )
      )}
      {/* <h2>View more markets</h2> */}
      <a href="">View more markets</a>
    </section>
  );
}


export default Market;
