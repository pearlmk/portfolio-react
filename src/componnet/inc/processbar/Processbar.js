import React from "react";
import './Processbar.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Processbar() {
  const Bar = [
    { id: 0, name: "HTML", value: 85 },
    { id: 1, name: "CSS", value: 80 },
    { id: 2, name: "JAVASCRIPT", value: 60 },
    { id: 3, name: "BOOTSTRAP", value: 70 },
    { id: 4, name: "SEO", value: 80 },
    { id: 5, name: "JQUERY", value: 70 },
    { id: 6, name: "REACT JS", value: 80 },
    { id: 7, name: "GITHUB", value: 80 },

];

  return (
    <>
     { Bar.map((item)=>(
        <li className="my-3 mx-3">
               <h3 className="fs-6  my-2 fw-semibold text-capitalize antialiased font-serif">
               {item.name}
             </h3>
             <ProgressBar className="rounded-0" now={item.value} label={`${item.value}%`}  style={{width: "80%"}}/>
    </ li>
     ))
     }
    </>
  );
}

export default Processbar;
