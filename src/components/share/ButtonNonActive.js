import React from "react";
import styled from "styled-components";

function ButtonNonActive({ name }) {
  return (
    <ButtonNonActiveStyled>
      <div className="text">{name}</div>
    </ButtonNonActiveStyled>
  );
}

const ButtonNonActiveStyled = styled.button`
  background: #eaecef;
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

export default ButtonNonActive;
