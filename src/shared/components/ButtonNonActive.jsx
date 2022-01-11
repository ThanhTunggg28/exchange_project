import React from "react";

import "./ButtonNonActive.scss"

function ButtonNonActive({ name }) {
  return (
    <button className="btn-nonactive">
      <div className="text">{name}</div>
    </button>
  );
}



export default ButtonNonActive;
