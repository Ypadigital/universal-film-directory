import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Common/Pagination";
import SideBar from "../../Common/SideBar";
import { Developer_01, Flags_en } from "../../imagepath";
import { ProjectsData } from "../../Data/ProjectDatas";
import { FreelancerData } from "../../Data/UserDatas";

const Manageprojects = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      <SideBar freelancer={false}>
        <div className="page-title">
          <div className="row">
            <div className="col-md-6">
              <h3>Manage Projects</h3>
            </div>
            <div className="col-md-6 text-end">
              <Link
                to="/post-project"
                className="btn btn-primary back-btn mb-4"
              >
                Post a Project
              </Link>
            </div>
          </div>
        </div>
        <nav className="user-tabs project-tabs">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className="nav-link active" to="/manage-projects">
                All Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pending-projects">
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
        {/* project list */}
        {ProjectsData.map((project, index) => (
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
                            to="/view-project-detail"
                            className="projects-btn"
                          >
                            View Details{" "}
                          </Link>
                          {project.liked ? (
                            <a href="#" className="hired-detail">
                              Hired on 19 JUN 2021
                            </a>
                          ) : (
                            <Link to="/edit-project" className="projects-btn">
                              Edit Jobs
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-flex flex-wrap">
                <div className="projects-card flex-fill">
                  <div className="card-body p-2">
                    {project.liked ? (
                      <div className="prj-proposal-count text-center hired">
                        <h3>Hired</h3>
                        <img
                          src={
                            FreelancerData.find(
                              (freelancer) => freelancer.id === project.userId
                            ).image
                          }
                          alt=""
                          className="img-fluid"
                        />
                        <p className="mb-0">
                          {
                            FreelancerData.find(
                              (freelancer) => freelancer.id === project.userId
                            ).name
                          }{" "}
                        </p>
                      </div>
                    ) : (
                      <div className="prj-proposal-count text-center">
                        <span>5</span>
                        <h3>Proposals</h3>
                      </div>
                    )}
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
    </>
  );
};
export default Manageprojects;
