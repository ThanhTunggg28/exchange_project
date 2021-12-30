import React from "react";
import styled from "styled-components";
import Image from "./Image";
import image from "../image/slide.jpg";
import image2 from "../image/slide2.jpg";
import image3 from "../image/slide3.jpg";
import image4 from "../image/slide4.jpg";

function Slide() {
  return (
    <SlideStyled>
      <div className="image_child">
        <div className="image_child-1">
          <Image image={image4} />
        </div>
        <div className="image_child-1">
          <Image image={image} />
        </div>
        <div className="image_child-1">
          <Image image={image2} />
        </div>
        <div className="image_child-1">
          <Image image={image3} />
        </div>
      </div>
    </SlideStyled>
  );
}

const SlideStyled = styled.section`
  position: relative;
  top: 500px;
  left: 79px;

  height: 212px;

  .image_child {
    display: flex;
    gap: 71px;

    top: 36px;
    height: 144px;
    width: 1364px;
  }
  .image_child-1 {
    width: 288px;
  }
`;

export default Slide;
