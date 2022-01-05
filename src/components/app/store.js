import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../share/userSlice";
import dataReducer from "../share/CurrencySlice";

const rootReducer = {
  theCurrency: dataReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
