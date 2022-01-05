import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../share/Button";
import eye from "../../image/eye.png";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

function LoginForm(props) {
  const schema = yup.object().shape({
    email: yup.string().required("Ban chua nhap ten dang nhap"),
    password: yup.string().required("Ban chua nhap mat khau"),
  });

  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onLoginSubmit = (data) => {
    console.log(data);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="field">
        <input
          placeholder="Email"
          {...register("email")}
          style={{
            borderColor: errors.email ? "red" : "",
          }}
        />
        {errors.email && (
          <p
            className="error"
            style={{
              position: "absolute",
              top: "24px",
              fontSize: "14px",
              color: "red",
            }}
          >
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="field">
        <input
          placeholder="Password"
          {...register("password")}
          type={showPass ? "text" : "password"}
          style={{
            borderColor: errors.password ? "red" : "",
          }}
        />
        {errors.password && (
          <p
            className="error"
            style={{
              position: "absolute",
              top: "95px",
              fontSize: "14px",
              color: "red",
            }}
          >
            {errors.password?.message}
          </p>
        )}
        <img src={eye} alt="" className="img" onClick={handleShowPass} />
      </div>
      <div className="field">
        {/* <button type="submit">Đăng nhập</button> */}
        <Button type="submit" name="Log In" />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  position: absolute;
  top: 280px;
  left: 248px;
  display: flex;
  flex-direction: column;
  .field {
    margin-bottom: 40px;
    border-radius: 5px;
    height: 30px;
    width: 300px;
    input {
      position: absolute;
      left: 0;
      height: 30px;
      width: 250px;
      font-size: 18px;
      padding-right: 50px;
      padding-left: 10px;
      border: solid 2px;
      border-radius: 5px;
    }
    .img {
      z-index: 1;
      position: absolute;
      left: 280px;
      top: 78px;
    }
    button {
      top: 180px;
      width: 314px;
      height: 50px;
    }
  }
`;

export default LoginForm;
