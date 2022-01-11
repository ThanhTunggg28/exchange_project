import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

import "./Header.scss"


Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
}


export default Header;
