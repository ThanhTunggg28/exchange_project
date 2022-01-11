import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../redux/userSlice";
import dataReducer from "../../redux/CurrencySlice";

const rootReducer = {
  theCurrency: dataReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
