import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <LogoStyled>
      <div className="logo">EXCHANGE</div>
      <div className="trade">Trade</div>
    </LogoStyled>
  );
}

const LogoStyled = styled.nav`
  .logo {
    position: absolute;
    width: 213px;
    height: 35px;
    left: 55px;
    top: 9px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    color: #000000;
  }
  .trade {
    position: absolute;
    width: 36px;
    height: 16px;
    left: 312px;
    top: 26px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #000000;
  }
`;

export default Logo;
