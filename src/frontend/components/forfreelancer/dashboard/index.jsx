import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import DasboardSideBar from "../../Common/DasboardSideBar";
import Charts from "./Charts";
import { FreelancerData } from "../../Data/UserDatas";
import { FreelancerSidebarData } from "../../Data/DashboardData";
import SideBar from "../../Common/SideBar";

const FreelancerDashboard = (props) => {
  const user = FreelancerData[3];
  const Cards = [
    {
      title: "Completed Jobs",
      value: user.completedProjects,
      link: "freelancer-completed-projects",
    },
    {
      title: "Ongoing Jobs",
      value: user.onGoingProjects,
      link: "freelancer-ongoing-projects",
    },
    {
      title: "Reviews",
      value: 30,
      link: "freelancer-review",
    },
  ];
  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={true}>
        <div className="dashboard-sec">
          <div className="row">
            {Cards.map((card, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="dash-widget">
                  <div className="dash-info">
                    <div className="dash-widget-info">{card.title}</div>
                    <div className="dash-widget-count">{card.value}</div>
                  </div>
                  <div className="dash-widget-more">
                    <Link to={`/${card.link}`} className="d-flex">
                      View Details <i className="fas fa-arrow-right ms-auto" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Chart Content */}
          <Charts />
          {/* /Chart Content */}

          {/* Past Earnings */}
          {/* <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-4">
                      <div className="pro-head">
                        <h2>Past Earnings</h2>
                        <Link to="/freelancer-payment" className="btn fund-btn">
                          View All
                        </Link>
                      </div>
                      <div className="pro-body p-0">
                        <div className="earn-feature">
                          <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                              <div className="earn-info">
                                <p>
                                  I want some customization and installation on
                                  wordpress
                                </p>
                                <div className="date">October 5, 2021</div>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <div className="earn-img">
                                <span>
                                  <img
                                    src={Avatar_1}
                                    alt="logo"
                                    className="img-fluid avatar-md rounded-circle"
                                  />{" "}
                                  George Wells
                                </span>
                                <div className="price">$90</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="earn-feature">
                          <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                              <div className="earn-info">
                                <p>
                                  I want simple Joomla 4 component development{" "}
                                </p>
                                <div className="date">October 12, 2021</div>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <div className="earn-img">
                                <span>
                                  <img
                                    src={Avatar_2}
                                    alt="logo"
                                    className="img-fluid avatar-md rounded-circle"
                                  />{" "}
                                  Timothy Smith
                                </span>
                                <div className="price">$150</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="earn-feature">
                          <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                              <div className="earn-info">
                                <p>I want migrate Wordpress website </p>
                                <div className="date">October 15, 2021</div>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <div className="earn-img">
                                <span>
                                  <img
                                    src={Avatar_3}
                                    alt="logo"
                                    className="img-fluid avatar-md rounded-circle"
                                  />{" "}
                                  Janet Paden
                                </span>
                                <div className="price">$70</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="earn-feature">
                          <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                              <div className="earn-info">
                                <p>
                                  I want Landing Page Redesign / Sales Page
                                  Redesign
                                </p>
                                <div className="date">October 20, 2021</div>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <div className="earn-img">
                                <span>
                                  <img
                                    src={Avatar_4}
                                    alt="logo"
                                    className="img-fluid avatar-md rounded-circle"
                                  />{" "}
                                  James Douglas
                                </span>
                                <div className="price">$120</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
          {/* /Past Earnings */}
        </div>
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerDashboard;
