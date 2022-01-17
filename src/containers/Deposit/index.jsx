import React, { useState } from "react";
import DepositBody from "./components/DepositBody";

import { deposit } from "../../redux/depositSlice";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

import "./deposit.scss";
Deposit.propTypes = {};

function Deposit() {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const action = deposit(values, { coin: "BTC" });
      const resultAction = await dispatch(action);
      // const user = unwrapResult(resultAction);
    } catch (error) {
      console.log("failed to register", error.message);
    }
  };
  return (
    <div className="deposit-page">
      <header>Deposit Crypto</header>

      <DepositBody onSubmit={handleSubmit} />
    </div>
  );
}

export default Deposit;
