import React from "react";
import "./App.css";
<<<<<<< HEAD
import Header from "./components/Header";
import Alert from "./components/share/Alert";
import Banner from "./components/Banner";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Market from "./components/Market";
import TradeNow from "./components/TradeNow";
import Resgister from "./components/register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
=======
import HomePage from "./components/HomePage/HomePage";
>>>>>>> main

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Route path="/users">
        <Alert />
      </Route>
      <Route exact path="/home" component={Header} />
      <Route exact path="/register" component={Resgister} />
=======
      <HomePage />
>>>>>>> main
    </div>
  );
}

export default App;
