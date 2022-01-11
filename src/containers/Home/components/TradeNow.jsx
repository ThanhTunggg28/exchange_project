import React from "react";
import Button from "../../../shared/components/Button";
import ButtonNonActive from "../../../shared/components/ButtonNonActive";
import { useSelector } from "react-redux";

import "./TradeNow.scss"

function TradeNow() {

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser;

  return isLoggedIn ? (
    <section className="trade">
      <h1>Start Trading Now</h1>
      
      <div className="button1">
        <ButtonNonActive name="Register Now" />
      </div>
      <div className="button2">
        <Button name="Trade Now" />
      </div>
    </section>
  ): <section className="trade">
  <h1>Start Trading Now</h1>
  
  <div className="button1">
    <Button name="Register Now" />
  </div>
  <div className="button2">
    <ButtonNonActive name="Trade Now" />
  </div>
</section>;
}


export default TradeNow;
