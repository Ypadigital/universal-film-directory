import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import $ from "jquery";
import FavoriteModal from "../Common/Modals/FavoriteModal";
import { VipData } from "../Data/VipData";

const TopDevelopers = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    $(".slick-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".slick-next").html('<i class="fa fa-chevron-right"></i>');
  });
  return (
    <>
      {/* Top Instructor */}
      <section className="section developer">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 col-12 mx-auto">
              <div className="section-header text-center">
                <div className="section-line" />
                <h2 className="header-title">StarSpace 360</h2>
                <p>Work with talented people at the most affordable price</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="developer-slider slider"> */}
              <Slider {...settings} className="developer-slider">
                {VipData.map((item, index) => (
                  <div key={index} className="freelance-widget">
                    <div className="freelance-content">
                      <div className="freelance-img">
                        <img src={item.image} alt="UserImage" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </div>
                      <div className="freelance-info">
                        <h3>{item.name}</h3>
                        <div className="freelance-specific">
                          From : <span className="bg-pink">{item.from}</span>
                        </div>
                        <div className="freelance-location">
                          <i className="fas fa-map-marker-alt me-1" />
                          {item.location}
                        </div>
                        <div className="freelancers-price">{item.category}</div>
                      </div>
                    </div>
                    <div className="cart-hover">
                      <Link
                        to="/vip-profile"
                        className="btn-cart"
                        tabIndex={-1}
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* End Developer */}
      <FavoriteModal />
    </>
  );
};
export { TopDevelopers };
