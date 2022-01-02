import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../share/Button";
import eye from "../../image/eye.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function RegisterForm(props) {
  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name!!"),
    lastName: yup.string().required("Please enter your last name!!"),
    email: yup
      .string()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter your email!!"
      ),
    password: yup
      .string()
      .required("Please enter your password!!")
      .min(6, "Mật khẩu tối đa 6 ký tự"),
    confirmPassword: yup
      .string()
      .required("Bạn chưa nhập mật khẩu xác nhận")
      .oneOf([yup.ref("password")], "Xác nhận mật khẩu không đúng!!"),
  });
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

  const [showPass, setShowPass] = useState(false);
  const [showCfPass, setShowCfPass] = useState(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const handleShowCfPass = () => {
    setShowCfPass(!showCfPass);
  };

  return (
    <RegisterFormStyled onSubmit={handleSubmit(onLoginSubmit)}>
      <div className="field">
        <input
          placeholder="First Name"
          {...register("firstName")}
          style={{
            borderColor: errors.firstName ? "red" : "",
          }}
        />
        {errors.firstName && (
          <p
            className="error"
            style={{
              position: "absolute",
              top: "23px",
              fontSize: "14px",
              color: "red",
            }}
          >
            {errors.firstName?.message}
          </p>
        )}
      </div>
      <div className="field">
        <input
          placeholder="Last Name"
          {...register("lastName")}
          style={{
            borderColor: errors.lastName ? "red" : "",
          }}
        />
        {errors.lastName && (
          <p
            className="error"
            style={{
              position: "absolute",
              top: "93px",
              fontSize: "14px",
              color: "red",
            }}
          >
            {errors.lastName?.message}
          </p>
        )}
      </div>
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
              top: "162px",
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
          type={showPass ? "text" : "password"}
          placeholder="Password"
          {...register("password")}
          style={{
            borderColor: errors.password ? "red" : "",
          }}
        />
        {errors.password && (
          <p
            className="error"
            style={{
              position: "absolute",
              top: "232px",
              fontSize: "14px",
              color: "red",
            }}
          >
            {errors.password?.message}
          </p>
        )}
        <img src={eye} alt="" className="img1" onClick={handleShowPass} />
      </div>
      <div className="field">
        <input
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          type={showCfPass ? "text" : "password"}
          style={{
            borderColor: errors.confirmPassword ? "red" : "",
          }}
        />
        {errors.confirmPassword && (
          <p
            className="error"
            style={{
              position: "absolute",
              top: "301px",
              fontSize: "14px",
              color: "red",
            }}
          >
            {errors.confirmPassword?.message}
          </p>
        )}
        <img src={eye} alt="" className="img2" onClick={handleShowCfPass} />
      </div>
      <div className="field">
        <select id="region" {...register("langCode")}>
          <option value="VN">Việt Nam</option>
          <option value="USA">United States</option>
        </select>
        {/* <input placeholder="Region" {...register("langCode")} /> */}
      </div>
      <div className="condition">
        <input type="checkbox" style={{ position: "absolute", left: "0" }} />
        <div
          style={{
            fontSize: "14px",
            position: "absolute",
            left: "23px",
            width: "500px",
            textAlign: "left",
          }}
        >
          I agree to receive email updates from Exchange
        </div>
        <input
          type="checkbox"
          style={{ position: "absolute", left: "0", top: "395px" }}
        />
        <div
          style={{
            fontSize: "14px",
            position: "absolute",
            left: "23px",
            top: "395px",
            width: "500px",
            textAlign: "left",
          }}
        >
          I agree to share data for marketing purposes
        </div>
      </div>
      <div className="field">
        {/* <button type="submit">Đăng nhập</button> */}
        <Button type="submit" name="Register" />
      </div>
    </RegisterFormStyled>
  );
}

const RegisterFormStyled = styled.form`
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
    .img1 {
      z-index: 1;
      position: absolute;
      left: 280px;
      top: 148px;
    }
    #region {
      border-radius: 5px;
      height: 36px;
      width: 315px;
      border: solid 2px;
      font-size: 18px;
    }
    .img2 {
      z-index: 1;
      position: absolute;
      left: 280px;
      top: 218px;
    }
    .condition {
      div {
        text-align: left;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
      }
    }
    button {
      top: 450px;
      width: 314px;
      height: 50px;
    }
  }
`;

export default RegisterForm;
