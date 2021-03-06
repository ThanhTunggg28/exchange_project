import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../shared/components/Button";
import eye from "../../../image/eye.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./RegisterForm.scss";

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
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Please verify your password")
      .oneOf([yup.ref("password")], "Password was wrong!!"),
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
    <form className="register-form" onSubmit={handleSubmit(onLoginSubmit)}>
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
          <option value="VN">Vi???t Nam</option>
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
        {/* <button type="submit">????ng nh???p</button> */}
        <Button type="submit" name="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
