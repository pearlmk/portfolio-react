import React from "react";
import { BiLogoNetlify } from "react-icons/bi";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Icons() {
  return (
    <>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="https://app.netlify.com/teams/pearlmk/overview" className="text-light fs-4">
            <AiFillFacebook />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.facebook.com/" className="text-light fs-4">
            <BiLogoNetlify />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.instagram.com/pearl._.mk/" className="text-light fs-4">
            <AiFillGithub />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://github.com/pearlmk" className="text-light fs-4">
            <AiOutlineInstagram />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Icons;
