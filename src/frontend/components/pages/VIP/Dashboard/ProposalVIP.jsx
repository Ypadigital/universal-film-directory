import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-summernote/dist/react-summernote.css"; // import styles
import VipSideBar from "../../../Common/VipSideBar";
import { ProjectsData } from "../../../Data/ProjectDatas";
import { VipData } from "../../../Data/VipData";
import Pagination from "../../../Common/Pagination";
import AcceptProposal from "../../../Common/Modals/AcceptProposal";

const VipProposals = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <VipSideBar>
        <nav className="user-tabs mb-4">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className="nav-link active" to="/vip-proposals">
                My Proposals
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/vip-cancelled">
                Declined Proposals
              </Link>
            </li>
          </ul>
        </nav>
        {/* Proposals list */}
        <div className="proposals-section">
          {/* Proposals */}
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
                              to="/vip-project-view"
                              className="projects-btn"
                            >
                              View Details{" "}
                            </Link>
                            <a
                              href="#acceptproposal"
                              data-bs-toggle="modal"
                              className="projects-btn"
                            >
                              Accept
                            </a>
                            <p className="hired-detail text-danger">Decline</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-flex flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body p-2">
                      <div className="prj-proposal-count text-center hired">
                        <h3>Client</h3>
                        <img
                          src={
                            VipData.find(
                              (freelancer) => freelancer.id === project.userId
                            ).image
                          }
                          alt=""
                          className="img-fluid"
                        />
                        <p className="mb-0">
                          {
                            VipData.find(
                              (freelancer) => freelancer.id === project.userId
                            ).name
                          }{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Proposals */}
        </div>
        {/* /Proposals list */}
        {/* pagination */}
        <div className="row">
          <div className="col-md-12">
            <Pagination />
          </div>
        </div>
        {/* /pagination */}
      </VipSideBar>
      {/* /Page Content */}
      {/* The Modal */}
      <AcceptProposal />
      {/* /The Modal */}
    </>
  );
};
export default VipProposals;
