import React, { useEffect, useState } from "react";
import coinApi from "../../../apis/coinApi";

import "./WalletCoin.scss"

function WalletCoin({ wall, showbalance }) {
  const [showSmall, setShowSmall] = useState(false);
  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setShowSmall(true);
    } else {
      setShowSmall(false);
    }
  };
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    const fetchCoin = async () => {
      const coinList = await coinApi.getAll();
      setCoin(coinList);
    };
    fetchCoin();
  }, []);

  return (
    <div className="wallet-coin">
      <div className="wallet-event">
        <input
          className="wallet-search"
          type="text"
          placeholder="Search Coin"
        />
        <div>
          <input
            type="checkbox"
            onClick={(e) => {
              selectShortlistedApplicant(e);
            }}
          />
          {console.log(showSmall)}
          <label htmlFor="">Hide Small Balance</label>
        </div>
      </div>
      <div className="wallet-list">
        <div className="wallet-list_header">
          <div className="">Coin</div>
          <div className="">Total</div>
          <div className="">Available</div>
          <div className="">In Order</div>
          <div className="">BTC Value</div>
          <div className="title-action">Action</div>
        </div>
        {console.log(wall)}
        {wall?.map((wal, index) =>
          coin?.map(
            (coi) =>
              coi.code === wal.coinCode &&
              (showSmall
                ? parseFloat(wal.availableBalance) +
                    parseFloat(wal.blockedBalance) >
                  0
                : parseFloat(wal.availableBalance) +
                    parseFloat(wal.blockedBalance) >=
                  0) && (
                <div key={index} className="wallet-list_container">
                  <div className="name">
                    <div>
                      <img
                        src={coi.image}
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <div style={{ width: "70%" }}>
                      <div>{wal.coinCode}</div>
                      <div style={{ fontSize: "12px", width: "100%" }}>
                        {coi.name}
                      </div>
                    </div>
                  </div>
                  {!showbalance ? (
                    <div className="total">
                      {parseFloat(wal.availableBalance) +
                        parseFloat(wal.blockedBalance)}
                    </div>
                  ) : (
                    <div className="total">********</div>
                  )}
                  {!showbalance ? (
                    <div className="available">{wal.availableBalance}</div>
                  ) : (
                    <div className="available">********</div>
                  )}
                  {!showbalance ? (
                    <div className="inorder">{wal.blockedBalance}</div>
                  ) : (
                    <div className="inorder">********</div>
                  )}
                  {!showbalance ? (
                    <div className="value">
                      {(parseFloat(wal.valuation) *
                        (parseFloat(wal.availableBalance) +
                          parseFloat(wal.blockedBalance))).toFixed(4)}
                    </div>
                  ) : (
                    <div className="value">********</div>
                  )}

                  <div className="action">
                    <a href="/deposit">Deposit</a>
                    <a href="/withdraw">Withdraw</a>
                    <a href="/trade">Trade</a>
                  </div>
                </div>
              )
          )
        )}
      </div>
    </div>
  );
}

export default WalletCoin;
