import React from "react";
import "./Header.css";

function Header({ Title, subTitle }) {
  return (
    <>
      <h3 className="text-center fs-2 fw-bolder my-2">{Title}</h3>
      <h6 className="text-center fw-normal fs-6 font-monospace">{subTitle}</h6>
      <div className="d-flex justify-content-center position-relative my-3">
        <hr className="border border-dark border-1 opacity-100" />
        <div className="create-bar position-absolute top-50 start-50 translate-middle"></div>
      </div>
    </>
  )
  
}


export default Header
