import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar";
import { EmployData } from "../../Data/EmployData";
import { ProjectsData } from "../../Data/ProjectDatas";

const FreelancerFavourites = (props) => {
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
              <Link className="nav-link active" to="/freelancer-favourites">
                Bookmarked Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-invitations">
                Invitations
              </Link>
            </li>
          </ul>
        </nav>
        {/* project list */}
        <div className="my-projects-view">
          <div className="row">
            <div className="col-lg-12">
              <div className="pro-post mb-4">
                <div className="project-table">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0 datatable">
                      <thead className="thead-pink">
                        <tr>
                          <th>Project name</th>
                          <th>Client Detail</th>
                          <th>Location</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ProjectsData.map((project, index) => (
                          <tr key={index}>
                            <td>
                              <Link to={`/project/${project.id}`}>
                                {" "}
                                {project.name}
                              </Link>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                <div className="avatar avatar-md tab-imgcircle me-2">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={
                                      EmployData.find(
                                        (user) => user.id === project.userId
                                      ).image
                                    }
                                    alt="UserImage"
                                  />
                                </div>
                                <div>
                                  <span className="profile-name">
                                    {
                                      EmployData.find(
                                        (user) => user.id === project.userId
                                      ).name
                                    }
                                  </span>
                                  <span>
                                    Total Jobs ({" "}
                                    {
                                      EmployData.find(
                                        (user) => user.id === project.userId
                                      ).jobs
                                    }{" "}
                                    )
                                  </span>
                                </div>
                              </h2>
                            </td>
                            <td>
                              <h2 className="table-avatar">
                                {project.location}
                              </h2>
                            </td>
                            <td>
                              <div className="fav">
                                <i className="fas fa-heart filled" />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* project list */}
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerFavourites;
