import React, { useEffect, useState } from "react";
import "./WithdrawBody.scss";

import Button from "../../../shared/components/Button";
import coinApi from "../../../apis/coinApi";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../../redux/coinWithdrawSlice";

function WithdrawBody(props) {
  const dispatch = useDispatch();

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

          <form className="has-address" onSubmit={handleSubmit(onLoginSubmit)}>
            <div className="address">
              <label htmlFor="">Address</label>
              <input type="text" className="address" {...register("address")} />
            </div>
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
              <input type="text" type="text" {...register("tag")} />
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
