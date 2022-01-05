import React from "react";
import "./App.css";

import Header from "./components/share/Header";
import Alert from "./components/share/Alert";

import Resgister from "./components/register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/login/Login";

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
      </Switch>
    </div>
  );
}

export default App;
