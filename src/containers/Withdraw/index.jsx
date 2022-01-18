import React from "react";
import WithdrawBody from "./components/WithdrawBody";
import { withdraw } from "../../redux/withdrawSlice";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

function Withdraw() {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.coinWithdraw.value);
  console.log(data);

  const handleSubmit = async (values) => {
    try {
      const action = withdraw({ values, coin: data });
      const resultAction = await dispatch(action);
      history.push("/wallet");
    } catch (error) {
      console.log("failed to register", error.message);
    }
  };
  return (
    <div>
      <div className="deposit-page">
        <header>Withdraw Crypto</header>

        <WithdrawBody onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Withdraw;
