import React from "react";

import "./Language.scss"

function Language({ trigger, lang }) {
  return trigger ? (
    <div className="language_tab">
      <h4>Choose a language and the region</h4>
      <div className="choose_one">
        {lang?.map((lan, index) => (
          <div key={index}>{lan.name}</div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}


export default Language;
