import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import WalletSpot from "./components/WalletSpot";
import Footer from "../../shared/components/Footer"

import "./Wallet.scss"

function WalletPage() {
  const [menu, setMenu] = useState(true);
  return (
    <div className="wallet">
      <div className="wallet-menu">
        <div style={{ display: "flex", gap: "10px" }}>
          <FontAwesomeIcon icon={faWallet} />
          <h2>OverView</h2>
        </div>
        {menu ? (
          <div className="flatandspot active" onClick={() => setMenu(true)}>
            Flat and Spot
          </div>
        ) : (
          <div className="flatandspot" onClick={() => setMenu(true)}>
            Flat and Spot
          </div>
        )}
        {!menu ? (
          <div
            className="transactionhistory active"
            onClick={() => setMenu(false)}
          >
            Transaction History
          </div>
        ) : (
          <div className="transactionhistory" onClick={() => setMenu(false)}>
            Transaction History
          </div>
        )}
      </div>
      {menu ? <WalletSpot /> : "xxx"}
    </div>
  );
}



export default WalletPage;
