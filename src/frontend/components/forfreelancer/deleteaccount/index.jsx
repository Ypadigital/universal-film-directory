import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteAccountModal from "../../Common/Modals/DeleteAccountModal";
import SideBar from "../../Common/SideBar";

const FreelancerDeleteAccount = (props) => {
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
              <Link className="nav-link" to="/freelancer-profile-settings">
                Profile Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/freelancer-change-password">
                Change Password
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/freelancer-delete-account">
                Delete Account
              </Link>
            </li>
          </ul>
        </nav>
        <div className="setting-content">
          <div className="pro-card">
            <div className="pro-head">
              <h3 className="pro-title without-border mb-0">Delete Account</h3>
            </div>
            <div className="pro-body">
              <form>
                <div className="form-group">
                  <label>Please Explain Further**</label>
                  <textarea
                    className="form-control"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <a
                      className="btn btn-primary click-btn btn-plan"
                      data-bs-toggle="modal"
                      href="#delete-acc"
                    >
                      Delete Account
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SideBar>
      {/* /Page Content */}
      {/* The Modal */}
      <DeleteAccountModal />
      {/* /The Modal */}
    </>
  );
};
export default FreelancerDeleteAccount;
