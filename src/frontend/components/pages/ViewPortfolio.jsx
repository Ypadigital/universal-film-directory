import React from "react";
import Slider from "react-slick";
import Breadcrub from "../Common/Breadcrub";
import HireModal from "../Common/Modals/HireModal";
import { Avatar_1 } from "../imagepath";

const ViewPortfolio = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    centerPadding: "0px",
  };
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrub title="Portfolio Overview" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-post widget-box" id="overview">
                <h3 className="pro-title">
                  I will work on your video as editor, filmer or director
                </h3>
                <div className="pro-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Donec eget vestibulum
                    lorem. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque tempor aliquam felis, nec condimentum ipsum
                    commodo id. Vivamus sit amet augue nec urna efficitur
                    tincidunt. Vivamus consectetur aliquam lectus commodo
                    viverra. Nunc eu augue nec arcu efficitur faucibus.
                  </p>
                  <div className="my-4">
                    <h4 className="widget-title">$500</h4>
                    <span className="mb-0">( Per Month )</span>
                  </div>
                  <div className="submit-section">
                    <a
                      data-bs-toggle="modal"
                      href="#hire"
                      className="btn btn-primary submit-btn"
                    >
                      Hire Me Now
                    </a>
                  </div>
                </div>
              </div>
              {/* link */}
              <div className="pro-post widget-box post-widget">
                <h3 className="pro-title">Project Link</h3>
                <div className="pro-content">
                  <div className="form-group profile-group mb-0">
                    <div className="input-group">
                      <div className="form-control">
                        <a
                          rel="noopener noreferrer"
                          href="https://www.google.com/"
                          target="_blank"
                        >
                          https://www.google.com/
                        </a>
                      </div>

                      <div className="input-group-append">
                        <button
                          className="btn btn-success sub-btn"
                          type="submit"
                        >
                          <i className="fa fa-clone" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <Slider {...settings} className="developer-slider h-100">
                <div className="w-100">
                  <img
                    src={Avatar_1}
                    className="img-fluid w-100"
                    height={300}
                    alt=""
                  />
                </div>
                <div className="w-100">
                  <img
                    src={Avatar_1}
                    alt=""
                    className="img-fluid w-100"
                    height={300}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <HireModal />
      {/* /Page Content */}
    </>
  );
};
export default ViewPortfolio;
