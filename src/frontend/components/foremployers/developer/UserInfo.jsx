import React from "react";
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
                  <img src={freelancer.image} alt="User" />
                </div>
                <div className="profile-info">
                  <h2 className="profile-title">{freelancer?.name}</h2>
                  <p className="profile-position">{freelancer?.category}</p>
                  <div>
                    <div className="btn full-btn">{freelancer.type}</div>
                  </div>

                  <ul className="profile-preword">
                    <li>
                      <img src={Flags_pl} alt="" height={16} />{" "}
                      {freelancer?.location}
                    </li>
                    <li>
                      <div className="rating">
                        <span className="average-rating">
                          {freelancer?.totalRates}
                        </span>
                        <Rating value={freelancer.totalRates} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pro-info-right profile-inf r-0">
                <ul className="profile-right">
                  <li>
                    <div>
                      <h3 className="amt-hr">${freelancer.price}</h3>{" "}
                      <p>( Per {freelancer.per} )</p>
                    </div>
                  </li>
                </ul>
                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                  <a
                    className="btn bid-btn"
                    data-bs-toggle="modal"
                    href="#bookmark"
                  >
                    Hire Now <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-list">
            <ul>
              <li>
                <span className="cont bg-blue">
                  {freelancer.completedProjects}
                </span>
                <strong className="proj-title"> Completed Projects</strong>
              </li>
              <li>
                <span className="cont bg-red">
                  {freelancer.onGoingProjects}
                </span>
                <strong className="proj-title"> Ongoing Projects</strong>
              </li>
              <li>
                <span className="cont bg-violet">{freelancer.recomended}%</span>
                <strong className="proj-title"> Recommended</strong>
              </li>
              <li>
                <span className="cont bg-yellow">{freelancer.hired}</span>
                <strong className="proj-title"> Rehired</strong>
              </li>
              <li>
                <span className="cont bg-pink">{freelancer.clients}</span>
                <strong className="proj-title"> Clients</strong>
              </li>
              <li>
                <span className="cont bg-navy">
                  {freelancer.reviwes.length}
                </span>
                <strong className="proj-title"> Feedbacks</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
