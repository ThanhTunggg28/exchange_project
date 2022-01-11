import React from "react";

import "./Image.scss"

function Image({ image }) {
  return (
    <div className="image">
      <img src={image} alt="" className="image-product" />
    </div>
  );
}



export default Image;
