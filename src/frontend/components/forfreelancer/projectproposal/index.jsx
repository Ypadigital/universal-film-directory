import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "react-summernote/dist/react-summernote.css"; // import styles
import SideBar from "../../Common/SideBar";
import { ProjectsData } from "../../Data/ProjectDatas";
import { EmployData } from "../../Data/EmployData";
import Pagination from "../../Common/Pagination";
import SendProposalModal from "../../Common/Modals/SendProposalModal";

const Freelancer = (props) => {
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
              <Link
                className="nav-link active"
                to="/freelancer-project-proposals"
              >
                My Proposals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-ongoing-projects">
                Ongoing Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-completed-projects">
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
        {/* Proposals list */}
        <div className="proposals-section">
          {/* Proposals */}
          {ProjectsData.slice(0, 2).map((project, index) => (
            <div key={index} className="freelancer-proposals">
              <div className="project-proposals align-items-center freelancer">
                <div className="proposals-info">
                  <div className="proposals-detail">
                    <h3 className="proposals-title">{project.name}</h3>
                    <div className="proposals-content">
                      <div className="proposal-img">
                        <div className="text-md-center">
                          <img
                            src={
                              EmployData.find(
                                (user) => user.id === project.userId
                              ).image
                            }
                            alt=""
                            className="img-fluid"
                          />
                          <h4>
                            {
                              EmployData.find(
                                (user) => user.id === project.userId
                              ).name
                            }
                          </h4>
                          <span className="info-btn">client</span>
                        </div>
                      </div>
                      <div className="proposal-client">
                        <h4 className="title-info">Client Price</h4>
                        <h2 className="client-price">${project.price}</h2>
                        <span className="price-type">
                          ( {project.priceType} )
                        </span>
                      </div>
                      <div className="proposal-type">
                        <h4 className="title-info">Job Type</h4>
                        <h3>{project.jobType}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="project-hire-info">
                    <div className="content-divider-1" />
                    <div className="projects-amount">
                      <p>Your Price</p>
                      <h3>$500.00</h3>
                      <h5>in 12 Days</h5>
                    </div>
                    <div className="content-divider-1" />
                    <div className="projects-action text-center">
                      <a
                        data-bs-toggle="modal"
                        href="#sendproposal"
                        className="projects-btn"
                      >
                        Edit Proposals{" "}
                      </a>
                      <Link
                        to="/freelancer-view-project-detail"
                        className="projects-btn"
                      >
                        View Project
                      </Link>
                      <a href="#" className="proposal-delete">
                        Delete Proposal
                      </a>
                    </div>
                  </div>
                </div>
                <div className="description-proposal">
                  <h5 className="desc-title">Description</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    diam sit erat et eros. Et cursus tellus viverra adipiscing
                    suspendisse. Semper arcu est eget eleifend. Faucibus elit
                    massa sollicitudin elementum ut feugiat nunc ac. Turpis quam
                    sed in sed curabitur netus laoreet. In tortor neque sapien
                    praesent porttitor cursus sed cum....
                    <a href="#" className="text-primary font-bold">
                      Readmore
                    </a>
                  </p>
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
      </SideBar>
      {/* /Page Content */}
      {/* The Modal */}
      <SendProposalModal />
      {/* /The Modal */}
    </>
  );
};
export default Freelancer;
