import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import Images
import Breadcrumb from "../../Common/Breadcrumb";
import Filter from "../../Common/Filter";
import { FreelancerData, FrelancerSkills } from "../../Data/UserDatas";
import Rating from "../../Common/Ratings";
import { useDataContext } from "../../../contexts/dataContext";
import { getAverage, getFullName, getRandomKey } from "../../../utils/helpers";

const Developer = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  let { profiles, categories } = useDataContext();
  const freelancers = profiles.data || [];
  const filteredResults = freelancers;

  categories = categories.data || [];

  const [sortType, setsortType] = useState("Latest");
  // if (!freelancers.length) return <div>Loading...</div>;
  if (filteredResults.length > 0) {
    console.log(filteredResults);
  }
  const handleSort = (e) => {
    setsortType(e.target.value);
  };
  return (
    <>
      {!!categories.length && !!filteredResults.length && (
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                <Filter categories={categories} />
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                {/* <SortsTags /> */}
                <div className="sort-tab">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="d-flex align-items-center">
                        <div className="freelance-view">
                          <h4>
                            Showing {filteredResults.length}{" "}
                            {`${filteredResults > 1 ? "results" : "result"}`}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="d-flex justify-content-sm-end">
                        <div className="sort-by">
                          <select
                            value={sortType}
                            onChange={handleSort}
                            className="custom-select form-select"
                          >
                            <option>Rating</option>
                            <option>Latest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {filteredResults.map((freelancer) => (
                    <div
                      key={getRandomKey()}
                      className="col-md-6 col-lg-6 col-xl-4"
                    >
                      <div className="freelance-widget">
                        <div className="freelance-content">
                          <div className="freelance-img">
                            <img src={freelancer.user.image} alt="" />
                            <span className="verified">
                              <i className="fas fa-check-circle" />
                            </span>
                          </div>
                          <div className="freelance-info">
                            <h3>{getFullName(freelancer.user)}</h3>

                            <div className="freelance-specific">
                              {freelancer.descripton}
                            </div>
                            <div className="freelance-location">
                              <i className="fas fa-map-marker-alt me-1" />
                              {freelancer.location}
                            </div>
                            <div className="rating">
                              <Rating value={getAverage(freelancer.ratings)} />
                              <span className="average-rating">
                                {getAverage(freelancer.ratings)} (
                                {freelancer.ratings.length})
                              </span>
                            </div>
                            <div className="freelance-tags gap-10 d-flex justify-content-center">
                              {freelancer.categories
                                .slice(0, 3)
                                .map((category, index) => (
                                  <span
                                    key={getRandomKey()}
                                    className="badge badge-pill badge-design"
                                  >
                                    {category.name}
                                  </span>
                                ))}
                            </div>
                          </div>
                        </div>
                        <div className="cart-hover">
                          <Link
                            to={`/freelancer/${freelancer._id}`}
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
      )}
      <Breadcrumb title="Freelancers" />
    </>
  );
};
export default Developer;
