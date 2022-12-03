import React from "react";
import StickyBox from "react-sticky-box";

function ProjectSideBar({ user, project }) {
  const List = [
    {
      title: "Member Since",
      sub: user.date,
      hr: true,
    },
    {
      title: "Total Jobs",
      sub: user.jobs,
      hr: true,
    },
    {
      title: "Instagram",
      sub: user.instagram,
      hr: true,
    },
    {
      title: "Linkedin",
      sub: user.linkedin,
      hr: false,
    },
  ];

  return (
    <StickyBox offsetTop={144} offsetBottom={20}>
      <div className="freelance-widget widget-author mt-2 pro-post">
        <div className="freelance-content">
          <div className="author-heading">
            <div className="profile-img">
              <img src={user.image} alt={user.name} />
            </div>
            <div className="profile-name">
              <div className="author-location">
                {user.name}
                <i className="fas fa-check-circle text-success verified" />
              </div>
            </div>
            <div className="freelance-info">
              <div className="freelance-location">
                <i className="fas fa-map-marker-alt me-1" />
                {user.location}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-lg btn-primary rounded-pill"
            >
              <i className="fab fa-whatsapp me-2" />
              Follow
            </button>
            <div className="follow-details">
              <div className="row">
                <div className="col-6 py-4 text-center">
                  {/* Heading */}
                  <h6 className="text-uppercase text-muted">Following</h6>
                  {/* Value */}
                  <h4 className="mb-0">{user.following}</h4>
                </div>
                <div className="col-6 py-4 text-center border-start">
                  {/* Heading */}
                  <h6 className="text-uppercase text-muted">Followers</h6>
                  {/* Value */}
                  <h4 className="mb-0">{user.followers}</h4>
                </div>
              </div>
            </div>
            <div>
              {List.map((item, index) => (
                <>
                  <div key={index} className="row align-items-center">
                    <div className="col">
                      <h6 className="text-sm text-start mb-0">{item.title}</h6>
                    </div>
                    <div className="col-auto">
                      <span className="text-sm">{item.sub}</span>
                    </div>
                  </div>
                  {item.hr && <hr className="my-3" />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Link Widget */}
      <div className="pro-post widget-box post-widget">
        <h3 className="pro-title">Profile Link</h3>
        <div className="pro-content pt-0">
          <div className="form-group profile-group mb-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                defaultValue={`https://www.kofejob.com/freelancer/${user.id}`}
              />
              <div className="input-group-append">
                <button className="btn btn-success sub-btn" type="submit">
                  <i className="fa fa-clone" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Link Widget */}
      {/* Attachments Widget */}
      <div className="pro-post widget-box post-widget pb-0">
        <h3 className="pro-title">Attachments</h3>
        <div className="pro-content">
          <div className="row">
            {project.attachments.map((item, index) => (
              <div key={index} className="col-6">
                <button className="pro-post w-100 client-list">
                  <p>{item}</p>
                  <span class="material-icons download-icon">
                    file_download
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* /Attachments Widget */}
      {/* Share Widget */}
      <div className="pro-post widget-box post-widget">
        <h3 className="pro-title">Share</h3>
        <div className="pro-content">
          <button className="share-icon">
            <i className="fas fa-share-alt" /> Share
          </button>
        </div>
      </div>
      {/* /Share Widget */}
    </StickyBox>
  );
}

export default ProjectSideBar;
