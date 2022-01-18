import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import depositApi from "../apis/depositApi";

export const deposit = createAsyncThunk("wallet/deposit", async (payload) => {
  const data = await depositApi.post(payload.values, payload.coin);

  return data;
});

export const depositSlice = createSlice({
  name: "deposit",
  initialState: {
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [deposit.pending]: (state, { meta }) => {},
    [deposit.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = depositSlice;
export default reducer;
