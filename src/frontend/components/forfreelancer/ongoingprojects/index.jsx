import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Common/Pagination";
import SideBar from "../../Common/SideBar";
import { ProjectsData } from "../../Data/ProjectDatas";
import { EmployData } from "../../Data/EmployData";

const FreelacerOngoingProjects = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={true}>
        <nav className="user-tabs mb-4">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-project-proposals">
                My Proposals
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/freelancer-ongoing-projects"
              >
                Ongoing Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="freelancer-completed-projects">
                Completed Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-cancelled-projects">
                Cancelled Projects
              </Link>
            </li>
          </ul>
        </nav>
        {/* project list */}
        {ProjectsData.slice(1, 3).map((project, index) => (
          <div className="my-projects-list">
            <div className="row">
              <div className="col-lg-12 flex-wrap">
                <div className="projects-card flex-fill">
                  <div className="card-body">
                    <div className="projects-details align-items-center">
                      <div className="project-info project">
                        <span>{project.category}</span>
                        <h2>{project.name}</h2>
                        <div className="proposal-client">
                          <h4 className="title-info">Client Price</h4>
                          <div className="d-flex">
                            <h3 className="client-price me-2">
                              ${project.price}
                            </h3>
                            <p className="amnt-type">( {project.priceType} )</p>
                          </div>
                        </div>
                      </div>
                      <div className="project-hire-info project">
                        <div className="content-divider" />
                        <div className="proposer-info project">
                          <div className="proposer-img">
                            <img
                              src={
                                EmployData.find(
                                  (user) => user.id === project.userId
                                ).image
                              }
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="proposer-detail">
                            <h4>
                              {" "}
                              {
                                EmployData.find(
                                  (user) => user.id === project.userId
                                ).name
                              }
                            </h4>
                            <ul className="proposal-details">
                              <li>
                                {
                                  EmployData.find(
                                    (user) => user.id === project.userId
                                  ).date
                                }
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="content-divider" />
                        <div className="projects-action text-start project">
                          <Link
                            to="/freelancer-view-project-detail"
                            className="projects-btn project"
                          >
                            View Details{" "}
                          </Link>
                          <p className="hired-detail">Project taken on</p>
                          <p className="hired-date">{project.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* /project list */}
        {/* pagination */}
        <div className="row">
          <div className="col-md-12">
            <Pagination />
          </div>
        </div>
        {/* /pagination */}
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default FreelacerOngoingProjects;
