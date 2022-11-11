import React from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
import Breadcrub from "../Common/Breadcrub";
// Import Images
import { About_img } from "../imagepath";

const Aboutus = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrub title="About Us" />
      {/* /Breadcrumb */}
      {/* About */}
      <section className="section about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="about-content">
                <h2>
                  About <span className="orange-text">AXYZ Movie Services</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  modi, saepe hic esse maxime quasi, sapiente ex debitis quis
                  dolorum unde, neque quibusdam eveniet nobis enim porro
                  repudiandae nesciunt quidem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni delectus soluta adipisci beatae ullam quisquam, quia
                  recusandae rem assumenda, praesentium porro sequi eaque
                  doloremque tenetur incidunt officiis explicabo optio
                  perferendis.
                </p>
                <Link to="/freelancer" className="btn learn-btn">
                  Browser Now
                </Link>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="about-img">
                <img className="img-fluid" src={About_img} alt="AboutImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About */}
      {/* Counter */}
      <section className="section job-counter">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="counter">
                <h2>800+</h2>
                <h4>Celebrities</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter">
                <h2>80+</h2>
                <h4>Movie Studios</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter">
                <h2>900+</h2>
                <h4> Providers</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="counter">
                <h2>90+</h2>
                <h4>Agencies</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about 2 */}
      <section className="section about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="about-content">
                <h2>
                  About{" "}
                  <span className="orange-text">Universal Film Directory</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  modi, saepe hic esse maxime quasi, sapiente ex debitis quis
                  dolorum unde, neque quibusdam eveniet nobis enim porro
                  repudiandae nesciunt quidem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni delectus soluta adipisci beatae ullam quisquam, quia
                  recusandae rem assumenda, praesentium porro sequi eaque
                  doloremque tenetur incidunt officiis explicabo optio
                  perferendis.
                </p>
                <Link to="/freelancer" className="btn learn-btn">
                  Browser Now
                </Link>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="about-img">
                <img className="img-fluid" src={About_img} alt="AboutImage" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experts */}
      {/* <section className="section expert">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h5>SINCE THE START</h5>
              <h2>We Provide Stable Service With Experts</h2>
              <p>
                Experience state-of-the-art marketplace platform with the
                Exertio. We combine the experience of our global community
                around the globe for a best marketplace theme.
              </p>
              <p>
                With Exertio, you can develop a website for remote freelancers
                that will provide their best to the clients who are looking for
                remote resources.
              </p>
              <div className="btn-item">
                <Link className="btn get-btn" to="/register">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* /Experts */}
    </>
  );
};
export default Aboutus;
