import React from "react";
import Shape from "../../../img/shape-bg.png";

function Footer() {
  return (
    <div className="container-fluid">
    <div className="row bg-sky"
     >
      <img src={Shape} alt="shape-wave" className="img-fluid object-fit" />
    </div>
    </div>
  );
}

export default Footer;
