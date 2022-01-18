import React, { useEffect, useState } from "react";
import Button from "../../../shared/components/Button";
import coinApi from "../../../apis/coinApi";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../../redux/coinSlice";

import "./DepositBody.scss";
import addressApi from "../../../apis/addressApi";

function DepositBody(props) {
  const dispatch = useDispatch();
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    const fetchCoin = async () => {
      const coinList = await coinApi.getAll();
      setCoin(coinList);
    };
    fetchCoin();
  }, []);

  const [selectCoin, setSelectCoin] = useState("");
  const [address, setAddress] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchAddress = async () => {
      const getAddressWallet = await addressApi.get(selectCoin || "BTC");
      if (getAddressWallet.address == null) {
        const getAddressWallet = await addressApi.post(selectCoin || "BTC");
        setAddress(getAddressWallet);
      } else setAddress(getAddressWallet);

      setToggle(false);
    };
    fetchAddress();
  }, [selectCoin]);
  console.log(selectCoin);
  dispatch(getData(selectCoin || "BTC"));

  const schema = yup.object().shape({
    amount: yup.string().required("Ban chua nhap so luong"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onLoginSubmit = (data) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <div className="deposit-body">
      <div className="selectcoin">
        <label htmlFor="">Select Coin</label>
        <select
          name=""
          id=""
          onChange={(e) => {
            setSelectCoin(e.target.value);
          }}
        >
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
          <form className="has-address" onSubmit={handleSubmit(onLoginSubmit)}>
            <div>{address.address}</div>
            <input
              value={address.address}
              type="text"
              className="address"
              {...register("address")}
            ></input>
            <div className="amount">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                {...register("amount")}
                style={{
                  borderColor: errors.amount ? "red" : "",
                }}
              />
            </div>
            <div className="tag">
              <label htmlFor="">Tag/Memo</label>
              <input type="text" {...register("tag")} />
            </div>
            <div className="submit-deposit">
              <Button type="submit" name="Deposit" />
            </div>
          </form>
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
