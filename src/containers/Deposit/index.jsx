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
  const history = useHistory();

  const data = useSelector((state) => state.theCoin.value);

  const handleSubmit = async (values) => {
    try {
      const action = deposit({ values, coin: data });
      const resultAction = await dispatch(action);
      history.push("/wallet");
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
