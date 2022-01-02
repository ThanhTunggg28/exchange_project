import React from "react";
import styled from "styled-components";
import FooterDescripton from "./FooterDescripton";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer_about">
        <h1>About Us</h1>
        <FooterDescripton
          name1="About"
          name2="Careers"
          name3="Bussiness Contact"
          name4="Community"
          name5="Binance Block"
          name6="Term"
          name7="Privacy"
          name8="Annountcements"
          name9="News"
          name10="Notices"
        />
      </div>
      <div>
        <h1>Products</h1>
        <FooterDescripton
          name1="About"
          name2="Careers"
          name3="Bussiness Contact"
          name4="Community"
          name5="Binance Block"
          name6="Term"
          name7="Privacy"
          name8="Annountcements"
          name9="News"
          name10="Notices"
        />
      </div>
      <div>
        <h1>Service</h1>
        <FooterDescripton
          name1="About"
          name2="Careers"
          name3="Bussiness Contact"
          name4="Community"
          name5="Binance Block"
          name6="Term"
          name7="Privacy"
          name8="Annountcements"
          name9="News"
          name10="Notices"
        />
      </div>
      <div>
        <h1>Support</h1>
        <FooterDescripton
          name1="About"
          name2="Careers"
          name3="Bussiness Contact"
          name4="Community"
          name5="Binance Block"
          name6="Term"
          name7="Privacy"
          name8="Annountcements"
          name9="News"
          name10="Notices"
        />
      </div>
      <div>
        <h1>Learn</h1>
        <FooterDescripton
          name1="About"
          name2="Careers"
          name3="Bussiness Contact"
          name4="Community"
          name5="Binance Block"
          name6="Term"
          name7="Privacy"
          name8="Annountcements"
          name9="News"
          name10="Notices"
        />
      </div>
      <div>
        <h1>Community</h1>
        <FooterDescripton
          name1="About"
          name2="Careers"
          name3="Bussiness Contact"
          name4="Community"
          name5="Binance Block"
          name6="Term"
          name7="Privacy"
          name8="Annountcements"
          name9="News"
          name10="Notices"
        />
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.section`
  display: flex;
  position: absolute;
  top: 1798px;
  left: 230px;
  gap: 60px;
  text-align: left;

  height: 398px;
  width: 1195px;
`;

export default Footer;
