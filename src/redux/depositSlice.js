import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import depositApi from "../apis/depositApi";
import { useSelector, useDispatch } from "react-redux";

export const deposit = createAsyncThunk(
  "wallet/deposit",
  async (payload, { coin }) => {
    const data = await depositApi.post(payload, { coin });
    console.log(data);
    console.log(coin);
    return data;
  }
);

export const depositSlice = createSlice({
  name: "deposit",
  initialState: {
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [deposit.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = depositSlice;
export default reducer;
