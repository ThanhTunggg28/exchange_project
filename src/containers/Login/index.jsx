import React, { useState } from "react";

import LoginForm from "./components/LoginForm";
import { login } from "../../redux/userSlice";
import { useDispatch , useSelector} from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { Redirect, Route } from "react-router";

import "./login.scss"

Login.propTypes = {};

function Login() {
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser;

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      history.push("/");
      setErr(false);
    } catch (error) {
      console.log("failed to register", error.message);
      setErr(true);
    }
  };
  return (
    <div className="login">
      
      <div className="title">Exchange Account Login</div>
      <div className="detail">Welcome back! Log In with your Email</div>
      {err && <div className="err">Tên đăng nhập hoặc mật khẩu chưa đúng</div>}
      <LoginForm onSubmit={handleSubmit} />

    </div>
  );
}


export default Login;
