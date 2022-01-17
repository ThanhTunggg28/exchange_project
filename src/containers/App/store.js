import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../redux/userSlice";
import dataReducer from "../../redux/CurrencySlice";
import coinReducer from "../../redux/coinSlice";

const rootReducer = {
  theCurrency: dataReducer,
  user: userReducer,
  theCoin: coinReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
