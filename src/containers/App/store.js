import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../redux/userSlice";
import dataReducer from "../../redux/CurrencySlice";
import coinReducer from "../../redux/coinSlice";
import coinWithdrawReducer from "../../redux/coinWithdrawSlice";

const rootReducer = {
  theCurrency: dataReducer,
  user: userReducer,
  theCoin: coinReducer,
  coinWithdraw: coinWithdrawReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
