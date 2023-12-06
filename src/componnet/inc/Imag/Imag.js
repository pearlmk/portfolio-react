import React, { Component } from "react";
import Slider from "react-slick";
import portfolio from '../../../img/project img/website1 (6).png'
import landingpage from "../../../img/project img/website1 (2).png";
import food from "../../../img/project img/website1 (3).png";
import portfolio2 from "../../../img/project img/website1 (4).png";
import todolist from "../../../img/project img/website1 (5).png";
import loginpage from '../../../img/project img/website1 (1).png'
import landingpage2 from '../../../img/project img/website1 (7).png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Imag/Imag.css';
import { FaRegHandPointUp } from "react-icons/fa";



export default class Responsive extends Component {
 
  handleClickOne = () => {
      window.open('https://pearlmk.github.io/kfc/assets/','_blank');
  }
  handleClickTwo = () => {
    window.open('https://pearlmk.github.io/responsive-website/assets/','_blank');
}
handleClickThree = () => {
  window.open('https://pearlmk.github.io/portfolio-mk/assets/','_blank');
}
handleClickFour = () => {
  window.open('https://todo-list-pearl.netlify.app/','_blank');
}
 handleClickFive = () => {
    window.open('https://pearlmk.github.io/login/assets/','_blank');
}
handleClickSix = () => {
  window.open('https://pearlmk.github.io/landing-page/assets/','_blank');
}
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="m-4 px-3">
        <Slider {...settings}>
        <div className="card card-bg border-none px-lg-2 bg-transparent">
            <img src={portfolio} alt="portfolio" className="hover-effect border-2" />
             <div className="text-bg-dark text-center py-2">
             <span className="d-flex justify-content-center"><h6 className="text-light text-uppercase me-3"> personal portfolio </h6> <FaRegHandPointUp /></span>
            </div>
          </div>
          <div className="card card-bg border-none px-lg-2 bg-transparent ">
           <img src={food} alt="food_wdsite" className="hover-effect" onClick={this.handleClickOne} /> 
           <div className="text-bg-dark text-center py-2">
               <span className="d-flex justify-content-center"><h6 className="text-light text-uppercase me-3"> FOOD WEBSITE</h6> <FaRegHandPointUp /></span>
            </div>
          </div>
          <div className="card card-bg border-none px-lg-2 bg-transparent">
            <img src={landingpage} alt="landing-page" className="hover-effect" onClick={this.handleClickTwo} />
            <div className="text-bg-dark text-center py-2">
               <span className="d-flex justify-content-center"><h6 className="text-light text-uppercase me-3"> LANDING PAGE</h6> <FaRegHandPointUp /></span>
            </div>
          </div> 
          <div className="card card-bg border-none px-lg-2 bg-transparent">
            <img src={portfolio2} alt="landing-page2" className="hover-effect" onClick={this.handleClickThree} />
            <div className="text-bg-dark text-center py-2">
               <span className="d-flex justify-content-center"><h6 className="text-light text-uppercase me-3"> portfolio</h6> <FaRegHandPointUp /></span>
            </div>
          </div>
          <div className="card card-bg border-none px-lg-2 bg-transparent">
             <img src={todolist} alt="todolist" className="hover-effect" onClick={this.handleClickFour} />
             <div className="text-bg-dark text-center py-2">
               <span className="d-flex justify-content-center"><h6 className="text-light text-uppercase me-3"> TODO LIST</h6> <FaRegHandPointUp /></span>
            </div>
          </div>
          <div className="card card-bg border-none px-lg-2 bg-transparent">
          <img src={loginpage} alt="loginpage" className="hover-effect" onClick={this.handleClickFive} />
          <div className="text-bg-dark text-center py-2">
               <span className="d-flex justify-content-center"><h6 className="text-light text-uppercase me-3">  LOGIN </h6> <FaRegHandPointUp /></span>
            </div>
          </div>
          <div className="card card-bg border-none px-lg-2 bg-transparent">
          <img src={landingpage2} alt="loginpage" className="hover-effect" onClick={this.handleClickSix} />
          <div className="text-bg-dark text-center py-2">
               <span className="d-flex justify-content-center"><h6 className="text-light text-uppercase me-3">  landing page </h6> <FaRegHandPointUp /></span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
