import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  height: 64px;
  top: 0;

  background: #ffffff;
`;

export default Header;
