import React from "react";
import "./Education.css";

function Education() {
  const education = [
    {
      id: 0,
      title: "web designer",
      content: "livewire institude, selaiyur",
      year: "2022-2023",
    },
    {
      id: 1,
      title: "Bachelor of Computer Science",
      content: "mohamed sathak art and Science collage, sholinganallur",
      year: "2017-2020",
    },
    {
      id: 2,
      title: "SSLC",
      content: "tambaram higher sec school, selaiyur",
      year: "2015-2017",
    },
  ];
  return (
    <ul
      className="unlist-style "
    >
      {education.map((item) => (
        <li key={item.id} className="my-4">
          <div className="d-flex justify-content-between">
            <h3 className="fs-5 display-2 fw-bold text-capitalize font-serif antialiased my-2">
              {item.title}
            </h3>
            <span className="badge rounded-pill  p-1 h-50 shadow-sm">{item.year}</span>
            </div>
            <span className="text-md font-medium font-serif antialiased text-dark text-capitalize">
              {item.content}
            </span>
        </li>
      ))}
    </ul>
  );
}

export default Education;
