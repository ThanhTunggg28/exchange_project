import React from "react";
import DepositBody from "./components/DepositBody";

import "./deposit.scss";

function index() {
  return (
    <div className="deposit-page">
      <header>Deposit Crypto</header>
      <DepositBody />
    </div>
  );
}

export default index;
