import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Common/Pagination";
import SideBar from "../../Common/SideBar";
import { formatDate, getRandomKey } from "../../../utils/helpers";
import { useProjectsData } from "../../../hooks/useProjectsData";

const FreelacerProjects = (props) => {
  let query = props.location.search.split("?")[1] || "Ongoing";
  const { data: projects } = useProjectsData();
  let jobs = projects;
  if (!!!projects.isLoading) {
    jobs = jobs.filter((project) => project.status === query);
  }

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  const tabClass = (tab) => {
    if (tab === query) return "nav-link active";
    return "nav-link";
  };

  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={true}>
        <nav className="user-tabs mb-4">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link
                className={tabClass("Ongoing")}
                to="/freelancer-projects?Ongoing"
              >
                Ongoing Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={tabClass("Completed")}
                to="freelancer-projects?Completed"
              >
                Completed Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={tabClass("Cancelled")}
                to="/freelancer-projects?Cancelled"
              >
                Cancelled Projects
              </Link>
            </li>
          </ul>
        </nav>
        {/* project list */}
        {jobs.map((job, index) => (
          <div key={getRandomKey()} className="my-projects-list">
            <div className="row">
              <div className="col-lg-12 flex-wrap">
                <div className="projects-card flex-fill">
                  <div className="card-body">
                    <div className="projects-details align-items-center">
                      <div className="project-info project">
                        <span>{job.serviceId.categoryId.name}</span>
                        <h2>{job.title}</h2>
                        <div className="proposal-client">
                          <h4 className="title-info">Client Price</h4>
                          <div className="d-flex">
                            <h3 className="client-price me-2">
                              ${job.serviceId.rate.amount}
                            </h3>
                            <p className="amnt-type">
                              ( {job.serviceId.rate.type} )
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="project-hire-info project">
                        <div className="content-divider" />
                        <div className="proposer-info project">
                          <div className="proposer-img">
                            <img
                              src={job.contractorId.image}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="proposer-detail">
                            <h4> {job.contractorId.name}</h4>
                            <ul className="proposal-details">
                              <li>{formatDate(job.createdAt)}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="content-divider" />
                        <div className="projects-action text-start project">
                          <Link
                            to={`/freelancer-projects/${job._id}`}
                            className="projects-btn project"
                          >
                            View Details
                          </Link>
                          <>
                            {query === "Completed" ? (
                              <>
                                <h4 className="completed-badge">
                                  <span>
                                    <i className="fas fa-medal me-2" />
                                  </span>
                                  Completed
                                </h4>
                              </>
                            ) : (
                              <>
                                <p className="hired-detail">Project taken on</p>
                                <p className="hired-date">
                                  {formatDate(job.createdAt)}
                                </p>
                              </>
                            )}
                          </>
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
        {/* <div className="row">
          <div className="col-md-12">
            <Pagination />
          </div>
        </div> */}
        {/* /pagination */}
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default FreelacerProjects;
