import React from "react";

import "./FooterDescription.scss"

function FooterDescription({
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
  name8,
  name9,
  name10,
  name11,
  name12,
}) {
  return (
    <div className="footer-description">
      <div>{name1}</div>
      <div>{name2}</div>
      <div>{name3}</div>
      <div>{name4}</div>
      <div>{name5}</div>
      <div>{name6}</div>
      <div>{name7}</div>
      <div>{name8}</div>
      <div>{name9}</div>
      <div>{name10}</div>
      <div>{name11}</div>
      <div>{name12}</div>
    </div>
  );
}



export default FooterDescription;
