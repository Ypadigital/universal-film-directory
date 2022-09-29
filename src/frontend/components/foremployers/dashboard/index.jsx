import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ApexCharts from "apexcharts";
import { Img_01, Img_02, Img_03, Img_04, Img_05 } from "../../imagepath";
import { Sidebar } from "../sidebar";
import { chartprofileoptions, chartradialOptions } from "./Chart";

const Dashboard = (props) => {
  useEffect(() => {
    let chartprofileoptionsColumn = document.getElementById("chartprofile");
    let chartprofileoptionsChart = new ApexCharts(
      chartprofileoptionsColumn,
      chartprofileoptions
    );
    chartprofileoptionsChart.render();

    let invoiceColumn = document.getElementById("chartradial");
    let invoiceChart = new ApexCharts(invoiceColumn, chartradialOptions);
    invoiceChart.render();
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="dashboard-sec">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">Projects Posted</div>
                        <div className="dash-widget-count">30</div>
                      </div>
                      <div className="dash-widget-more">
                        <Link to="/manage-projects" className="d-flex">
                          View Details{" "}
                          <i className="fas fa-arrow-right ms-auto" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">Ongoing Projects</div>
                        <div className="dash-widget-count">5</div>
                      </div>
                      <div className="dash-widget-more">
                        <Link to="/ongoing-projects" className="d-flex">
                          View Details{" "}
                          <i className="fas fa-arrow-right ms-auto" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">
                          Completed Projects
                        </div>
                        <div className="dash-widget-count">25</div>
                      </div>
                      <div className="dash-widget-more">
                        <Link to="/completed-projects" className="d-flex">
                          View Details{" "}
                          <i className="fas fa-arrow-right ms-auto" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chart Content */}
                <div className="row">
                  <div className="col-xl-8 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">Profile Views</h5>
                          <div className="dropdown">
                            <button
                              className="btn btn-white btn-sm dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Monthly
                            </button>
                            <div className="dropdown-menu dropdown-menu-start">
                              <a href="" className="dropdown-item">
                                Weekly
                              </a>
                              <a href="" className="dropdown-item">
                                Monthly
                              </a>
                              <a href="" className="dropdown-item">
                                Yearly
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="chartprofile" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">Static Analytics</h5>
                          <div className="dropdown">
                            <button
                              className="btn btn-white btn-sm dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Monthly
                            </button>
                            <div className="dropdown-menu dropdown-menu-start">
                              <a href="" className="dropdown-item">
                                Weekly
                              </a>
                              <a href="" className="dropdown-item">
                                Monthly
                              </a>
                              <a href="" className="dropdown-item">
                                Yearly
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="chartradial" />
                        <ul className="static-list">
                          <li>
                            <span>
                              <i className="fas fa-circle text-violet me-1" />{" "}
                              Applied Jobs
                            </span>{" "}
                            <span className="sta-count">30</span>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-pink me-1" />{" "}
                              Active Proposals
                            </span>{" "}
                            <span className="sta-count">30</span>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-yellow me-1" />{" "}
                              Applied Proposals
                            </span>{" "}
                            <span className="sta-count">30</span>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-circle text-blue me-1" />{" "}
                              Bookmarked Projects
                            </span>{" "}
                            <span className="sta-count">30</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Chart Content */}
                {/* Past Earnings */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-table">
                      <div className="card-header">
                        <div className="row">
                          <div className="col">
                            <h4 className="card-title">Recently Posted Jobs</h4>
                          </div>
                          <div className="col-auto">
                            <Link
                              to="/manage-projects"
                              className="btn-right btn btn-sm fund-btn"
                            >
                              View All
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive table-job">
                          <table className="table table-hover table-center mb-0">
                            <thead className="thead-pink">
                              <tr>
                                <th>Details</th>
                                <th>Job Type</th>
                                <th>Budget</th>
                                <th>Created on</th>
                                <th>Proposals</th>
                                <th className="text-end">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="detail-text">
                                    I want some customization and installation
                                    on wordpress
                                  </span>
                                  <span className="d-block text-expiry">
                                    Expiring on : February 3, 2019
                                  </span>
                                </td>
                                <td>Full-Time</td>
                                <td>
                                  <span className="table-budget">BUDGET</span>{" "}
                                  <span className="d-block text-danger">
                                    $600 - $1500
                                  </span>
                                </td>
                                <td>12 July, 2021</td>
                                <td>47</td>
                                <td className="text-end">
                                  <Link
                                    to="/view-project-detail"
                                    className="text-success"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="detail-text">
                                    I want some customization and installation
                                    on wordpress
                                  </span>
                                  <span className="d-block text-expiry">
                                    Expiring on : February 3, 2019
                                  </span>
                                </td>
                                <td>Full-Time</td>
                                <td>
                                  <span className="table-budget">BUDGET</span>{" "}
                                  <span className="d-block text-danger">
                                    $600 - $1500
                                  </span>
                                </td>
                                <td>12 July, 2021</td>
                                <td>47</td>
                                <td className="text-end">
                                  <Link
                                    to="/view-project-detail"
                                    className="text-success"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="detail-text">
                                    I want some customization and installation
                                    on wordpress
                                  </span>
                                  <span className="d-block text-expiry">
                                    Expiring on : February 3, 2019
                                  </span>
                                </td>
                                <td>Full-Time</td>
                                <td>
                                  <span className="table-budget">BUDGET</span>{" "}
                                  <span className="d-block text-danger">
                                    $600 - $1500
                                  </span>
                                </td>
                                <td>12 July, 2021</td>
                                <td>47</td>
                                <td className="text-end">
                                  <Link
                                    to="/view-project-detail"
                                    className="text-success"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="detail-text">
                                    I want some customization and installation
                                    on wordpress
                                  </span>
                                  <span className="d-block text-expiry">
                                    Expiring on : February 3, 2019
                                  </span>
                                </td>
                                <td>Full-Time</td>
                                <td>
                                  <span className="table-budget">BUDGET</span>{" "}
                                  <span className="d-block text-danger">
                                    $600 - $1500
                                  </span>
                                </td>
                                <td>12 July, 2021</td>
                                <td>47</td>
                                <td className="text-end">
                                  <Link
                                    to="/view-project-detail"
                                    className="text-success"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Past Earnings */}
                <div className="row">
                  {/* Plan  Details*/}
                  <div className="col-xl-6 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row justify-content-between align-items-center">
                          <div className="col">
                            <h5 className="card-title">
                              Membership Plan Details
                            </h5>
                          </div>
                          <div className="col-auto">
                            <a
                              href=""
                              className="btn-right btn btn-sm fund-btn"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <div className="plan-details">
                              <h4>The Ultima</h4>
                              <div className="yr-amt">Anually Price</div>
                              <h4>$1200</h4>
                              <div className="yr-duration">
                                Duration: One Year
                              </div>
                              <div className="expiry">Expiry: 24 JAN 2022</div>
                              <Link
                                to="/membership-plans"
                                className="btn btn-primary btn-plan"
                              >
                                Change Plan
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="plan-feature">
                              <ul>
                                <li>12 Project Credits</li>
                                <li>10 Allowed Services</li>
                                <li>20 Days visibility</li>
                                <li>5 Featured Services</li>
                                <li>20 Days visibility</li>
                                <li>30 Days Package Expiry</li>
                                <li>Profile Featured</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Plan  Details */}
                  {/* Notifications */}
                  <div className="col-xl-6 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row justify-content-between align-items-center">
                          <div className="col">
                            <h5 className="card-title">Notifications</h5>
                          </div>
                          <div className="col-auto">
                            <Link
                              to="/freelancer-ongoing-projects"
                              className="btn-right btn btn-sm fund-btn"
                            >
                              View All
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="pro-body p-0">
                        <div className="news-feature">
                          <img
                            className="avatar-sm rounded-circle"
                            src={Img_02}
                            alt="User Image"
                          />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. At diam sit erat et eros.{" "}
                          </p>
                        </div>
                        <div className="news-feature">
                          <img
                            className="avatar-sm rounded-circle"
                            src={Img_03}
                            alt="User Image"
                          />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. At diam sit erat et eros.{" "}
                          </p>
                        </div>
                        <div className="news-feature">
                          <img
                            className="avatar-sm rounded-circle"
                            src={Img_04}
                            alt="User Image"
                          />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. At diam sit erat et eros.{" "}
                          </p>
                        </div>
                        <div className="news-feature">
                          <img
                            className="avatar-sm rounded-circle"
                            src={Img_05}
                            alt="User Image"
                          />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. At diam sit erat et eros.{" "}
                          </p>
                        </div>
                        <div className="news-feature">
                          <img
                            className="avatar-sm rounded-circle"
                            src={Img_01}
                            alt="User Image"
                          />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. At diam sit erat et eros.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Notifications */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Dashboard;
