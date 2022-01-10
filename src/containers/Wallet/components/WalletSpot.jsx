import React, { useEffect, useState } from "react";
import Button from "../../../shared/components/Button";
import ButtonNonActive from "../../../shared/components/ButtonNonActive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import WalletCoin from "./WalletCoin";
import walletApi from "../../../apis/walletApi";
import { useSelector } from "react-redux";

import "./WalletSpot.scss"

function WalletSpot() {
  const [wallet, setWallet] = useState([]);
  const [showBalance, setShowBalance] = useState(false);

  const data = useSelector((state) => state.theCurrency.value);

  useEffect(() => {
    const fetchWallet = async () => {
      const walletList = await walletApi.getAll(data || "USD");
      setWallet(walletList);
    };
    fetchWallet();
  }, [data]);
  var sum = 0;
  const handleSum = (values) => {
    values?.map((value, index) => {
      sum =
        sum +
        parseFloat(value.valuation) *
          (parseFloat(value.availableBalance) +
            parseFloat(value.blockedBalance));
    });
    return sum.toFixed(5);
  };
  return (
    <div className="wallet-spot">
      <div className="header">
        <h2>Fiat and Spot</h2>
        <div className="button">
          <div className="btn_deposit">
            <Button name="Deposit"/>
          </div>
          <div className="btn_withdraw">
            <ButtonNonActive name="Withdraw" />
          </div>
        </div>
      </div>
      <div className="balance">
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginLeft: "20px",
            gap: "20px",
          }}
        >
          <h4 style={{ margin: "0" }}>Fiat and Spot Balance</h4>
          <FontAwesomeIcon
            icon={faEye}
            style={{ marginTop: "5px" }}
            onClick={() => setShowBalance(!showBalance)}
          />
        </div>
        {!showBalance ? (
          <div className="quantity">
            {handleSum(wallet) + " "} {data || "USD"}
          </div>
        ) : (
          <div className="quantity">*******</div>
        )}
      </div>
      <WalletCoin wall={wallet} showbalance={showBalance} />
      <div style={{ height: "100px", width: "100%" }}></div>
    </div>
  );
}

export default WalletSpot;
