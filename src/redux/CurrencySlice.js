import { createSlice } from "@reduxjs/toolkit";

export const theCurrency = createSlice({
  name: "theCurrency",
  initialState: { value: "" },
  reducers: {
    getData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getData } = theCurrency.actions;

export default theCurrency.reducer;
