import React from "react";

function ProjectInfo({ project }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="profile">
          <div className="profile-box">
            <div className="provider-widget row">
              <div className="pro-info-left col-md-8">
                <div className="profile-info">
                  <h2 className="profile-title">{project.name}</h2>
                  <p className="profile-position">{project.category}</p>
                  <div />
                  <ul className="profile-preword align-items-center">
                    <li>
                      <i className="fas fa-clock" /> Posted {project.date}
                    </li>
                    <li>
                      <button className="btn full-btn">{project.type}</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pro-info-right profile-inf col-md-4">
                <ul className="profile-right">
                  <li>
                    <div className="amt-hr">
                      ${project.price} <p>( {project.priceType} )</p>
                    </div>
                  </li>
                </ul>
                <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                  <i
                    className={`fas fa-heart heart fa-2x me-2 ${
                      project.liked && "orange-text"
                    }`}
                  />
                  <a
                    data-bs-toggle="modal"
                    href="#sendproposal"
                    className="btn bid-btn"
                  >
                    Send Proposal <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
