import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VipSideBar from "../../../Common/VipSideBar";
import { ProjectsData } from "../../../Data/ProjectDatas";
import { VipData } from "../../../Data/VipData";
import Pagination from "../../../Common/Pagination";

const VipCancelledProjects = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      <VipSideBar>
        <nav className="user-tabs mb-4">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className="nav-link" to="/vip-proposals">
                My Proposals
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link active" to="/vip-cancelled">
                Declined Proposals
              </Link>
            </li>
          </ul>
        </nav>
        {/* project list */}
        {ProjectsData.slice(2, 3).map((project, index) => (
          <div className="my-projects-list">
            <div className="row">
              <div className="col-lg-12 flex-wrap">
                <div className="projects-cancelled-card flex-fill">
                  <div className="card-body">
                    <div className="projects-details align-items-center">
                      <div className="project-info project">
                        <span>{project.category}</span>
                        <h2>{project.name}</h2>
                        <div className="proposal-client">
                          <h4 className="title-info">Client Price</h4>
                          <div className="d-flex">
                            <h3 className="client-price me-2">
                              {project.price}
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
                                VipData.find(
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
                                VipData.find(
                                  (user) => user.id === project.userId
                                ).name
                              }
                            </h4>
                            <ul className="proposal-details">
                              <li>23, Jan 2021</li>
                            </ul>
                          </div>
                        </div>
                        <div className="content-divider" />
                        <div className="projects-action text-center project">
                          <div className="projects-btn">Remove Proposal</div>
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
      </VipSideBar>
      {/* /Page Content */}
    </>
  );
};
export default VipCancelledProjects;
