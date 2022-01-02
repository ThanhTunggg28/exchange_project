import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = "";

export const theCurrency = createSlice({
  name: "theCurrency",
  initialState: { value: initialStateValue },
  reducers: {
    getData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getData } = theCurrency.actions;

export default theCurrency.reducer;
