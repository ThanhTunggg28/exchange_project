import React, { useEffect, useState } from "react";
import Button from "../../../shared/components/Button";
import coinApi from "../../../apis/coinApi";

import "./DepositBody.scss";
import addressApi from "../../../apis/addressApi";

function DepositBody() {
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    const fetchCoin = async () => {
      const coinList = await coinApi.getAll();
      setCoin(coinList);
    };
    fetchCoin();
  }, []);
  const [selectCoin, setSelectCoin] = useState("");
  const [toggle, setToggle] = useState(false);
  const [address, setAddress] = useState();
  const [abc, setAbc] = useState();
  useEffect(() => {
    const fetchAddress = async () => {
      const getAddressWallet = await addressApi.get(selectCoin || "BTC");
      if (getAddressWallet.address == null) {
        const getAddressWallet = await addressApi.post(selectCoin || "BTC");
        setAddress(getAddressWallet);
      } else setAddress(getAddressWallet);
      // const postAddressWallet = await addressApi.post(selectCoin || "BTC");
      // setAddress(getAddressWallet);
      setToggle(false);
    };
    fetchAddress();
  }, [selectCoin]);
  console.log(address);
  return (
    <div className="deposit-body">
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
      <div className="deposit-to">
        <label htmlFor="">Deposit To</label>
        {toggle ? (
          <div className="has-address">
            <div className="address">{address.address}</div>
            <div className="amount">
              <label htmlFor="">Amount</label>
              <input type="text" />
            </div>
            <div className="tag">
              <label htmlFor="">Tag/Memo</label>
              <input type="text" />
            </div>
            <div className="submit-deposit">
              <Button name="Deposit" />
            </div>
          </div>
        ) : (
          <div className="non-address">
            <div>No Cardano deposit addresses</div>
            <div className="get-address" onClick={() => setToggle(true)}>
              <Button name="Get Address" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepositBody;
