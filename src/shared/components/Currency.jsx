import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/CurrencySlice";
import "./Currency.scss"

function Currency({ trigger, curr }) {
  const dispatch = useDispatch();


  return trigger === false ? (
    <div className="currency_tab">
      <h4>Choose a currency</h4>
      <div className="choose_one">
        {curr?.map((cur, index) => (
          <div key={index} onClick={() => dispatch(getData(cur.code))}>
            {cur.code}
          </div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}


export default Currency;
