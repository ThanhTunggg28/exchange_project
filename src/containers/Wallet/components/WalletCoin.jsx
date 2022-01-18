import React, { useEffect, useState } from "react";
import coinApi from "../../../apis/coinApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./WalletCoin.scss";

function WalletCoin({ wall, showbalance }) {
  const [showSmall, setShowSmall] = useState(false);
  const [search, setSearch] = useState("");

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
  const filterData = coin.filter((result) => {
    if (search === "") {
      return result;
    } else {
      return (
        result.code.toLowerCase().includes(search.toLowerCase()) ||
        result.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <div className="wallet-coin">
      <div className="wallet-event">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="icon-search" />
          <input
            className="wallet-search"
            type="text"
            placeholder="Search Coin"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <input
            type="checkbox"
            onClick={(e) => {
              selectShortlistedApplicant(e);
            }}
          />
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
        {wall?.map((wal, index) =>
          filterData?.map(
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
                      {(
                        parseFloat(wal.valuation) *
                        (parseFloat(wal.availableBalance) +
                          parseFloat(wal.blockedBalance))
                      ).toFixed(4)}
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
