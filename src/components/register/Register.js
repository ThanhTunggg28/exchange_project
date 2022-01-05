import React from "react";

import styled from "styled-components";

import RegisterForm from "./RegisterForm";
import { register } from "../share/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
    } catch (error) {
      console.log("failed to register", error.message);
    }
  };
  return (
    <RegisterStyled>
      <div className="title">Enter Account Detail</div>
      <div className="detail">
        Enter your account details and a strong password to secure your account.
      </div>
      <RegisterForm onSubmit={handleSubmit} />
    </RegisterStyled>
  );
}

const RegisterStyled = styled.div`
  position: relative;
  .title {
    position: absolute;
    width: 293px;
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
`;

export default Register;
