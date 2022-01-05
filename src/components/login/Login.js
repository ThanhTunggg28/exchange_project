import React, { useState } from "react";
import styled from "styled-components";

import LoginForm from "./LoginForm";
import { login } from "../share/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

Login.propTypes = {};

function Login() {
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      setErr(false);
    } catch (error) {
      console.log("failed to register", error.message);
      setErr(true);
    }
  };
  return (
    <LoginStyled>
      <div className="title">Exchange Account Login</div>
      <div className="detail">Welcome back! Log In with your Email</div>
      {err && <div className="err">Tên đăng nhập hoặc mật khẩu chưa đúng</div>}
      <LoginForm onSubmit={handleSubmit} />
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  position: relative;
  .title {
    position: absolute;
    width: auto;
    height: 38px;
    left: 248px;
    top: 162px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
  }
  .detail {
    position: absolute;
    width: 373px;
    height: 40px;
    left: 248px;
    top: 210px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #474d57;
    text-align: left;
  }
  .err {
    position: absolute;
    width: 373px;
    height: 40px;
    left: 248px;
    top: 240px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: red;
    text-align: left;
  }
`;

export default Login;
