import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar";
import { ProjectsData } from "../../Data/ProjectDatas";
import ChartsEmployer from "./Chart";

const Dashboard = (props) => {
  const Cards = [
    {
      title: "Completed Jobs",
      value: 56,
      link: "completed-projects",
    },
    {
      title: "Ongoing Jobs",
      value: 9,
      link: "ongoing-projects",
    },
    {
      title: "Pending Jobs",
      value: 22,
      link: "pending-projects",
    },
    {
      title: "Cancelled Jobs",
      value: 10,
      link: "cancelled-projects",
    },
  ];
  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={false}>
        <div className="dashboard-sec">
          <div className="row">
            {Cards.map((card, index) => (
              <div key={index} className="col-md-2 col-lg-3">
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
          <ChartsEmployer />
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
                        {ProjectsData.map((project, index) => (
                          <tr key={index}>
                            <td>
                              <span className="detail-text">
                                {project.name}
                              </span>
                              <span className="d-block text-expiry">
                                Expiring on : {project.expireDate}
                              </span>
                            </td>
                            <td>{project.type}</td>
                            <td>
                              <span className="table-budget">BUDGET</span>{" "}
                              <span className="d-block text-danger">
                                ${project.price}
                              </span>
                            </td>
                            <td>{project.date}</td>
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
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default Dashboard;
