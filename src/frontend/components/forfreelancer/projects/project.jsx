import React from "react";
import { Link } from "react-router-dom";
// Import Images
import Breadcrub from "../../Common/Breadcrub";
import Filter from "../../Common/Filter";
import SortsTags from "../../Common/Sorts&Tags";
import { ProjectProposal, ProjectsData } from "../../Data/ProjectDatas";
import { EmployData } from "../../Data/EmployData";
import FavoriteModal from "../../Common/Modals/FavoriteModal";

const Projects = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrub title="Projects" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Search Filter */}
              <Filter project={true} />
              {/* /Search Filter */}
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <SortsTags />
              <div className="row">
                {/* Project Content */}
                {ProjectsData.map((project, index) => (
                  <div key={index} className="col-md-6 col-lg-12 col-xl-6">
                    <div className="freelance-widget widget-author">
                      <div className="freelance-content">
                        <a
                          data-bs-toggle="modal"
                          href="#rating"
                          className={`favourite ${
                            project.liked && "favourited"
                          }`}
                        >
                          <i className="fas fa-star" />
                        </a>
                        <div className="author-heading">
                          <div className="profile-img">
                            <img
                              src={
                                EmployData.find(
                                  (employ) => employ.id === project.userId
                                ).image
                              }
                              alt="author"
                            />
                          </div>
                          <div className="profile-name">
                            <div className="author-location">
                              {
                                EmployData.find(
                                  (employ) => employ.id === project.userId
                                ).name
                              }
                              <i className="fas fa-check-circle text-success verified" />
                            </div>
                          </div>
                          <div className="freelance-info">
                            <h3>{project.name}</h3>
                            <div className="freelance-location mb-1">
                              <i className="fas fa-clock" /> Posted{" "}
                              {project.date}
                            </div>
                            <div className="freelance-location">
                              <i className="fas fa-map-marker-alt me-1" />
                              {project.location}
                            </div>
                          </div>
                          <div className="freelance-tags">
                            {project.skills.slice(0, 3).map((skill, index) => (
                              <span
                                key={index}
                                className="badge badge-pill badge-design"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="freelancers-price">
                            ${project.price}
                          </div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h3 className="counter-value">
                                {project.expireDate}
                              </h3>
                              <h5>Expiry</h5>
                            </li>
                            <li>
                              <h3 className="counter-value">
                                {ProjectProposal.length}
                              </h3>
                              <h5>Proposals</h5>
                            </li>
                            <li>
                              <h3 className="counter-value">
                                <span className="jobtype">{project.type}</span>
                              </h3>
                              <h5>Job Type</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to={`/project/${project.id}`}
                          className="btn-cart"
                          tabIndex={-1}
                        >
                          Bid Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* The Modal */}
        <FavoriteModal freelancer={false} />
        {/* /The Modal */}
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Projects;
