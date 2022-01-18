import { createSlice } from "@reduxjs/toolkit";

export const theCoin = createSlice({
  name: "theCoin",
  initialState: { value: "BTC" },
  reducers: {
    getData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getData } = theCoin.actions;

export default theCoin.reducer;
