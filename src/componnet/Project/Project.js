import React from "react";
import Card from "../inc/card/Card";
import "./Project.css";
import shape from "../../img/shape-bg.png";

function Contant() {
  return (
    <div
      className="container-fluid py-lg-3 overflow-hidden"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="row project-row overflow-hidden order-1 mt-5">
        <Card />
      </div>
      <div className="row project-row2 order-2">
        <img src={shape} alt="" className=" object-fit img-fluid" />
      </div>
    </div>
  );
}

export default Contant;
