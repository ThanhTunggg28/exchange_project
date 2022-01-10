import React from "react";

import "./Button.scss"

function Button({ name }) {
  return (
    <button className="btn-active">
      <div className="text">{name}</div>
    </button>
  );
}



export default Button;
