import React from "react";
import "./App.css";

import Resgister from "./components/register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/register" component={Resgister} />
    </div>
  );
}

export default App;
