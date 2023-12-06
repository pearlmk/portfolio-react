import React from "react";
import muthu from "../../img/mk2.jpg";
import Button from "../inc/button/Button";
import Typical from "../inc/Typical/Typical";
import Icons from "../inc/Icon/Icon";
import "./Home.css";

function Home() {
  return (
    <div className="container-fluid overflow-hidden">
      <div
        className="row bg-sky pt-5"
      >
        {/* right site */}
        <div
          className="col-lg-7 col-sm-12 order-2 text-center pt-4 mt-lg-5 pt-lg-5 h-lg-96"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          {/* icons */}
          <Icons />
          {/* name text */}
          <div className="mt-2">
            <h2 className="text-light text-capitalize fs-4 tracking-wide">
              Hello i'm <span style={{ color: "orangered" }}> muthukumar</span>
            </h2>
            {/* typical */}
            <div>
              <Typical />
            </div>
            <p className="text-light fs-5 fw-lighter lh-lg tracking-widest">
              Knock of building web design with front-end operations.
            </p>
          </div>

          {/* button */}
          <div className="mt-2">
            <Button firstBtn="Hire me" secBtn="Get Resume" />
          </div>
        </div>

        {/* left side */}
        <div
          className="col-lg-5 col-12 order-1 order-lg-2 h-lg-96 pt-lg-5 mt-lg-2"
          // style={{ "padding-left": "100px" }}
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          {/* img */}
          <div className="mb-1">
            <img
              src={muthu}
              alt="profile"
              className="img-fluid object-fit Home-img mx-auto"
              loading="lazy"
            />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
