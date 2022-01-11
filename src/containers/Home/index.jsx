import React from "react";
import Footer from "../../shared/components/Footer";
import Banner from "./components/Banner";
import Market from "./components/Market";
import Slide from "./components/Slide";
import TradeNow from "./components/TradeNow";

function HomePage() {
  return (
    <div>
      <Banner />
      <Slide />
      <Market />
      <TradeNow />
      <Footer />
    </div>
  );
}


export default HomePage;
