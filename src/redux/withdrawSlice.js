import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import withdrawApi from "../apis/withdrawApi";

export const withdraw = createAsyncThunk("wallet/deposit", async (payload) => {
  const data = await withdrawApi.post(payload.values, payload.coin);
  return data;
});

export const withdrawSlice = createSlice({
  name: "withdraw",
  initialState: {
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [withdraw.pending]: (state, { meta }) => {},
    [withdraw.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = withdrawSlice;
export default reducer;
