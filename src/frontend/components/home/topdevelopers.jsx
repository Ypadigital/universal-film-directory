import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import $ from "jquery";
import { FreelancerData, FrelancerSkills } from "../Data/UserDatas";
import Rating from "../Common/Ratings";
import FavoriteModal from "../Common/Modals/FavoriteModal";

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
                <h2 className="header-title">Most Hired Freelancers</h2>
                <p>Work with talented people at the most affordable price</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="developer-slider slider"> */}
              <Slider {...settings} className="developer-slider">
                {FreelancerData.map((item, index) => (
                  <div className="freelance-widget">
                    <div className="freelance-content">
                      <a
                        data-bs-toggle="modal"
                        href="#rating"
                        className={`favourite ${item.liked && "favourited"}`}
                      >
                        <i className="fas fa-star" />
                      </a>
                      <div className="freelance-img">
                        <img src={item.image} alt="UserImage" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </div>
                      <div className="freelance-info">
                        <h3>{item.name}</h3>
                        <div className="freelance-specific">
                          {item.category}
                        </div>
                        <div className="freelance-location">
                          <i className="fas fa-map-marker-alt me-1" />
                          {item.location}
                        </div>
                        <div className="rating">
                          <Rating value={item.totalRates} />
                          <span className="average-rating">
                            {item.totalRates} (32)
                          </span>
                        </div>
                        <div className="freelance-tags">
                          {FrelancerSkills.slice(0, 3).map((skill, index) => (
                            <span
                              key={index}
                              className="badge badge-pill badge-design"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="freelancers-price">
                          ${item.price} {item.per}
                        </div>
                      </div>
                    </div>
                    <div className="cart-hover">
                      <Link
                        to={`/freelancer/${item.id}`}
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
