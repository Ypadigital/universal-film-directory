import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileLogo, IconCloud } from "../../imagepath";
import SideBar from "../../Common/SideBar";
import Pagination from "../../Common/Pagination";

const FreelancerFile = (props) => {
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
              <Link className="nav-link" to="/freelancer-projects/:id">
                Overview &amp; Discussions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-milestones">
                Milestones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-task">
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/freelancer-files">
                Files
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-payment">
                Payments
              </Link>
            </li>
          </ul>
        </nav>
        {/* project list */}
        <div className="my-projects-view">
          <div className="row">
            <div className="col-lg-12">
              <div className="pro-post">
                <div className="project-table">
                  <div className="card-body">
                    <h4>FILES</h4>
                    <div className="table-responsive table-box">
                      <table className="table table-center table-hover datatable">
                        <thead className="thead-pink">
                          <tr>
                            <th>File Preview</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Size</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={FileLogo}
                                className="img-fluid"
                                alt="Logo"
                              />
                            </td>
                            <td> Image for Section background</td>
                            <td>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                              </p>
                              <a href="#" className="read-text">
                                Readmore
                              </a>
                            </td>
                            <td>Png</td>
                            <td>20KB</td>
                            <td>
                              <a href="#">
                                <img
                                  src={IconCloud}
                                  className="img-fluid"
                                  alt="Logo"
                                />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={FileLogo}
                                className="img-fluid"
                                alt="Logo"
                              />
                            </td>
                            <td> Image for Section background</td>
                            <td>
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                              </p>
                              <a href="#" className="read-text">
                                Readmore
                              </a>
                            </td>
                            <td>Png</td>
                            <td>20KB</td>
                            <td>
                              <a href="#">
                                <img
                                  src={IconCloud}
                                  className="img-fluid"
                                  alt="Logo"
                                />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-end mt-3">
                      <Pagination />
                    </div>
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
export default FreelancerFile;
