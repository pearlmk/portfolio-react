import React from "react";
import "../Home/Home.css";
import "./Contact.css";
import Im4 from "../../img/im4.jpg";
import { LiaTelegramPlane } from "react-icons/lia";
import Icons from "../inc/Icon/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("*Please enter your name")
    .min(3, "Minimum 3 Chars required"),
  email: yup.string().email().required("*Please enter your email"),
});

function Contant() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (date) => {
    console.log(date);
    reset();
    toast.success("successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="container py-3">
        <div className="row contact-row p-2 rounded-2 mt-4 shadow-lg">
          <div className="col-12 col-lg-6">
            <h4
              className="text-capitalize text-light contact-head ms-3 fs-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              get in Touch 📧
            </h4>
            <div
              className="ms-5 mt-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Icons />
            </div>
            <div className="mt-lg-5">
              <h6
                className="text-light contact-subTitle fw-normal text-opacity-75"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Send Your Email Here!
              </h6>
              <img
                src={Im4}
                alt="Email-img"
                className="img-fluid"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div
            className="col-12 col-lg-6 mt-4 bg-light p-2 rounded-2 shadow"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <div className="mb-3">
                  <label htmlFor="nameTextInput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="nameTextInput"
                    className="form-control"
                    placeholder=""
                    {...register("name")}
                  />
                  <p className="text-danger fw-semibold ms-1">
                    {errors.name?.message}
                  </p>
                </div>
                <div className="mb-3">
                  <label htmlFor="emailTextInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailTextInput"
                    className="form-control"
                    placeholder=""
                    {...register("email")}
                  />
                  <p className="text-danger fw-semibold ms-1">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn rounded-pill px-5 subit-btn text-light text-uppercase"
                  disabled={isDirty && !isValid}>
                  <div className="d-inline-flex">
                    Send
                    <LiaTelegramPlane />
                  </div>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    limit={1}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contant;
