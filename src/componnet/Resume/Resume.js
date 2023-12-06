import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { BsGraphDown } from "react-icons/bs";
import { IoColorPalette } from "react-icons/io5";
import "./Resume.css";
import Project from "../inc/Project/Project";
import Inst from "../inc/Interests/Inst";
import Education from "../inc/Education/Education";
import Processbar from "../inc/processbar/Processbar";



function Resume() {

  return (
    <div className="container-fluid ">
      <div className="row my-5">
        <div className="col-12 col-lg-4 offset-lg-1">
          <div
            className=""
          >
            {/* icons */}
            <ul
              id="simple-list-example"
              className="unstyle-list list-inline my-4 border-end"
            >
              <li className="d-flex list-inline-item">
                <span className="resume-icone-bg px-2 py-5 mt-2">
                  <FaUserGraduate />
                </span>
                <span className="resume-icon-text mt-5 w-75 hover:bg-sky hover:w-[65%] hover:rounded-r-2xl hover:text-white">
                  <a className="ms-3" smooth href="#Education">
                    Education
                  </a>
                </span>
              </li>
              <li className="d-flex list-inline-item">
                <span className="resume-icone-bg py-4 px-2">
                  <FaComputer />
                </span>
                <span className="resume-icon-text mt-3  w-75 hover:bg-sky hover:w-[65%] hover:rounded-r-2xl hover:text-white">
                  <a className="ms-3" href="#programming">
                    programming Skills
                  </a>
                </span>
              </li>
              <li className="d-flex list-inline-item">
                <span className="resume-icone-bg py-3 px-2">
                  <BsGraphDown />
                </span>
                <span className="resume-icon-text mt-2 w-75 hover:bg-sky hover:w-[65%] hover:rounded-r-2xl hover:text-white">
                  <a className="ms-3" href="#Projects">
                    Projects
                  </a>
                </span>
              </li>
              <li className="d-flex list-inline-item">
                <span className="resume-icone-bg py-2 px-2">
                  <IoColorPalette />
                </span>
                <span className="resume-icon-text w-75 hover:bg-sky hover:w-[65%] hover:rounded-r-2xl hover:text-white">
                  <a className="ms-3" href="#Interests">
                    Interests
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-12 col-lg-6 px-3 ms-lg-3"
        >
          <ul
            style={{ height: "350px", overflowY:"scroll" }}
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            className="scrollspy"
          >
            <li id="Education" className="">
              <Education />
            </li>
            <li id="programming" className="grid py-4">
              <Processbar />
            </li>
            <li id="Projects" className="py-3">
              <div className=" py-1">
                <Project
                  Title="personal portfolio website"
                  subTitle="Technologys Used React js,Bootstrap,React router,tailwind."
                  summary="A personal portfolio website href showcase all my details and  project at one place."
                />
                <Project
                  Title="Landing page"
                  subTitle="Technologys Used HTML,CSS,Javascript,Bootstrap."
                  summary="Created a Landing page website using HTML,CSS,JavaScript for practice,showcasing my web development skills."
                />
                <Project
                  Title="Food Website"
                  subTitle="Technologys Used HTML,CSS,Javascript,Jquery,Bootstrap."
                  summary="Created a Food website using HTML,CSS,JavaScript for practice,showcasing my web development skills."
                />
              </div>
            </li>
            <li id="Interests" className="py-3">
              <Inst />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
