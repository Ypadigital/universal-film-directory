import React from "react";
import { Link } from "react-router-dom";
import { getAverage, getFullName } from "../../../utils/helpers";
import Rating from "../../Common/Ratings";
import { Flags_pl } from "../../imagepath";

function UserInfo({ freelancer }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="profile">
          <div className="profile-box">
            <div className="provider-widget">
              <div className="pro-info-left">
                <div className="provider-img">
                  <img src={freelancer.user.image} alt="" />
                </div>
                <div className="profile-info">
                  <h2 className="profile-title">{getFullName(freelancer.user)}</h2>
                  <p className="profile-position">{freelancer.description}</p>

                  <ul className="profile-preword">
                    <li>{freelancer.location}</li>
                    <li>
                      <div className="rating">
                        <span className="average-rating">
                          {getAverage(freelancer.ratings)}
                        </span>
                        <Rating value={getAverage(freelancer.ratings)} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pro-info-right profile-inf r-0">
                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                  <Link to="/chat" className="btn bid-btn">
                    Chat Now <i className="material-icons">chat</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-list">
            <ul className="row">
              <li className="col-4">
                <span className="cont bg-blue">
                  {freelancer.noOfCompletedJobs}
                </span>
                <strong className="proj-title"> Completed Projects</strong>
              </li>
              <li className="col-4">
                <span className="cont bg-red">{freelancer.noOfOngoingJobs}</span>
                <strong className="proj-title"> Ongoing Projects</strong>
              </li>
              <li className="col-4">
                <span className="cont bg-navy">{freelancer.noOfReviews}</span>
                <strong className="proj-title"> Reviews</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
