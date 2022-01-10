import React from "react";
import Image from "./Image";
import image from "../../../image/slide.jpg";
import image2 from "../../../image/slide2.jpg";
import image3 from "../../../image/slide3.jpg";
import image4 from "../../../image/slide4.jpg";

import "./Slide.scss"

function Slide() {
  return (
    <section className="slide">
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
    </section>
  );
}


export default Slide;
