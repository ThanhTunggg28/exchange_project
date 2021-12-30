import React from "react";
import "./App.css";
import Header from "./components/Header";
import Alert from "./components/Alert";
import Banner from "./components/Banner";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Market from "./components/Market";
import TradeNow from "./components/TradeNow";

function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <Banner />
      <Slide />
      <Market />
      <TradeNow />
      <Footer />
    </div>
  );
}

export default App;
