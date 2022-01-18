import { createSlice } from "@reduxjs/toolkit";

export const coinWithdraw = createSlice({
  name: "coinWithdraw",
  initialState: { value: "BTC" },
  reducers: {
    getData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getData } = coinWithdraw.actions;

export default coinWithdraw.reducer;
