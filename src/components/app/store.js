import userReducer from "../register/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
