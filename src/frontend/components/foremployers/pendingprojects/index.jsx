import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Common/Pagination";

import SideBar from "../../Common/SideBar";
import { ProjectsData } from "../../Data/ProjectDatas";

const Pendingprojects = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={false}>
        <nav className="user-tabs project-tabs">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className="nav-link" to="/manage-projects">
                All Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pending-projects">
                Pending Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ongoing-projects">
                Ongoing Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/completed-projects">
                Completed Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cancelled-projects">
                Cancelled Projects
              </Link>
            </li>
          </ul>
        </nav>
        {/* Warning */}
        <div className="row">
          <div className="col-12">
            <div className="warning-card">
              <p>
                <i className="fas fa-exclamation-triangle" /> Pending for admin
                Approval.
              </p>
            </div>
          </div>
        </div>
        {/* /Warning */}
        {/* project list */}
        {ProjectsData.filter((p) => p.status === "Pending").map(
          (project, index) => (
            <div key={index} className="my-projects-list">
              <div className="row">
                <div className="col-lg-10 flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info">
                          <span>{project.category}</span>
                          <h2>{project.name}</h2>
                          <div className="customer-info">
                            <ul className="list-details">
                              <li>
                                <div className="slot">
                                  <p>Price type</p>
                                  <h5>( {project.priceType} )</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>Location</p>
                                  <h5>{project.location}</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>Expiry</p>
                                  <h5>{project.expireDate}</h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-hire-info">
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h3>${project.price}</h3>
                            <h5>{project.date}</h5>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center">
                            <Link
                              to="/project-proposals"
                              className="projects-btn"
                            >
                              View Proposals{" "}
                            </Link>
                            <Link to="/edit-project" className="projects-btn">
                              Edit Project
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-flex flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body p-2">
                      <div className="prj-proposal-count text-center">
                        <span>3</span>
                        <h3 className="mb-0">Proposals</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* project list */}
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
export default Pendingprojects;
