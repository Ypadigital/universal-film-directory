import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../contexts/dataContext";
import { getFullName } from "../../../utils/helpers";
import SideBar from "../../Common/SideBar";
import { Img_04, Flags_en } from "../../imagepath";

const FreelancerProjectDetails = (props) => {
  const { projects } = useDataContext();
  const projectId = props.match.params.id;

  let jobs = projects.data || [];
  let project = null;

  if (!!!projects.isLoading) {
    project = jobs.find((project) => project._id === projectId) || null;
  }

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  if (!jobs.length) return "Loading...";

  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={true}>
        {/* project list */}
        {!!project ? (
          <>
            <div className="my-projects">
              <div className="row">
                <div className="col-lg-9 d-flex">
                  <div className="pro-post w-100">
                    <div className="card-body">
                      <div className="projects-list">
                        <h2>{project.title}</h2>
                        <ul className="prolist-details">
                          <li>
                            <div className="list-slot">
                              <h5>Client Final Price</h5>
                              <p className="price">${project.rate.amount}</p>
                              <p className="mb-0">( {project.rate.type} )</p>
                            </div>
                          </li>
                          <li>
                            <div className="list-slot">
                              <h5>Job Type</h5>
                              <p className="red-text">Hourly</p>
                            </div>
                          </li>
                          <li>
                            <div className="list-slot">
                              <h5>Location</h5>
                              <p>{project.location}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3 d-flex flex-wrap">
                  <div className="pro-post mb-3 w-100">
                    <div className="card-body">
                      <div className="hire-box text-center">
                        <h6>Hired</h6>
                        <img
                          alt="profileimage"
                          src={Img_04}
                          className="avatar-lg rounded-circle"
                        />
                        <p>{getFullName(project.contractorId)} - Client</p>
                        <Link to="/chats" className="btn btn-chat">
                          Chat Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hire-select w-100">
                    <select className="form-control select">
                      <option> Is job completed?</option>
                      <option>Ongoing</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-post widget-box">
              <h3 className="pro-title">Overview</h3>
              <div className="pro-overview">
                <h4>Senior Animator</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque tempor aliquam felis, nec condimentum ipsum commodo
                  id. Vivamus sit amet augue nec urna efficitur tincidunt.
                  Vivamus consectetur aliquam lectus commodo viverra. Nunc eu
                  augue nec arcu efficitur faucibus. Aliquam accumsan ac magna
                  convallis bibendum. Quisque laoreet augue eget augue fermentum
                  scelerisque. Vivamus dignissim mollis est dictum blandit. Nam
                  porta auctor neque sed congue. Nullam rutrum eget ex at
                  maximus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Donec eget vestibulum lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque tempor aliquam felis, nec condimentum ipsum commodo
                  id. Vivamus sit amet augue nec urna efficitur tincidunt.
                  Vivamus consectetur aliquam lectus commodo viverra. Nunc eu
                  augue nec arcu efficitur faucibus.{" "}
                </p>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque tempor aliquam felis, nec condimentum ipsum commodo
                  id. Vivamus sit amet augue nec urna efficitur tincidunt.
                  Vivamus consectetur aliquam lectus commodo viverra. Nunc eu
                  augue nec arcu efficitur faucibus.
                </p>
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
          </>
        ) : (
          <div className="text-lg jumbotron">Project not found</div>
        )}
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerProjectDetails;
