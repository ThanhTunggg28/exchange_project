import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userLoginApi from "../apis/userLoginApi";
import userRegisterApi from "../apis/userRegisterApi";

export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userRegisterApi.add(payload);
  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userLoginApi.login(payload);
  localStorage.setItem("user_token", data.token);
  return data.token;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current: localStorage.getItem("user_token") || "",
    settings: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("user_token");
      state.current = "";
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
