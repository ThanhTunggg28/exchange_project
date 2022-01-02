import React from "react";
import styled from "styled-components";
import Alert from "../share/Alert";
import Footer from "../share/Footer";
import Header from "../share/Header";
import Banner from "./Banner";
import Market from "./Market";
import Slide from "./Slide";
import TradeNow from "./TradeNow";

function HomePage() {
  return (
    <HomePageStyled>
      <Header />
      <Alert />
      <Banner />
      <Slide />
      <Market />
      <TradeNow />
      <Footer />
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div``;

export default HomePage;
