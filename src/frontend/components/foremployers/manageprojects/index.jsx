import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Common/Pagination";
import SideBar from "../../Common/SideBar";
import { useDataContext } from "../../../contexts/dataContext";
import { formatDate, getFullName } from "../../../utils/helpers";
import WriteReviwerModal from "../../Common/Modals/WriteReviwerModal";

const Manageprojects = (props) => {
  const [showReviewModal, setshowReviewModal] = useState(false);
  const [selectedJob, setselectedJob] = useState(null);
  let query = props.location.search.split("?")[1] || "All";
  const { projects } = useDataContext();
  let jobs = projects.data;
  if (!!!projects.isLoading) {
    if (query !== "All") {
      jobs = jobs.filter((job) => job.status === query);
    }
    console.log(jobs);
  }

  const tabClass = (tab) => {
    if (tab === query) return "nav-link active";
    return "nav-link";
  };

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      <SideBar>
        <div className="page-title">
          <div className="row">
            <div className="col-md-6">
              <h3>Manage Projects</h3>
            </div>
          </div>
        </div>
        <nav className="user-tabs project-tabs">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className={tabClass("All")} to="/manage-projects">
                All Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={tabClass("Pending")}
                to="/manage-projects?Pending"
              >
                Pending Invitations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={tabClass("Ongoing")}
                to="/manage-projects?Ongoing"
              >
                Ongoing Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={tabClass("Completed")}
                to="/manage-projects?Completed"
              >
                Completed Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={tabClass("Cancelled")}
                to="/manage-projects?Cancelled"
              >
                Cancelled Projects
              </Link>
            </li>
          </ul>
        </nav>
        {/* project list */}
        {jobs.map((job, index) => {
          const cardClass = "projects-delete-details";
          if (job.status !== "Cancelled" && job.status !== "Pending")
            return <RegularProjectCard job={job} key={index} />;

          if (job.status === "Pending")
            return <PendingProjectCard job={job} key={index} />;

          return <CancelledProjectCard job={job} key={index} />;
        })}
        {!jobs.length && <p>There are no {query} Projects</p>}
      </SideBar>
      <WriteReviwerModal
        isActive={showReviewModal}
        setIsActive={setshowReviewModal}
        selectedJob={selectedJob}
      />
    </>
  );
};
export default Manageprojects;

export const CancelledProjectCard = ({ job }) => {
  return (
    <div className="my-projects-list">
      <div className="row">
        <div className="col-lg-12">
          <div className="projects-delete-details align-items-center">
            <div className="project-info">
              <span>{job.serviceId.categoryId.name}</span>
              <h2>{job.title}</h2>
              <div className="customer-info">
                <ul className="list-details">
                  <li>
                    <div className="slot">
                      <p>Price type</p>
                      <h5>{job.serviceId.rate.type}</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-hire-info">
              <div className="content-divider" />
              <div className="projects-amount">
                <h3>${job.serviceId.rate.amount}</h3>
                <h5>{formatDate(job.createdAt)}</h5>
              </div>
              <div className="content-divider" />
              <div className="projects-action text-center">
                <button className="btn projects-btn">GET REFUND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RegularProjectCard = ({
  job,
  setselectedJob,
  setshowReviewModal,
}) => {
  return (
    <div className="my-projects-list">
      <div className="row">
        <div className="col-lg-10 flex-wrap">
          <div className="projects-card flex-fill">
            <div className="card-body">
              <div className="projects-details align-items-center">
                <div className="project-info">
                  <span>{job.serviceId.categoryId.name}</span>
                  <h2>{job.title}</h2>
                  <div className="customer-info">
                    <ul className="list-details">
                      <li>
                        <div className="slot">
                          <p>Price type</p>
                          <h5>( {job.serviceId.rate.type} )</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project-hire-info">
                  <div className="content-divider" />
                  <div className="projects-amount">
                    <h3>${job.serviceId.rate.amount}</h3>
                    <h5>{formatDate(job.createdAt)}</h5>
                  </div>
                  <div className="content-divider" />
                  <div className="projects-action text-center">
                    <Link
                      to={`/view-project-detail/${job._id}`}
                      className="projects-btn"
                    >
                      View Details
                    </Link>

                    <>
                      {job.status === "Completed" && (
                        <>
                          <h4 className="completed-badge">
                            <span>
                              <i className="fas fa-medal me-2" />
                            </span>
                            Completed
                          </h4>
                        </>
                      )}
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-flex flex-wrap">
          <div className="projects-card flex-fill">
            <div className="card-body p-2">
              {job.acceptance.status ? (
                <div className="prj-proposal-count text-center hired">
                  <h3>Hired</h3>
                  <img
                    src={job.freelancerId.image}
                    alt=""
                    className="img-fluid"
                  />
                  <p className="mb-0">{getFullName(job.freelancerId)}</p>
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
  );
};

export const PendingProjectCard = ({
  job,
  setselectedJob,
  setshowReviewModal,
}) => {
  return (
    <div className="my-projects-list">
      <div className="row">
        <div className="col-lg-10 flex-wrap">
          <div className="projects-card flex-fill">
            <div className="card-body">
              <div className="projects-details align-items-center">
                <div className="project-info">
                  <span>{job.serviceId.categoryId.name}</span>
                  <h2>{job.title}</h2>
                  <div className="customer-info">
                    <ul className="list-details">
                      <li>
                        <div className="slot">
                          <p>Price type</p>
                          <h5>( {job.serviceId.rate.type} )</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project-hire-info">
                  <div className="content-divider" />
                  <div className="projects-amount">
                    <h3>${job.serviceId.rate.amount}</h3>
                    <h5>{formatDate(job.createdAt)}</h5>
                  </div>
                  <div className="content-divider" />
                  <div className="projects-action text-center">
                    <Link
                      to={`/view-project-detail/${job._id}`}
                      className="projects-btn"
                    >
                      View Details
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
              {job.acceptance.status ? (
                <div className="prj-proposal-count text-center hired">
                  <h3>Hired</h3>
                  <img
                    src={job.freelancerId.image}
                    alt=""
                    className="img-fluid"
                  />
                  <p className="mb-0">{getFullName(job.freelancerId)}</p>
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
  );
};
