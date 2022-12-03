import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Common/Breadcrumb";
import Filter from "../../Common/Filter";
import SortsTags from "../../Common/Sorts&Tags";
import FavoriteModal from "../../Common/Modals/FavoriteModal";
import { VipData } from "../../Data/VipData";

const VipList = (props) => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb title="VIP's" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <Filter project={true} />
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <SortsTags />
              <div className="row">
                {VipData.map((freelancer) => (
                  <div
                    key={freelancer.id}
                    className="col-md-6 col-lg-6 col-xl-4"
                  >
                    <div className="freelance-widget">
                      <div className="freelance-content">
                        <div className="freelance-img">
                          <img src={freelancer.image} alt="UserImage" />
                          <span className="verified">
                            <i className="fas fa-check-circle" />
                          </span>
                        </div>
                        <div className="freelance-info">
                          <h3>{freelancer.name}</h3>
                          <div className="freelance-specific">
                            From :{" "}
                            <span className="bg-pink">{freelancer.from}</span>
                          </div>
                          <div className="freelance-location">
                            <i className="fas fa-map-marker-alt me-1" />
                            {freelancer.location}
                          </div>
                          <div className="freelancers-price">
                            {freelancer.category}
                          </div>
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
