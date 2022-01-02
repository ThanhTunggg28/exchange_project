import React from "react";
import styled from "styled-components";

function Image({ image }) {
  return (
    <ImageStyled>
      <img src={image} alt="" className="image" />
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  position: absolute;
  width: 288px;
  height: 144px;

  top: 36px;

  border-radius: 10px;
  .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export default Image;
