import React from "react";

function Inst() {
  const Resume = [
    {
      id: 0,
      Title: "CRICKET",
      PARA: "Accomplished cricketer with a proven track record in both batting and fielding. Demonstrated leadership skills as captain of the team,consistenly contributing to victories in competitive matches.",
    },
    {
      id: 1,
      Title: "MUSIC",
      PARA: "Listening to soothing music is something i can never  compromise with,skimming through Spotify pop songs charts is times the best stress reliever that i can get my handle on.",
    },
    {
      id: 2,
      Title: "COMPETITIVE GAMING",
      PARA: "I link to challenge my reflexes a lot while competing in football games,pushing the rank and having interactive gaming sessions excites me the most.",
    },
  ];
  return (
    <>
      <ul className="list-unstyled">
        {Resume.map((item) => (
          <li className="my-4 font-serif" key={item.id}>
            <h3 className="text-lg fw-bold text-capitalize my-2">
              {item.Title}
            </h3>
            <p className="text-sm text-dark">{item.PARA}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Inst;
