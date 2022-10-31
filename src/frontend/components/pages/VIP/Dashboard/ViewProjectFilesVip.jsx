import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../Common/Pagination";
import VipSideBar from "../../../Common/VipSideBar";
import { FileLogo, IconCloud } from "../../../imagepath";

const VipProposalFile = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <VipSideBar>
        <nav className="user-tabs mb-4">
          <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
            <li className="nav-item">
              <Link className="nav-link" to="/vip-project-view">
                Overview &amp; Discussions
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/vip-project-files">
                Files
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
      </VipSideBar>
      {/* /Page Content */}
    </>
  );
};
export default VipProposalFile;
