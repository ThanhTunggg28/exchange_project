import React, { useEffect, useState } from "react";
import Button from "../../../shared/components/Button";
import eye from "../../../image/eye.png";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import "./LoginForm.scss"

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
    <form className="login-form" onSubmit={handleSubmit(onLoginSubmit)}>
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
    </form>
  );
}


export default LoginForm;
