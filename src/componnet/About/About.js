/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Degree from "../../img/degree.jpg";
import "./About.css";
import Resume from '../../img/resume.png'

function Contant() {
  return (
    <>
      <div className="container-fluid py-3 overflow-hidden">
        <div className="card text-bg-transparant  shadow rounded border-0 overflow-hidden mx-lg-5">
           <div className="row">
            <div className="col-lg-3 d-none d-lg-block"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={Degree}
                className="img-fluid rounded-start object-fit Degree-pic "
                alt="Degree-pic"
                loading="lazy"
                style={{ maxHeight: "460px", minHeight: "460px" }}
              />
            </div>
            <div className="col-lg-8 px-2 mx-lg-5">
              <div className="card-body">
                <p
                  className="card-text text-capitalize my-3 "
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  I'm a Front-end web developer fresher adept in
                  HTML,CSS,javascript, and jquery.
                   i also possess proficiencyin bootstrap and
                  react.js,enabling me to creft dynamic and captivating
                  websites.
                 with gitHub expertise,i'm ready to collaborate and
                  contribute effectively to web development endeavors.{/*  */}
                </p>
                <h3 className="card-title fs-4 fw-semibold mt-lg-4 text-capitalize text-orange">
                  Here are a Few Highlights
                </h3>
                <ul
                  className="about-list list-style  mt-1 mt-lg-3 ms-4 font-mono"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <li className="about-list-item text-capitalize">
                    i'm Front End web developer
                  </li>
                  <li className="about-list-item text-capitalize">
                    Interactive Front End as per the design
                  </li>
                  <li className="about-list-item text-capitalize">
                    front End libraries and framework, bootstrap and React js{" "}
                  </li>
                  <li className="about-list-item text-capitalize">
                    React js, you possess a strong foundation in building
                    responsive and interactive user interfaces
                  </li>
                </ul>
                <div className="text-center align-item-end mt-lg-4 font-mono mx-3 mx-md-0" 
                 data-aos="fade-left"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
                 data-aos-offset="50"
                >
                  <a
                    href={Resume}
                    className="btn about-btn-hire rounded-pill text-light text-nowrap ms-3 fw-normal py-1  w-full sm:w-40  my-3 fs-6"
                  >
                    Hire Me
                  </a>
                  <a
                    href={Resume}
                    download={Resume}
                    className="btn about-btn-resume rounded-pill text-light text-nowrap ms-3  fw-normal py-1 w-full sm:w-40 fs-6"
                  >
                    Get Resume
                  </a>
                </div>
              </div>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Contant;
