import React from "react";

function Project({ Title, subTitle, summary }) {
  return (
    <>
      <ul className="unlist-styled"> 
        <li className="my-2">
        <div className="d-flex justify-content-between">
          <h3 className="fs-5 fw-bold text-capitalize font-serif antialiased my-1">
            {Title}
          </h3>  
          <span className="badge h-50">2023</span>
          </div>
            <h6 className="my-1 text-sm font-semibold font-serif antialiased text-dark">{subTitle}</h6>
          <span className="my-2 text-sm font-serif antialiased text-muted">{summary}</span>
        </li>
      </ul>
    </>
  );
}

export default Project;
