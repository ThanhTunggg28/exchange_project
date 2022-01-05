import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./CurrencySlice";

function Currency({ trigger, curr }) {
  const dispatch = useDispatch();

  // const handleCurrency = (cur) => {
  //   dispatch(getData(cur));
  //   console.log(cur);
  // };

  return trigger === false ? (
    <CurrencyStyled>
      <h4>Choose a currency</h4>
      <div className="choose_one">
        {curr?.map((cur, index) => (
          <div key={index} onClick={() => dispatch(getData(cur.code))}>
            {cur.code}
          </div>
        ))}
      </div>
    </CurrencyStyled>
  ) : (
    ""
  );
}

const CurrencyStyled = styled.div`
  h4 {
    margin: 10px 0 20px 10px;
    text-align: left;
  }
  .choose_one {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-row-gap: 20px;

    font-size: 18px;

    div {
      height: 20px;
      padding: 5px;
      line-height: 20px;
    }
  }
`;

export default Currency;
