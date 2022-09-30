import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectProposal, ProjectsData } from "../../Data/ProjectDatas";
import Breadcrub from "../../Common/Breadcrub";
import { FreelancerData } from "../../Data/UserDatas";
import { EmployData } from "../../Data/EmployData";
import Rating from "../../Common/Ratings";

const ViewProposals = (props) => {
  const { id } = useParams();

  const project = ProjectsData.find((project) => project.id === Number(id));
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrub title="Proposals" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile">
                <div className="profile-box">
                  <div className="provider-widget row">
                    <div className="pro-info-left col-md-8">
                      <div className="profile-info">
                        <p className="profile-cmpny">
                          {
                            EmployData.find(
                              (freelancer) => freelancer.id === project.userId
                            ).name
                          }
                          <i className="fas fa-check-circle text-success ms-2" />
                        </p>
                        <h2 className="profile-title">{project.name}</h2>
                        <div />
                      </div>
                    </div>
                    <div className="pro-info-right profile-inf">
                      <ul className="profile-right">
                        <li>
                          <div className="amt-hr">
                            ${project.price} <p>( {project.priceType} )</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Link
                to={`/project/${id}`}
                className="btn btn-primary bck-btn mb-4"
              >
                <i className="fas fa-long-arrow-alt-left me-2" /> Back to
                Project{" "}
              </Link>
            </div>
            <div className="col-12">
              <div className="pro-post widget-box">
                <div className="average-bids">
                  <p>
                    <span className="text-highlight">18 freelancers</span> are
                    bidding on average{" "}
                    <span className="text-highlight">${project.price}</span> for
                    this job
                  </p>
                </div>
                <div className="proposal-cards">
                  {/* project proposal  */}
                  {ProjectProposal.map((proposal, index) => (
                    <div key={index} className="bids-card">
                      <div className="row align-items-center">
                        <div className="col-lg-2">
                          <div className="author-img-wrap">
                            <Link
                              to={`/freelancer/
                          ${
                            FreelancerData.find(
                              (freelancer) => freelancer.id === proposal.userId
                            ).id
                          }
                          `}
                            >
                              <img
                                className="img-fluid"
                                alt=""
                                src={
                                  FreelancerData.find(
                                    (freelancer) =>
                                      freelancer.id === proposal.userId
                                  ).image
                                }
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="author-detail">
                            <h4>
                              <Link
                                to={`/freelancer/${
                                  FreelancerData.find(
                                    (freelancer) =>
                                      freelancer.id === proposal.userId
                                  ).id
                                }`}
                              >
                                {
                                  FreelancerData.find(
                                    (freelancer) =>
                                      freelancer.id === proposal.userId
                                  ).name
                                }
                              </Link>{" "}
                            </h4>
                            <div className="rating">
                              <span className="average-rating">
                                {
                                  FreelancerData.find(
                                    (freelancer) =>
                                      freelancer.id === proposal.userId
                                  ).totalRates
                                }
                              </span>
                              <Rating
                                value={
                                  FreelancerData.find(
                                    (freelancer) =>
                                      freelancer.id === proposal.userId
                                  ).totalRates
                                }
                              />
                            </div>
                            <p className="mb-0">{proposal.letter}</p>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="proposal-amnt text-end">
                            <h3>${proposal.price}</h3>
                            <p className="mb-0">{proposal.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default ViewProposals;
