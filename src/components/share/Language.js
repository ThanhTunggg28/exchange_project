import React from "react";
import styled from "styled-components";

function Language({ trigger, lang }) {
  return trigger ? (
    <LanguageStyled>
      <h4>Choose a language and the region</h4>
      <div className="choose_one">
        {lang?.map((lan, index) => (
          <div key={index}>{lan.name}</div>
        ))}
      </div>
    </LanguageStyled>
  ) : (
    ""
  );
}

const LanguageStyled = styled.div`
  h4 {
    margin: 10px 0 20px 10px;
    text-align: left;
  }
  .choose_one {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-row-gap: 20px;

    font-size: 18px;

    div {
      height: 20px;
      padding: 5px;
      line-height: 20px;
    }
  }
`;

export default Language;
