import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HireModal from "../../Common/Modals/HireModal";
import Pagination from "../../Common/Pagination";
import SideBar from "../../Common/SideBar";
import { ProjectProposal, ProjectsData } from "../../Data/ProjectDatas";
import { FreelancerData } from "../../Data/UserDatas";

const Projectproposal = (props) => {
  const project = ProjectsData[2];
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
        <nav className="user-tabs mb-4">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className="nav-link" to="/manage-projects">
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
        <div className="my-projects-list">
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
                      <div className="projects-amount proposals">
                        <h3>${project.price}</h3>
                        <h5>{project.date}</h5>
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
                    <span>5</span>
                    <h3>Proposals</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /project list */}
        {/* Proposals list */}
        <div className="proposals-section mb-4">
          <h3 className="page-subtitle">Proposals By freelancer</h3>
          <div className="proposal-card">
            {/* Proposals */}
            {ProjectProposal.map((proposal, index) => (
              <div key={index} className="project-proposals align-items-center">
                <div className="proposals-info">
                  <div className="proposer-info">
                    <div className="proposer-img">
                      <img
                        src={
                          FreelancerData.find(
                            (freelancer) => freelancer.id === proposal.userId
                          ).image
                        }
                        alt={
                          FreelancerData.find(
                            (freelancer) => freelancer.id === proposal.userId
                          ).name
                        }
                        className="img-fluid"
                      />
                    </div>
                    <div className="proposer-detail">
                      <h4>
                        {
                          FreelancerData.find(
                            (freelancer) => freelancer.id === proposal.userId
                          ).name
                        }
                      </h4>
                      <ul className="proposal-details">
                        <li> February 26, 2021</li>
                        <li>
                          <i className="fas fa-star text-primary" />{" "}
                          {
                            FreelancerData.find(
                              (freelancer) => freelancer.id === proposal.userId
                            ).totalRates
                          }{" "}
                          Reviews
                        </li>
                        <li>
                          {" "}
                          <Link
                            to={`/freelancer/${proposal.userId}`}
                            className="font-semibold text-primary"
                          >
                            View Profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="proposer-bid-info">
                    <div className="proposer-bid">
                      <h3>${proposal.price}</h3>
                      <h5>{proposal.time}</h5>
                    </div>
                    <div className="proposer-confirm">
                      <a
                        data-bs-toggle="modal"
                        href="#hire"
                        className="projects-btn"
                      >
                        Hire Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="description-proposal">
                  <h5 className="desc-title">Description</h5>
                  <p>{proposal.letter}</p>
                </div>
              </div>
            ))}

            {/* Proposals */}
          </div>
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
      <HireModal freelancer={FreelancerData[3]} />
      {/* /The Modal */}
    </>
  );
};
export default Projectproposal;
