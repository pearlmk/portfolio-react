import React from "react";
import Typewriter from 'typewriter-effect';

function Typical() {
  return (
    <div>
      <h1>
        <span className="text-light fs-2 fw-semibold lh-lg">
          <Typewriter 
           options={{
            strings: ["Web designer 💻", "Front End 🐱‍👤","Web developer ⌨"],
            autoStart: true,
            loop: true,
          }}/>
        </span>
      </h1>
    </div> 
  );
}

export default Typical;
