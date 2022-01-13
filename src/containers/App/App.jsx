import React from "react";
import "../../scss/main.scss";

import Header from "../../shared/components/Header";
import Alert from "../../shared/components/Alert";

import Resgister from "../Register/index";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../Home/index";
import Login from "../Login/index";
import WalletPage from "../Wallet/index";
import DepositPage from "../Deposit/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/register" component={Resgister} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/wallet" component={WalletPage} />
        <Route exact path="/deposit" component={DepositPage} />
      </Switch>
    </div>
  );
}

export default App;
