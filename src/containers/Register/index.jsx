import React from "react";

import RegisterForm from "./components/RegisterForm";
import { register } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

import "./Register.scss"

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
    <div className="register">
      <div className="title">Enter Account Detail</div>
      <div className="detail">
        Enter your account details and a strong password to secure your account.
      </div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}


export default Register;
