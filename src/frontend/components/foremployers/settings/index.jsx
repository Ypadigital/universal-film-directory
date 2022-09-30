import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar";
import { Developer_03 } from "../../imagepath";

const Settings = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}

      <SideBar freelancer={false}>
        <div className="pro-pos">
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link className="nav-link active" to="/profile-settings">
                  Basic Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/change-password">
                  Change Password
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delete-account">
                  Delete Account
                </Link>
              </li>
            </ul>
          </nav>
          <div className="setting-content">
            <div className="card">
              <div className="pro-head">
                <h3 className="pro-title without-border mb-0">
                  Profile Basics{" "}
                </h3>
              </div>
              <form>
                <div className="pro-body p-0">
                  <div className="form-row pro-pad">
                    <div className="form-group col-md-6">
                      <label>Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Dispaly Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Contact Number</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-row pro-pad pt-0">
                    <div className="form-group col-md-6 pro-pic">
                      <label>Profile Picture</label>
                      <div className="d-flex align-items-center">
                        <div className="upload-images">
                          <img src={Developer_03} alt="Image" />
                          <a href="" className="btn btn-icon btn-danger btn-sm">
                            <i className="far fa-trash-alt" />
                          </a>
                        </div>
                        <label className="file-upload image-upbtn ms-3">
                          Change Image <input type="file" />
                        </label>
                      </div>
                      <p>Image size 300*300</p>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-end">
                <div className="pro-body">
                  <button
                    className="btn btn-secondary click-btn btn-plan"
                    type="submit"
                  >
                    Cancel
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-primary click-btn btn-plan"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default Settings;
