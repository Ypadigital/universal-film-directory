import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../contexts/dataContext";
import { formatDate, getFullName } from "../../../utils/helpers";
import toast from "../../../utils/toast";
import WriteReviwerModal from "../../Common/Modals/WriteReviwerModal";
import SideBar from "../../Common/SideBar";
import { Flags_en, Developer_01 } from "../../imagepath";

const ViewProjectdetails = (props) => {
  const [showReviewModal, setshowReviewModal] = useState(false);
  const [selectedJob, setselectedJob] = useState(null);
  const { projects } = useDataContext();
  const projectId = props.match.params.id;

  let jobs = projects.data || [];
  let project = null;

  if (!!!projects.isLoading) {
    project = jobs.find((project) => project._id === projectId) || null;
  }

  console.log(project);

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  const completeJob = async () => {
    toast.success("Job completed successfully");
  };

  return (
    <>
      {project && (
        <SideBar freelancer={false}>
          {/* project list */}
          <div className="my-projects">
            {/* project list */}
            <div className="my-projects-list pro-list-view">
              <div className="row">
                <div className="col-lg-10 flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info">
                          <h2>{project.title}</h2>
                          <div className="customer-info">
                            <ul className="list-details">
                              <li>
                                <div className="slot">
                                  <p>Price type</p>
                                  <h5>{project.serviceId.rate.type}</h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-hire-info">
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h3>${project.serviceId.rate.amount}</h3>
                          </div>
                          <div className="content-divider" />
                          <div className="projects-action text-center">
                            {project.status === "Pending" && (
                              <>
                                <span className="hired-detail d-block">
                                  Hired on
                                </span>
                                <span>{formatDate(project.createdAt)}</span>
                                <div className="pro-status text-danger">
                                  Awaiting acceptance
                                </div>
                              </>
                            )}
                            {project.status === "Ongoing" && (
                              <>
                                <span className="hired-detail d-block">
                                  Hired on
                                </span>
                                <span>{formatDate(project.createdAt)}</span>
                                <div className="pro-status">
                                  <div className="pl-0 w-100 projects-action text-center">
                                    <button
                                      onClick={completeJob}
                                      className="w-100 btn projects-btn"
                                    >
                                      MARK AS COMPLETE
                                    </button>
                                  </div>
                                </div>
                              </>
                            )}
                            {project.status === "Completed" && (
                              <>
                                <span className="hired-detail d-block">
                                  Hired on
                                </span>
                                <span>{formatDate(project.createdAt)}</span>
                                <h4 className="completed-badge my-2 d-flex gap-10 justify-content-center">
                                  <span>
                                    <i className="fas fa-medal" />
                                  </span>
                                  <span>Completed</span>
                                </h4>
                                <button
                                  onClick={() => toast.info("Coming soon")}
                                  className="btn rating-btn"
                                >
                                  Write Review
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 d-flex flex-wrap">
                  <div className="projects-card flex-fill">
                    <div className="card-body">
                      <div className="prj-proposal-count text-center hired">
                        <img
                          src={project.freelancerId.image}
                          alt=""
                          className="img-fluid"
                        />
                        <p className="mb-2">
                          {getFullName(project.freelancerId)}
                        </p>
                        {/* <Link to="/chats" className="btn btn-chat">
                          Chat Now
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /project list */}
          </div>
          <div className="pro-post widget-box">
            <h3 className="pro-title">Overview</h3>
            <div className="pro-overview">
              <div
                dangerouslySetInnerHTML={{
                  __html: project.serviceId.overview,
                }}
              ></div>
            </div>
          </div>
          <div className="pro-post widget-box">
            <h3 className="pro-title">Job Category</h3>
            <div className="pro-content">
              <div className="tags">
                <span className="badge badge-pill badge-design">
                  {project.serviceId.categoryId.name}
                </span>
              </div>
            </div>
          </div>
        </SideBar>
      )}
      <WriteReviwerModal
        isActive={showReviewModal}
        setIsActive={setshowReviewModal}
        selectedJob={selectedJob}
      />
    </>
  );
};
export default ViewProjectdetails;
