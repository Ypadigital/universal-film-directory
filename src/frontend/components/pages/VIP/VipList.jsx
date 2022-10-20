import React from "react";
import { Link } from "react-router-dom";
import Breadcrub from "../../Common/Breadcrub";
import Filter from "../../Common/Filter";
import SortsTags from "../../Common/Sorts&Tags";
import { FreelancerData, FrelancerSkills } from "../../Data/UserDatas";
import Rating from "../../Common/Ratings";
import FavoriteModal from "../../Common/Modals/FavoriteModal";

const VipList = (props) => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrub title="VIP's" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <Filter project={false} />
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <SortsTags />
              <div className="row">
                {FreelancerData.map((freelancer) => (
                  <div
                    key={freelancer.id}
                    className="col-md-6 col-lg-6 col-xl-4"
                  >
                    <div className="freelance-widget">
                      <div className="freelance-content">
                        <div className="freelance-img">
                          <img src={freelancer.image} alt={freelancer.name} />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </div>
                        <div className="freelance-info">
                          <h3>{freelancer.name}</h3>

                          <div className="freelance-specific">
                            {freelancer.category}
                          </div>
                          <div className="freelance-location">
                            <i className="fas fa-map-marker-alt me-1" />
                            {freelancer.location}
                          </div>
                          <div className="rating">
                            <Rating value={freelancer.totalRates} />
                            <span className="average-rating">
                              {freelancer.totalRates} (
                              {freelancer.reviwes.length})
                            </span>
                          </div>
                          <div className="freelance-tags">
                            {FrelancerSkills.slice(0, 3).map((skill, index) => (
                              <Link to="#" key={index}>
                                <span className="badge badge-pill badge-design">
                                  {skill}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="freelancers-price">
                            ${freelancer.price} {freelancer.per}
                          </div>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to={`/freelancer/${freelancer.id}`}
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <FavoriteModal freelancer={true} />
      {/* /The Modal */}
    </>
  );
};
export default VipList;
