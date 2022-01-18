import React, { useEffect, useState } from "react";
import "./WithdrawBody.scss";

import Button from "../../../shared/components/Button";
import coinApi from "../../../apis/coinApi";

function WithdrawBody() {
  const [coin, setCoin] = useState([]);
  const [selectCoin, setSelectCoin] = useState("");

  useEffect(() => {
    const fetchCoin = async () => {
      const coinList = await coinApi.getAll();
      setCoin(coinList);
    };
    fetchCoin();
  }, []);
  console.log(selectCoin);

  return (
    <div>
      <div className="withdraw-body">
        <div className="selectcoin">
          <label htmlFor="">Select Coin</label>
          <select name="" id="" onChange={(e) => setSelectCoin(e.target.value)}>
            {coin?.map((coi, index) => (
              <option key={index} value={coi.code}>
                {coi.code} {coi.name}
              </option>
            ))}
          </select>
        </div>
        <div className="withdraw-to">
          <label htmlFor="">Deposit To</label>

          <form className="has-address">
            <div className="address">
              <label htmlFor="">Address</label>
              <input type="text" />
            </div>
            <div className="amount">
              <label htmlFor="">Amount</label>
              <input type="text" />
            </div>
            <div className="tag">
              <label htmlFor="">Tag/Memo</label>
              <input type="text" />
            </div>
            <div className="submit-withdraw">
              <Button type="submit" name="WithDraw" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WithdrawBody;
