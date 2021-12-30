import React from "react";
import styled from "styled-components";

function Button({ name }) {
  return (
    <ButtonStyled>
      <div className="text">{name}</div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background: #fcd535;
  border-radius: 5px;

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  .text {
    text-align: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
`;

export default Button;
